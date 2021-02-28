import React, { useContext } from 'react';

import {Container} from './styles';

import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface Props{
    toggleTheme(): void;
}

const SwitchThemes: React.FC<Props> = ({toggleTheme}) => {

    const {title} = useContext(ThemeContext)

    return(
        <Container>
            <Switch
                onChange={toggleTheme}
                checked ={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor="#F3E9DC"
                onColor="#3D3B30"
            
            />
        </Container>
    )
}

export default SwitchThemes;