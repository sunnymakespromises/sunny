'use client'

import { useState } from 'react'
import { useHomeContext } from '../contexts/home'
import Image from './image'

/* /components/window.js */
export default function Window({classNames, background = 'blur', children, ...extras}) {
    const [isExpanded, setIsExpanded] = useState()
    const { currentPage, isLandscape, onClose, minimized, onMinimize } = useHomeContext()
    let options = [
        { 
            title: 'blur', 
            classNames: 'backdrop-blur-window-light dark:backdrop-blur-window-dark backdrop-brightness-[2] dark:backdrop-brightness-[0.5] backdrop-saturate-[0.3] dark:backdrop-saturate-[0.8]'
        },
        { 
            title: 'main', 
            classNames: 'bg-primary-50 dark:bg-primary-800'
        }
    ]

    /* getOption
     * 
     * Gets the option given by the style parameter.
     * - Searches through options and returns the option whose title matches the 
     *   style parameter.
     */
    const getOption = () => {
        return options.find((option) => { // searches through options
            return option.title === background // returns option whose title matches the style parameter
        })
    }

    function handleExpand() {

    }

    if (!minimized.includes(currentPage.id)) {
        return (
            <div className = {'window transition-all m-auto absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex md:overflow-hidden ' + (isLandscape ? 'rounded-2xl' : '' ) + (getOption() ? ' ' + getOption()?.classNames : '') + (isExpanded ? ' !w-full !h-full' : '') + ' md:border-[1px] md:dark:border-white md:border-primary-800 md:border-opacity-10 md:dark:border-opacity-25 md:shadow-window' + (classNames ? ' ' + classNames : '')} {...extras}>
            {isLandscape ? 
                <div className = 'window-buttons group absolute h-3 top-0 left-0 flex flex-row items-center gap-[6px] m-3'>
                    <div id = 'close-window' className = 'h-full aspect-square rounded-full bg-red cursor-pointer' onClick = {() => onClose(currentPage.id)}>
                        <Image path = 'close.png' classNames = 'invisible group-hover:visible h-full aspect-square'/>
                    </div>
                    <div id = 'minimize-window' className = 'h-full aspect-square rounded-full bg-yellow cursor-pointer' onClick = {() => onMinimize(currentPage.id)}>
                        <Image path = 'minimize.png' classNames = 'invisible group-hover:visible h-full aspect-square'/>
                    </div>
                    <div id = 'expand-window' className = 'h-full aspect-square rounded-full bg-green cursor-pointer' onClick = {() => setIsExpanded(!isExpanded)}>
                        <Image path = 'expand.png' classNames = 'invisible group-hover:visible h-full aspect-square'/>
                    </div>
                </div>
            :null}
                {children}
            </div>
        )
    }
    return null
}