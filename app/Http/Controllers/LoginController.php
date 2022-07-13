<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    //
    public function login(Request $request)
    {

        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);
        if (Auth::attempt($request->only('email', 'password'))) {
            // return response()->json(Auth::user(),200);
            $user = User::where('email', $request->email)->first();

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
            ]);


            // print("AUTHENTICATED");
        } else {
            print("NOT AUTHENTICATED");
            throw ValidationException::withmessages([
                'email' => ['Credentials does not match']
            ]);
            return response()->json("Credentials does not match");
        }
    }

    public function logout()
    {
        Auth::logout();
    }

    // app/Http/Controllers/AuthController.php

    public function user(Request $request)
    {
        return $request->user();
    }
}
