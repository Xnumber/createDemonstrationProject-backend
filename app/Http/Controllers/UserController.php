<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\User;
class UserController extends Controller
{
    
    
    public function login(Request $request)
    {
          

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

  

        if ($validator->fails()){

            return response()->json([

                    "status" => false,

                    "errors" => $validator->errors()
                ]);
        } else {
            if (Auth::attempt($request->only(["email", "password"]))) {
                
                return response()->json([
                    "status" => true, 
                    "redirect" => url("dashboard")
                ]);
                
            } else {
                dd($request->password);

                return response()->json([

                    "status" => false,

                    "errors" => ["Invalid credentials"]

                ]);

            }

        }
    }
    
    public function create(Request $request)
    {
        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = $request->input('password');
        $user->save();
        
        return response()->json(['message' => 'User created successfully']);
    }

    public function store(Request $request)
    {
        $post = $request->json()->all();
        // dd($post);
        return 1;
        # code...
    }

    public function show($id)
    {
       $user = User::find(1);
       if($user) {
           return response()->json(['data' => $user]);
       } else {
           return response()->json(['message' => 'User not found'], 404);
       };
    }

    public function update($id)
    {
        # code...
    }
}
