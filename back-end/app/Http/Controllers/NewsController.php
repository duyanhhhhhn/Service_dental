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
    public function deleteNews(Request $request, $id)
    {
        $news = News::find($id);
        $news->delete();
        return response()->json('delete success');
    }

    public function addnews(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'thumbnail' => 'required|string',
            'content' => 'required|string',
            'status' => 'required|boolean',

        ]);
            $news = News::create([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
            'thumbnail' => $validatedData['thumbnail'],
            'content' => $validatedData['content'],
            'status' => $validatedData['status'],
            ]);
        return response()->json([
            'message' => 'Thêm thành công',
            'news' => $news
        ]);

    }

    public function updatenews(Request $request, $id)
    {
        $news = News::find($id);
        $news->update($request->all());
        return response()->json('success updated');
    }

    

    
}







