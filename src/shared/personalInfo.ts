

export const personalInfo = {
    greeting: 'Hi👋 I am Santiago, Backend Developer.',
    description: 'Motivated about leveraging technology to deliver innovative solutions.',
    mainDescription: 'Passionate back-end developer and systems engineering student with experience in building REST APIs and designing reliable databases. I enjoy the challenge of back-end development and working collaboratively with a team to bring innovative solutions to complex problems. I am always eager to share my knowledge and ideas with others and am committed to communicating my thoughts and opinions in a clear and concise manner.',
    networkLinks: {
        linkedin: 'https://www.linkedin.com/in/santiago-trivi%C3%B1o/',
        github: 'https://github.com/santiagoTrivi'
    },
    email: 'santiagocarvajal103@gmail.com'
}


interface projectsProps{
    heading: string;
    coverImgUrl: string;
    description: string;
    demoUrl: string;
    gitHubRepoUrl: string;
    techStack: string[];
}


export const CreatedProjects: projectsProps[] = [
    {
        heading: 'Saint Patrick Bank',
        coverImgUrl: '/proyectBankSaintPatrick.jpeg',
        description:'A collaborative project served in vercel.',
        demoUrl: 'https://banco-saint-patrick.vercel.app/',
        gitHubRepoUrl: 'https://github.com/santiagoTrivi/proyecto-banco-saint-patrick/',
        techStack: ['Typescript', 'MongoDB', 'Nest.Js', 'Docker']
    },
    {
        heading: 'SantiagoTrivino-folio',
        coverImgUrl: '/backenddevelopment.png',
        description:'My portfolio. Create with React vite and deploy in github pages. ',
        demoUrl: 'https://santiagotrivi.github.io/santiagoTrivino-folio/',
        gitHubRepoUrl: 'https://github.com/santiagoTrivi/santiagoTrivino-folio',
        techStack: ['Typescript', 'React', 'Vite', 'Tailwind']
    }
]

