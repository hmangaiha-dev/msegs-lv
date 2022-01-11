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
        ['eventTime'=>'2021-12-31 12:00:00','title'=>'New Year`s Eve','description'=>'','type'=>'holiday'],




        ['eventTime'=>'2022-01-01 00:00:00','title'=>"New Year's Day",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-01-03 00:00:00','title'=>"New Year's Celebration",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-01-09 00:00:00','title'=>"Guru Gobind Singh's Birthday",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-01-11 00:00:00','title'=>'Missionary Day','description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-01-13 00:00:00','title'=>'Lohri','description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-01-14 00:00:00','title'=>'Makar Sankranti /Magha Bihu/Pongal','description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-01-26 00:00:00','title'=>'Republic Day','description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-01-02 00:00:00','title'=>'Republic Day','description'=>'','type'=>'thlade'],
        ['eventTime'=>'2022-01-17 00:00:00','title'=>'Republic Day','description'=>'','type'=>'fullmoon'],
        ['eventTime'=>'2022-01-29 00:00:00','title'=>'Republic Day','description'=>'','type'=>'thlamang'],

        ['eventTime'=>'2022-02-05 00:00:00','title'=>'Basant Panchami/Sri Panchami','description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-02-15 00:00:00','title'=>"Hazarat Ali's Birthday",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-02-16 00:00:00','title'=>"Guru Ravi Das's Birthday",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-02-19 00:00:00','title'=>"Shuvaji Jayanti",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-02-20 00:00:00','title'=>"State Day",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-02-26 00:00:00','title'=>"Swami Dayananda Saraswati Jayanti",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-03-04 00:00:00','title'=>"Chapchar Kút",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-03-17 00:00:00','title'=>"Holika Dahan",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-03-18 00:00:00','title'=>"Dolyatra",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-03-18 00:00:00','title'=>"Holi",'description'=>'','type'=>'holiday'],

        ['eventTime'=>'2022-04-02 00:00:00','title'=>"Chaitra Sukladi/Gudi Padava/Ugadi/Cheti Chand",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-04-10 00:00:00','title'=>"Ram Navami",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-04-14 00:00:00','title'=>"Vaisakhi/Vishu/Meshadi",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-04-14 00:00:00','title'=>"Mahavir Jayanti",'description'=>'','type'=>'holiday'],

        ['eventTime'=>'2022-04-15 00:00:00','title'=>"Vaiskhadi(Bengal)/Bahag Bihu(Assam)",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-04-15 00:00:00','title'=>"Good Friday",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-04-18 00:00:00','title'=>"Easter Monday",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-04-29 00:00:00','title'=>"Jamat-Ul-Vida",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-05-03 00:00:00','title'=>"Idu'l Fitr",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-05-09 00:00:00','title'=>"Guru Rabindranath's Birthday",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-05-16 00:00:00','title'=>"Buddha Purnima",'description'=>'','type'=>'holiday'],

        ['eventTime'=>'2022-06-15 00:00:00','title'=>"YMA Day",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-06-30 00:00:00','title'=>"Remna Ni",'description'=>'','type'=>'holiday'],

        ['eventTime'=>'2022-07-01 00:00:00','title'=>"Rayh Yatra",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-07-06 00:00:00','title'=>"MHIP Day",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-07-10 00:00:00','title'=>"Idu'l Zuha",'description'=>'','type'=>'holiday'],

        ['eventTime'=>'2022-08-09 00:00:00','title'=>"Muharram",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-08-11 00:00:00','title'=>"Raksha Bandhan",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-08-15 00:00:00','title'=>"Independence Day",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-08-16 00:00:00','title'=>"Parsi New Year's Day",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-08-18 00:00:00','title'=>"Janmashtami(Smarta)",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-08-31 00:00:00','title'=>"Vinayaka Chaturthi / Ganesh Chaturthi",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-09-08 00:00:00','title'=>"Onam or Thiru Onam Day",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-10-02 00:00:00','title'=>"Gandhi's Birthday",'description'=>'','type'=>'holiday'],
         ['eventTime'=>'2022-10-02 00:00:00','title'=>"Dussehra(Saptami)",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-10-03 00:00:00','title'=>"Dussehra(Mahashtami)",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-10-04 00:00:00','title'=>"Dussehra(Mahanavmi)",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-10-05 00:00:00','title'=>"Dussehra(Vijay Dashmi)",'description'=>'','type'=>'holiday'],
         ['eventTime'=>'2022-10-09 00:00:00','title'=>"Maharishi Valmiki's Birthday",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-10-09 00:00:00','title'=>"Prophet Mohammed's Birthday(Id-e-Milad)",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-10-13 00:00:00','title'=>"Karaka Chaturthi(Karwa Chouth)",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-10-13 00:00:00','title'=>"Naraka Chaturdasi",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-10-24 00:00:00','title'=>"Diwali(Deepvalli)",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-10-25 00:00:00','title'=>"Govardhan Puja",'description'=>'','type'=>'restricted'],
        ['eventTime'=>'2022-10-26 00:00:00','title'=>"Bhai Duj",'description'=>'','type'=>'restricted'],
         ['eventTime'=>'2022-10-30 00:00:00','title'=>"Pratihar Shashthi or Surya Shashthi(Chhat Puja)",'description'=>'','type'=>'restricted'],


        ['eventTime'=>'2022-11-08 00:00:00','title'=>"Guru Nanak's Birthday",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-11-24 00:00:00','title'=>"Guru Teg Bahadur's Martyrdom Day",'description'=>'','type'=>'restricted'],

        ['eventTime'=>'2022-12-24 00:00:00','title'=>"Christmas Eve",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-12-25 00:00:00','title'=>"Christmas Day",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-12-26 00:00:00','title'=>"Christmas celebration",'description'=>'','type'=>'holiday'],
        ['eventTime'=>'2022-12-31 00:00:00','title'=>"New Year's Eve",'description'=>'','type'=>'holiday'],
    ];

    public function events(Request $request)
    {
        return self::EVENTS_2022;
    }
}
