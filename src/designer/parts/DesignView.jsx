import React, { useEffect, useRef } from "react";
import { Image, Transformer } from "react-konva";
import useImage from "use-image";
import mainState from "../../store/mainState";

const DesignView = ({ isSelected, onSelect, tshirt, onChange, data }) => {
  const [image] = useImage(tshirt.preview, "Anonymous");
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Image
        ref={shapeRef}
        isSelected={isSelected}
        image={image}
        draggable
        {...tshirt.positions}
        onClick={onSelect}
        onTap={onSelect}
        onDragStart={(e) => {
          onChange({
            ...data,
            designs: {
              ...data.designs,
              [data.direction]: {
                ...data.designs[data.direction],
                positions: {
                  ...data.designs[data.direction].positions,
                  isDragging: true,
                  x: e.target.x(),
                  y: e.target.y(),
                },
              },
            },
          });
        }}
        onDragEnd={(e) => {
          mainState.xPosition = e.target._lastPos.x;
          mainState.yPosition = e.target._lastPos.y;

          onChange({
            ...data,
            designs: {
              ...data.designs,
              [data.direction]: {
                ...data.designs[data.direction],
                positions: {
                  ...data.designs[data.direction].positions,
                  isDragging: false,
                  keepRatio: true,
                  x: e.target.x(),
                  y: e.target.y(),
                },
              },
            },
          });
        }}
      />

      <Transformer
        ref={trRef}
        enabledAnchors={[
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
        ]}
        borderDash={[5, 8]}
        keepRatio={true}
        anchorFill="lightyellow"
        anchorCornerRadius={5}
        anchorSize={5}
        anchorStroke="orange"
      />
    </React.Fragment>
  );
};

export default DesignView;
