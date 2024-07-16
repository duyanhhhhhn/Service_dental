<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product_types;
class product_types extends Controller
{
    //

    public function index()
    {
        $types = product_types:: all();
        return response()->json($types);
    }
}
