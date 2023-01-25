import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
    {
        countries {
            name
            native
            capital
            emoji
            currency
            languages {
                code
                name
            }
        }
    }
`;
