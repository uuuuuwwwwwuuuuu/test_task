import { FC, useEffect, useState } from 'react';
import './BigNew.scss';
import useScreenSize from '../../dtectScreenSIze';

interface BigNewProps {
    isHashTag: boolean;
    imgName: string;
    titleOrHashTag: string;
    info: string
}

interface CalcOffsetOptions {
    currentScreenSize: number
    options: {
        maxScreenSize: number;
        minScreenSize: number;
        maxOffsetValue: number;
        minOffsetValue: number;
    }

}

const calcOffset = (params: CalcOffsetOptions) => {
    const {maxOffsetValue, maxScreenSize, minOffsetValue, minScreenSize} = params.options
    const angularСoeficent = (maxOffsetValue - minOffsetValue) / (maxScreenSize - minScreenSize);
    const offsetValue = maxOffsetValue - angularСoeficent * maxScreenSize
    return angularСoeficent * params.currentScreenSize + offsetValue;

}

const BigNew: FC<BigNewProps> = ({isHashTag, imgName, titleOrHashTag, info}) => {
    const screenWidth = useScreenSize().width;

    const [offset, setOffset] = useState(125);

    useEffect(() => {
        if (screenWidth >= 1920) {
            setOffset(125);
        } else if (screenWidth <= 1920 && screenWidth >= 300) {
            setOffset(calcOffset({
                currentScreenSize: screenWidth,
                options: {
                    maxScreenSize: 1920,
                    minScreenSize: 400,
                    maxOffsetValue: 125,
                    minOffsetValue: 0
                }
            }));
        } else {
            setOffset(0);
        }
    }, [screenWidth])

    return (
        <div className='big_new' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/${imgName}.png)`}} >
            <div className='big_new_text' style={{width: !isHashTag ? 400 : '', right: !isHashTag ? offset : 0}}>
                {
                    isHashTag ? <span className='big_new_hash_tag'>#{titleOrHashTag}</span> : <span className='big_new_title'>{titleOrHashTag}</span>
                }
                {
                    isHashTag ? <span className='big_new_info_hash_tag'>{info}</span> : <span className='big_new_info'>{info}</span>
                }
            </div>
            <div className='big_new_darker'></div>
        </div>
    )
}

export default BigNew