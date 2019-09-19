<?php

use Illuminate\Http\Request;

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

Route::resource('category','Api\CategoryController');
Route::delete('category/delete/{id}','Api\CategoryController@destroy');
Route::get('category/edit/{id}','Api\CategoryController@edit');
Route::put('category/update/{id}','Api\CategoryController@update');

Route::resource('student_information','Api\studentInformationController');
Route::get('studentInformation','Api\studentInformationController@index');
Route::post('/student_information','Api\studentInformationController@store');    
Route::delete('student_information/delete/{id}','Api\studentInformationController@destroy');
Route::put('/studentInformation/update/{id}','Api\studentInformationController@update');
Route::get('studentInformation/edit/{id}','Api\studentInformationController@edit');

