import { staticFile } from "remotion";

// tiktok video
export const videoWidth = 1080
export const videoHeight = 1920

export const cardHeight = videoHeight / 4 * 3
export const cardWidth = cardHeight / 1920 * 1080
export const gap = 5

export const cardNumber = 10;
export const fps = 60
export const eachDurationInSec = 10;



export const cardSpeed = (gap + cardWidth + gap + videoWidth) / eachDurationInSec;
export const occuringDurationFromEdgeInSec = (gap + cardWidth + gap) / cardSpeed
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



export const cardArray: Array<{
    src: string
    name: string
    votes: number
    place: number
}> = [
        {
            name: 'Gojo Satoru',
            src: staticFile('Gojo.webp'),
            votes: 113392,
            place: 1
        },
        {
            name: 'Yuji Itadori',
            src: staticFile('Yuji.webp'),
            votes: 48131,
            place: 2
        },
        {
            name: 'Megumi Fushiguro',
            src: staticFile('Megumi.webp'),
            votes: 28502,
            place: 3
        },
        {
            name: 'Suguru Geto',
            src: staticFile('Suguru.jpg'),
            votes: 19156,
            place: 4
        },
        {
            name: 'Naoya Zenin',
            src: staticFile('Naoya.webp'),
            votes: 11731,
            place: 5
        },
        {
            name: 'Choso',
            src: staticFile('Choso.jpeg'),
            votes: 6247,
            place: 6
        },
        {
            name: 'Yuta Okkotsu',
            src: staticFile('Yuta.webp'),
            votes: 5991,
            place: 7
        },
        {
            name: 'Nanami',
            src: staticFile('Nanami.webp'),
            votes: 4162,
            place: 8
        },
        {
            name: 'Sukuna',
            src: staticFile('Sukuna.jpg'),
            votes: 4077,
            place: 9
        },
        {
            name: 'Toji Fushiguro',
            src: staticFile('Toji.jpg'),
            votes: 3218,
            place: 10
        },
    ]