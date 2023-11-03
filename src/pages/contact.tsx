import { ButtonSubmit, HeadingText } from "@/components"
import { Email, sendEmail } from "@/email"
import { personalInfo } from "@/shared"
import { motion } from "framer-motion"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"


export const Contact = () => {

    const [state, setState] = useState<Email>({
        message: '',
        from_email: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        
        const {name, value} = event.target;

        setState(prevState => ({...prevState, [name]: value}))
    }

    const OnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const {error} = await sendEmail(state);

        if(error){
            toast.error('something went wrong')
            return;
        }
        
        toast.success('Email sent successfully')
    }
    
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
                <Toaster />
                <form 
                
                className="mt-10 flex flex-col dark:text-black"

                onSubmit={OnSubmit}
                >
                    <input 
                    className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" 
                    type="email"
                    name="from_email" 
                    placeholder="Your email"
                    required
                    maxLength={500}
                    onChange={handleChange}
                    value={state.from_email}
                    />
                    <textarea 
                    className="h-52 my-3 rounded-lg border border-black/10 p-4"
                    placeholder="Your message"
                    name="message"
                    required
                    maxLength={500}
                    onChange={handleChange}
                    value={state.message}
                    />
                    <ButtonSubmit/>
                </form>
            </div>
        
            
        </motion.section>
    )
}