import React from "react";
import white_front from "../assets/tf.png";
import white_back from "../assets/tb.png";
import black_front from "../assets/hf.png";
import black_back from "../assets/hb.png";
import { useSnapshot } from "valtio";
import mainState from "../store/mainState";

export const tshirts = [white_front, white_back, black_front, black_back];

export default function TshirtView({ direction }) {
  const snap = useSnapshot(mainState);

  let imageSrc, altText;
  if (snap.product === "hoodie") {
    imageSrc = direction === "front" ? black_front : black_back;
    altText = "hoodie";
  } else {
    imageSrc = direction === "front" ? white_front : white_back;
    altText = "tshirt";
  }

  return (
    <img
      src={imageSrc}
      alt={altText}
      style={{ backgroundColor: `${snap.color}`, borderRadius:"15px" }}
    />
  );
}
