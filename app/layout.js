'use client'

import './globals.css'
import localFont from '@next/font/local'
import Header from '../components/header'
import Dock from '../components/dock'
import pages, { getPage } from '../res/pages'
import { usePathname } from 'next/navigation'
import { HomeProvider as Provider } from '../contexts/home'

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
    const pathname = usePathname()
    let currentPage = getPage(pathname)
    let isHome = currentPage.path === '/'
    let context = { pages, currentPage, isHome }
    return (
        <html lang='en' className = {'w-full h-full ' + mainUltralight.variable + ' ' + mainThin.variable + ' ' + mainThinItalic.variable + ' ' + mainLight.variable + ' ' + mainRegular.variable + ' ' + mainRegularItalic.variable + ' ' + mainBold.variable + ' ' + mainBlack.variable}>
            <head />
            <body className = {'w-full h-full bg-[url("/img/bg.jpg")] bg-center bg-cover flex flex-col justify-center items-center ' + (isHome ? 'pt-10 ' : '') + 'md:pt-7'}>
                <Provider value = {context}>
                    <Header/>
                        {children}
                    <Dock/>
                </Provider>
            </body>
        </html>
    )
}
