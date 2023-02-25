'use client'

import Text from './text'
import Image from './image'
import { useBreakpoints } from '../hooks/useBreakpoints'
import { useEffect, useState } from 'react'

/* /components/header.js */
export default function Header({}) {
    const [time, setTime] = useState()
    const [sm, md, lg] = useBreakpoints()
    const isLandscape = !sm && !md
    useEffect(() => {
        function getTime() {
            let newTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}).replace(/ AM| PM/g, '')
            if (newTime.charAt(0) === '0') {
                newTime = newTime.slice(1)
            }
            setTime(newTime)
            setTimeout(getTime, 10000)
        }
        getTime()
    }, [])
    return (
        <div id = 'header' className = {'transition-all absolute top-0 w-full h-10 md:h-7 flex flex-row items-center px-4 md:px-4 pt-4 md:pt-0' + (isLandscape ? ' backdrop-blur-[128px] backdrop-brightness-[0.90]' : ' backdrop-blur-0 backdrop-brightness-1')}>
            <div id = 'header-left' className = 'w-full h-full flex flex-row items-center gap-6'>
                <Text id = {isLandscape ? 'header-logo' : 'header-time'} style = 'headerText' classNames = '!font-bold select-none'>{isLandscape ? '' : time}</Text>
        {isLandscape ? <>
                <Text id = 'header-finder' style = 'headerText' classNames = '!font-bold select-none'>Finder</Text>
                <Text id = 'header-file' style = 'headerText' classNames = 'select-none'>File</Text>
                <Text id = 'header-edit' style = 'headerText' classNames = 'select-none'>Edit</Text>
                <Text id = 'header-view' style = 'headerText' classNames = 'select-none'>View</Text>
                <Text id = 'header-go' style = 'headerText' classNames = 'select-none'>Go</Text>
                <Text id = 'header-window' style = 'headerText' classNames = 'select-none'>Window</Text>
                <Text id = 'header-help' style = 'headerText' classNames = 'select-none'>Help</Text>
        </>:null}
            </div>
            <div id = 'header-right' className = 'w-full h-full flex flex-row justify-end items-center gap-2 md:gap-3'>
        {!isLandscape ? <>
                <Image id = 'header-data' path = 'data.svg' classNames = 'h-full aspect-square'/>
                <Text id = 'header-lte' style = 'headerText' classNames = 'select-none'>LTE</Text>
                <Image id = 'header-battery' path = 'battery.svg' classNames = 'h-3/5 md:h-1/2 aspect-[2/1]'/>
        </>:null}
        {isLandscape ? <>
                <Image id = 'header-dnd' path = 'dnd.svg' classNames = 'h-1/2 aspect-square'/>
                <Image id = 'header-volume' path = 'volume.svg' classNames = 'h-3/5 aspect-square'/>
                <Image id = 'header-battery' path = 'battery.svg' classNames = 'h-3/5 md:h-1/2 aspect-[2/1]'/>
                <Image id = 'header-wifi' path = 'wifi.svg' classNames = 'h-3/5 aspect-square'/>
                <Text id = 'header-time' style = 'headerText' classNames = 'select-none'>{time}</Text>
        </>:null}
            </div>
        </div>
    )
}