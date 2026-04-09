import React, { useState } from "react";

// InputBox
const InputBox = ({ setItemsInput, setPriceInput, onAddItem }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Add Item</h2>

      <div className="flex justify-between gap-4 w-full max-w-3xl mt-4">
        <input
          className="border w-full border-gray-300 p-2 rounded"
          type="text"
          placeholder="Add items here..."
          value={setItemsInput}
          onChange={(e) => setItemsInput(e.target.value)}
        />

        <input
          className="border w-full border-gray-300 p-2 rounded"
          type="text"
          placeholder="Enter the price here..."
          value={setPriceInput}
          onChange={(e) => setPriceInput(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onAddItem}
        >
          Add
        </button>
      </div>
    </div>
  );
};

// CartItems
const CartItems = ({ items, onRemoveItem }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <h1 className="text-xl font-semibold mt-6">Your Cart</h1>

      <div className="mt-2 overflow-x-auto">
        <table className="w-full table-fixed border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/4 p-2 text-left border">Product</th>
              <th className="w-1/4 p-2 text-left border">Price</th>
              <th className="w-1/4 p-2 text-left border">Quantity</th>
              <th className="w-1/4 p-2 text-left border">Total</th>
              <th className="w-1/5 p-2 text-left border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="p-2 border">{item.name}</td>
                <td className="p-2 border">${item.price}</td>
                <td className="p-2 border">1</td>
                <td className="p-2 border">
                  ${parseFloat(item.price) * 1}
                </td>
                <td className="p-2 border">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  const [itemsInput, setItemsInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = () => {
    if (!itemsInput || !priceInput) return;

    setCartItems([
      ...cartItems,
      {
        id: Date.now(),
        name: itemsInput,
        price: priceInput,
      },
    ]);

    setItemsInput("");
    setPriceInput("");
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6">
      <InputBox
        setItemsInput={setItemsInput}
        setPriceInput={setPriceInput}
        onAddItem={handleAddItem}
      />

      <CartItems
        items={cartItems}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Dashboard;