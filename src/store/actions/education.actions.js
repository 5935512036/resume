import { EDUCATION } from '../../constants/actions';

export const getEducation = () => ({
    type: EDUCATION,
    payload: {
        education: [{
                heading: 'prince of songkla university phuket campus',
                subHeading: 'bachelor of computer engineering',
                note: 'software and hardware development',
                description: 'GPA: 2.43',
                dateStart: 'August 2016',
                dateEnd: 'May 2021'
            },
            {
                heading: 'Darunsat witya islamic High School',
                subHeading: 'Mathematics-Science Programme',
                description: 'GPA: 3.00',
                dateStart: 'August 2009',
                dateEnd: 'May 2015'
            }
        ]
    }
});