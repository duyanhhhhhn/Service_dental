<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    //
    public function news()// phương thức get
    {
        $news = News::all();
        return response()->json($news);
    }

    public function details($id)
    {
        return News::findOrFail($id);

    }

    public function newspost(Request $request)// phương thức post
    {
        $data = $request->all();
        return response()->json([
            'message' => 'This is a POST request',
            'data' => $data
        ]);
    }
}






