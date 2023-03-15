<?php

namespace App\Http\Controllers;

use App\Models\Content;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
 
class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $type = $request->type;
        $searchString = $request->searchString;
        if($type) {
            $contents = Content::where([
                ['name', "like", '%'.$searchString.'%'],
                ['type', "=", $type]
            ])->get();
            return response()->json([
                'status' => "success",
                'data' => $contents
            ]);
        } else {
            $contents = Content::where([
                ['name', "like", '%'.$searchString.'%'],
            ])->get();
            return response()->json([
                'status' => "success",
                'data' => $contents
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function upload(Request $request, Content $content)
    {
        $data = $request->json()->all();
       
        Content::insert($data);

        return response()->json([
            'status' => true
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {   
        $images = $request->file('image');

        // 將圖片存儲到指定的磁片上
        $paths = [];
        foreach ($images as $image) {
            $path = $image->store('public/image', env('STORAGE_DRIVER'));
            $paths[] = $path;
        }
        $content = Content::create([
            'name' => $request->input('name'),
            'quantity' => $request->input('quantity'),
            'price' => $request->input('price'),
            'type' => $request->input('type'),
            'image' => $paths[0]
        ]);

        return response()->json([
            'status' => "sucess",
            'data' => $content
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return $id;
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Content $content)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Content $content, $id)
    {
        $target = $content->find($id);
     
        if($request->hasFile('image')) {
            $originImagePath = Content::find($id)->image;
            Storage::disk(env('STORAGE_DRIVER'))->delete($originImagePath);
            
            $images = $request->file('image');

            // 將圖片存儲到指定的磁片上
            $paths = [];
            foreach ($images as $image) {
                $path = $image->store('public/image', env('STORAGE_DRIVER'));
                $paths[] = $path;
            }
            $target->update([
                'name' => $request->input('name'),
                'quantity' => $request->input('quantity'),
                'type' => $request->input('type'),
                'price' => $request->input('price'),
                'image' => $paths[0],
            ]);
        } else {
            $target->update([
                'name' => $request->input('name'),
                'quantity' => $request->input('quantity'),
                'type' => $request->input('type'),
                'price' => $request->input('price'),
            ]);
        }
        
        return response()->json([
            'status' => "success",
            'data' => $target
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Content $content, $id)
    {
        $target = Content::find($id);
        $imagePath = $target->image;
        Storage::disk(env('STORAGE_DRIVER'))->delete($imagePath);
        $target->delete();

        return response()->json([
            'status' => "success",
        ]);
    }
}
