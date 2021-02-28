import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    .profilePicture {
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%
    }

    .informationProfile{
        margin-left: 1.5rem;
    }

    .nameProfile{
        font-size: 1.5rem;
        font-weight: 600;
        color: ${props => props.theme.colors.title_primary}
    }

    .informationProfile img {
        margin-right: 0.5rem;
    }
`;
