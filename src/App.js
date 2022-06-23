import './App.css';
import React, {Suspense, useEffect, useState} from "react";
import {RotatingSquare} from "react-loader-spinner";
import {useTranslation} from 'react-i18next';
import Error from "./components/Error";

const SomeConvenientWidget = React.lazy(() => import("./components/Widget/SomeConvenientWidget"))

function App() {
    const {i18n} = useTranslation();

    const changeLanguageHandler = (value) => {
        i18n.changeLanguage(value)
        localStorage.setItem('lang', value);
        document.querySelector('html').setAttribute('lang', value)
    }

    return (
        <>
            <div>
                <button onClick={() => changeLanguageHandler('en')}>English</button>
                <button onClick={() => changeLanguageHandler('ru')}>Русский</button>
            </div>
            <Error>
                <Suspense fallback={<Loader/>}>
                    <SomeConvenientWidget/>
                </Suspense>
            </Error>
        </>
    )
}

function Loader() {
    const {t} = useTranslation();

    const [message, setMessage] = useState(t('Loading.First'))

    useEffect(() => {
        let secondPhase = setTimeout(() => {
            setMessage(t('Loading.Second'))
            clearTimeout(secondPhase)
        }, 1500)

        let thirdPhase = setTimeout(() => {
            setMessage(t('Loading.Third'))
            clearTimeout(thirdPhase)
        }, 3000)
    }, [])

    return (
        <div>
            <RotatingSquare ariaLabel="rotating-square" visible={true} color="grey"/>
            <div>{message}</div>
        </div>
    )
}


export default App;
