import { BadgeComponent, ButtonATag, HeadingText } from "@/components"
import { CreatedProjects } from '@/shared'
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";


export const Projects = () => {


    return (
        <motion.section 
            id='projects' 
            className="flex flex-col items-center px-4"
            initial={{
                opacity:0
            }}
            whileInView={{
                opacity:1,
            }}
            transition={{
                duration:1
            }}
            viewport={{
                once:true
            }}
            >
            <HeadingText>Projects</HeadingText>

            <div className="">

                <div className="bg-white w-full min-h-[90vh] gap-4 flex-wrap flex justify-center items-center">

                    {CreatedProjects.map(project => (
                        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                            <img className="h-40 object-cover rounded-xl" src={project.coverImgUrl} alt="" />
                            <div className="p-2">
                                <h2 className="font-bold text-lg mb-2 ">{project.heading}</h2>
                                <p className="text-sm text-gray-600">{project.description}</p>
                            </div>
                            <div className="grid grid-cols-3 gap-1 content-start">
                                {project.techStack.map(stack => (
                                    <BadgeComponent>{stack}</BadgeComponent>
                                ))}
                                
                            </div>
                            <div className="m-2 flex items-center">
                                
                                <ButtonATag 
                                    className="text-white bg-gray-900 px-3 py-1 rounded-md hover:bg-gray-950"
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
        </motion.section>
    )
}