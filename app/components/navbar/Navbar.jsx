"use client"

import { useRef } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { merge } from "../../utils/merger"
import Container from '../Container'
import Menu from './menu'
import Cursor from './cursor'

const Navbar = () => {
    const scrollPosition = useScrollPosition();
    const stickyElement = useRef(null);

    let color = "text-black";

    if (scrollPosition >= 600 && scrollPosition < 1100) {
        color = "text-white";
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
                ${scrollPosition > 1500 ? 'text-black' : 'text-white'}
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
                        <div className={merge(
                            scrollPosition > 1800 ? 'text-black' : 'text-[#ff2257]',
                            
                            'text-xl font-semibold transition duration-200 ease-in ml-10'
                        )}>
                            
                            Soumya
                        </div>
                        <div className="mr-10">
                            <div className="flex gap-10">
                                <div className={`${color}`}>
                                    Home
                                </div>
                                <div className={`${color}`}>
                                    Work
                                </div>
                                <div className={`${color}`}>
                                    Contact
                                </div>
                                
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