import Text from './text'
import Image from './image'
import { useHover } from '../hooks/useHover'
import { useEffect, useState } from 'react'

/* /components/app.js */
export default function App({ id, title, link, logo, isLandscape, hovered, setHovered, cursorX }) {
    const [scale, setScale] = useState()
    let [hoverRef, isHovered] = useHover()
    useEffect(() => {
        if (isLandscape) {
            if (isHovered) {
                setHovered(id)
            }
            else {
                setHovered(null)
            }
        }
    }, [isHovered])

    useEffect(() => {
        if (isLandscape) {
            let dockContainer = document.getElementById('dock-container')
            let dock = {left: dockContainer.offsetLeft, right: dockContainer.offsetLeft + dockContainer.clientWidth}
            let cursorPercentageAcrossDock = ((cursorX - dock.left) / (dock.right - dock.left))
            let appPercentageAcrossDock = (((hoverRef.current.getBoundingClientRect().left + (hoverRef.current.getBoundingClientRect().width / 2)) - dock.left) / (dock.right - dock.left))
            let distanceToCursor = (cursorPercentageAcrossDock - appPercentageAcrossDock) * 20
            let x = distanceToCursor
            let scaleFunction = 1 + ((0.15) * (Math.E ** (-1*((x**2)/2))))
            setScale(scaleFunction)
        }
    }, [cursorX])

    if (isLandscape) {
        return (
            <div ref = {hoverRef} className = 'app-container flex flex-col items-center h-full aspect-square p-3 mb-1'>
            {hovered === id ? 
                <div className = 'app-title-container absolute bottom-[110%] text-center px-2 rounded-md backdrop-blur-3xl backdrop-brightness-[1.4] dark:backdrop-brightness-[0.8] border-[1px] border-white border-opacity-25'>
                    <Text style = 'appTitle' classNames = 'app-title h-min select-none'>{title}</Text>
                </div>
            :null}
                <Image styles = {{transform: 'scale(' + scale + ')'}} path = {logo} classNames = 'app-logo h-full w-full rounded-xl cursor-pointer origin-bottom'/>
            </div>
        )
    }
    else {
        return (
            <div className = 'app-container flex flex-col items-center h-[16%] w-[25%] p-1'>
                <Image path = {logo} classNames = 'app-logo h-full w-full rounded-xl cursor-pointer'/>
                <Text style = 'appTitle' classNames = 'app-title h-min select-none'>{title}</Text>
            </div>
        )
    }
}