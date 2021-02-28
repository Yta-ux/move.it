import styled from 'styled-components';

export const Container = styled.div`
    .challengeBoxConteiner{
        height-top: 100%;

        background-color: ${props => props.theme.colors.background_box};
        border-radius: 5px;
        box-shadow: 0 0 600px rgba(0, 0, 0, 0.05);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

    }
`;

export const Active = styled.div`
    .challengeActive {
        display: flex;
        flex-direction: column;
        padding: 4rem 4rem;
    }

    header{
        color: ${props => props.theme.colors.blue};
        font-weight: 600;
        font-size: 1.25rem;
        padding: 0.5rem 0 3rem;

        border-bottom: 1px solid ${props => props.theme.colors.gray_line};
    }
    main{
        flex: 1;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    img{
        margin-top: 1rem;
    }

    strong{
        font-size: 2rem;
        font-weight: 600;
        color: ${props => props.theme.colors.title_primary};
        margin: 1.5rem 0 1rem;
    }

     p{
        line-height: 1.5;
        margin-bottom: 1.5rem;
    }

    footer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    button{
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border: 0;
        border-radius: 5px;

        color: ${props => props.theme.colors.white};

        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;
    }

    .challengeFailedButton{
        background-color: ${props => props.theme.colors.red};
    }

    .challengeSucceededButton{
        background-color: ${props => props.theme.colors.green};
    }

    .challengeActive footer button:hover{
        filter: brightness(0.9);
    }
`;

export const NoActive = styled.div`
.challengeNotActive{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7rem 2rem;
}

strong{
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
}

 p{
    display: flex;
    flex-direction: column;
    align-items: center;

    line-height: 1.4;

    max-width: 70%;
    margin-top: 3rem;
}

 img{
    margin-bottom: 1rem;
}
`;