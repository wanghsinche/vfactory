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
    return <Img src={staticFile(`Page ${(p.picIndex||0)+1}.jpeg`)} style={{ width: cardWidth, height: cardHeight }} />
}
