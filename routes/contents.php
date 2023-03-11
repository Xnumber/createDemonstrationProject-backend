<?php

use App\Http\Controllers\ContentController;
use Illuminate\Support\Facades\Route;
// use App\Http\Middleware\CheckLoginMiddleware;
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


// Route::middleware(CheckLoginMiddleware::class)->group(function () {
Route::middleware("auth:sanctum")->group(function () {
    Route::post('/api/contents', [ContentController::class, 'store']);
    Route::post('/api/contents/upload', [ContentController::class, 'upload']);
    Route::get('/api/contents', [ContentController::class, 'index']);
    Route::put('/api/contents/{id}', [ContentController::class, 'update']);
    Route::get('/api/contents/{id}', [ContentController::class, 'show']);
    Route::delete('/api/contents/{id}', [ContentController::class, 'destroy']);
});
