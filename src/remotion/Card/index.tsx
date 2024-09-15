import { AbsoluteFill, Easing, Sequence, staticFile } from 'remotion';
import { cardWidth, eachDurationInSec, cardSpeed, totalDurationInSec, gap, cardHeight } from './constant';
import { Card3, ICard3Props } from './CardComponent';
import { SlideX } from '../components/Slide'
import { data } from './data'
import { loadFont } from "@remotion/google-fonts/NotoSansSC";

import { fps, videoHeight } from '../globalConstant';
import { useLayoutEffect } from 'react';
import { BgVideo } from '../components/BgVideo/BgVideo';

const { fontFamily } = loadFont();

export { totalDurationInSec } from './constant';

export const MyVideo: React.FC = () => {

  const rootFontSize = cardHeight / videoHeight * 64 
  useLayoutEffect(() => {
    document.documentElement.style.fontSize = `${rootFontSize}px`
  })

  const seqArray = data.sort((a, b) => {
    return b.position - a.position
  }).reduce((acc, card, index) => {

    return [...acc, {
      card: {
        ...card,
        className: `absolute top-0`,
        style: { left: (cardWidth + gap) * index }
      }
    }]

  }, [] as { card: ICard3Props }[])


  return (
    <AbsoluteFill className='bg-transparent' style={{ fontFamily }}>
      {/* <Sequence from={0} durationInFrames={Math.ceil(1 * fps)}>
        <BgVideo src={staticFile('frieren.mp4')} startFrom={0}/>
      </Sequence> */}

      <Sequence from={0*fps} durationInFrames={Math.ceil(totalDurationInSec * fps)} style={{transform: 'translateY(10%)'}}>
        
        <SlideX input={[3 * fps, Math.ceil((totalDurationInSec + 3) * fps)]} output={[0, -cardSpeed * totalDurationInSec]} extrapolateLeft='clamp'>
          <div className='h-full flex absolute ' style={{ width: 9999, }}>
            {seqArray.map((el, idx) => {
              if (idx === 0) {
                return <Sequence from={0} durationInFrames={(4 + eachDurationInSec) * fps}>
                  <SlideX key={el.card.name} input={[0, .5 * fps]} output={[-cardWidth, 0]} extrapolateLeft='clamp' extrapolateRight='clamp' easing={Easing.quad}>
                    <Card3 key={el.card.name} {...el.card} animation />
                  </SlideX>
                </Sequence>

              }

              if (idx === 1) {
                return <Sequence from={1.5 * fps} durationInFrames={(4 + eachDurationInSec) * fps}>
                  <SlideX key={el.card.name} input={[0, .5 * fps]} output={[cardWidth, 0]} extrapolateRight='clamp' extrapolateLeft='clamp'>
                    <Card3 key={el.card.name} {...el.card} animation />
                  </SlideX>
                </Sequence>

              }
              return <Card3 key={el.card.name} {...el.card} />
            })}
          </div>
        </SlideX>
      </Sequence>
    </AbsoluteFill>
  );
};  