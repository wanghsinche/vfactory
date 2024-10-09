import { AbsoluteFill, Sequence, Video } from "remotion"
import './style.css'
import React from "react"
import { SlideX } from "../components/Slide"
import { fps, videoHeight } from "../globalConstant"
import { totalDurationInSec } from './constant'
import GoldenFrame from "./frame"
import { BgVideo } from '../components/BgVideo/BgVideo'
import { AnimationMath } from "../components/AnimationMath"

export { totalDurationInSec } from './constant'


interface IProps extends React.ComponentProps<typeof Video> {

}

export const MyVideo: React.FC = (p: IProps) => {
    return <AbsoluteFill>
        <Sequence from={0} durationInFrames={Math.ceil(totalDurationInSec * fps)}>
            {/* <div style={{ height: videoHeight }}> */}
                <GoldenFrame>
                    <BgVideo src={'https://videos.pexels.com/video-files/7063373/7063373-hd_1080_1920_24fps.mp4'} loop/>
                </GoldenFrame>
                {/* <GoldenFrame videoSrc={'https://videos.pexels.com/video-files/7063373/7063373-hd_1080_1920_24fps.mp4'} /> */}
                {/* <Video src={'https://videos.pexels.com/video-files/7063373/7063373-hd_1080_1920_24fps.mp4'} loop /> */}
            {/* </div> */}
            <AnimationMath />
        </Sequence>
    </AbsoluteFill>
}