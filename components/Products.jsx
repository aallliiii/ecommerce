"use client";
import React from "react";
import StarRating from "./Star";
import { useRouter } from "next/navigation";
const Products = ({ products, slice }) => {
  const router = useRouter();

  const limitedProducts = Array.isArray(products) ? products.slice(0, 4) : [];

  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex w-full justify-between items-center max-sm:flex-col max-sm:justify-start">
            <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-lg:text-center">
              {products[0]?.category?.toUpperCase()}
            </h2>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={() => {
                router.push(`/view-all/${products[0].category}`);
              }}
            >
              View All
            </button>
          </div>
          {slice ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {limitedProducts.slice(0, 4).map((product) => (
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img
                    class="p-8 rounded-t-lg"
                    src={product.thumbnail}
                    alt="product image"
                  />

                  <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.title}
                    </h5>

                    <div class="flex items-center mt-2.5 mb-5">
                      <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        <StarRating rating={product.rating} />
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-3xl font-bold text-gray-900 dark:text-white">
                        ${Math.floor(product.price)}
                      </span>
                      <a
                        href={`/single-product/${product.id}`}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img
                    class="p-8 rounded-t-lg"
                    src={product.thumbnail}
                    alt="product image"
                  />

                  <div class="px-5 pb-5">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.title}
                    </h5>

                    <div class="flex items-center mt-2.5 mb-5">
                      <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        <StarRating rating={product.rating} />
                      </div>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-3xl font-bold text-gray-900 dark:text-white">
                        ${Math.floor(product.price)}
                      </span>
                      <a
                        href={`http://localhost:3000/single-product/${product.id}`}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
