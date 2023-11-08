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
                        <motion.div
                          href={href}
                          custom={i}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                          onClick={() => {
                            router.push(href);
                            router.refresh();
                          }}
                        >
                            
                                <a className='hover:text-white transition duration-200 ease-in cursor-pointer hover:scale-105'>
                                {title}
                                </a>
                            
                        </motion.div>
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
