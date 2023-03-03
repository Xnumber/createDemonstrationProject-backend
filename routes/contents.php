<?php

use App\Http\Controllers\ContentController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CheckLoginMiddleware;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/contents', 'ContentsController@index');
Route::post('/contents', 'ContentsController@store');
Route::put('/contents/{id}', 'ContentsController@update');
Route::delete('/contents/{id}', 'ContentsController@destroy');

// Route::middleware('auth')->group(function () {
	// Route::get('/contents/{id}', [ContentController::class, 'show']);
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

Route::get('/contents/{id}', [ContentController::class, 'show'])->middleware(CheckLoginMiddleware::class);
