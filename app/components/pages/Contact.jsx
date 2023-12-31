'use client'

import { useScrollPosition } from "../../hooks/useScrollPosition";
import AnimatedCursor from "react-animated-cursor"
import Container from "../Container";
import SocialIcons from '../reusable/Socials/SocialIcons'
import Curve from '../reusable/Curve/Curve'
import Button from '../reusable/Button'
import { useRouter } from "next/navigation";

const Contact = () => {
    const scrollPosition = useScrollPosition();
    const router = useRouter();

    return ( 
        <Container>
            <div className="w-[80vw] flex flex-col">
                    <div className={`
                            h-screen 
                            flex 
                            items-center 
                            justify-start 
                            text-3xl 
                            text-white
                            transition
                            duration-400
                            ease-in
                            w-full
                            
                        `}>
                        <div className = {`
                            md:h-screen
                            text-3xl
                            md:text-6xl
                            font-semibold
                            leading-tight
                            md:leading-normal
                            gap-8
                            flex
                            flex-col
                            items-start
                            justify-center
                            text-black
                            
                            
                        `}>
                                <div className="flex flex-col">
                                    <div className="flex gap-4 items-center mb-[2%]">
                                        <div className={`
                                                text-xs 
                                                md:text-xl 
                                                font-light
                                                
                                                
                                        `}>
                                            Connect with me
                                        </div>
                                        <hr className={`
                                                w-[100px] 
                                                border-1
                                                border-black
                                        `}/>
                                    </div>
                                    
                                
                                    <div className="font-regular ">
                                        Have an <span className="text-[#ff2257]">idea</span>?
                                    </div>
                                    <div className="font-regular ">
                                        I&apos;d be happy to <span className="text-[#ff2257]">help out</span>.
                                    </div>
                                </div>
                                
                                <div className='flex items-center justify-between mt-[4%] h-[10vw] w-[80vw]' onClick={() => {router.push('/contact')}}>
                                    <div>
                                        <Button className='
                                                relative
                                                bg-transparent
                                                border-[1.5px]
                                                border-black
                                                h-[8vw] 
                                                w-[30vw] 
                                                rounded-full 
                                                flex 
                                                items-center 
                                                justify-center 
                                                hover:cursor-pointer
                                                overflow-hidden
                                        '>
                                            <div className="flex flex-col items-center space-y-[-10px]">
                                            <div className="z-10 text-xl group-hover:text-[20px] transition duration-1000 text-black">Contact</div>
                                            </div>            
                                        </Button>
                                    </div>
                                    <div className="flex items-center justify-center p-6">
                                        <div className="text-xl">
                                            <SocialIcons/>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                        </div>
                        
                    </div>
                    
            </div>
        </Container>
        
     );
}
 
export default Contact;