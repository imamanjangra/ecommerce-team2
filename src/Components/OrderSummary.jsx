export default function OrderSummary({ total, grandTotal, tax }) {
  return (
    <div className="bg-neutral-900 text-white p-8 rounded-2xl w-full flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Order Summary</h2>

      <div className="flex flex-col gap-3 text-gray-300">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{total}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax (9%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between text-xl font-bold pt-4 border-t border-neutral-700">
        <span>Total</span>
        <span>₹{grandTotal.toFixed(2)}</span>
      </div>

      <div className="flex gap-4 mt-auto">
        <button className="flex-1 bg-linear-to-r from-neutral-800 to-neutral-700 py-4 rounded-xl font-semibold hover:opacity-90 transition">
          Apple Pay
        </button>
        <button className="flex-1 bg-linear-to-r from-neutral-800 to-neutral-700 py-4 rounded-xl font-semibold hover:opacity-90 transition">
          Google Pay
        </button>
      </div>
    </div>
  );
}
