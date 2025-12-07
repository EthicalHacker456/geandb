import React, { useState, useEffect } from "react";

function Stars({ rating }) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    const renderStar = (type, i) => (
        <span key={i} className={type === "empty" ? "text-white/30" : "text-yellow-400"}>
            ★
        </span>
    );

    return (
        <div className="flex text-sm">
            {Array(full).fill(0).map((_, i) => renderStar("full", i))}
            {half && renderStar("half", "h")}
            {Array(empty).fill(0).map((_, i) => renderStar("empty", `e-${i}`))}
        </div>
    );
}

export default function ProductsGrid() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetchProducts(selectedCategory);
    }, [selectedCategory]);

    const fetchProducts = async (categoryId) => {
        setLoading(true);
        try {
            const url = categoryId 
                ? `/products?category=${categoryId}` 
                : '/products';
            
            const response = await fetch(url);
            const data = await response.json();
            
            setProducts(data.products);
            setCategories(data.categories);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatCategoryName = (name) => {
        // Remove 'tactical_' prefix and capitalize first letter
        const cleanName = name.replace(/^tactical_/i, '');
        return cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setShowAll(false);
    };

    const displayedProducts = showAll ? products : products.slice(0, 6);

    return (
        <section id="products" className="max-w-7xl mx-auto px-3 py-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Our Products</h2>
                
                <div className="relative">
                    <select 
                        value={selectedCategory} 
                        onChange={handleCategoryChange}
                        className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white 
                                 focus:outline-none focus:ring-2 focus:ring-white/50 
                                 appearance-none cursor-pointer pr-10
                                 transition-all duration-300 ease-in-out
                                 hover:bg-white/20"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 0.75rem center',
                        }}
                    >
                        <option value="" className="bg-black/80 backdrop-blur-md text-white rounded-lg">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id} className="bg-black/80 backdrop-blur-md text-white rounded-lg">
                                {formatCategoryName(cat.name)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {loading ? (
                <div className="text-center py-12">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                    <p className="mt-4 text-white/70">Loading products...</p>
                </div>
            ) : products.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-white/70 text-lg">No products found in this category.</p>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {displayedProducts.map((p) => (
                            <div
                                key={p.id}
                                className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden 
                                        hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] 
                                        transition duration-300"
                            >
                                <div className="h-52 w-full bg-black/20">
                                    <img
                                        src={p.image || '/images/placeholder.png'}
                                        alt={p.name || p.title}
                                        className="w-full h-full object-contain object-center scale-105"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="p-4 flex flex-col">
                                    <h3 className="text-lg font-semibold">{p.name || p.title}</h3>
                                    <p className="text-white/70 text-sm mt-2">{p.description}</p>

                                    <div className="flex items-center justify-between mt-4">
                                        <span className="cursor-pointer text-yellow-500 hover:underline">Learn more</span>
                                        {/* <div className="flex items-center gap-1">
                                            <Stars rating={p.rating || 0} />
                                            <span className="text-xs text-white/60">({p.reviews || 0})</span>
                                        </div> */}
                                        {/* <span className="text-lg font-bold">${parseFloat(p.price).toFixed(2)}</span> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {products.length > 6 && !showAll && (
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={() => setShowAll(true)}
                                className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white 
                                         hover:bg-white/20 transition-all duration-300 ease-in-out
                                         focus:outline-none focus:ring-2 focus:ring-white/50"
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </>
            )}
        </section>
    );
}