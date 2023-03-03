<?php

use Illuminate\Support\Facades\Route;

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
Route::get('/contents/{id}', 'ContentsController@show');
Route::post('/contents', 'ContentsController@store');
Route::put('/contents/{id}', 'ContentsController@update');
Route::delete('/contents/{id}', 'ContentsController@destroy');