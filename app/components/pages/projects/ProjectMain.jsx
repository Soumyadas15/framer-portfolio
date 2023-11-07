'use client'

import Projects from './Projects'
import MobileProjects from './mobile/MobileProjects';


const ProjectMain = () => {

    return ( 
        <div className = {`
            h-screen  
            flex 
            items-center 
            justify-center 
            text-3xl 
            transition
            duration-400
            ease-in
            relative
            
        `}>
            <div className='block md:hidden'>
                <MobileProjects/>
            </div>
            <div className='hidden md:block'>
                <Projects/>
            </div>
            
        </div>
     );
}
 
export default ProjectMain;