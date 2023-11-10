'use client'

import { useScrollPosition } from "../../hooks/useScrollPosition";
import dynamic from 'next/dynamic';
import Skillset from '../skils'
import Button from '../reusable/Button'

const data = [
    {
        title: "Frontend",
        description: "",
        speed: 0.5
    },
    {
        title: "Backend",
        description: "",
        speed: 0.67
    },
    {
        title: "UI & UX",
        description: "",
        speed: 0.8
    },
]

const Earth = dynamic(() => import('../earth'), {
    ssr: false,
    loading: () => <img src="/assets/placeholder.png"></img>
  })

const MyJob = () => {
    const scrollPosition = useScrollPosition();

    return ( 
        <div className = {`
            h-[80%]
            md:h-screen
            flex 
            items-center 
            justify-center 
            text-3xl 
            transition
            duration-400
            ease-in
            relative
            
        `}>
            <div className="h-[400px] w-[400px] md:h-[700px] md:w-[700px] block">
                <Earth/>
            </div>
            <div className="hidden md:block">
                <Button className='
                    absolute 
                    bottom-20 
                    left-2/4 
                    md:right-5
                    transform -translate-x-2/4 
                    w-24
                    h-24 
                    md:w-36
                    md:h-36
                    md:bottom-20
                    md:left-auto
                    bg-[#3b3b3b] 
                    text-white 
                    rounded-full 
                    flex 
                    items-center 
                    justify-center 
                    cursor-pointer
                    group
                    z-10
                '>
                        <div className="flex flex-col items-center space-y-[-10px]">
                        <div className="z-10 text-[15px] group-hover:text-[20px] transition duration-1000">Stuff</div>
                            <div className="z-10 text-[15px] group-hover:text-[20px] transition duration-1000">I do</div> 
                        </div>
                            
                </Button>
            </div>
            
            <Skillset data={data} heading='Stuff I do'/>
        </div>
     );
}
 
export default MyJob;