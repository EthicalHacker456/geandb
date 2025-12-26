import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

function ProductModal({ product, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Simulate multiple images - in real app, product would have multiple images
    const images = product.images || [product.image || '/images/placeholder.png'];

    useEffect(() => {
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleInquireClick = () => {
        onClose();
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn"
            onClick={handleBackdropClick}
        >
            <div 
                className="relative w-full max-w-6xl max-h-[90vh] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl animate-scaleIn"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 hover:scale-110 group"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>

                <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                    
                    {/* LEFT: Image Section - 50% */}
                    <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center p-8">
                        
                        {/* Image Container */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img
                                src={images[currentImageIndex]}
                                alt={product.name || product.title}
                                className="max-w-full max-h-full object-contain drop-shadow-2xl"
                            />
                        </div>

                        {/* Image Navigation (if multiple images) */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 hover:scale-110"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="w-5 h-5 text-white" />
                                </button>
                                
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full transition-all duration-300 hover:scale-110"
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="w-5 h-5 text-white" />
                                </button>

                                {/* Image Dots */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentImageIndex(i)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                i === currentImageIndex 
                                                    ? 'w-8 bg-white' 
                                                    : 'bg-white/30 hover:bg-white/50'
                                            }`}
                                            aria-label={`View image ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* RIGHT: Content Section - 50% */}
                    <div className="w-full md:w-1/2 overflow-y-auto p-8 md:p-12 text-white custom-scrollbar">
                        
                        {/* Category Badge */}
                        {product.category && (
                            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-sm font-medium">
                                {typeof product.category === 'object' ? product.category.name : product.category}
                            </div>
                        )}

                        {/* Product Title */}
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            {product.name || product.title}
                        </h2>

                        {/* Rating (if available) */}
                        {product.rating && (
                            <div className="flex items-center gap-3 mb-6">
                                <Stars rating={product.rating} />
                                <span className="text-white/60 text-sm">({product.rating})</span>
                            </div>
                        )}

                        {/* Divider */}
                        <div className="w-full h-px bg-white/10 my-6" />

                        {/* Description */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-3">Description</h3>
                            <p className="text-white/80 leading-relaxed">
                                {product.description || 'No description available.'}
                            </p>
                        </div>

                        {/* Specifications (if available) */}
                        {product.specifications && (
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                                <ul className="space-y-2 text-white/80">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <li key={key} className="flex">
                                            <span className="font-medium min-w-32">{key}:</span>
                                            <span className="text-white/70">{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Features (if available) */}
                        {product.features && product.features.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold mb-3">Features</h3>
                                <ul className="space-y-2 text-white/80">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-yellow-400 mt-1">✓</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Inquire Button */}
                        <button
                            onClick={handleInquireClick}
                            className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 
                                     text-white font-semibold rounded-xl transition-all duration-300 
                                     shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                        >
                            Inquire Now
                        </button>

                        {/* Additional Info */}
                        <p className="mt-4 text-white/50 text-sm">
                            Contact us for pricing, customization, and bulk orders.
                        </p>
                        
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.2s ease-out;
                }
                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
                
                /* Custom Scrollbar Styles */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: linear-gradient(180deg, rgba(234, 179, 8, 0.6), rgba(234, 179, 8, 0.3));
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(180deg, rgba(234, 179, 8, 0.8), rgba(234, 179, 8, 0.5));
                }
                
                /* Firefox */
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(234, 179, 8, 0.6) rgba(255, 255, 255, 0.05);
                }
            `}</style>
        </div>
    );
}

export default function ProductsGrid() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

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
        const cleanName = name.replace(/^tactical_/i, '');
        return cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
        setShowAll(false);
    };

    const handleInquireClick = (e) => {
        e.stopPropagation();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const displayedProducts = showAll ? products : products.slice(0, 6);

    return (
        <section id="products" className="max-w-7xl mx-auto px-4 py-20">
            
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                    Our Products
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mb-6" />
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                    Discover our premium collection of apparel, uniforms, and tactical gear
                </p>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center mb-12">
                <div className="relative inline-block">
                    <select 
                        value={selectedCategory} 
                        onChange={handleCategoryChange}
                        className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white 
                                 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50
                                 appearance-none cursor-pointer pr-12
                                 transition-all duration-300 ease-in-out
                                 hover:bg-white/20 hover:border-white/30 font-medium"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                        }}
                    >
                        <option value="" className="bg-black/90 text-white">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id} className="bg-black/90 text-white">
                                {formatCategoryName(cat.name)}
                            </option>
                        ))}
                    </select>
                    
                    {/* Decorative glow */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>

            {loading ? (
                <div className="text-center py-20">
                    <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-white/20 border-t-yellow-400"></div>
                    <p className="mt-6 text-white/70 text-lg">Loading products...</p>
                </div>
            ) : products.length === 0 ? (
                <div className="text-center py-20">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <span className="text-4xl">📦</span>
                    </div>
                    <p className="text-white/70 text-xl">No products found in this category.</p>
                    <button
                        onClick={() => setSelectedCategory('')}
                        className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-300"
                    >
                        View All Products
                    </button>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedProducts.map((p) => (
                            <div
                                key={p.id}
                                onClick={() => handleProductClick(p)}
                                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl overflow-hidden 
                                        hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:border-yellow-400/30
                                        transition-all duration-500 cursor-pointer"
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 to-orange-400/0 group-hover:from-yellow-400/5 group-hover:to-orange-400/5 transition-all duration-500 pointer-events-none" />
                                
                                {/* Image Container */}
                                <div className="relative h-64 w-full bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
                                    <img
                                        src={p.image || '/images/placeholder.png'}
                                        alt={p.name || p.title}
                                        className="w-full h-full object-contain object-center p-4 group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    
                                    {/* Category badge */}
                                    {p.category && (
                                        <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-xs font-medium text-white">
                                            {typeof p.category === 'object' ? formatCategoryName(p.category.name) : formatCategoryName(p.category)}
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="relative p-6">
                                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 mb-3">
                                        {p.name || p.title}
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-4">
                                        {p.description}
                                    </p>

                                    {/* Action buttons */}
                                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                        <button
                                            onClick={handleInquireClick}
                                            className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm flex items-center gap-2 transition-colors duration-200"
                                        >
                                            <span>Inquire Now</span>
                                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                        </button>
                                        <span className="text-white/40 text-xs">
                                            View Details
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {products.length > 6 && !showAll && (
                        <div className="flex justify-center mt-12">
                            <button
                                onClick={() => setShowAll(true)}
                                className="group px-10 py-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-xl text-white 
                                         hover:from-yellow-500 hover:to-yellow-600 hover:border-yellow-400/50
                                         transition-all duration-300 ease-in-out
                                         hover:shadow-lg hover:shadow-yellow-500/30 hover:scale-105 active:scale-95
                                         font-semibold flex items-center gap-3"
                            >
                                <span>Show More Products</span>
                                <span className="group-hover:translate-y-0.5 transition-transform duration-300">↓</span>
                            </button>
                        </div>
                    )}
                    
                    {showAll && products.length > 6 && (
                        <div className="flex justify-center mt-12">
                            <button
                                onClick={() => {
                                    setShowAll(false);
                                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="group px-10 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white 
                                         hover:bg-white/20 hover:border-white/30
                                         transition-all duration-300 ease-in-out
                                         hover:scale-105 active:scale-95
                                         font-semibold flex items-center gap-3"
                            >
                                <span className="group-hover:-translate-y-0.5 transition-transform duration-300">↑</span>
                                <span>Show Less</span>
                            </button>
                        </div>
                    )}
                </>
            )}

            {/* Product Modal */}
            {selectedProduct && (
                <ProductModal 
                    product={selectedProduct} 
                    onClose={() => setSelectedProduct(null)} 
                />
            )}
        </section>
    );
}