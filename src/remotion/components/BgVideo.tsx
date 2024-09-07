import { AbsoluteFill, Video } from "remotion"
import { videoHeight, videoWidth } from "../constant"

export const BgVideo: React.FC = () => {
    return <AbsoluteFill>
        <Video src={'https://videos.pexels.com/video-files/2715412/2715412-uhd_2560_1440_30fps.mp4'} className="w-full" />
    </AbsoluteFill>
}