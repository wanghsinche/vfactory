import { AbsoluteFill, Video } from "remotion"
import { videoHeight } from "../../globalConstant"
import './style.css'

interface IProps extends React.ComponentProps<typeof Video> {

}


export const BgVideo: React.FC<IProps> = (p) => {
    return <AbsoluteFill>
                <div style={{ height: videoHeight }} className="myvideo">
                    <Video src={p.src} loop muted {...p} />
                </div>
    </AbsoluteFill>
}