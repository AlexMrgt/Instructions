import './Main.css';

import Questions from '../Questions/Questions';
import ItemsForm from '../ItemsForm/ItemsForm';

import ApprovedImage from '../../images/approved.png';


const Main = () => {



    return (
        <main className='main'>

            <div className='main__approved-container' >
                <img src={ApprovedImage} alt='approved' className='main__approved-image'></img>
            </div>

            <h1 className='main__title'>ФАК ( за мат извени )</h1>

            <Questions />
            <ItemsForm />

        </main>

    )
}

export default Main;