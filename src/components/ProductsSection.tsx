import { useState, useMemo } from 'react';
import { Star, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS, PRODUCT_CATEGORIES, ITEMS_PER_PAGE_OPTIONS } from '@/constants/product.constants';
import { ProductText } from '@/enums/product.enums';

const ProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const filteredProducts = useMemo(() => {
    return selectedCategory === 'All' 
      ? PRODUCTS 
      : PRODUCTS.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < Math.floor(rating) ? 'text-accent fill-accent' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="section-divider">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground pt-8 mb-6">
              {ProductText.SECTION_TITLE}
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {ProductText.SECTION_DESCRIPTION}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between mb-12 gap-4">
          <div className="flex items-center space-x-4">
            <Filter className="text-muted-foreground" size={20} />
            <div className="flex flex-wrap gap-2">
              {PRODUCT_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary-hover'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">{ProductText.ITEMS_PER_PAGE_LABEL}</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {ITEMS_PER_PAGE_OPTIONS.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`product-grid ${
          itemsPerPage === 4 ? 'lg:grid-cols-2' : 
          itemsPerPage === 6 ? 'lg:grid-cols-3' : 
          'lg:grid-cols-4'
        } stagger-children`}>
          {currentProducts.map((product) => (
            <div key={product.id} className="product-card group">
              <div className="p-0">
                <div className="aspect-square bg-muted flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <h3 className="font-semibold text-lg text-foreground mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.brand}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-foreground">{product.price}</span>
                    {/* <button className="btn-outline px-4 py-2 text-sm">
                      View Details
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-2 mt-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary-hover'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;