import React from "react";

const ChangeDiraction = ({ tshirtOnChange, tshirt }) => {
  function chnageDirection(e) {
    tshirtOnChange({
      ...tshirt,
      direction: e.target.value,
    });
  }

  return (
    <div className="flex flex-col justify-center items-center" >
      <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2">
        Directon
      </label>
      <div className="relative">
        <details className="dropdown mb-5">
          <summary className="m-1 btn">Front or Back</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <option value="front" onClick={chnageDirection}>
                Front
              </option>
            </li>
            <li>
              <option value="back" onClick={chnageDirection}>
                Back
              </option>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default ChangeDiraction;
