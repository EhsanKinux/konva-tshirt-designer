import React from "react";
import mainState from "../../store/mainState";

const ChangeProduct = () => {
  function changeProduct(productName) {
    mainState.product = productName;
  }

  return (
    <div className="my-5 flex flex-col items-center justify-center">
      <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2">
        Choose Your Product
      </label>
      <div className="flex gap-8">
        <button
          onClick={() => changeProduct("hoodie")}
          className="btn btn-outline btn-secondary"
        >
          Hoodie
        </button>
        <button
          onClick={() => changeProduct("tshirt")}
          className="btn btn-outline btn-warning"
        >
          Tshirt
        </button>
      </div>
    </div>
  );
};

export default ChangeProduct;
