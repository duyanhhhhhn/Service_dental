<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $appointments = Appointment::all();
        return response()->json($appointments);
    }

    
       public  function deleteappointment(Request $request, $id)
    {
        $appointment = Appointment::find($id);
        $appointment->delete();
        return response()->json('delete success');
    }

    public function create(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'phone_number' => 'required|string|max:20',
        ]);

        $appointment = Appointment::create([
            'name' => $validatedData['name'],
            'address' =>  $validatedData['address'],
            'phone_number' =>  $validatedData['phone_number']
        ]);
        $appointment->save();
        return response()->json([
            'message' => 'Đặt lịch thành công',
            'appointment' => $appointment
        ]);
    }
}
