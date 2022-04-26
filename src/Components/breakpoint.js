
const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    average: '600px',
    tablet: '650px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    average: `(min-width: ${sizes.average})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
}

// - Almost White: hsl(0, 0%, 98%)
// - Medium Gray: hsl(0, 0%, 41%)
// - Almost Black: hsl(0, 0%, 8%)

export const colors = {
    White: 'hsl(0, 0%, 98%)',
    Gray: 'hsl(0, 0%, 41%)',
    Black: 'hsl(0, 0%, 8%)',
}