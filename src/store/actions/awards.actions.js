import { AWARDS } from '../../constants/actions';

export const getAwards = () => ({
    type: AWARDS,
    payload: {
        awards: [{
                certification: '........',
                position: null
            }

        ]
    }
});