'use client'

import Text from './text'
import Image from './image'
import { useHomeContext } from '../contexts/home'

/* /components/app.js */
export default function App({ id, title, logo, isDocked}) {
    const { onAppClick, isLandscape, opened } = useHomeContext()

    if (isLandscape) {
        return (
            <div className = 'group app-container relative flex flex-col items-center h-full aspect-square p-3 pb-0 gap-2 mb-1' onClick = {() => onAppClick(id)}>
                <div className = 'transition-all duration-75 opacity-0 group-hover:opacity-100 app-title-container absolute bottom-[110%] text-center px-2 rounded-md backdrop-blur-3xl backdrop-brightness-[1.4] dark:backdrop-brightness-[0.8] border-[1px] border-white border-opacity-25'>
                    <Text style = 'appTitle' classNames = 'app-title h-min select-none'>{title}</Text>
                </div>
                <Image path = {logo} classNames = 'app-logo h-full aspect-square rounded-2xl cursor-pointer origin-bottom shadow-app'/>
                <div className = {'transition-all app-opened-indicator h-1 aspect-square rounded-full bg-white ' + (opened.includes(id) ? 'bg-opacity-50' : 'bg-opacity-0')}/>
            </div>
        )
    }
    else {
        return (
            <div className = {'app-container ' + (isDocked ? 'h-full aspect-square p-3' : 'flex flex-col items-center h-[16%] w-[25%] p-1')} onClick = {() => onAppClick(id)}>
                <Image path = {logo} classNames = 'app-logo h-full aspect-square rounded-2xl cursor-pointer'/>
                {!isDocked ? <Text style = 'appTitle' classNames = 'app-title h-min select-none'>{title}</Text> : null}
            </div>
        )
    }
}