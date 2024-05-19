import axios from "axios";
import React, { useState } from "react";
import { ProductElement, SearchPagination, SectionTitle } from "../components";
import { nanoid } from "nanoid";

const Search = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setCurrentPage(1);
    setSearchTerm(e.target.search.value);
    try {
      const response = await axios.get("http://localhost:3000/products");
      const data = response.data;
      const filteredProducts = data.filter((product) =>
          product.title.toLowerCase().includes(e.target.search.value.toLowerCase())
      );
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const productsPerPage = 8;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  return (
      <>
        <SectionTitle title="Search" path="Home | Search" />
        <form
            onSubmit={handleSearch}
            className="max-w-7xl mx-auto text-center mt-10 px-20 max-md:px-10"
        >
          <div className="form-control">
            <input
                type="text"
                name="search"
                placeholder="Search products..."
                className="input input-bordered"
            />
          </div>
          <button
              className="btn bg-blue-600 hover:bg-blue-500 text-white mt-4"
              type="submit"
          >
            Search
          </button>
        </form>
        <div className="max-w-7xl mx-auto mt-10 grid grid-cols-4 max-lg:grid-cols-2 gap-10 px-20 max-md:px-10">
          {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                  <ProductElement key={nanoid()} product={product} />
              ))
          ) : (
              <div className="text-center col-span-4">
                <h1 className="text-4xl text-accent-content">No products found</h1>
              </div>
          )}
        </div>
        {products.length > productsPerPage && (
            <SearchPagination
                totalProducts={products.length}
                productsPerPage={productsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        )}
      </>
  );
};

export default Search;
