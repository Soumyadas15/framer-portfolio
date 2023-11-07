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
            className="flex w-[80vw] items-center justify-between p-8 border-t border-gray-200 cursor-pointer transition duration-200 ease-in-out hover:opacity-50"
        >
                <h2 className="text-4xl font-light transition duration-400 text-white">{title}</h2>
                <p className="font-light transition duration-400 text-white opacity-0 md:opacity-100">Design & Development</p>
        </div>
    )
}