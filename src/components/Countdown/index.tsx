import {useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import { Container, CountdownButton , Image, DisableCountdownButton, ActiveCountdownButton} from './styles';

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