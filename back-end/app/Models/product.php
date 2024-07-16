<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'description',
        'price',
        'avg_rating',
        'tpye_id',
        'thumbnail',
        'status',
        
    ];

    public function productType()
    {
        return $this->belongsTo(ProductType::class);
    }
}
