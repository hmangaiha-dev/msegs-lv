<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Files;


class FilesController extends Controller
{
    //
    public function index(){
        $mfiles = Files::all()->toArray();
        return array_reverse($mfiles);      
    
      }
    
      public function store(Request $request){
            
            $request->validate([
               'file' => 'required|mimes:jpg,jpeg,png,csv,txt,xlx,xls,pdf|max:2048'
            ]);
    
            $mfile = new Files;
    
          
                $file_name = time().'_'.$request->file->getClientOriginalName();
                $file_path = $request->file('file')->storeAs('uploads', $file_name, 'public');
    
                $mfile->title = $request->input('title');
                $mfile->date = $request->input('date');
                $mfile->name = time().'_'.$request->file->getClientOriginalName();
                $mfile->path = '/storage/' . $file_path;
                $mfile->save();
    
                return response()->json(['success'=>'File uploaded successfully.']);
           
       }

       public function destroy($id)
    {
        $mfile = Files::find($id);
        $mfile->delete();

        return response()->json('Files deleted!');
    }
}
