import { useVideoConfig, useCurrentFrame, interpolate, AbsoluteFill, Easing, EasingFunction, ExtrapolateType } from "remotion";
import React from "react";


interface IProps extends React.PropsWithChildren{
    input: [number, number]
    output: [number, number]
    extrapolateLeft?: ExtrapolateType
    extrapolateRight?: ExtrapolateType
    easing?: EasingFunction
}

export const SlideX = (p: IProps) => {
    const { fps, durationInFrames, width, height } = useVideoConfig();
  
    const frame = useCurrentFrame();
    
    const x = interpolate(frame, p.input, p.output, {
      extrapolateRight: p.extrapolateRight,
      extrapolateLeft: p.extrapolateLeft,
      easing: p.easing || void 0
    });
  
    return <div className="absolute top-0 left-0" style={{ transform: `translateX(${x}px)` }}>
        {p.children}
    </div>
  };
  
  export const SlideY = (p: IProps) => {
    const { fps, durationInFrames, width, height } = useVideoConfig();
  
    const frame = useCurrentFrame();
    
    const y = interpolate(frame, p.input, p.output, {
      extrapolateRight: p.extrapolateRight,
      extrapolateLeft: p.extrapolateLeft,
      easing: p.easing || void 0
    });
  
    return <div className="absolute top-0 left-0" style={{ transform: `translateY(${y}px)` }}>
        {p.children}
    </div>
  };