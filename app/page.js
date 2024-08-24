"use client";
import Search from "@/components/Search";
import Products from "@/components/Products";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/components/Loader";
import axios from "axios";
export default function Home() {
  const fetchProducts = async () => {
    const data = [];
    const responseBeauty = await axios.get(
      "api/fetch-products?category=beauty"
    );
    const dataBeauty = responseBeauty.data;
    data.push(dataBeauty);
    const responseFragnance = await axios.get(
      "api/fetch-products?category=fragrances"
    );
    const dataFragnance = responseFragnance.data;
    data.push(dataFragnance);
    const responseFurniture = await axios.get(
      "api/fetch-products?category=furniture"
    );
    const dataFurniture = responseFurniture.data;
    data.push(dataFurniture);
    const responseGrocery = await axios.get(
      "api/fetch-products?category=groceries"
    );
    const dataGrocery = responseGrocery.data;
    data.push(dataGrocery);
    return data;
  };

  const { data, isPending, error, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isPending) {
    return (
      <div className="flex h-screen justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  console.log(data);
  return (
    <>
      <Search />
      <section>
        <div className="pt-[110px] max-sm:pt-0">
          <Products products={data[1]} slice={true} />
          <Products products={data[2]} slice={true} />
          <Products products={data[0]} slice={true} />
          <Products products={data[3]} slice={true} />
        </div>
      </section>
    </>
  );
}
