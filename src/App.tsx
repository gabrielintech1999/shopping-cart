import Card from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

import { useQuery } from "@tanstack/react-query";
import { Product } from "./types";

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Erro ao carregar os produtos.");
  }
  const data = await response.json();
  return data;
}

export default function App() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log(error);

  return (
    <>
      {/* Header */}
      <Header />

      <hr />

      {/* Barra de progresso estilo GitHub */}
      {isLoading && (
        <div className="fixed top-20 left-0 w-full h-2 bg-gray-200">
          <div
            className="h-full bg-red-500"
            style={{
              width: "100%",
              animation: "progress-bar 7s linear infinite",
            }}
          ></div>
        </div>
      )}

      {/* Main Content */}
      <main className=" mt-14 grid grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg shadow-lg">
        {isLoading && (
          <p className="col-span-2 md:col-span-3 text-center">
            Carregando produtos...
          </p>
        )}
        {isError && (
          <p className="col-span-2 md:col-span-3 text-center text-red-500">
            Erro: {error.message}
          </p>
        )}
        {products?.map((product: Product) => (
          <Card key={product.id} product={product} />
        ))}
      </main>

      {false && <Cart />}
     
    </>
  );
}