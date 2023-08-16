import React, { useEffect, useRef, useState } from "react";
import { Layer, Stage } from "react-konva";
import DesignView from "./parts/DesignView";
import TshirtView from "../tshirts/TshirtView";
import { useSnapshot } from "valtio";
import mainState from "../store/mainState";

const Designer = ({
  tshirt,
  elStage,
  tshirtOnChange,
  selected,
  setSelected,
  checkDeselect,
}) => {
  const snap = useSnapshot(mainState);
  const [pageLoaded, setPageLoaded] = useState(false);
  const konvaRef = useRef();

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  useEffect(() => {
    if (pageLoaded && konvaRef.current) {
      const stageNode = konvaRef.current.getStage();
      if (stageNode) {
        const stageWidth = stageNode.width();
        const stageHeight = stageNode.height();
        mainState.stageWidth = stageWidth;
        mainState.stageHeight = stageHeight;
        // console.log("Stage Width:", stageWidth);
        // console.log("Stage Height:", stageHeight);
      }
    }
  }, [pageLoaded]);

  return (
    <div className="w-full py-10 lg:py-0 flex min-h-0 lg:min-h-screen justify-center items-center">
      <div
        id="myDesign"
        ref={elStage}
        className="relative p-0 lg:p-10 flex justify-center items-center "
      >
        <Stage
          ref={konvaRef}
          className="absolute border border-blue-500 mt-10"
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
          width={
            snap.product === "tshirt"
              ? pageLoaded
                ? Math.round((40 * elStage.current.clientWidth) / 100)
                : 0
              : snap.product === "hoodie"
              ? pageLoaded
                ? Math.round((30 * elStage.current.clientWidth) / 100)
                : 0
              : 0 // Default width value if neither "tshirt" nor "hoodie"
          }
          height={
            snap.product === "tshirt"
              ? pageLoaded
                ? Math.round((55 * elStage.current.clientWidth) / 100)
                : 0
              : snap.product === "hoodie"
              ? pageLoaded
                ? Math.round((25 * elStage.current.clientWidth) / 100)
                : 0
              : 0 // Default width value if neither "tshirt" nor "hoodie"
          }
        >
          <Layer>
            <DesignView
              isSelected={selected}
              data={tshirt}
              tshirt={
                tshirt.direction === "front"
                  ? tshirt.designs.front
                  : tshirt.designs.back
              }
              onSelect={() => {
                setSelected(true);
              }}
              onChange={tshirtOnChange}
              width={
                pageLoaded
                  ? (50 *
                      Math.round((40 * elStage.current.clientWidth) / 100)) /
                    100
                  : 0
              }
            />
          </Layer>
        </Stage>
        <TshirtView direction={tshirt.direction} color={tshirt.color} />
      </div>
    </div>
  );
};

export default Designer;
