import { AbsoluteFill, Sequence, Video } from "remotion"
import './style.css'
import React from "react"
import { SlideX } from "../components/Slide"
import { fps, videoHeight } from "../globalConstant"

export { totalDurationInSec } from './constant'

interface IProps extends React.ComponentProps<typeof Video> {

}

export const MyVideo: React.FC = (p: IProps) => {
    return <AbsoluteFill>
        <Sequence from={0} durationInFrames={Math.ceil(2 * fps)}>
            <SlideX input={[0, 2 * fps]} output={[0, videoHeight]} extrapolateRight="clamp">
                <div style={{ height: videoHeight }}>
                    <Video src={'https://videos.pexels.com/video-files/1730393/1730393-uhd_2560_1440_25fps.mp4'} loop />
                </div>

            </SlideX>
        </Sequence>


    </AbsoluteFill>
}