import { FaPaperPlane } from "react-icons/fa"


export const ButtonSubmit = () => {
    return(
        <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all  hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65" type="submit">
            Submit <FaPaperPlane className="text-xs opacity-70 transition-all "/>
        </button>
    )
}