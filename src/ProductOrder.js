import React, { useState } from "react";
import ProductRow from "./ProductRow";
import "./ProductOrder.css";

const ProductOrder = () => {
  const [products, setProducts] = useState([{ product: "", quantity: "" }]);
  const [finalOrders, setFinalOrders] = useState([]);
  const [showOrders, setShoworders] = useState(false);

  const handleAddRow = () => {
    if (
      products.length <= 8 &&
      products[products.length - 1].quantity &&
      products[products.length - 1].product
    ) {
      const filteredProducts = products.filter((p) => p.product && p.quantity);
      setFinalOrders(filteredProducts);
      setProducts([...products, { product: "", quantity: "" }]);
    }
  };

  const handleInputChange = (index, field, value) => {
    const newProducts = [...products];
    const productExits = products.find((item) => item.product === value);
    if (productExits) {
      alert("Product is already selected, Please select different proudct!");
      return;
    }
    newProducts[index][field] = value;
    setProducts(newProducts);
  };

  const handleShowOrder = () => {
    setShoworders(true);
  };

  const handleSpeakOrder = () => {
    const orderText = finalOrders
      .map((item) => `${item.product} ${item.quantity}`)
      .join(", ");
    const speech = new SpeechSynthesisUtterance(orderText);
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="product-order">
      <table className="product-select-table">
        <thead>
          <tr>
            <td>Product Name</td>
            <td>Quantity</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <ProductRow
              key={index}
              index={index}
              product={p.product}
              quantity={p.quantity}
              onInputChange={handleInputChange}
              handleAddRow={handleAddRow}
            />
          ))}
        </tbody>
      </table>

      <button className="show-order-btn" onClick={handleShowOrder}>
        Show Orders
      </button>

      {showOrders && finalOrders.length > 0 && (
        <div className="order-list-continer">
          <h2 className="order-list-head">Order List</h2>
          <table className="orders-table">
            <thead>
              <tr>
                <td>Product Name</td>
                <td>Quantity</td>
              </tr>
            </thead>
            {finalOrders.map((item, index) => (
              <tr>
                <td>{item.product}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </table>
          <button onClick={handleSpeakOrder} className="order-speak-btn">
            <i class="fa fa-volume-up"></i> What is my Order?
          </button>
          <p>
          <b>Note:</b> Pressing on “What is my Order” should activate voice to text and the order should be read out by
          the app.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductOrder;
