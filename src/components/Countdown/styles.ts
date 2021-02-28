import styled from 'styled-components';

export const Container = styled.div`
.countdownConteiner{
    display: flex;
    align-items: center;
    
    font-family: Rajdhani;
    font-weight: 600;

    color: ${props => props.theme.colors.title_primary};
}

.countdownConteiner > div{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: ${props => props.theme.colors.background_box};
    box-shadow: 0 0 16px ${props => props.theme.colors.box_shadow};
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
}

.countdownConteiner > div span{
    flex: 1;
}

.countdownConteiner > div span:first-child{
    border-right: 1px solid ${props => props.theme.colors.color_countdown};
}

.countdownConteiner > div span:last-child{
    border-left: 1px solid ${props => props.theme.colors.color_countdown};
}

.countdownConteiner  > span{
    font-size: 6.25rem;
    margin: 0 0.5rem;
}
`;

export const CountdownButton = styled.div`
.countdownButton{
    width: 26rem;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 0.2s;
}

.countdownButton:not(:disabled):hover{
    background-color: ${props => props.theme.colors.blue_dark};
}
`;

export const ActiveCountdownButton = styled.div`
.countdownButton{
    background-color: ${props => props.theme.colors.background_box};
    color: ${props => props.theme.colors.title_primary};

}

.countdownButton:not(:disabled):hover{
    background-color: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
}
`;

export const Image = styled.image`
    margin-left: 0.5rem;
`;

export const DisableCountdownButton = styled.div`
.countdownButton:disabled{
    background-color: ${props => props.theme.colors.background_box};
    color: ${props => props.theme.colors.title_primary};
    cursor: not-allowed;
    border-bottom: 5px solid ${props => props.theme.colors.green};
    box-shadow: 0 0 16px ${props => props.theme.colors.box_shadow};
}
`;