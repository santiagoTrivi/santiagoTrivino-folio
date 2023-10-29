import { HeadingText } from "@/components"
import { skillsList } from "@/shared"
import { motion } from "framer-motion"


const animationsVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    }),
    hover: {
        scale: 1.1,
      },
}

export const Skills = () => {


    return (
        <div className="flex justify-center">

            <section id="skills" className="min-h-[90vh] p-8 flex flex-col gap-8 items-center justify-center max-w-none xl:max-w-[75vw]">

            <HeadingText>Skills</HeadingText>

            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsList.map((skill, index) => (
                    <motion.li key={index} 
                    className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
                    variants={animationsVariants}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    whileHover='hover'
                    custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>

            </section>

        </div>
    )
}