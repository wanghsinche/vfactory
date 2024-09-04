// tiktok video
export const videoWidth = 1080
export const videoHeight = 1920

export const cardHeight = videoHeight
export const cardWidth = cardHeight / 1920 * 1080
export const gap = 5

export const cardNumber = 10;
export const fps = 30
export const eachDurationInSec = 10;



export const cardSpeed = (gap + cardWidth + gap + videoWidth) / eachDurationInSec;
export const occuringDurationFromEdgeInSec =(gap + cardWidth + gap) / cardSpeed
export const totalDurationInSec = occuringDurationFromEdgeInSec * (cardNumber - 1) + eachDurationInSec

export const cardColorArrayInTailwind = [
    'bg-red-300',
    'bg-blue-300',
    'bg-green-300',
    'bg-yellow-300',
    'bg-pink-300',
    'bg-purple-300',
    'bg-orange-300',
    'bg-teal-300',
    'bg-gray-300',
    'bg-indigo-300',
]