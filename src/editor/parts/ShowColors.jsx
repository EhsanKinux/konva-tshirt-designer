import React from "react";
import { useSnapshot } from "valtio";
import mainState from "../../store/mainState";
import { CirclePicker } from "react-color";

const ShowColors = () => {
  const snap = useSnapshot(mainState);

  return (
    <div className="flex flex-col justify-center items-center">
      <label className="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2">
        Colors
      </label>
      <CirclePicker
        color={snap.color}
        disableAlpha
        colors={[
          "#FDE5EC",
          "#FCBAAD",
          "#E48586",
          "#916DB3",
          "#272829",
          "#61677A",
          "#D8D9DA",
          "#FFF6E0",
          "#CECE5A",
          "#FFE17B",
          "#FD8D14",
          "#C51605",
          "#8062D6",
          "#9288F8",
        ]}
        circleSize={25}
        circleSpacing={8}
        onChange={(color) => (mainState.color = color.hex)}
      />
    </div>
  );
};

export default ShowColors;
