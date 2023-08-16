import React from "react";
import { useSnapshot } from "valtio";
import mainState from "../../store/mainState";

const ShowPositions = () => {
  const snap = useSnapshot(mainState);
  return (
    <div className="flex gap-5 mb-6 flex-col justify-center items-center">
      <div className="badge badge-info gap-2">
        <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          Area Width: {snap.stageWidth}
        </p>
        <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          Area Height: {snap.stageHeight}
        </p>
      </div>
      <div className="badge badge-info gap-2">
        <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          X position: {snap.xPosition}
        </p>
        <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          Y position: {snap.yPosition}
        </p>
      </div>
    </div>
  );
};

export default ShowPositions;
