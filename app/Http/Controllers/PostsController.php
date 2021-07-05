<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;


class PostsController extends Controller
{
    //
    public function index()
    {
        $posts = Posts::all()->toArray();
        // $posts = Posts::all()->pluck('title','subtitle',
        // 'imagename',
        // 'imagepath',
        // 'date');
        

        // return array_reverse($posts);  
        return response()->json($posts);

    }

    public function store(Request $request)
    {
        // $post = new Posts([
        //     'name' => $request->input('name'),
        //     'detail' => $request->input('detail')
        // ]);

        // $request->validate([
        //     'file' => 'required|mimes:jpg,jpeg,png,csv,txt,xlx,xls,pdf|max:2048',
        //     'bannerfile' => 'required|mimes:jpg,jpeg,png,csv,txt,xlx,xls,pdf|max:2048'

        //  ]);
 
        $post = new Posts;

        $file_name = time().'_'.$request->file('file')->getClientOriginalName();

        $file_path = $request->file('file')->storeAs('uploads', $file_name, 'public');


        $post->title = $request->input('title');
        $post->contents = $request['contents'];
        $post->date = $request['date'];


     
        // $post->published = $request->has('published');
        $post->published = $request->input('published') ? 1 : 0;

        // $post->published = $request['published'];

        // if ($request->has('published')){
        // $post->published = 1;

        // }

        // else{
        // $post->published = 0;

        // }

        $post->imagename = time().'_'.$request->file('file')->getClientOriginalName();
        $post->imagepath = '/storage/' . $file_path;
     
        $post->save();


        return response()->json('Posts created!');
    }

    public function show($id)
    {
        $post = Posts::find($id);
        return response()->json($post);
    }

    public function update($id, Request $request)
    {
        $post = Posts::find($id);
        $post->published = $request->has('published') ? 1 : 0;
        
        $post->title = $request->input('title');
        $post->contents = $request['contents'];
        $post->date = $request['date'];

        $post->update();

        return response()->json('Posts updated!');
    }

    public function destroy($id)
    {
        $post = Posts::find($id);
        $post->delete();

        return response()->json('Posts deleted!');
    }
}
