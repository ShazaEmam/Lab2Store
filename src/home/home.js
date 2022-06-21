import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {changeLanguage} from '../store/actions/language';


const Home = () => {

    const language = useSelector((state) => state.language.lang);

    const dispatch = useDispatch()

    const changing = () => {

        dispatch(changeLanguage(language == "ar" ? "en" : "ar"))

    }

    return (
        <div className='m-4 p-4'>
          
            <h1>Home</h1>
            <h4>language : {language}</h4>
            <button className="btn btn-primary" onClick={() => changing()}>
                change language
            </button>
        </div>
    );
}
export default Home;