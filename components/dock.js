'use client'

import App from '../components/app'
import { useBreakpoints } from '../hooks/useBreakpoints'
import { useState, useEffect, useRef } from 'react'
import { useHomeContext } from '../contexts/home'
import Link from 'next/link'

/* /components/dock.js */
export default function Dock({ children }) {
    const { pages, isHome } = useHomeContext()
    const [hovered, setHovered] = useState(null)
    const [cursorPos, setCursorPos] = useState(null)
    const dockContainerRef = useRef()
    const [sm, md, lg] = useBreakpoints()
    const isLandscape = !sm && !md
    useEffect(() => { // cursor tracking for carousel effect
        if (isLandscape) {
            const handleMouseMove = (event) => {
                if (dockContainerRef && dockContainerRef.current.contains(event.target)) {
                    setCursorPos({ x: event.clientX, y: event.clientY })
                }
                else {
                    setCursorPos(null)
                }
            }
            window.addEventListener('mousemove', handleMouseMove)
            return () => {
                window.removeEventListener('mousemove', handleMouseMove)
            }
        }
    }, [hovered, isLandscape])

    if (isHome || !isHome && isLandscape) {
        return (
            <div ref = {dockContainerRef} id = 'dock-container' className = 'flex flex-row items-center justify-center gap-2 w-[90%] md:w-[80%] h-[7.5rem] md:h-28 mb-[5%] md:mb-[1%] rounded-3xl backdrop-blur-3xl backdrop-brightness-[1.4] dark:backdrop-brightness-[0.8] md:border-[1px] md:border-white md:border-opacity-25'>
                {isLandscape ? pages.map((page, index) => {
                    if (page.visible.desktop === true) {
                        return <App key = {index} id = {page.id} title = {page.title} path = {page.path} logo = {page.logo} isLandscape = {isLandscape} isDocked = {true} hovered = {hovered} setHovered = {setHovered} cursorPos = {cursorPos}/>
                    }
                }) : pages.map((page, index) => {
                    if (page.mobileDocked === true && page.visible.mobile === true) {
                        return <App key = {index} id = {page.id} title = {page.title} path = {page.path} logo = {page.logo} isLandscape = {isLandscape} isDocked = {true} hovered = {hovered} setHovered = {setHovered} cursorPos = {cursorPos}/>
                    }
                })}
            </div>
        )
    }
    else {
        return (
            <Link href = '/' id = 'dock-container' className = 'absolute flex flex-row items-center justify-center w-[40%] h-2 bottom-[2%]'>
                <div id = 'home-button' className = 'w-full h-full rounded-3xl bg-primary-900 dark:bg-primary-50'>
                </div>
            </Link>
        )
    }
}
