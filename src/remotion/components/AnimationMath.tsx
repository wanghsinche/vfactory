import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
 
export const AnimationMath: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
 
  const enter = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
  });
 
  const exit = spring({
    fps,
    config: {
      damping: 200,
    },
    durationInFrames: 20,
    delay: durationInFrames - 20,
    frame,
  });
 
  const scale = enter - exit;
 
  const x = interpolate(frame, [0, durationInFrames/2], [0, 400], {
    extrapolateRight: "clamp",
    extrapolateLeft: 'clamp',
    easing: Easing.quad
  });

  const y = interpolate(frame, [0, durationInFrames/2], [0, 400], {
    extrapolateRight: "clamp",
    extrapolateLeft: 'clamp',
    easing: Easing.bounce
  });



  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "white",
      }}
    >
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: "#4290f5",
          borderRadius: 20,
          transform: `scale(${scale}) translate(${x}%, ${y}%)`,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          fontSize: 50,
          color: "white",
        }}
      >
        {frame}
      </div>
    </AbsoluteFill>
  );
};
