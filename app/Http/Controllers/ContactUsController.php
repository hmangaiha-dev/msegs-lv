<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactUs;

class ContactUsController extends Controller
{
    //

    public function index()
    {
        $contacts = ContactUs::all()->toArray();
        return array_reverse($contacts);      
    }

    public function store(Request $request)
    {
            $contact = new ContactUs([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'subject' => $request->input('subject'),
            'contactnumber' => $request->input('contactnumber'),
            'message' => $request->input('message')


        ]);
        $contact->save();

        return response()->json('Thank you for contacting us!');
    }

    public function show($id)
    {
        $contact = ContactUs::find($id);
        return response()->json($contact);
    }

    public function update($id, Request $request)
    {
        $contact = ContactUs::find($id);
        $contact->update($request->all());

        return response()->json('ContactUs updated!');
    }

    public function destroy($id)
    {
        $contact = ContactUs::find($id);
        $contact->delete();

        return response()->json('ContactUs deleted!');
    }
}
