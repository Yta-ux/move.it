import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import {Container} from './styles';

const Profile: React.FC = () => {

    const {level}= useContext(ChallengeContext)

    return(
        <Container>
            <img src="https://avatars.githubusercontent.com/u/62409856?s=460&u=36cfdc5f8d633c9504ffe618110cd3c7af75ff04&v=4" alt="Ítalo Gustavo" className="profilePicture"/>
        <div className="informationProfile">
            <strong className="nameProfile">Ítalo Gustavo</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}
            </p>
        </div>
        </Container>
    );

}

export default Profile;