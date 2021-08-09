<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Resources;


class ResourcesController extends Controller
{
    //
    public function index(Request $request){
        // $resources = Resources::all()->toArray();
        // return array_reverse($resources);      
        // $resources = Resources::all()->toArray();
        // return array_reverse($resources);      

        // $resources = Resources::query();
        // if (request('date')) {
        //     $resources->where('date', 'Like', '%' . request('date') . '%');
        // }

        // return $resources->orderBy('id', 'DESC')->paginate(10);
        $year = request('date');
        $resources = Resources::whereYear('date', '=', $year)->get();
        return response()->json($resources);
    
      }
    
      public function store(Request $request){
            
            $request->validate([
               'file' => 'required|mimes:jpg,jpeg,png,csv,txt,xlx,xls,pdf|max:2048'
            ]);
    
            $resource = new Resources;
    
          
                $file_name = time().'_'.$request->file->getClientOriginalName();
                $file_path = $request->file('file')->storeAs('uploads', $file_name, 'public');
    
                $resource->title = $request->input('title');
                $resource->date = $request->input('date');
                $resource->name = time().'_'.$request->file->getClientOriginalName();
                $resource->path = '/storage/' . $file_path;
                $resource->save();
    
                return response()->json(['success'=>'File uploaded successfully.']);
           
       }

       public function destroy($id)
    {
        $resource = Resources::find($id);
        $resource->delete();

        return response()->json('Resources deleted!');
    }
}
