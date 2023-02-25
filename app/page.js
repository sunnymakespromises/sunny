'use client'

import Text from '../components/text'
import Button from '../components/button'
import Input from '../components/input'
import App from '../components/app'
import { useBreakpoints } from '../hooks/useBreakpoints'
import pages from '../res/pages'

/* /app/page.js */
export default function Home() {
    const [sm, md, lg] = useBreakpoints()
    const isLandscape = !sm && !md
    return (
        <div id = 'home-screen' className = 'w-full h-full flex flex-col items-center'>
            <div id = 'apps-container' className = 'w-full h-full flex flex-row flex-wrap content-start px-2 py-6'>
                {!isLandscape ? pages.map((page, index) => {
                    return <App key = {index} title = {page.title} link = {page.link} logo = {page.logo} isLandscape = {isLandscape}/>
                }):null}
            </div>
        </div>
    )
}