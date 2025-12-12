// component of detailpage - Aman 
import { useState } from "react";
  import products from "../data/products";
import { useNavigate } from "react-router-dom";


export function AboutHero() {
  const navegate = useNavigate()
  
  const handleClick = () => {
    navegate(`/cart/${p.id}`)
  }

  const [qty, setQty] = useState(1);

    const P_id = 10;
    const p = products.find((item) => item.id == P_id)
    console.log(p.id)


  return (
    <div className="max-w-6xl w-full flex flex-col md:flex-row items-start gap-14 py-12">

      <div className="w-full md:w-1/2 md:-ml-10">
        <div className="w-full h-[420px] md:h-[520px] overflow-hidden rounded-2xl ">
          <img
            src={p.image}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-6">

        <p className="text-gray-300 text-sm uppercase">Activewear</p>

        <h1 className="text-4xl font-extrabold ">
         {p.name}
        </h1>

        <div className="flex items-center gap-2 text-yellow-400 text-xl font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> {p.star}
          <span className="text-gray-400 ">({p.rating} reviews)</span>
        </div>

        <h2 className="text-4xl font-bold">₹{p.price}</h2>

        <div className="text-gray-300 text-lg flex flex-col gap-1 mt-3">
          <p><span className="font-semibold">Size:</span> {p.size}</p>
          <p><span className="font-semibold">Color:</span> {p.color}</p>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
            className="px-4 py-2 bg-gray-700 rounded-lg text-xl"
          >
            -
          </button>
          <span className="text-2xl font-semibold w-10 text-center">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="px-4 py-2 bg-gray-700 rounded-lg text-xl"
          >
            +
          </button>
        </div>

        <div className="flex gap-4 mt-3">
          <button onClick={handleClick} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold text-lg">
            Add to Cart
          </button>

          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold text-lg">
            Buy Now
          </button>
        </div>

        <p className="text-gray-300  mt-4 ">
          {p.description}
        </p>

      </div>
    </div>
  );
}
