<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;

class CategoryController extends Controller
{

    public function getProducts(Request $request)
    {
        $categories = Category::orderBy('name')->get();
        $categoryId = $request->query('category');

        $productsQuery = Product::with('category')->orderBy('id', 'desc');

        if ($categoryId) {
            $productsQuery->where('category_id', $categoryId);
        }

        $products = $productsQuery->get();

        return response()->json([
            'categories' => $categories,
            'products' => $products
        ]);
    }
}
