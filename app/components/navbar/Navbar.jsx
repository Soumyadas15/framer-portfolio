"use client"

import { useRef } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { merge } from "../../utils/merger"
import Container from '../Container'
// import Button from "./utils/Button";
import NavMenu from './utils/NavMenu'

const Navbar = () => {
    const scrollPosition = useScrollPosition();
    const stickyElement = useRef(null);

    let opacity = "opacity-100";

    if (scrollPosition >= 500 && scrollPosition < 8000) {
        opacity = "opacity-0";
    } 
    

    return ( 
        <div className={`
                w-full 
                z-20 
                fixed 
                top-4
                bg-transparent
                transition
                duration 200
                ease-in
                text-white
                
        `}>
            <div
                className="
                    py-4
                    
                "
            >
                <Container
                    full={false}
                >
                    <div 
                        className="
                            flex
                            flex-row
                            items-center
                            justify-between
                            gap-3
                            md:gap-0
                        "
                    >
                        <div className={`text-xl text-[#ff2257] font-semibold transition duration-200 ease-in ml-10 mt-6 ${opacity} `}>
                            
                            Bhupendr
                        </div>
                        <div className="mr-10">
                            <div className="flex gap-10">
                                {/* <div className={`${color}`}>
                                    Home
                                </div>
                                <div className={`${color}`}>
                                    Work
                                </div>
                                <div className={`${color}`}>
                                    Contact
                                </div> */}
                                <NavMenu/>
                            </div>
                            
                        </div>
                        
                        {/* <Menu ref={stickyElement}/>
                        <Cursor stickyElement={stickyElement}/> */}
                    </div>
                </Container>
            </div>
        </div>
     );
}
 
export default Navbar;