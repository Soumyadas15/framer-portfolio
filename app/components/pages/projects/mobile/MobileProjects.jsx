import ProjectCard from "./components/ProjectCard";

const MobileProjects = () => {
    return ( 
        <div className="
                h-screen
                flex 
                items-center 
                justify-center 
                text-3xl 
                transition
                duration-400
                ease-in
                relative
        ">
            <div className="flex flex-col gap-8 items-center">
                <ProjectCard

                />
                <hr className="border-1 border-white w-80"/>
                <ProjectCard

                />
            </div>
        </div>
     );
}
 
export default MobileProjects;