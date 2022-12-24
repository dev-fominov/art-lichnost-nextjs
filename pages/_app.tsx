import '../styles/globals.css'
import type {AppProps} from 'next/app'
import styles from "../styles/Home.module.css";
import ProgressBar from '@ramonak/react-progress-bar';
import {useState} from "react";
import {Router} from "next/router";

function MyApp({Component, pageProps}: AppProps) {
    const [loading, setLoading] = useState(false);

    Router.events.on('routeChangeStart', () => setLoading(true))
    Router.events.on('routeChangeComplete', () => setLoading(false))

    return <>
        {loading && <ProgressBar completed={100}
                                 animateOnRender={true}
                                 baseBgColor={'#ffffff'}
                                 borderRadius={'40px'}
                                 height={'50px'}
                                 bgColor={'#30AA33'}
                                 customLabel={"АРТЛИЧНОСТЬ"}
                                 transitionDuration={'1.5s'}
                                 barContainerClassName={styles.container}
                                 className={styles.wrapper}
                                 labelClassName={styles.label}
        />}
        <div className={loading ? 'wrapper' : ''}>
            <Component {...pageProps} />
        </div>
    </>
}

export default MyApp
