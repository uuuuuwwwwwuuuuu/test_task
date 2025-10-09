import './App.scss';
import Header from '../Header/Header';
import News from '../news/News';
import BigNew from '../bigNew/BigNew';
import FeedBack from '../feedback/FeedBack';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <News />
            <BigNew isHashTag={true} imgName='big-new' titleOrHashTag='болельщикам' info='Юрий Поклад: «Динамо» как бы начинает работать заново' />
            <FeedBack />
        </div>
    );
};

export default App;
