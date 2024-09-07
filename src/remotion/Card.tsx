import { cardHeight, cardWidth } from './constant';
import { Img, staticFile } from "remotion";
import { AbsoluteFill, interpolate, Easing, spring, useCurrentFrame, useVideoConfig, Sequence } from 'remotion';
import { AnimationNum } from './components/AnimationNum';
import { CSSProperties } from 'react';


export interface ICard3Props {
    src: string;
    name: string;
    votes: number|string;
    place: number;
    unit: string;
    animation?: boolean;
    onlyTextAnimation?: boolean;
    style?: CSSProperties;
    className?: string;
}

const BGColor = '#38576c'//'linear-gradient(90deg, #24090b 20%, rgba(36, 9, 11, 0.6) 80%, #24090b)'

export const Card3 = (p: ICard3Props) => {

    const { fps } = useVideoConfig();

    const frame = useCurrentFrame();

    const picY = interpolate(frame, [0.5 * fps, 1.5 * fps], [-cardHeight, 0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.quad
    })


    const textY = interpolate(frame, [0.5 * fps, 1.5 * fps], [cardHeight / 2, 0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.quad
    })

    const descX = interpolate(frame, [2 * fps, 2.5 * fps], [-cardWidth, 0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.sin
    })

    const desc2X = interpolate(frame, [2 * fps, 2.5 * fps], [cardWidth, 0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.sin
    })

    // a rectangular Img
    const characterPic = <div className='w-full h-3/5 overflow-hidden flex justify-center items-center' ><Img src={p.src} className='w-full' style={p.animation ? { transform: `translateY(${picY}px)` } : {}} /></div>


    const name = <div className='leading-relaxed overflow-hidden text-black-500 text-2xl bg-[#d3d108] w-11/12 h-1/3 flex justify-center items-center' style={{ transform: `translateX(${descX}px)` }} >
        {p.name}
    </div>
    const desc1 = <div className='mb-1 leading-relaxed  text-neutral-50	text-3xl '  >Place</div>

    const leftLabel = <div className='absolute bottom-0 left-0 leading-relaxed text-neutral-50 text-7xl h-3/4 w-1/3 '>{p.place}</div>

    const desc2 = <div className='absolute bottom-0 right-0 leading-relaxed text-neutral-50 text-xl bg-[#13404f] w-2/3 h-20' style={{ transform: `translateX(${desc2X}px)` }}>
        {(p.animation || p.onlyTextAnimation) ? <AnimationNum num={p.votes} sec={2} from={2} /> : p.votes}
        <br />
        <div className='text-center text-red-400			'>{p.unit}</div>
    </div>


    const textContainer = <div className='w-full bg-black relative h-2/5' style={p.animation ? { transform: `translateY(${textY}px)` } : {}}>
        {name}
        {desc1}
        {leftLabel}
        {desc2}
    </div>

    return <div className={'card shadow-lg  rounded overflow-hidden' + (p.className ? ' ' + p.className : '')} style={{ width: cardWidth, height: cardHeight, background: BGColor, ...p.style }}>
        <div className='w-full text-center text-lg h-full'>
            {characterPic}
            {textContainer}
        </div>
    </div>
}