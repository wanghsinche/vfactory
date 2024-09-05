import { cardHeight, cardWidth } from './constant';
import { Img, staticFile } from "remotion";

interface IProps {
    tailwindColor?: string
    picIndex?: number
}
export const Card0 = ({ tailwindColor }: IProps = { tailwindColor: 'bg-red-500' }) => {
    return <div className={`ceiled-lg shadow-lg ${tailwindColor}`} style={{ width: cardWidth, height: cardHeight }} />

}

export const Card = (p: IProps) => {
    return <Img src={staticFile(`Page ${(p.picIndex || 0) + 1}.jpeg`)} style={{ width: cardWidth, height: cardHeight }} />
}


export interface ICard3Props {
    src: string;
    name: string;
    votes: number;
    place: number;
}

const BGColor = 'linear-gradient(90deg, #24090b 20%, rgba(36, 9, 11, 0.6) 80%, #24090b)'

export const Card3 = (p: ICard3Props) => {
    /**
     * a card with a character picture on it and the name, the votes and the place
     * ---------------
     * |   [Pic]     |              
     * |             |
     * |             |
     * |             |
     * |   [name]    |
     * |   [votes]   |
     * |   [place]   |
     * --------------
     */

    // a rectangular Img
    const title = <div className='mt-1 mb-1 leading-relaxed  text-neutral-50	text-md bg-[#c11f2a]' > Jujutsu Kaisen: 4th Popularity Poll </div>
    const characterPic = <div className='w-full h-3/5 overflow-hidden flex justify-center items-center'><Img src={p.src} className='w-full' /></div>

    const name = <div className='mt-2 mb-1 leading-relaxed text-black-500 text-2xl bg-[#afdde5]' >
        {p.name}
    </div>
    const place = <div className='mb-1 leading-relaxed  text-neutral-50	text-4xl bg-[#50467c]' ># {p.place}</div>
    const votes = <div className='mb-1 leading-relaxed text-neutral-50 bg-[#df8f84]' >Votes: {p.votes}</div>

    return <div className='card shadow-lg  rounded' style={{ width: cardWidth, height: cardHeight, background: BGColor }}>
        <div className='w-full text-center text-lg h-full'>
            {title}
            {characterPic}
            {name}
            {place}
            {votes}
        </div>

    </div>
}