import React from 'react';
import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { CountdownContext } from '../../contexts/CountdownContext';
import { Active, Container, NoActive} from './styles';


const ChallengeBox: React.FC = () => {
    const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengeContext);

    const {resetCountdown} = useContext(CountdownContext)

    function handleChallengeSucceeded(){
        completeChallenge();
        resetCountdown();

    }

    function handleChallengeFalied(){
        resetChallenge();
        resetCountdown();
    }

    return(
    <Container>
        <div className="challengeBoxConteiner">
                {activeChallenge ? (
                    <Active>
                    <div className="challengeActive">
                        <header>Ganhe {activeChallenge.amount} xp</header>

                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} alt="Desafio" className="challenge"/>
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button type="button" className="challengeFailedButton" onClick={handleChallengeFalied}>Falhei</button>
                            <button type="button" className="challengeSucceededButton" onClick={handleChallengeSucceeded}>Completei</button>
                        </footer>
                    </div>
                    </Active>
                ): (
            <NoActive>
                <div className="challengeNotActive">
                    <strong>Inicie um ciclo para receber desafios a serem completados</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Avance de level completando desafios
                    </p>
                </div>
            </NoActive>
            )}
        </div>
    </Container>
    )
}

export default ChallengeBox;