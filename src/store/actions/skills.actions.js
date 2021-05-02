import { SKILLS } from '../../constants/actions';

export const getSkills = () => ({
    type: SKILLS,
    payload: {
        technologies: [{
                name: 'HTML5',
                icon: 'html5'
            },
            {
                name: 'CSS3',
                icon: 'css3-alt'
            },
            {
                name: 'JavaScript',
                icon: 'js-square'
            },
            {
                name: 'React',
                icon: 'react'
            },
            {
                name: 'Node.js',
                icon: 'node-js'
            },
            {
                name: 'WordPress',
                icon: 'wordpress'
            },
            {
                name: 'npm',
                icon: 'npm'
            }
        ],
        workflow: [{
                description: 'Responsive Design'
            },
            {
                description: 'Mobile Development'
            },
            {
                description: 'Web App Development'
            },
            {
                description: 'IOT Development'
            },
            {
                description: 'Agile Development & Scrum'
            }
        ]
    }
});