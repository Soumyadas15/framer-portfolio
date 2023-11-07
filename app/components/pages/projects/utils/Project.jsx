'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, manageModal}) {

    return (
        <div
            onMouseEnter={(e) => {
                manageModal(true, index, e.clientX, e.clientY);
            }}
            onMouseLeave={(e) => {
                manageModal(false, index, e.clientX, e.clientY);
            }}
            className="flex w-[80vw] items-center justify-between p-12 border-t border-neutral-600 cursor-pointer transition duration-800 hover:opacity-50 group"
        >
                <div className='flex w-full justify-between items-center group-hover:scale-105 transition duration-400'>
                    <h2 className="text-4xl font-bold transition duration-800 text-white hover-move-right">{title}</h2>
                    <p className="font-light transition duration-400 text-white opacity-0 md:opacity-50 text-xl">Fullstack</p>
                </div>
                
        </div>
    )
}