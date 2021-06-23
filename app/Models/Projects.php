<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'subtitle',
        'contents',
        'imagename',
        'imagepath',
        
        'client',
        'hostedat',
        'developedby',
        'goals',
    ];  
}
