import { FC } from 'react';
import './BigNew.scss';

interface BigNewProps {
    isHashTag: boolean;
    imgName: string;
    titleOrHashTag: string;
    info: string
}

const BigNew: FC<BigNewProps> = ({isHashTag, imgName, titleOrHashTag, info}) => {
    return (
        <div className='big_new' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/${imgName}.png)`}} >
            <div className='big_new_text' style={{width: !isHashTag ? 400 : '', right: !isHashTag ? 155 : 0}}>
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