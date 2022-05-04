import './Main.css';

import Questions from '../Questions/Questions';
import ItemsForm from '../ItemsForm/ItemsForm';
 

const Main = () => {

  

    return (
        <main className='main'>

            <h1 className='main__title'>ФАК ( за мат извени )</h1>

            <Questions />
            <ItemsForm />

        </main>

    )
}

export default Main;