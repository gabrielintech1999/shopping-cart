import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="text-white p-4 flex justify-between shadow-md bg-white fixed top-0 left-0 right-0 z-10">
      Header
      <button>
        <ShoppingCartIcon 
          className="h-8 w-8" 
          style={{ stroke: '#0000009f', strokeWidth: 1 }}  // Adicionando contorno preto
        />
      </button>
    </header>
  );
}

