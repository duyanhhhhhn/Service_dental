<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class VerifyCsrfTokenForApi extends Middleware
{
    protected $except = [
        'api/*',  // Bỏ qua CSRF cho tất cả các yêu cầu API
    ];
}
