import { Product } from "../types";

const Card = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white">
      {/* Imagem do Produto */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      {/* Informações do Produto */}
      <div className="p-4">
        {/* Título */}
        <h2 className="text-sm font-medium text-gray-800 truncate">
          {product.title}
        </h2>

        {/* Avaliação */}
        <div className="flex items-center mt-2">
          {/* Ícones de Estrelas */}
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              fill={i < Math.round(product.rating.rate) ? "gold" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.75l-5.727 3.01 1.09-6.363L2.364 9.99l6.389-.929L12 3.75l2.247 5.311 6.389.929-4.999 4.408 1.09 6.363z"
              />
            </svg>
          ))}
          {/* Nota e Contagem de Avaliações */}
          <span className="ml-2 text-xs text-gray-500">
            {product.rating.rate.toFixed(1)} ({product.rating.count} avaliações)
          </span>
        </div>

        {/* Preço */}
        <p className="text-lg font-semibold text-green-600 mt-2">
          ${product.price.toFixed(2)}
        </p>

        {/* Botão */}
        <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default Card;
