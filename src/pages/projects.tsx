import { ButtonATag, HeadingText } from "@/components"
import { CreatedProjects } from '@/shared'
import { FaGithub } from "react-icons/fa";


export const Projects = () => {


    return (
        <section id='projects' className="grid grid-cols-1 gap-10 content-center">
            <HeadingText>Projects</HeadingText>

            <div className="m-10">

                <div className="bg-white w-full min-h-[90vh] gap-4 flex-wrap flex justify-center items-center">

                    {CreatedProjects.map(project => (
                        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                            <img className="h-40 object-cover rounded-xl" src={project.coverImgUrl} alt="" />
                            <div className="p-2">
                                <h2 className="font-bold text-lg mb-2 ">{project.heading}</h2>
                                <p className="text-sm text-gray-600">{project.description}</p>
                            </div>
        
                            <div className="m-2 flex items-center">
                                
                                <ButtonATag 
                                    className="text-white bg-zinc-900 px-3 py-1 rounded-md hover:bg-zinc-950"
                                    role="button"
                                    href={project.demoUrl}
                                >
                                    View demo
                                </ButtonATag>
                                <ButtonATag className="bg-gray-50 m-4 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full  transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                                    href={project.gitHubRepoUrl}
                                ><FaGithub/>
                                </ButtonATag>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}