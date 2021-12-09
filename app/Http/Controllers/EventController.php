<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;

class EventController extends Controller
{
    const EVENTS_2022 = [
        ['eventTime'=>'2022-01-01 12:00:00','title'=>'Event one','description'=>'Description of one','type'=>'holiday'],
        ['eventTime'=>'2022-01-12 12:00:00','title'=>'Event two','description'=>'Description of two','type'=>'holiday'],
        ['eventTime'=>'2022-01-13 12:00:00','title'=>'Event three','description'=>'Description of three','type'=>'holiday'],
        ['eventTime'=>'2022-01-02 12:00:00','title'=>'Event four','description'=>'Description of four','type'=>'holiday'],
        ['eventTime'=>'2022-01-03 12:00:00','title'=>'Event four','description'=>'Description of four','type'=>'restricted'],
        ['eventTime'=>'2022-01-04 12:00:00','title'=>'Event four','description'=>'Description of four','type'=>'restricted'],
    ];
    public function events(Request $request)
    {
        return self::EVENTS_2022;
    }
}
