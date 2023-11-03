import { FaPaperPlane } from 'react-icons/fa';



export const ButtonSubmit = () => {
    return(
        <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full hover:bg-gray-950" type="submit">
            Submit <FaPaperPlane classname="text-xs opacity-70 transition-all"/>
        </button>
    )
}