<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'content_link',
        'thumbnail',
        'status',
    ];
    public function new()
    {
        return $this->belongsTo(News::class);
    }
}
