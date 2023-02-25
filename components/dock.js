'use client'

import pages from '../res/pages'
import App from '../components/app'
import { usePathname } from 'next/navigation'
import { useBreakpoints } from '../hooks/useBreakpoints'
import { useState, useEffect, useRef } from 'react'

/* /components/dock.js */
export default function Dock({ children }) {
    const [hovered, setHovered] = useState(null)
    const [cursorPos, setCursorPos] = useState({x: 0, y: 0})
    const dockContainerRef = useRef()
    const [sm, md, lg] = useBreakpoints()
    const isLandscape = !sm && !md
    const pathname = usePathname()
    const isHome = pathname === '/'
    useEffect(() => { // cursor tracking for carousel effect
        if (isLandscape) {
            const handleMouseMove = (event) => {
                if (dockContainerRef && dockContainerRef.current.contains(event.target)) {
                    setCursorPos({ x: event.clientX, y: event.clientY })
                }
            }
            window.addEventListener('mousemove', handleMouseMove)
            return () => {
                window.removeEventListener('mousemove', handleMouseMove)
            }
        }
    }, [hovered])

    if (isHome || !isHome && isLandscape) {
        return (
            <div ref = {dockContainerRef} id = 'dock-container' className = {'flex flex-row items-center justify-center w-[90%] md:w-[80%] h-36 md:h-28 mb-[5%] md:mb-[1%] rounded-3xl backdrop-blur-3xl backdrop-brightness-[1.4] dark:backdrop-brightness-[0.8] md:border-[1px] md:border-white md:border-opacity-25'}>
                {isLandscape ? pages.map((page, index) => {
                    return <App key = {index} id = {page.id} title = {page.title} link = {page.link} logo = {page.logo} isLandscape = {isLandscape} hovered = {hovered} setHovered = {setHovered} cursorX = {cursorPos.x}/>
                }):null}
            </div>
        )
    }
    else {
        return null
    }
}
