import { useVideoConfig, useCurrentFrame, interpolate, Easing } from "remotion";

export const AnimationNum = (p:{num: number|string, sec: number, from: number}) => {
    const { fps } = useVideoConfig();
    const frame = useCurrentFrame();
    
    const targetText = p.num.toString().match(/[\d\.\-]+/)?.[0] || ''
    const target = parseInt(targetText)
    const prefix = p.num.toString().split(targetText)[0]
    const postfix = p.num.toString().split(targetText)[1]

    const currentNum = interpolate(frame, [p.from*fps, fps*(p.sec + p.from)], [0, target], {
        extrapolateRight: 'clamp',
        extrapolateLeft: 'clamp',
        easing: Easing.quad
    })
    return prefix + currentNum.toFixed(0) + postfix
}
