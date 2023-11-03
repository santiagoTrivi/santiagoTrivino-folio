import paperplane from '/paper-plane.png';


export const ButtonSubmit = () => {
    return(
        <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65" type="submit">
            Submit <img src={paperplane} className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 w-4 h-4" alt="" />
        </button>
    )
}