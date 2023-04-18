export interface Project {
    name: String,
    description: String
    img: String
    github: String
}

const projects = [
    {
        name: 'QWERTY Keyboards',
        description: 'A e-commerce website selling custom keyboards and accessories that was our exam-project. Built with next.js, mongoose and stripe as payment. Deployed on vercel.',
        img: 'qwertyFixed.png',
        github: 'https://github.com/antoniowav/qwerty'
    },
    {
        name: 'Moviefinder API',
        description: 'This is an express server API presenting movie information. All movie data is coming from OMDb-api which is a open movie database. Built with vanilla javascript on frontend and node.js for the api.',
        img: 'moviefinder.png',
        github: 'https://github.com/julleceasar/Movie-finder-API'
    },
    {
        name: 'Optical Trends',
        description: 'A school project where the assignment was to create a e-commerce with a checkout and a adminpage for CRUD. Made with react and written in Typescript, MUI (material UI) was used as the designsystem for the most part. ',
        img: 'optical.png',
        github: 'https://github.com/DWMi/React-Store'
    },
]


export default projects;