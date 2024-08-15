<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use App\Models\News;
class NewsController extends Controller
{
   public function index()
   {
       try {
           $news = News::all();
           return response()->json($news, 200);
       } catch (\Exception $e) {
           return response()->json([
               'message' => 'Error fetching related tours',
               'error' => $e->getMessage()
           ], 500);
       }
   }

   public function show($id)
   {
       try {
           $news = News::findOrFail($id);
           return response()->json($news, 200);
       } catch (\Exception $e) {
           return response()->json([
               'message' => 'Error fetching related tour',
               'error' => $e->getMessage()
           ], 500);
       }
   }
   public function store(Request $request)
   {

     try {
      $news = News::create($request->all());
      return response()->json($news, 201);
    } catch (\Exception $e) {
      return response()->json([
          'message' => 'Error creating related tour',
          'error' => $e->getMessage()
      ], 500);
    }
   }
   public function update(Request $request, $id)
   {
     

       try {
           $news = News::findOrFail($id);
           $news->update($request->all());
           return response()->json($news, 200);
       } catch (\Exception $e) {
           return response()->json([
               'message' => 'Error updating related tour',
               'error' => $e->getMessage()
           ], 500);
       }
   } 
   public function destroy($id)
   {
       try {
           $news = News::findOrFail($id);
           $news->delete();
           return response()->json(['message' => 'Related tour deleted successfully'], 200);
       } catch (\Exception $e) {
           return response()->json([
               'message' => 'Error deleting related tour',
               'error' => $e->getMessage()
           ], 500);
       }
   }
  
}