<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductType;
class ProductTypesController extends Controller
{
    //

    public function index()
    {
        $types = ProductType:: all();
        return response()->json($types);
    }

}
