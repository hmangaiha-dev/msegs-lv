<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\PostsController;

use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\FilesController;

use App\Http\Controllers\ContactUsController;


use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\EventController;




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('auth:sanctum')->get('/authenticated', function () {
    return true;
});

Route::middleware('api')->group(function () {
    Route::post('update-project/{project}', [ProjectsController::class,'update']);
    Route::resource('projects', ProjectsController::class);
});

Route::middleware('api')->group(function () {
    Route::resource('posts', PostsController::class);
});

Route::middleware('api')->group(function () {
    Route::resource('contactus', ContactUsController::class); 
});

// Route::middleware('api')->group(function () {
//     Route::resource('resources', ResourcesController::class);
// });

Route::post('register','App\Http\Controllers\RegisterController@register');
Route::post('login','App\Http\Controllers\LoginController@login');
Route::post('logout','App\Http\Controllers\LoginController@logout');

Route::get('resources/index','App\Http\Controllers\ResourcesController@index');
Route::post('resources/store','App\Http\Controllers\ResourcesController@store');
Route::delete('resources/{id} ','App\Http\Controllers\ResourcesController@destroy');


Route::get('files/index','App\Http\Controllers\FilesController@index');
Route::post('files/store','App\Http\Controllers\FilesController@store');
Route::delete('files/{id} ','App\Http\Controllers\FilesController@destroy');

Route::group(['prefix' => 'event'], function () {
    Route::get('all', [EventController::class, 'events']);
});





