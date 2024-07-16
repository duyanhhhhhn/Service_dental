<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\products;

class products extends Controller
{
    //
    public function index()
    {
        $types = products::all();
        return response()->($types);
    }
}
