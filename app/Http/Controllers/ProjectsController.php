<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Projects;

class ProjectsController extends Controller
{
    //
    public function index()
    {
        $projects = Projects::all()->toArray();
        return array_reverse($projects);      
    }

    public function store(Request $request)
    {
        // $project = new Projects([
        //     'name' => $request->input('name'),
        //     'detail' => $request->input('detail')
        // ]);
        $request->validate([
            'file' => 'required|mimes:jpg,jpeg,png,csv,txt,xlx,xls,pdf|max:2048'
         ]);
 
        $project = new Projects;

        $file_name = time().'_'.$request->file->getClientOriginalName();
        $file_path = $request->file('file')->storeAs('uploads', $file_name, 'public');

        $project->title = $request->input('title');
        $project->subtitle = $request->input('subtitle');
        $project->contents = $request['contents'];

        $project->client = $request->input('client');
        $project->hostedat = $request->input('hostedat');
        $project->developedby = $request->input('developedby');
        $project->goals = $request->input('goals');



        $project->imagename = time().'_'.$request->file->getClientOriginalName();
        $project->imagepath = '/storage/' . $file_path;
        $project->save();


        return response()->json('Projects created!');
    }

    public function show($id)
    {
        $project = Projects::find($id);
        return response()->json($project);
    }

    public function update($id, Request $request)
    {
        $project = Projects::find($id);
        $project->update($request->all());

        return response()->json('Projects updated!');
    }

    public function destroy($id)
    {
        $project = Projects::find($id);
        $project->delete();

        return response()->json('Projects deleted!');
    }
}
