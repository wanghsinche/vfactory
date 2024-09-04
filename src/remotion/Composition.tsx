import { AbsoluteFill, interpolate, Easing, spring, useCurrentFrame, useVideoConfig, Sequence } from 'remotion';
import { fps, cardNumber, cardWidth, eachDurationInSec, cardSpeed, occuringDurationFromEdgeInSec, cardColorArrayInTailwind } from './constant';
import { Card } from './Card';

interface IProps {
  picIndex: number;
  color: string;
}

export const MyComposition = ({ picIndex, color }: IProps) => {
  const { fps, durationInFrames, width, height } = useVideoConfig();


  const frame = useCurrentFrame();



  const x = interpolate(frame, [0, durationInFrames], [-cardWidth, width], {
    // extrapolateRight: 'wrap',
  });

  return (
    <AbsoluteFill style={{ transform: `translateX(${x}px)`, }}>
      <Card tailwindColor={color} picIndex={picIndex}/>
    </AbsoluteFill>
  );
};


export const MyVideo: React.FC = () => {


  const startDurationArray = new Array(cardNumber).fill(0).map((_, index) => {
    // the time of full show
    const startDuration = index * occuringDurationFromEdgeInSec * fps

    return { startDuration: Math.ceil(startDuration), color: cardColorArrayInTailwind[index % cardColorArrayInTailwind.length] }
  })

  return (
    <AbsoluteFill className='bg-black'>

      {startDurationArray.map((el, idx) => (<Sequence key={el.startDuration} durationInFrames={Math.ceil(eachDurationInSec * fps)} from={el.startDuration} >
        <MyComposition picIndex={idx} color={el.color} />
      </Sequence>))}

    </AbsoluteFill>
  );
};  