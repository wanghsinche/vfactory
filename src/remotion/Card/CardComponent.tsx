import { cardHeight, cardWidth } from './constant';
import { interpolate, Easing, useCurrentFrame, useVideoConfig } from 'remotion';
import { AnimationNum } from '../components/AnimationNum';
import { CSSProperties } from 'react';
import { BGColor, descBGColor, descTextColor, nameBGColor, textContainerBGColor, type IData } from './data'
import { loadFont } from '@remotion/google-fonts/Handjet'

import { Gif } from "@remotion/gif";


const { fontFamily } = loadFont();

export interface ICard3Props extends IData {
    animation?: boolean;
    onlyTextAnimation?: boolean;
    style?: CSSProperties;
    className?: string;
}


export const Card3 = (p: ICard3Props) => {

    const { cate = 'Place' } = p
    const { fps } = useVideoConfig();

    const frame = useCurrentFrame();

    const picY = interpolate(frame, [0.5 * fps, 1 * fps], [-cardHeight, 0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.quad
    })

    const pic2Y = interpolate(frame, [1 * fps, 1.5 * fps], [cardHeight, 0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.quad
    })


    const textY = interpolate(frame, [0.5 * fps, 1 * fps], [cardHeight / 2, 0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.quad
    })

    const descX = interpolate(frame, [1 * fps, 1.5 * fps], [-cardWidth, 0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.sin
    })

    const desc2X = interpolate(frame, [1 * fps, 1.5 * fps], [cardWidth, 0], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.sin
    })

    // a rectangular Img
    const characterPic = <div className='h-1/3 w-full overflow-hidden flex justify-center items-center' >
        <div className='h-full w-full' style={{ transform: p.animation ? `translateY(${picY}px)` : '', height: '100%', width: '100%' }} >
            {p.srcIsGif ? <Gif
                src={p.src}
                // width={232}
                // height={137}
                fit="fill"
                playbackRate={1}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            /> :
                <div className='h-full w-full' style={{ background: `url(${p.src}) no-repeat center center`, backgroundSize: 'cover' }}></div>
            }
        </div>
    </div>



    const characterPic2 = <div className='h-1/3 w-full overflow-hidden flex justify-center items-center' >
        <div className='h-full w-full' style={{ transform: p.animation ? `translateY(${pic2Y}px)` : '', height: '100%', width: '100%' }} >
            <div className='h-full w-full' style={{ background: `url(${p.src2}) no-repeat center center`, backgroundSize: 'cover' }}></div>
        </div>
    </div>



    const name = <div className={`leading-loose	 overflow-hidden text-black-500 text-3xl  w-11/12 h-1/3 flex justify-center items-center`} style={{ transform: `translateX(${descX}px)`, backgroundColor: nameBGColor }} >
        {p.name}
    </div>
    const desc1 = <div className='mb-1 leading-relaxed  text-neutral-50	text-xl'  >{cate}</div>

    const leftLabel = <div className='absolute bottom-0 left-0 leading-relaxed text-neutral-50 text-7xl h-4/5 w-1/3 ' style={{ fontFamily, }}>{p.position}</div>

    const desc2 = <div className={`absolute bottom-0 right-0 leading-relaxed text-neutral-50 text-xl  w-3/4 h-1/4 flex justify-center items-center`} style={{ transform: `translateX(${desc2X}px)`, backgroundColor: descBGColor }}>
        {/* {(p.animation || p.onlyTextAnimation) ? <AnimationNum num={p.votes} sec={1} from={1.5} /> : p.votes} */}
        {/* <br /> */}
        <div className='text-center leading-tight text-sm' style={{ color: descTextColor }}>{p.unit}</div>
    </div>


    const textContainer = <div className={`w-full  relative h-1/3`} style={{ transform: p.animation ? `translateY(${textY}px)` : '', backgroundColor: textContainerBGColor }}>
        {name}
        {desc1}
        {/* {leftLabel} */}
        {desc2}
    </div>

    return <div className={'card shadow-lg  rounded overflow-hidden' + (p.className ? ' ' + p.className : '')} style={{ width: cardWidth, height: cardHeight, background: BGColor, ...p.style }}>
        <div className='w-full text-center text-lg h-full'>
            {characterPic}
            {textContainer}
            {characterPic2}
        </div>
    </div>
}