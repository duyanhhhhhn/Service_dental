<?php

namespace App\Http\Controllers;

use App\Models\Services;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function index()// phương thức get
    {
        $services = Services::all();
        return response()->json($services);
    }
}
