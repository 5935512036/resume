import { INTERESTS } from '../../constants/actions';

export const getInterests = () => ({
    type: INTERESTS,
    payload: {
        interests: [{
                interest: 'I want to be a part of developing tech in every area, especially in the upcountry area. I want people to understand and give attention to the importance of tech.'
            },
            {
                interest: 'I would like to apply my experiences or studies and the accurate point is develop the tech. Lastly, I definitely need a salary for my parents.'
            }
        ]
    }
});