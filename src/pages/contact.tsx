import { ButtonSubmit, HeadingText } from "@/components"
import { personalInfo } from "@/shared"
import { motion } from "framer-motion"


export const Contact = () => {


    return(
        <motion.section 
        id="contact" 
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
            <div className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center">
                <HeadingText>Contact me</HeadingText>
                <p className="text-gray-700  dark:text-white/80">Feel free to contact me at{' '}
                    <a className="underline" href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>{' '}
                    or through this form.
                </p>

                <form className="mt-10 flex flex-col dark:text-black">
                    <input 
                    className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" 
                    type="email" 
                    placeholder="Your email"
                    />
                    <textarea 
                    className="h-52 my-3 rounded-lg border border-black/10 p-4"
                    placeholder="Your message"
                    />
                    <ButtonSubmit/>
                </form>
            </div>
        
            
        </motion.section>
    )
}