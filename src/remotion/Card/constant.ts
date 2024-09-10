import { videoWidth } from "../globalConstant";


export const cardWidth = videoWidth / 1
export const cardHeight = cardWidth / 1080 * 1920
export const gap = 5

export const cardNumber = 10;
export const eachDurationInSec = 10;



export const cardSpeed = (gap + cardWidth + gap + videoWidth) / eachDurationInSec;
export const occuringDurationFromEdgeInSec = (gap + cardWidth + gap) / cardSpeed
export const totalDurationInSec = occuringDurationFromEdgeInSec * (cardNumber - 2) + eachDurationInSec - 2

