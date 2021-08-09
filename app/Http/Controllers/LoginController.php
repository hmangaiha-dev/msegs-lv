<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    //
    public function login(Request $request){

        $request->validate([
            'email'=>['required','email'],
            'password'=>['required']
        ]);
        if(Auth::attempt($request->only('email','password'))){
            return response()->json(Auth::user(),200);
            print("AUTHENTICATED");
        }
        else{
        print("NOT AUTHENTICATED");
        throw ValidationException::withmessages([
            'email'=>['Credentials does not match']
        ]);
        return response()->json("Credentials does not match");
    }

    }

    public function logout(){
        Auth::logout();
    }
}
