<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Projects;
use Illuminate\Support\Facades\Storage;

class ProjectsController extends Controller
{
    //
    public function index()
    {
        $projects = Projects::all(['id','title','subtitle','imagename','imagepath','date','goals'])->toArray();
        // $projects = Projects::all(['id','title','subtitle','imagename','imagepath','date','goals'])->where('goals','!=','.')->toArray();

        // $projects = Projects::all()->pluck('title','subtitle',
        // 'imagename',
        // 'imagepath',
        // 'date');


        // return array_reverse($projects);
        return response()->json($projects);

    }

    public function store(Request $request)
    {
        // $project = new Projects([
        //     'name' => $request->input('name'),
        //     'detail' => $request->input('detail')
        // ]);

        // $request->validate([
        //     'file' => 'required|mimes:jpg,jpeg,png,csv,txt,xlx,xls,pdf|max:2048',
        //     'bannerfile' => 'required|mimes:jpg,jpeg,png,csv,txt,xlx,xls,pdf|max:2048'

        //  ]);

        $project = new Projects;

        $file_name = time().'_'.$request->file('file')->getClientOriginalName();
        $banner_name = time().'_'.$request->file('bannerfile')->getClientOriginalName();

        $file_path = $request->file('file')->storeAs('uploads', $file_name, 'public');
        $banner_path = $request->file('bannerfile')->storeAs('uploads', $banner_name, 'public');


        $project->title = $request->input('title');
        $project->subtitle = $request->input('subtitle');
        $project->contents = $request['contents'];

        $project->client = $request->input('client');
        $project->hostedat = $request->input('hostedat');
        $project->developedby = $request->input('developedby');
        $project->goals = $request->input('goals');
        $project->date = $request->input('date');




        $project->imagename = time().'_'.$request->file('file')->getClientOriginalName();
        $project->imagepath = '/storage/' . $file_path;

        $project->bannername = time().'_'.$request->file('bannerfile')->getClientOriginalName();
        $project->bannerpath = '/storage/' . $banner_path;
        $project->save();


        return response()->json('Projects created!');
    }

    public function show($id)
    {
        $project = Projects::find($id);
        return response()->json($project);
    }

    public function update(Request $request,Projects $project)
    {
        

        foreach ($request->file()as $filename) {
        $file_name = time().'_'.$filename->getClientOriginalName();
        $banner_name = time().'_'.$filename->getClientOriginalName();

        $file_path = $filename->storeAs('uploads', $file_name, 'public');
        $banner_path = $filename->storeAs('uploads', $banner_name, 'public');
        $project->imagename = $file_name;
        $project->imagepath = '/storage/' . $file_path;

        $project->bannername = $banner_name;
        $project->bannerpath = '/storage/' . $banner_path;
        }

        $project->update($request->only((new Projects())->getFillable()));

        $project->save();


        return response()->json('Projects updated!');
    }

    public function destroy($id)
    {
        $project = Projects::find($id);
        $project->delete();

        return response()->json('Projects deleted!');
    }
}
