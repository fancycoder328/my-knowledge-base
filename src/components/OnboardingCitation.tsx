"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface OnboardingCitationProps {
    citeNoteNumber: number;
    content: React.ReactNode;
}

export default function OnboardingCitation({ citeNoteNumber, content }: OnboardingCitationProps) {

    const motionVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: 'easeInOut' },
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: { duration: 1, ease: 'easeInOut' },
        },
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleOnboardingCitation = () => setIsOpen(!isOpen);

    // Handle ESC key press to close modal
    useEffect(() => {
        const handleEscape = (event: any) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    return (
        <>
            <span onClick={toggleOnboardingCitation} className="cursor-pointer text-blue-400">
                <sup className="text-[10px]">
                    [
                    <span className="hover:underline">n {citeNoteNumber}</span>
                    ]
                </sup>
            </span>
            {isOpen && (
                <motion.div
                    className={`fixed inset-0 z-50 overflow-y-auto transition duration-300 ease-in-out bg-neutral-900 bg-opacity-[78%] ${isOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={motionVariants}
                        className="fixed bottom-0 left-0 right-0 mx-auto p-4 w-full max-w-md mt-20">
                        <div className="shadow-white/[0.4] shadow-lg rounded-lg bg-black p-5">
                            <div className="flex justify-between">
                                <h5 className="text-xl flex gap-[2px] font-light leading-6 tracking-tight text-white/[0.5] mb-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                                </svg>
                                    CITATION
                                </h5>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={toggleOnboardingCitation}
                                    className="mb-3"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </motion.button>
                            </div>
                            <div className="mb-3 sm:text-lg lg:text-base md:text-xs sm:text-[5px]">{content}</div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};