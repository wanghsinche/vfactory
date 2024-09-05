import { AbsoluteFill, interpolate, Easing, spring, useCurrentFrame, useVideoConfig, Sequence } from 'remotion';
import { fps, cardNumber, cardWidth, eachDurationInSec, cardSpeed, occuringDurationFromEdgeInSec, cardColorArrayInTailwind, cardArray } from './constant';
import { Card, Card3, ICard3Props } from './Card';

interface IProps extends ICard3Props {
}

export const MyComposition = (p: IProps) => {
  const { fps, durationInFrames, width, height } = useVideoConfig();


  const frame = useCurrentFrame();



  const x = interpolate(frame, [0, durationInFrames], [ width, -cardWidth], {
    // extrapolateRight: 'wrap',
  });

  return (
    <AbsoluteFill style={{ transform: `translateX(${x}px) translateY(10%)`,}}>
      <Card3 {...p} />
    </AbsoluteFill>
  );
};



export const MyVideo: React.FC = () => {


  const startDurationArray = cardArray.sort((a,b)=>{
    return b.place - a.place
  }).map((card, index) => {
    // the time of full show
    const startDuration = index * occuringDurationFromEdgeInSec * fps

    return {
      startDuration: Math.ceil(startDuration),
      ...card
    }
  })

  return (
    <AbsoluteFill className='bg-black' >

      {startDurationArray.map((el) => (<Sequence key={el.startDuration} durationInFrames={Math.ceil(eachDurationInSec * fps)} from={el.startDuration} >
        <MyComposition {...el} />
      </Sequence>))}

    </AbsoluteFill>
  );
};  