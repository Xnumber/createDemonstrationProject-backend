<?php
namespace App\Http\Middleware;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckLoginMiddleware{
    public function handle(Request $request, Closure$next)
    {
        if(!Auth::check()) {
            return response()->json([
				"status" => false,
				"errors" => "please log in."
			]);
        }
		return $next($request);
    }
}
