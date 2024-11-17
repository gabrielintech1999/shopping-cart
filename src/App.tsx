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
        <div className="fixed top-16 left-0 w-full h-2 bg-gray-200">
          <div
            className="h-full bg-blue-500"
            style={{
              width: "100%",
              animation: "progress-bar 7s linear infinite",
            }}
          ></div>
        </div>
      )}

      {/* Main Content */}
      <main className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-6 max-w-screen-lg mx-auto">
  {isLoading && (
    <p className="col-span-2 sm:col-span-3 lg:col-span-4 text-center">
      Carregando os produtos...
    </p>
  )}
  {isError && (
    <p className="col-span-2 sm:col-span-3 lg:col-span-4 text-center text-red-500">
      Erro: {error.message}
    </p>
  )}
  {products?.map((product: Product) => (
    <Card key={product.id} product={product} />
  ))}
</main>

     
    </>
  );
}
