<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\studentInformation;

class studentInformationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result=studentInformation::all();
        // return $result;
        return response()->json(['studentInfo'=>$result]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      
    
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newStudentInfo = new studentInformation();
                        //databse                               //inputfields
        $newStudentInfo->Student_ID = $request->newStudentInfo['Student_ID'];
        $newStudentInfo->FirstName = $request->newStudentInfo['FirstName'];
        $newStudentInfo->MiddleName = $request->newStudentInfo['MiddleName'];
        $newStudentInfo->LastName = $request->newStudentInfo['LastName'];
        $newStudentInfo->Birthmonth = $request->newStudentInfo['Birthmonth'];
     
        $newStudentInfo->save();

        return response()->json(['newInfo'=>$request->all()]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       return studentInformation::find($id);
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $StudentInformation = studentInformation::find($id);
        return response()->json(['studentInfo'=>$StudentInformation]);
        
    }

    /**
     * Update the specified resource in storage. 
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
 

       $StudentInformation = studentInformation::find($id);
       $StudentInformation->Student_ID =$request->newStudentInfo['Student_ID'];
       $StudentInformation->FirstName=$request->newStudentInfo['FirstName'];
       $StudentInformation->LastName=$request->newStudentInfo['LastName'];
       $StudentInformation->MiddleName=$request->newStudentInfo['MiddleName'];
       $StudentInformation->Birthmonth=$request->newStudentInfo['Birthmonth'];
       $StudentInformation->save();

       return response()->json(['newStudentInfo'=>$StudentInformation]);

    // return response()->json(['test'=> 'test']);
      
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
      $StudentInformation = studentInformation::find($id);
      $StudentInformation->delete();
    }
}
