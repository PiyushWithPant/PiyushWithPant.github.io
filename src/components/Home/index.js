import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetter from '../AnimatedLetters/index.js'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'



const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['P', 'i', 'y', 'u', 's', 'h', ' ', 'P', 'a', 'n', 't']

    const jobArray = ['Machine', ' ', 'Learning', ' ', 'Engineer', ',', ' ', 'A', 'K', 'A', ' ', 'Data', ' ', 'Scientist', ' ', 'but', ' ', 'Technical']

    const reloadNow = () => {
        window.location.reload();
    }


    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 7000)
    }, [])


    return (

        <>
            <div className="container home-page">

                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>N</span>
                        <span className={`${letterClass} _12`}>a</span>
                        <span className={`${letterClass} _13`}>m</span>
                        <span className={`${letterClass} _14`}>a</span>
                        <span className={`${letterClass} _15`}>s</span>
                        <span className={`${letterClass} _16`}>t</span>
                        <span className={`${letterClass} _17`}>e,</span>

                        <br />

                        <span className={`${letterClass} _18`}>I</span>
                        <span className={`${letterClass} _19`}>'m </span> <AnimatedLetter letterClass={letterClass} strArray={nameArray} index={20} />
                    </h1>

                    <br />

                    <h2>
                        <AnimatedLetter letterClass={letterClass} strArray={jobArray} index={31} />
                    </h2>



                </div>

                <NavLink className="button-link" exact='true' activeclassname="active" to="/about" >
                    from ME import &#9733;
                </NavLink>

                <Logo />

                <button title='Refresh | Change background' className='Refresh' onClick={reloadNow}>
                    <FontAwesomeIcon className="refreshIcon" icon={faRotate} color="rgb(170, 255, 255)"></FontAwesomeIcon>
                </button>

                <div className="visitor-counter">
                    <p>You are visitor no.
                        <a href="https://www.hitwebcounter.com" rel="noreferrer" target="_blank">
                            <img src="https://hitwebcounter.com/counter/counter.php?page=8276072&style=0006&nbdigits=9&type=page&initCount=0" title="Free Counter" Alt="web counter" border="0" />
                        </a>
                    </p>
                </div>

            </div >


            <Loader type="pacman" />

        </>
    )
}

export default Home