import styled from 'styled-components';

export const Overlay = styled.div`
.overlay{
    background-color: ${props => props.theme.colors.background_modal};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
}
`;

export const Container = styled.div`

.container{
    background-color: ${props => props.theme.colors.background};
    width: 100%;
    max-width: 400px;
    padding: 2rem 3rem;
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    position: relative;
}

header{
    font-size: 8.75rem;
    font-weight: 600;
    color: ${props => props.theme.colors.blue_dark};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
}

strong{
    font-size: 2.25rem;
    color: ${props => props.theme.colors.title_primary};
}

p{
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text};
    margin-top: 0.25rem;
}

button{
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0px;
    outline-color: ${props => props.theme.colors.background};
}
`;