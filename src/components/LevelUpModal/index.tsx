import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { Container, Overlay } from './styles';


const LevelUpModal: React.FC = () => {

    const {level, closeLevelUpModal} = useContext(ChallengeContext)
    return(
        <Overlay>
        <div className="overlay">
            <Container>
            <div className="container">
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>
            </div>
            </Container>
        </div>
        </Overlay>
    )
}

export default LevelUpModal;