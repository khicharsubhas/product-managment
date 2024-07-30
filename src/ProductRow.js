import React from "react";

const products = [
  {
    id: 1,
    value: "Pencil",
  },
  {
    id: 2,
    value: "Eraser",
  },
  {
    id: 3,
    value: "Pen",
  },
  {
    id: 4,
    value: "Sharpner",
  },
  {
    id: 5,
    value: "Colours",
  },
  {
    id: 6,
    value: "Books",
  },
  {
    id: 7,
    value: "Geometry Box",
  },

  {
    id: 8,
    value: "Water Bottle",
  },
]; // Example products

const ProductRow = ({
  index,
  product,
  quantity,
  onInputChange,
  handleAddRow,
}) => {
  return (
    <tr>
      <td>
        <select
          value={product}
          onChange={(e) => onInputChange(index, "product", e.target.value)}
        >
          <option value="">Choose Product</option>
          {products.map((p, i) => (
            <option key={i} value={p.value}>
              {p.value}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select
          value={quantity}
          onChange={(e) => onInputChange(index, "quantity", e.target.value)}
        >
          <option value="">Choose Quantity</option>
          {[0, 1, 2, 3, 4, 5].map((q) => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </select>
      </td>
      <td>
        <button className="add-button" onClick={handleAddRow}>
          <i class="fa fa-plus"></i> Add
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
