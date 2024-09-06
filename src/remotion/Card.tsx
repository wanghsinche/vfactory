import { cardHeight, cardWidth } from './constant';
import { Img, staticFile } from "remotion";
import { AbsoluteFill, interpolate, Easing, spring, useCurrentFrame, useVideoConfig, Sequence } from 'remotion';

interface IProps {
    tailwindColor?: string
    picIndex?: number
}
export const Card0 = ({ tailwindColor }: IProps = { tailwindColor: 'bg-red-500' }) => {
    return <div className={`ceiled-lg shadow-lg ${tailwindColor}`} style={{ width: cardWidth, height: cardHeight }} />

}

export const Card = (p: IProps) => {
    return <Img src={staticFile(`Page ${(p.picIndex || 0) + 1}.jpeg`)} style={{ width: cardWidth, height: cardHeight }} />
}


const AnimationNum = (p:{num: number, sec: number, from: number}) => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();
    const currentNum = interpolate(frame, [p.from*fps, fps*(p.sec + p.from)], [0, p.num], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.quad
    })
    return currentNum.toFixed(0)
}

export interface ICard3Props {
    src: string;
    name: string;
    votes: number;
    place: number;
    animation?: boolean
}

const BGColor = 'linear-gradient(90deg, #24090b 20%, rgba(36, 9, 11, 0.6) 80%, #24090b)'

export const Card3 = (p: ICard3Props) => {
    
    const { fps } = useVideoConfig();

    const frame = useCurrentFrame();

    const picY = interpolate(frame, [2*fps, 4*fps], [-cardHeight, 0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.quad
    })

    
    const textY = interpolate(frame, [fps, 3*fps], [cardHeight/2, 0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.quad
    })

    // a rectangular Img
    // const title = <div className='mt-1 mb-1 leading-relaxed  text-neutral-50	text-md bg-[#c11f2a]' > Jujutsu Kaisen: 4th Popularity Poll </div>
    const characterPic = <div className='w-full h-3/5 overflow-hidden flex justify-center items-center' ><Img src={p.src} className='w-full' style={p.animation ?  { transform: `translateY(${picY}px)` } : {}} /></div>


    const name = <div className='leading-relaxed text-black-500 text-4xl bg-[#d3d108] w-11/12 h-1/3' >
        {p.name}
    </div>
    const desc1 = <div className='mb-1 leading-relaxed  text-neutral-50	text-3xl ' >Place</div>

    const leftLabel = <div className='absolute bottom-0 left-0 leading-relaxed text-neutral-50 text-7xl h-3/4 w-1/3 '>{p.place}</div>

    const desc2 = <div className='absolute bottom-0 right-0 leading-relaxed text-neutral-50 text-xl bg-[#13404f] w-2/3 h-20' >
        <AnimationNum num={p.votes} sec={3} from={2}/>
        <br />
        <div className='text-center text-red-400			'>Votes</div>
    </div>


    const textContainer = <div className='w-full bg-black relative h-2/5' style={p.animation? { transform: `translateY(${textY}px)` }: {}}>
        {name}
        {desc1}
        {leftLabel}
        {desc2}
    </div>

    return <div className='card shadow-lg  rounded overflow-hidden' style={{ width: cardWidth, height: cardHeight, background: BGColor }}>
        <div className='w-full text-center text-lg h-full'>
            {/* {title} */}
            {characterPic}
            {textContainer}
        </div>

    </div>
}