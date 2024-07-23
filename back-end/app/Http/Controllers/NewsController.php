<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    //
    public function news()
    {
        $news = News::all();
        return response()->json($news);
    }

    public function details($id)
    {
        return News::findOrFail($id);
    }

    public function addnews(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'content_link' => 'required|string',
            'thumbnail' => 'required|string',
            'status' => 'required|boolean',
        ]);
            $news = News::create([
                'title' => $validatedData['title'],
                'description' => $validatedData['description'],
                'content_link' => $validatedData['content_link'],
                'thumbnail' => $validatedData['thumbnail'],
                'status' => $validatedData['status'],
            ]);

        return response()->json([
            'message' => 'Thêm thành công',
            'news' => $news
        ]);

    }

    public function updatenews(Request $request, $id)
    {
        $news = News::findOrFail($id);
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'content_link' => 'required|string',
            'thumbnail' => 'required|string',
            'status' => 'required|boolean',
        ]);
        $news->title = $validatedData['title'];
        $news->description = $validatedData['description'];
        $news->content_link = $validatedData['content_link'];
        $news->thumbnail = $validatedData['thumbnail'];
        $news->status = $validatedData['status'];
        $news->save();

        return response()->json([
            'message' => 'Cập nhật thành công',
            'news' => $news
        ]);
    }

    

    
}
