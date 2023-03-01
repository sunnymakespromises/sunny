'use client'

import _ from 'lodash'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from '../../components/image'
import Text from '../../components/text'
import Window from '../../components/window'
import { useHomeContext } from '../../contexts/home'
import { getContact } from '../../res/contacts'

/* /app/donate/about.js */
export default function About() {
    const { isLandscape } = useHomeContext()
    const [currentContact, setCurrentContact] = useState(isLandscape ? getContact(0) : null)
    function changeContact(id) {
        if (id !== null) {
            setCurrentContact(getContact(id))
        }
        else {
            setCurrentContact(null)
        }
    }

    return (
        <Window id = 'about-window' classNames = 'w-full md:w-[40%] h-full md:h-[80%] flex-row' background = 'blur'>
            {isLandscape || currentContact === null ? <ContactList currentContact = {currentContact} changeContact = {changeContact} isLandscape = {isLandscape}/> : null}
            {currentContact !== null ? <ContactCard currentContact = {currentContact} changeContact = {changeContact} isLandscape = {isLandscape}/> : null}
        </Window>
    )
}

function ContactList({currentContact, changeContact, isLandscape}) {
    const contactGroups = [
        {
            title: 'My Card',
            contacts: [0]
        },
        {
            title: 'References',
            contacts: [1]
        }
    ]
    return (
        <div id = 'about-contact-list' className = 'w-full md:w-[45%] h-full flex flex-col pt-14 p-4 md:mt-6 md:p-2 gap-2 bg-primary-100 dark:bg-primary-800 md:bg-transparent md:dark:bg-transparent'>
        {!isLandscape ? 
            <Text style = 'contactTitle'>Contacts</Text> 
        :null}
        {contactGroups.map((group, groupIndex) => {
            let isMyCardGroup = group.title === 'My Card'
            return (
                <div key = {groupIndex} id = {'about-contact-group-' + _.camelCase(group.title)} className = {'flex flex-' + (isMyCardGroup && !isLandscape ? 'row gap-4 cursor-pointer' : 'col gap-[1px]')} onClick = {() => {if (isMyCardGroup && !isLandscape) {changeContact(group.contacts[0])}}}>
                {!isMyCardGroup || isLandscape ? 
                    <>
                        <Text style = 'contactGroupTitle' classNames = 'pl-2 select-none'>{group.title}</Text>
                        <div className = 'divider h-[1.5px] w-[90%] bg-primary-500 dark:bg-primary-500 bg-opacity-20 dark:bg-opacity-20 ml-2'/>
                        {group.contacts.map((contactId, contactIndex) => {
                            let contact = getContact(contactId)
                            return (
                                <div key = {contactIndex} id = {'about-contact-list-item-' + contactId} className = {'relative w-full h-min flex flex-row items-center py-2 md:py-[6px] md:pl-2 md:rounded-lg' + (currentContact && currentContact.id === contactId ? ' bg-accent-500' : ' hover:bg-primary-100 hover:bg-opacity-20') +  ' cursor-pointer'} onClick = {() => changeContact(contactId)}>
                                    <Text style = 'contactListItem' classNames = {'select-none ml-2 md:ml-0' + (currentContact && currentContact.id === contactId ? ' text-primary-50' : '')}>{contact.name}</Text>
                                    {!isLandscape ? <div className = 'divider absolute bottom-0 h-[1.5px] w-[90%] bg-primary-500 dark:bg-primary-500 bg-opacity-20 dark:bg-opacity-20 ml-2'/> : null}
                                </div>
                            )
                        })}
                    </>
                :null}
                {isMyCardGroup && !isLandscape ? 
                    <>
                        <Image path = {getContact(group.contacts[0]).picture} classNames = 'h-full aspect-square rounded-full'/>
                        <div className = 'h-full flex flex-col'>
                            <Text style = 'contactListItem' classNames = 'select-none'>{getContact(group.contacts[0]).name}</Text>
                            <Text style = 'main' classNames = '!text-base !text-primary-500 dark:!text-primary-500 !text-opacity-50 dark:!text-opacity-50 select-none'>My Card</Text>
                        </div>
                    </>
                :null}
                </div>
            )
        })}
        </div>
    )
}

function ContactCard({currentContact, changeContact, isLandscape}) {
    return (
        <div id = 'about-card' className = 'w-full h-full bg-primary-100 dark:bg-primary-800 flex flex-col pt-24 md:pt-6 p-2 md:p-6 gap-6'>
                <div id = 'about-top' className = 'relative w-full h-[20%] md:h-[15%] flex flex-col md:flex-row justify-center items-center gap-2'>
                {!isLandscape ? 
                    <div className = 'about-back absolute -top-10 left-0 h-6 flex flex-row items-center gap-1 cursor-pointer' onClick = {() => changeContact(null)}>
                        <Image path = 'back.svg' classNames = 'h-full aspect-square'/>
                        <Text style = 'main' classNames = '!text-2xl !text-accent-500 select-none'>Contacts</Text>
                    </div>
                :null}
                    <Image path = {currentContact.picture} classNames = 'h-full aspect-square rounded-full'/>
                    <Text style = 'main' classNames = '!text-3xl md:!text-xl select-none'>{currentContact.name}</Text>
                </div>
                <div id = 'about-info' className = 'w-full h-full flex flex-col gap-2 overflow-scroll'>
                    {Object.keys(currentContact.info).map((key, index) => {
                        return (
                            <React.Fragment key = {index}>
                                <div id = {'about-info-' + _.camelCase(key)} className = 'h-min w-full flex flex-col md:flex-row md:justify-between p-4 md:p-0 rounded-xl bg-primary-50 dark:bg-primary-600 md:bg-transparent'>
                                    <div className = 'about-info-title-container w-full md:w-[25%] flex flex-row justify-start md:justify-end'>
                                        <Text style = 'contactInfoTitle' classNames = 'select-none'>{key}</Text>
                                    </div>
                                    <div className = 'about-info-data-container w-full md:w-[70%]'>
                                        {currentContact.info[key].includes('https://') ? 
                                            <Link href = {currentContact.info[key]} className = 'about-info-data-container w-[70%]'>
                                                <Text style = 'contactInfoData' classNames = 'underline !text-accent-500'>
                                                    {currentContact.info[key].replace('https://', '')}
                                                </Text>
                                            </Link>
                                        : 
                                                <Text style = 'contactInfoData'>
                                                    {currentContact.info[key]}
                                                </Text>
                                            }
                                    </div>
                                </div>
                            {index !== (Object.keys(currentContact.info).length - 1) && isLandscape ? 
                                <div className = 'divider h-[1px] w-full bg-primary-500 dark:bg-primary-600'/>
                            :null}
                            </React.Fragment>
                        )
                    })}
                </div>
            </div>
    )
}