import { FC } from 'react';
import './FeedBack.scss';

const FeedBack: FC = () => {
    return (
        <div className='feed_back_wrapper'>
            <div className='social_wrapper'>
                <span>Соцсети</span>
            </div>
            <div className='subscribe_wrapper'>
                <span>Подписка</span>
            </div>
        </div>
    )
}

export default FeedBack