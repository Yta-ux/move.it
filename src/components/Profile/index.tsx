import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import {Container} from './styles';

interface UserGithub{
    name: string;
    avatar_url: string;
}

const Profile: React.FC<UserGithub> = (user: UserGithub) => {

    const {level}= useContext(ChallengeContext)

    return(
        <Container>
            <img src={user?.avatar_url} alt={user?.name} className="profilePicture"/>
        <div className="informationProfile">
            <strong className="nameProfile">{user?.name}</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}
            </p>
        </div>
        </Container>
    );

}

export default Profile;