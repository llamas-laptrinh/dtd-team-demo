<?php

namespace App\Http\Controllers;
use DB;
use Illuminate\Http\Request;
use App\Models\News;
class NewsController extends Controller
{
   public function index() {
      $news = News::all();
      return response()->json($news);
   }
   public function show($id){
      $news = News::find($id);
      if($news) {
         return response()->json($news);
      }else{
         return response()->json(['error' => 'News not found'], 404);
      }
   }
   public function store(Request $request) {
      return response()->json($request->all());
   //  $request->validate([

   //       'title' => 'required',
   //       'banner_url' => 'required',
   //       'view_count' => 'required',
   //       'description' => 'required',
   //       'author' => 'required',
   //   ]);
  
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
   public function update(Request $request, $id) {
      $news = News::find($id);
  
      if ($news) {
          $news->update($request->all());
          return response()->json($news);
      } else {
          return response()->json(['message' => 'Item not found'], 404);
      }
   }
   public function destroy($id) {
      $news = News::find($id);
  
      if ($news) {
          $news->delete();
          return response()->json(['message' => 'Item deleted successfully']);
      } else {
          return response()->json(['message' => 'Item not found'], 404);
      }
  }
  
}