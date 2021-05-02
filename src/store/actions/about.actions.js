import { ABOUT } from '../../constants/actions';

export const getAbout = () => ({
    type: ABOUT,
    payload: {
        forename: 'USMAN',
        surname: ' SULONG',
        summary: 'I like to use my mind in every action to get the best results. At university, I have an established developer team to hone my web development skills. I am an active person and love to challenge myself to fill up my personal goals.',
        address_line_1: '110 M.8 Batong',
        town: 'Ruso',
        county: 'Narathiwat',
        postcode: '96150',
        email: '5935512036@psu.ac.th',
        phone: '(098) 679-7379',
        contactInfo: [{
                href: 'https://github.com/5935512036',
                icon: 'github'
            },
            {
                href: 'https://twitter.com/Pokmang18',
                icon: 'twitter'
            },
            {
                href: 'https://www.facebook.com/pokmang19/',
                icon: 'facebook-f'
            }
        ]
    }
});