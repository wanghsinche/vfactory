import React from 'react';
import { Composition } from 'remotion';
import { MyVideo, totalDurationInSec } from './Card';
import './style.css'
import { fps, videoHeight, videoWidth } from './globalConstant';

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
