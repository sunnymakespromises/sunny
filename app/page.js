'use client'

import Text from '../components/text'
import Button from '../components/button'
import Input from '../components/input'
import App from '../components/app'
import { useBreakpoints } from '../hooks/useBreakpoints'
import { useHomeContext } from '../contexts/home'

/* /app/page.js */
export default function Home() {
    const { pages } = useHomeContext()
    const [sm, md, lg] = useBreakpoints()
    const isLandscape = !sm && !md
    return (
        <div id = 'home-screen' className = 'w-full h-full flex flex-col items-center'>
            <div id = 'apps-container' className = 'w-full h-full flex flex-row flex-wrap content-start px-2 py-6'>
                {!isLandscape ? pages.map((page, index) => {
                    if (!page.mobileDocked && page.visible.mobile === true) {
                        return <App key = {index} title = {page.title} path = {page.path} logo = {page.logo} isLandscape = {isLandscape} isDocked = {false}/>
                    }
                }):null}
            </div>
        </div>
    )
}