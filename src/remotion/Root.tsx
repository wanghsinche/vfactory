import React, { useLayoutEffect } from 'react';
import { Composition } from 'remotion';
import { MyVideo } from './Composition';
import './style.css'
import { totalDurationInSec, fps, videoWidth, videoHeight, cardHeight } from './constant';

export const RemotionRoot: React.FC = () => {
  const rootFontSize = cardHeight / videoHeight * 64 
  useLayoutEffect(() => {
    document.documentElement.style.fontSize = `${rootFontSize}px`
  })
  return (
    <Composition
      id="MyComposition"
      durationInFrames={Math.ceil(totalDurationInSec*fps)}
      fps={fps}
      width={videoWidth}
      height={videoHeight}
      component={MyVideo}
    />
  );
};
