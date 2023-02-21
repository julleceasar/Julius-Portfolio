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
        description: 'This a express server API presenting movie information. All movie data is coming from OMDb-api which is a open movie database. Built with vanilla javascript on frontend and node.js for the api.',
        img: 'moviefinder.png',
        github: 'https://github.com/julleceasar/Movie-finder-API'
    },
    {
        name: 'Optical lenses',
        description: 'This a express server API presenting movie information. All movie data is coming from OMDb-api which is a open movie database. Built with vanilla javascript on frontend and node.js for the api.',
        img: 'optical.png',
        github: 'https://github.com/DWMi/React-Store'
    },
]


export default projects;