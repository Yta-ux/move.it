import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.colors.background};
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
`;