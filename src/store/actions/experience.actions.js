import { EXPERIENCE } from '../../constants/actions';

export const getExperience = () => ({
    type: EXPERIENCE,
    payload: {
        experience: [{
                heading: 'Web Checkpoint for students',
                subHeading: 'Front-end Position',
                description: 'Using Typescript, Next JS, Ant design, Firebase Database .',
                dateStart: 'October 2020',
                dateEnd: 'November 2020'
            },
            {
                heading: 'Car parking for hospital Dashboard',
                subHeading: 'Front-end Position',
                description: 'Using Typescript, Next JS, Ant design.',
                dateStart: 'December 2020',
                dateEnd: 'March 2020'
            },
            {
                heading: 'Project IOT For Rabber ',
                subHeading: 'hardware & software',
                description: '.........',
                dateStart: 'July 2010',
                dateEnd: 'December 2011'
            },
            {
                heading: 'Web Development Intern',
                subHeading: 'Front-end Position',
                description: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.',
                dateStart: 'September 2021',
                dateEnd: 'June 2021'
            }
        ]
    }
});