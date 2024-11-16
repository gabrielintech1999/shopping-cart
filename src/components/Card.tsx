// import { Product } from "../types";




// export default function Card({product}: CardProps) {


//   console.log(product)
//   console.log(product.image)
//   console.log(product.price)
//   console.log(product.title)

//   return (
//     <>
    
//     <article>
//         <img src={product.image} alt={product.title} />
//         <h2>{product.title}</h2>

//         <p>$ <b>{product.price}</b></p>
//     </article>

//     </>
//   );
// }



import { Product } from "../types";

interface CardProps {
  product: Product;
}




export default function Card({ product }: CardProps) {
    return (
      <article className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="mt-2 text-lg font-semibold text-gray-800">{product.title}</h2>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">${product.price}</span>
          <span className="text-sm text-gray-500">{product.rating.rate} ⭐</span>
        </div>
        <div className="mt-4 flex gap-4">
          <button
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Add ao Carrinho
          </button>
       
        </div>
      </article>
    );
  }
  
