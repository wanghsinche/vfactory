import { AbsoluteFill, interpolate, Easing, spring, useCurrentFrame, useVideoConfig, Sequence } from 'remotion';
import { fps, cardNumber, cardWidth, eachDurationInSec, cardSpeed, occuringDurationFromEdgeInSec, cardColorArrayInTailwind, cardArray, videoWidth, totalDurationInSec, cardHeight, gap, videoHeight } from './constant';
import { Card3, ICard3Props } from './Card';
import { SlideX, SlideY } from './components/Slide'

import { loadFont } from "@remotion/google-fonts/Roboto";
import { BgVideo } from './components/BgVideo';

const { fontFamily } = loadFont();



export const MyVideo: React.FC = () => {


  const sequenceArray = cardArray.sort((a, b) => {
    return b.place - a.place
  }).map((card, index) => {
    // the time of full show
    const startDuration = index * occuringDurationFromEdgeInSec * fps

    return {
      from: Math.ceil(startDuration),
      duration: Math.ceil(eachDurationInSec * fps),
      card
    }
  })

  const seqArray = cardArray.sort((a, b) => {
    return b.place - a.place
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
      
      <Sequence from={0} durationInFrames={Math.ceil(totalDurationInSec * fps)}>
        
        <SlideX input={[8 * fps, Math.ceil((totalDurationInSec + 5) * fps)]} output={[0, -cardSpeed * totalDurationInSec]} extrapolateLeft='clamp'>
          <div className='h-full flex absolute ' style={{ width: 9999, top: cardHeight / 2 }}>
            {seqArray.map((el, idx) => {
              if (idx === 0) {
                return <Sequence from={0} durationInFrames={(1 + eachDurationInSec) * fps}>
                  <SlideX key={el.card.name} input={[0, .5 * fps]} output={[-cardWidth, 0]} extrapolateLeft='clamp' extrapolateRight='clamp' easing={Easing.quad}>
                    <Card3 key={el.card.name} {...el.card} animation />
                  </SlideX>
                </Sequence>

              }

              if (idx === 1) {

                return <Sequence from={3.5 * fps} durationInFrames={(1 + eachDurationInSec) * fps}>
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