import React from "react";

const ChangeDesign = ({ setFileUpload, setModal }) => {
  function changeDesign(e) {
    const file = e.target.files[0];
    console.log(file.name);
    const input_name = e.target.name;
    const acceptedImageTypes = ["image/jpeg", "image/png", "image/jpg"];

    // check is file an image
    if (file && acceptedImageTypes.includes(file["type"])) {
      const design = URL.createObjectURL(file);

      // Get image width
      let img = new Image();
      img.src = design;
      img.onload = function () {
        setFileUpload({
          stream: design,
          direction: input_name,
          width: this.width,
          height: this.height,
        });
      };
    } else {
      setModal({
        isOpen: true,
        message: "Please upload an image file (jpg, jpeg, png)",
      });
      e.target.value = null;
    }
  }

  return (
    <div className="mb-8 flex gap-4">
      <label htmlFor="d_front">
        <span className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2">
          Front Design
        </span>
        <input
          id="d_front"
          onChange={changeDesign}
          placeholder="Front Design"
          className="file-input file-input-bordered file-input-warning w-full max-w-xs"
          type="file"
          name="front"
        />
      </label>
      <label htmlFor="d_back">
        <span className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2">
          Back Design
        </span>
        <input
          id="d_back"
          onChange={changeDesign}
          className="file-input file-input-bordered file-input-error w-full max-w-xs"
          type="file"
          name="back"
        />
      </label>
    </div>
  );
};

export default ChangeDesign;
