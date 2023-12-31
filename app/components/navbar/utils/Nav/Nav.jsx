"use client"

import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from "./anim";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Nav() {
    const router = useRouter();
  return (
    <div className={styles.nav}>
       <div className={styles.body}>
        {
            links.map( (link, i) => {
                const { title, href } = link;
                return (
                    <div key={`b_${i}`} className={styles.linkContainer}>
                        <Link href={href}>
                            <motion.div 
                                custom={i} 
                                variants={perspective} 
                                initial="initial" 
                                animate="enter" 
                                exit="exit"
                                className='group'
                            >
                                <div className='group-hover:text-white group-hover:scale-105 transition duration-300'>{title}</div>
                            </motion.div>
                        </Link>
                    </div>
                )
            })
        }
       </div>
       
       <motion.div className={styles.footer}>
            {
                footerLinks.map( (link, i) => {
                    const { title, href } = link;
                    return (
                        <motion.a 
                            variants={slideIn}
                            custom={i} 
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            key={`f_${i}`}
                        >
                            {title}
                        </motion.a>
                    )
                })
            }
       </motion.div>
    </div>
  )
}
