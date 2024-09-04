import React from 'react';
import { Composition } from 'remotion';
import { MyVideo } from './Composition';
import './style.css'
import { totalDurationInSec, fps, videoWidth, videoHeight } from './constant';

export const RemotionRoot: React.FC = () => {
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
