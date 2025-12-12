import products from "../data/products";

export default function CartItem({ productid , ondelete }) {
  const p = products.find((item) => item.id == productid);
    
  return (
    <div className="bg-neutral-900 text-white flex flex-row gap-6 p-6 rounded-2xl w-full relative">
     
      <img
        src={p.image}
        className="w-32 h-32 object-cover rounded-xl"
      />

     
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-semibold">{p.tital}</h2>
          <p className="text-sm text-gray-300">
            Size: {p.size} • Color: {p.color}
          </p>
          <p className="text-lg font-semibold mt-1">₹{p.price}</p>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <button className="flex items-center justify-center bg-neutral-800 rounded-xl px-4 py-2 text-lg font-bold hover:bg-neutral-700">
            -
          </button>
          <span className="text-lg font-semibold">1</span>
          <button className="flex items-center justify-center bg-neutral-800 rounded-xl px-4 py-2 text-lg font-bold hover:bg-neutral-700">
            +
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-end items-end">
        <button onClick={ondelete} className="text-red-500">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3 cursor-pointer" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>
        </button>
      </div>
    </div>
  );
}
