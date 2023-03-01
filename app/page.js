'use client'

import App from '../components/app'
import { useHomeContext } from '../contexts/home'

/* /app/page.js */
export default function Home() {
    const { pages, isLandscape } = useHomeContext()
    return (
        <div id = 'home-screen' className = 'w-full h-full flex flex-col items-center'>
            <div id = 'apps-container' className = 'w-full h-full flex flex-row flex-wrap content-start px-2 py-6'>
                {!isLandscape ? pages.map((page, index) => {
                    if (!page.mobileDocked && page.visible.mobile === true) {
                        return <App key = {index} id = {page.id} title = {page.title} logo = {page.logo} isDocked = {false}/>
                    }
                }):null}
            </div>
        </div>
    )
}