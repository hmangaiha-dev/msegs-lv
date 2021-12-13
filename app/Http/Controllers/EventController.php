<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;

class EventController extends Controller
{
    const EVENTS_2022 = [
        ['eventTime'=>'2021-12-24 12:00:00','title'=>'Christmas Eve','description'=>'','type'=>'holiday'],
        ['eventTime'=>'2021-12-25 12:00:00','title'=>'Christmas Day','description'=>'','type'=>'holiday'],
        ['eventTime'=>'2021-12-27 12:00:00','title'=>'Christmas Celebration','description'=>'','type'=>'holiday'],
        ['eventTime'=>'2021-12-31 12:00:00','title'=>'New Year Eve','description'=>'','type'=>'holiday'],




        ['eventTime'=>'2022-01-01 12:00:00','title'=>'Event one','description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-01-12 12:00:00','title'=>'Event two','description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-01-13 12:00:00','title'=>'Event three','description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-01-02 12:00:00','title'=>'Event four','description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-01-03 12:00:00','title'=>'Event four','description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-01-04 12:00:00','title'=>'Event four','description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-01-01 00:00:00','title'=>"New Year's Day",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-01-03 00:00:00','title'=>"New Year's Celebration",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-01-09 00:00:00','title'=>"Guru Gobind Singh's Birthday",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-01-11 00:00:00','title'=>'Missionary Day','description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-01-13 00:00:00','title'=>'Lohri','description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-01-14 00:00:00','title'=>'Pongal','description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-01-26 00:00:00','title'=>'Republic Day','description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-02-05 00:00:00','title'=>'Basabt Panchami','description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-02-15 00:00:00','title'=>"Hazarat Ali's Birthday",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-02-16 00:00:00','title'=>"Guru Ravi Das's Birthday",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-02-19 00:00:00','title'=>"Shuvaji Jayanti",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-02-20 00:00:00','title'=>"State Day",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-02-26 00:00:00','title'=>"Swami Dayananda Saraswati Jayanti",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-03-04 00:00:00','title'=>"Chapchar Kút",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-03-17 00:00:00','title'=>"Holika Dahan",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-03-18 00:00:00','title'=>"Holi",'description'=>'','type'=>'holiday'],

        ['eventTime'=>'2022-04-02 00:00:00','title'=>"Ugadi",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-04-10 00:00:00','title'=>"Ram Navami",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-04-14 00:00:00','title'=>"Mahavir Jayanti",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-04-15 00:00:00','title'=>"Good Friday",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-04-18 00:00:00','title'=>"Easter Monday",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-04-29 00:00:00','title'=>"Jamat-Ul-Vida",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-05-03 00:00:00','title'=>"Idu'l Fitr",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-05-09 00:00:00','title'=>"Guru Rabindranath's Birthday",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-05-16 00:00:00','title'=>"Buddha Purnima",'description'=>'','type'=>'holiday'],

        ['eventTime'=>'2022-06-15 00:00:00','title'=>"YMA Day",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-06-30 00:00:00','title'=>"Remna Ni",'description'=>'','type'=>'holiday'],

        ['eventTime'=>'2022-07-01 00:00:00','title'=>"Rayh Yatra",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-07-06 00:00:00','title'=>"MHIP Day",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-07-10 00:00:00','title'=>"Idu'l Zuha",'description'=>'','type'=>'holiday'],

        ['eventTime'=>'2022-08-09 00:00:00','title'=>"Muharram",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-08-11 00:00:00','title'=>"Rasjsha Bandhan",'description'=>'','type'=>'Raksha Bandhan'],
        ['eventTime'=>'2022-08-15 00:00:00','title'=>"Independence Day",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-08-16 00:00:00','title'=>"Parsi New Year's Day",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-08-18 00:00:00','title'=>"Janmashtami",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-08-31 00:00:00','title'=>"Ganesh Chaturthi",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-09-08 00:00:00','title'=>"Onam",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-09-30 00:00:00','title'=>"Chhat Puja",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-10-02 00:00:00','title'=>"Gandhi's Birthday",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-10-03 00:00:00','title'=>"Mahashtami",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-10-04 00:00:00','title'=>"Mahanavmi",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-10-05 00:00:00','title'=>"Dushera",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-10-09 00:00:00','title'=>"Mohammed's Birthday",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-10-13 00:00:00','title'=>"Karaka Chaturthi",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-10-24 00:00:00','title'=>"Diwali",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-10-25 00:00:00','title'=>"Govardhan Puja",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-10-26 00:00:00','title'=>"Bhai Duj",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-11-08 00:00:00','title'=>"Guru Nanak's Birthday",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-11-24 00:00:00','title'=>"Guru Nanak's Birthday",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-11-24 00:00:00','title'=>"Christmas Eve",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-11-25 00:00:00','title'=>"Christmas Day",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-11-26 00:00:00','title'=>"Christmas celebration",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-11-31 00:00:00','title'=>"New Year's Eve",'description'=>'','type'=>'holiday'],
    ];

    public function events(Request $request)
    {
        return self::EVENTS_2022;
    }
}
