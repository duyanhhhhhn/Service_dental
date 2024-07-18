<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // Đăng nhập người dùng
  public function login(Request $request) {
        $user=User::where('email',$request->email)->where('password',$request->password)->first();
       if($user) {
           $request->session()->put('user',$user['email']);
           return response()->json([session('user')]);
       }
       else {
           dd($request->all());
           return response()->json('login failed');
       }
    }
    // Đăng xuất người dùng
    public  function logout(Request $request) {
        session(['user' => null]);
        return response()->json('logout success');
    }
}
