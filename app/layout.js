'use client'

import './globals.css'
import localFont from '@next/font/local'
import Header from '../components/header'
import Dock from '../components/dock'
import { useStorage } from '../hooks/useStorage'
import pages, { getCurrentPage, getPageById } from '../res/pages'
import { usePathname } from 'next/navigation'
import { HomeProvider as Provider } from '../contexts/home'
import { useBreakpoints } from '../hooks/useBreakpoints'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const mainUltralight = localFont({
    src: '../public/fonts/ultralight.ttf',
    variable: '--font-main-ultralight',
    display: 'swap'
})

const mainThin = localFont({
    src: '../public/fonts/thin.ttf',
    variable: '--font-main-thin',
    display: 'swap'
})

const mainThinItalic = localFont({
    src: '../public/fonts/thin-italic.ttf',
    variable: '--font-main-thin-italic',
    display: 'swap'
})

const mainLight = localFont({
    src: '../public/fonts/light.ttf',
    variable: '--font-main-light',
    display: 'swap'
})

const mainRegular = localFont({
    src: '../public/fonts/regular.ttf',
    variable: '--font-main-regular',
    display: 'swap'
})

const mainRegularItalic = localFont({
    src: '../public/fonts/regular-italic.ttf',
    variable: '--font-main-regular-italic',
    display: 'swap'
})

const mainBold = localFont({
    src: '../public/fonts/bold.ttf',
    variable: '--font-main-bold',
    display: 'swap'
})

const mainBlack = localFont({
    src: '../public/fonts/black.ttf',
    variable: '--font-main-black',
    display: 'swap'
})

/* /app/layout.js */
export default function HomeLayout({ children }) {
    const [minimized, setMinimized] = useState([])
    const [opened, setOpened] = useState([0])
    const [currentPage, setCurrentPage] = useState(getCurrentPage('/'))
    const pathname = usePathname()
    let isHome = currentPage.path === '/'
    const [sm, md, lg] = useBreakpoints()
    const isLandscape = !sm && !md
    const router = useRouter()

    useEffect(() => {
        setCurrentPage(getCurrentPage(pathname))
        setOpened(addToArray(opened, getCurrentPage(pathname).id))
    }, [pathname])

    function onAppClick(id) {
        if (minimized.includes(id)) {
            setMinimized(removeFromArray(minimized, id))
        }
        else {
            setOpened(addToArray(opened, id))
            if (getPageById(id).path.includes('https://')) {
                window.location.href = getPageById(id).path
            }
            else {
                router.push(getPageById(id).path)
            }
        }
    }

    function onClose(id) {
        setOpened(removeFromArray(opened, id))
        onAppClick(0)
    }

    function onMinimize(id) {
        setMinimized(addToArray(minimized, id))
    }

    function addToArray(array, value) {
        let newArray = array
        if (!newArray.includes(value)) {
            newArray.push(value)
            return [...newArray]
        }
        else {
            return [...array]
        }
    }

    function removeFromArray(array, value) {
        let newArray = array
        let index = newArray.indexOf(value)
        if (index !== -1) {
            newArray.splice(index, 1)
            return [...newArray]
        }
        else {
            return [...array]
        }
    }

    let context = { router, pages, currentPage, isHome, sm, md, lg, isLandscape, onAppClick, minimized, onMinimize, onClose, opened }
    return (
        <html lang='en' className = {'w-screen h-screen overflow-hidden overscroll-none ' + mainUltralight.variable + ' ' + mainThin.variable + ' ' + mainThinItalic.variable + ' ' + mainLight.variable + ' ' + mainRegular.variable + ' ' + mainRegularItalic.variable + ' ' + mainBold.variable + ' ' + mainBlack.variable} style={{scrollBehavior: 'smooth'}}>
            <head />
            <body className = {'w-full h-full flex flex-col items-center'}>
                <div id = 'background' className = 'absolute top-0 left-0 -z-10 w-full h-full bg-[url("/img/bg.jpg")] bg-center bg-cover' onClick = {() => onAppClick(0)}/>
                <Provider value = {context}>
                    <Header/>
                    <div id = 'main' className = 'relative w-full grow'>
                        {children}
                    </div>
                    <Dock/>
                </Provider>
            </body>
        </html>
    )
}
