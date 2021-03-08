import styled from 'styled-components';

export const Container = styled.div`
    
    .container{
        height: 100vh;
        max-width: 992px;
        margin: 0 auto;
        padding: 2.5rem 2rem;

        display: flex;
        flex-direction: column;
    }

    .container .components{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6.25rem;
        align-items: center;
    
        margin-top: 6rem;
    }
`;