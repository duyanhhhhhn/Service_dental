<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $fillable = [
        'cọntent',
        'rating',
        'product_id',
        'user_id',
        'status'
    ];

    public function products()
    {
        return $this->belongsTo(ProductType::class);
    }
    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
