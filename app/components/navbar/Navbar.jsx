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
                            scrollPosition > 1800 ? 'text-black' : 'text-[#3fffac]',
                            
                            'text-xl font-semibold transition duration-200 ease-in ml-10'
                        )}>
                            
                            Soumya
                        
                        </div>
                        <Menu ref={stickyElement}/>
                        <Cursor stickyElement={stickyElement}/>
                    </div>
                </Container>
            </div>
        </div>
     );
}
 
export default Navbar;