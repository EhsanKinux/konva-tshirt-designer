import { useEffect, useRef, useState } from "react";
import "./App.css";
import Designer from "./designer/designer";
import Editor from "./editor/Editor";
import { tshirts } from "./tshirts/TshirtView";
import IMG1 from "./assets/sampleimg1.jpg";
import IMG2 from "./assets/sampleimg2.jpg"


const initial = {
  direction: "front",
  color: "white",
  size: "m",
  designs: {
    front: {
      asset: IMG1,
      preview: IMG1,
      positions: {
        isDragging: false,
        width: 343 / 3,
        height: 329 / 3,
        x: 0,
        y: 0,
      },
    },
    back: {
      asset: IMG2,
      preview: IMG2,
      positions: {
        isDragging: false,
        width: 343 / 3,
        height: 329 / 3,
        x: 0,
        y: 0,
      },
    },
  },
};

function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  const [tshirt, setTshirt] = useState(initial);
  const [selected, setSelected] = useState(false);
  const elStage = useRef();

  const checkDeselect = (e) => {
    // deselect when clicking on empty area
    const clickedOnEmpty = e.target.getStage();
    if (clickedOnEmpty) {
      setSelected(false);
    }
  };

  useEffect(() => {
    if (!appLoaded) {
      // preload images
      for (let i = 0; i < tshirts.length; i++) {
        const pic = tshirts[i];
        const image = new Image();
        image.src = pic;
        image.onload = () => {
          // hide loading when the last image has been loaded
          if (i === tshirts.length - 1) {
            setAppLoaded(true);
            // let fisrtLoad = document.getElementById("fisrtLoad");
            // fisrtLoad.classList.add("fade-out");
            // setTimeout(() => {
            //   fisrtLoad.style.display = "none";
            // }, 500);
          }
        };
      }
    }
  }, [appLoaded, setAppLoaded]);

  return (
    <div className="min-h-screen block lg:flex justify-center items-center">
      <Editor
        selected={selected}
        setSelected={setSelected}
        elStage={elStage}
        tshirt={tshirt}
        tshirtOnChange={setTshirt}
      />
      <Designer
        selected={selected}
        setSelected={setSelected}
        checkDeselect={checkDeselect}
        elStage={elStage}
        tshirt={tshirt}
        tshirtOnChange={setTshirt}
      />
    </div>
  );
}

export default App;
