"use client";
import React from "react";
import Products from "@/components/Products";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/Loader";
const page = ({ params }) => {
  const { category } = params;
  const fetchProducts = async () => {
    const response = await axios.get(
      `/api/fetch-products?category=${category}`
    );
    return response.data;
  };
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (error) {
    return <div>Error...</div>;
  }
  return (
    <>
      <Products products={data} slice={false} />
    </>
  );
};

export default page;
