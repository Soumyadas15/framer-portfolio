'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "Reactjs",
        description: "",
        speed: 0.5
    },
    {
        title: "Nextjs",
        description: "",
        speed: 0.5
    },
    {
        title: "Nodejs",
        description: "",
        speed: 0.67
    },
    {
        title: "Python",
        description: "",
        speed: 0.8
    },
    {
        title: "Java",
        description: "",
        speed: 0.8
    },
]

export default function Skillset() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}
