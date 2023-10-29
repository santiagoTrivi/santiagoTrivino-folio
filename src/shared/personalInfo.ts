

export const personalInfo = {
    greeting: 'Hi👋 I am Santiago, Backend Developer.',
    description: 'Motivated about leveraging technology to deliver innovative solutions.',
    mainDescription: 'Passionate back-end developer and systems engineering student with experience in building REST APIs and designing reliable databases. I enjoy the challenge of back-end development and working collaboratively with a team to bring innovative solutions to complex problems. I am always eager to share my knowledge and ideas with others and am committed to communicating my thoughts and opinions in a clear and concise manner.',
    networkLinks: {
        linkedin: 'https://www.linkedin.com/in/santiago-trivi%C3%B1o/',
        github: 'https://github.com/santiagoTrivi'
    }
}

interface projectsProps{
    heading: string;
    coverImgUrl: string;
    description: string;
    demoUrl: string;
    gitHubRepoUrl: string;
}


export const CreatedProjects: projectsProps[] = [
    {
        heading: 'Saint Patrick Bank',
        coverImgUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        description:'A collaborative project that allows client to register and have multiple cards to make movements such as deposit or transference.',
        demoUrl: 'https://banco-saint-patrick.vercel.app/',
        gitHubRepoUrl: 'https://github.com/santiagoTrivi/proyecto-banco-saint-patrick/'
    }
]

