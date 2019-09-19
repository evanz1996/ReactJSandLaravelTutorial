<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class studentInformation extends Model
{
    protected $table = 'student_information';
    protected $fillable =['Student_ID','FirstName','MiddleName','LastName','Birthmonth'];
}
