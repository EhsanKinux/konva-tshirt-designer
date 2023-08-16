import html2canvas from "html2canvas";
import React, { useEffect, useState } from "react";

const SaveBtn = ({ selected }) => {
  const [dlImage, setDLimage] = useState(false);

  const downloadURI = (uri, name) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (dlImage && !selected) {
      saveImage();
      setDLimage(false);
    }

    function saveImage() {
      let element = document.getElementById("myDesign");
      const windowW = window.innerWidth;
      if (windowW < 1024) {
        element.style.position = "fixed";
        element.style.zIndex = 999;
        element.style.left = 0;
      }

      html2canvas(element, {
        allowTaint: true,
        removeContainer: false,
        backgroundColor: null,
      }).then((canvas) => {
        if (windowW < 1024) {
          element.style.position = null;
          element.style.zIndex = null;
          element.style.left = null;
        }
        downloadURI(canvas.toDataURL("image/png"), "tes");
        // document.body.appendChild(canvas);
      });
    }
  }, [dlImage, setDLimage, selected]);

  return (
    <button
      className="btn btn-outline btn-block btn-success mb-4"
      onClick={() => setDLimage(true)}
    >
      Save Image
    </button>
  );
};

export default SaveBtn;
