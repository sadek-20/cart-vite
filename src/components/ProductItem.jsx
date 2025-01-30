import React from 'react'

const ProductItem = ({product}) => {

  return (
    <div>
         <div
          className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in-out rounded-lg p-4"
        >
          <img className="w-full h-48 object-cover rounded" src={product.thumbnail} alt={product.title} />
          <div>
            <h2 className="font-bold mb-2 text-lg truncate">{product.title}</h2>
            <p className="text-gray-500 truncate mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-500 font-medium">Price: ${product.price}</span>
              <div className="text-sm text-gray-400">
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </div>
            </div>
            <div className="mt-4">
              <span className="text-yellow-500">{'★'.repeat(Math.round(product.rating))}</span>
              <span className="text-gray-300">{'★'.repeat(Math.round(5 - product.rating))}</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductItem