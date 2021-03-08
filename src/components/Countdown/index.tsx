import {useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import { Container, CountdownButton , Image, DisableCountdownButton, ActiveCountdownButton, ImageCancel} from './styles';

const Countdown: React.FC = () => {
    const {minutes, seconds, hasFinished, resetCountdown, isActive, startCountdown} = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return(
    <div>
        <Container>
        <div className = "countdownConteiner">
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>
        </Container>
        
        <CountdownButton>
            {hasFinished ? (
            <DisableCountdownButton>
                <button 
                disabled
                className="countdownButton">
                    Ciclo Encerrado 
                    <Image>
                    <img src="icons/check_circle.svg" alt="Play"/>
                    </Image>
                </button> </DisableCountdownButton>): (
                    <>           
                        {isActive ? (
                        <ActiveCountdownButton>
                            <button 
                            type="button" 
                            className="countdownButton"
                            onClick={resetCountdown}>
                                Abandonar ciclo 
                                <ImageCancel>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path  className="arrow" d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#FFFFfF"/>
                                    </svg>
                                </ImageCancel>

                            </button>
                        </ActiveCountdownButton>
                        ): (
                            <button 
                            type="button" 
                            className="countdownButton"
                            onClick={startCountdown}>
                                Iniciar ciclo <Image><img src="icons/play_arrow.svg" alt="Play"/></Image>
                            </button>
                    
                        )}
            </> 
                )}
        </CountdownButton>
       
    </div>
    );
}

export default Countdown;