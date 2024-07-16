<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{

    protected $fillable = [
        'id',
        'name',
        'description',
        'price',
        'avg_rating',
        'tpye_id',
        'thumbnail',
        'status',
        
    ];
    use HasFactory;
}
