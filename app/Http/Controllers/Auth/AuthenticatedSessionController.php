<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    public function checkLogin()
    {
        // return 123;
        if(Auth::check()) {
            $user = Auth::getUser();
            // dd($user);
            return response()->json([
                "status" => true,
                "user" => $user
            ]);
        } else {
            return response()->json([
				"status" => false,
				"errors" => "please log in."
			]);
        }
    }
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    // public function store(LoginRequest $request): RedirectResponse
    // public function store(LoginRequest $request)
    // {
    //     $request->authenticate();

    //     $request->session()->regenerate();

    //     // return redirect()->intended(RouteServiceProvider::HOME);
    //     return response()->json([
    //         "status" => true,
    //         "errors" => "welcome"
    //     ]);
    // }

    // public function authenticate(Request $request): RedirectResponse
    public function store(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            $user = Auth::getUser();
            return response()->json([
                "status" => true,
                "user" => $user
            ]);
        } else {
            return response()->json([
                "status" => true,
                "errors" => "The provided credentials do not match our records."
            ]);
        }
    }

    /**
     * Destroy an authenticated session.
     */
    // public function destroy(Request $request): RedirectResponse
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        // return redirect('/');
        return response()->json([
            "status" => true,
        ]);
    }
}
