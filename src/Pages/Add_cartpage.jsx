// cart page - Aman jangra
import { useNavigate, useParams } from "react-router-dom";
import CartItem from "../Components/CartItem";
import OrderSummary from "../Components/OrderSummary";
import { useState, useEffect } from "react";
import products from "../data/products";

export default function Add_cartpage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [total, setTotal] = useState(0);
  const [preValue, setValue] = useState([]);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cartIds")) || [];
    setValue(saved);
  }, []);

  useEffect(() => {
    if (id) {
      setValue((prev) => {
        if (!prev.includes(id)) {
          return [...prev, id];
        }
        return prev;
      });
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem("cartIds", JSON.stringify(preValue));
  }, [preValue]);

  function handleDelete(deleteId) {
    setValue((prev) => prev.filter((i) => i != deleteId));
  }

  useEffect(() => {
    let sum = 0;
    preValue.forEach((value) => {
      const p = products.find((item) => item.id == value);
      sum += p.price;
    });
    setTotal(sum);
  }, [preValue]);

  const tax = total * 0.09;
  const grandTotal = total + tax;

  return (
    <div className="w-full min-h-screen bg-black text-white px-10 py-10">
      <button
        onClick={handleBack}
        className="flex items-center justify-center bg-neutral-800 rounded-xl px-4 py-2 text-lg font-bold hover:bg-neutral-700 m-5"
      >
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
        <div className="col-span-2 flex flex-col gap-8">
          {preValue.map((value, i) => (
            <CartItem key={i} productid={value} ondelete={() => handleDelete(value)} />
          ))}
        </div>

        <div className="self-start w-full max-w-sm">
          <OrderSummary total={total} tax={tax} grandTotal={grandTotal} />
        </div>
      </div>
    </div>
  );
}
