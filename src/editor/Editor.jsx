import React, { useEffect, useState } from "react";
import ChangeDiraction from "./parts/ChangeDiraction";
import ChangeDesign from "./parts/ChangeDesign";
import ShowColors from "./parts/ShowColors";
import ChangeProduct from "./parts/ChangeProduct";
import ShowPositions from "./parts/ShowPositions";
import SaveBtn from "./parts/SaveBtn";

const Editor = ({
  tshirt,
  elStage,
  tshirtOnChange,
  setSelected,
  selected,
  setModal,
}) => {
  const [fileUpload, setFileUpload] = useState({});

  useEffect(() => {
    function _calculate_image_size(type, originalWidth, originalHeight) {
      const canvas = Math.round((40 * elStage.current.clientWidth) / 100);

      if (originalWidth >= canvas) {
        const maxWidth = canvas;
        const maxHeight = Math.round((55 * elStage.current.clientWidth) / 100);
        var ratio = 0; // Used for aspect ratio
        var width = originalWidth; // Current image width
        var height = originalHeight; // Current image height

        let newWidth = maxWidth;
        let newHeight = maxWidth;

        if (width > maxWidth && width > height) {
          ratio = width / height;
          newHeight = maxWidth / ratio;
          newWidth = maxWidth;
        } else if (height > maxHeight && height > width) {
          ratio = height / width;
          newWidth = maxHeight / ratio;
          newHeight = maxHeight;
        }

        if (type === "width") {
          return newWidth;
        } else {
          return newHeight;
        }
      }
      return originalWidth;
    }

    if (Object.keys(fileUpload).length > 0) {
      tshirtOnChange({
        ...tshirt,
        designs: {
          ...tshirt.designs,
          [fileUpload.direction]: {
            ...tshirt.designs[fileUpload.direction],
            preview: fileUpload.stream,
            positions: {
              ...tshirt.designs[fileUpload.direction].positions,
              width: _calculate_image_size(
                "width",
                fileUpload.width,
                fileUpload.width
              ),
              height: _calculate_image_size(
                "height",
                fileUpload.width,
                fileUpload.height
              ),
            },
          },
        },
      });

      setFileUpload({});
    }
  }, [fileUpload, tshirt, tshirtOnChange, elStage]);

  return (
    <div
      onClick={() => setSelected(false)}
      className="w-full py-10 lg:py-0 min-h-0 lg:min-h-screen flex items-center justify-center"
    >
      <div className="w-full flex flex-col justify-center items-center px-5 lg:px-10">
        <h1 className="mb-5 text-2xl lg:text-5xl font-bold text-gray-400">
          Design Your Product
        </h1>
        <ShowColors />
        <ChangeProduct tshirtOnChange={tshirtOnChange} tshirt={tshirt} />
        <ChangeDiraction tshirt={tshirt} tshirtOnChange={tshirtOnChange} />
        <ChangeDesign setFileUpload={setFileUpload} setModal={setModal} />
        <ShowPositions />
        <SaveBtn selected={selected} />
        <a
          className="badge badge-outline"
          href="https://github.com/EhsanKinux"
        >
          App by Ekinux
        </a>
      </div>
    </div>
  );
};

export default Editor;
