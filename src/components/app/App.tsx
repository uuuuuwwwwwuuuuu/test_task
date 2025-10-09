import './App.scss';
import Header from '../Header/Header';
import News from '../news/News';
import BigNew from '../bigNew/BigNew';
import FeedBack from '../feedback/FeedBack';
import Footer from '../Footer/Footer';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <News />
            <BigNew isHashTag={true} imgName='big-new' titleOrHashTag='болельщикам' info='Юрий Поклад: «Динамо» как бы начинает работать заново' />
            <FeedBack />
            <BigNew isHashTag={false} imgName='big-new-2' titleOrHashTag='Экстрим' info='Интервью с Юрием Покладом. Полный список всех медалей Беларуси на Европейских играх.' />
            <Footer />
        </div>
    );
};

export default App;
