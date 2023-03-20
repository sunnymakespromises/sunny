'use client'

import _ from 'lodash'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from '../../components/image'
import Text from '../../components/text'
import Window from '../../components/window'
import { useHomeContext } from '../../contexts/home'
import { getContactGroups, getContact } from '../../res/contacts'

/* /app/donate/about.js */
export default function About() {
    const { isLandscape } = useHomeContext()
    const [currentContact, setCurrentContact] = useState(isLandscape ? getContact(0) : null)
    function changeContact(contact) {
        if (contact !== null) {
            setCurrentContact(contact)
        }
        else {
            setCurrentContact(null)
        }
    }
    useEffect(() => {
        if (isLandscape) {
            setCurrentContact(getContact(0))
        }
    }, [isLandscape])

    return (
        <Window id = 'about-window' classNames = 'w-full md:w-[55%] h-full md:h-[90%] flex-row' background = 'blur'>
            {isLandscape || currentContact === null ? <ContactList currentContact = {currentContact} changeContact = {changeContact} isLandscape = {isLandscape}/> : null}
            {currentContact !== null ? <ContactCard currentContact = {currentContact} changeContact = {changeContact} isLandscape = {isLandscape}/> : null}
        </Window>
    )
}

function ContactList({currentContact, changeContact, isLandscape}) {
    const contactGroups = getContactGroups()
    return (
        <div id = 'about-contact-list' className = 'w-full md:w-[30%] h-full flex flex-col pt-14 md:pt-8 md:p-2 gap-2 bg-primary-100 dark:bg-primary-800 md:bg-transparent md:dark:bg-transparent'>
        {!isLandscape ? 
            <Text style = 'contactTitle' classNames = 'pl-4'>Contacts</Text> 
        :null}
        {contactGroups.map((group, groupIndex) => {
            return (
                <ContactGroup key = {groupIndex} group = {group} currentContact = {currentContact} changeContact = {changeContact} isLandscape = {isLandscape}/>
            )
        })}
        </div>
    )
}

function ContactGroup({group, currentContact, changeContact, isLandscape}) {
    let isMyCardGroup = group.title === 'My Card'
    return (
        <div id = {'about-contact-group-' + _.camelCase(group.title)} className = {'flex flex-' + (isMyCardGroup && !isLandscape ? 'row gap-4 cursor-pointer pl-4 pb-2' : 'col gap-[2px]')} onClick = {() => {if (isMyCardGroup && !isLandscape) {changeContact(group.contacts[0])}}}>
            {!isMyCardGroup || isLandscape ? 
                <>
                    <div className = 'about-contact-group-title flex flex-col pl-2'>
                        <Text style = 'contactGroupTitle' classNames = 'select-none pl-2 md:pl-0'>{group.title}</Text>
                        <div className = 'divider h-[1.5px] w-[90%] bg-primary-500 dark:bg-primary-500 bg-opacity-20 dark:bg-opacity-20 ml-2 md:ml-0'/>
                    </div>
                    <div className = 'about-contact-group-items'>
                        {group.contacts.map((contact, contactIndex) => {
                            return (
                                <Contact key = {contactIndex} contact = {contact} currentContact = {currentContact} changeContact = {changeContact} isLandscape = {isLandscape} isLastContactInGroup = {contactIndex === (group.contacts.length - 1)}/>
                            )
                        })}
                    </div>
                </>
            :null}
            {isMyCardGroup && !isLandscape ? 
                <>
                    <Image path = {group.contacts[0].picture} classNames = 'h-full aspect-square rounded-full'/>
                    <div className = 'h-full flex flex-col'>
                        <Text style = 'contactListItem' classNames = 'select-none'>{group.contacts[0].name}</Text>
                        <Text style = 'main' classNames = '!text-base !text-primary-500 dark:!text-primary-500 !text-opacity-50 dark:!text-opacity-50 select-none'>My Card</Text>
                    </div>
                </>
            :null}
        </div>
    )
}

function Contact({contact, currentContact, changeContact, isLandscape, isLastContactInGroup}) {
    return (
        <div id = {'about-contact-list-item-' + contact.id} className = {'relative w-full h-min flex flex-row items-center py-[6px]' + (currentContact && currentContact.id === contact.id ? ' bg-accent-500' : ' hover:bg-primary-800 hover:bg-opacity-20 dark:hover:bg-primary-100 dark:hover:bg-opacity-20') +  ' cursor-pointer md:rounded-lg'} onClick = {() => changeContact(contact)}>
            <Text style = 'contactListItem' classNames = {'select-none pl-4 md:pl-2' + (currentContact && currentContact.id === contact.id ? ' !text-primary-50 !dark:text-primary-50' : '')}>{contact.name}</Text>
            {(!isLandscape && !isLastContactInGroup) ? <div className = 'divider absolute bottom-0 h-[1.5px] w-[90%] bg-primary-500 dark:bg-primary-500 bg-opacity-20 dark:bg-opacity-20 ml-4 md:ml-0'/> : null}
        </div>
    )
}

function ContactCard({currentContact, changeContact, isLandscape}) {
    return (
        <div id = 'about-card' className = 'w-full md:w-[70%] h-full bg-primary-100 md:bg-primary-50 md:dark:bg-primary-800 dark:bg-primary-800 flex flex-col pt-24 md:pt-6 p-2 md:p-6 gap-6'>
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
            <div id = 'about-info' className = 'w-full h-full flex flex-col gap-2'>
                {Object.keys(currentContact.info).map((key, index) => {
                    return (
                        <div key = {index} id = {'about-info-' + _.camelCase(key)} className = 'h-min w-full flex flex-col bg-primary-50 dark:bg-primary-600 md:bg-transparent gap-[2px] rounded-xl md:rounded-none px-4 py-2 md:px-0 md:py-0'>
                            <div className = 'w-full flex md:flex-row flex-col md:gap-2'>
                                <Text style = 'contactInfoTitle' classNames = 'about-info-title-container select-none md:w-[30%]'>{key}</Text>
                                <div className = 'about-info-data-container md:w-[70%]'>
                                    {currentContact.info[key]}
                                </div>
                            </div>
                            {index !== (Object.keys(currentContact.info).length - 1) && isLandscape ? 
                                <div className = 'divider h-[1px] w-full bg-primary-500 bg-opacity-20 dark:bg-primary-600 dark:bg-opacity-20'/>
                            :null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}