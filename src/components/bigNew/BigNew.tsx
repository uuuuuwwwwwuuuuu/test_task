import { FC } from 'react';
import './BigNew.scss';

const BigNew: FC = () => {
    return (
        <div className='big_new' style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/big-new.png)`}} >
            <div className='big_new_text'>
                <span>#болельщикам</span>
                <span>Юрий Поклад: «Динамо» как бы начинает работать заново</span>
            </div>
            <div className='big_new_darker'></div>
        </div>
    )
}

export default BigNew