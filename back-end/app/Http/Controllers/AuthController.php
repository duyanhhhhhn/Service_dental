<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request) {
      $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);
 
    $user = User::where('email', $request->email)->first();
 
    if (! $user || ! Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }
 
    return ["accessToken"=>$user->createToken($request->email)->plainTextToken];
    }
    public  function logout(Request $request) {
        session(['user' => null]);
        return response()->json('logout success');
    }
}
