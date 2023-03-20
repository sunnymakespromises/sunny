'use client'

import React, { useState } from 'react'
import Text from '../../components/text'
import Window from '../../components/window'
import { useHomeContext } from '../../contexts/home'
import { getPost, getPostGroups } from '../../res/posts'

/* /app/donate/blog.js */
export default function Blog() {
    const { isLandscape } = useHomeContext()
    const [currentPost, setCurrentPost] = useState(isLandscape ? getPost(0) : null)
    function changePost(post) {
        if (post !== null) {
            setCurrentPost(post)
        }
        else {
            setCurrentPost(null)
        }
    }
    return (
        <Window id = 'blog-window' classNames = 'w-full md:w-[80%] h-full md:h-[90%] flex-row' background = 'main'>
            {isLandscape || currentPost === null ? <PostList currentPost = {currentPost} changePost = {changePost} isLandscape = {isLandscape}/> : null}
            {currentPost !== null ? <Post currentPost = {currentPost} changePost = {changePost} isLandscape = {isLandscape}/> : null}
        </Window>
    )
}

function PostList({isLandscape, currentPost, changePost}) {
    const postGroups = getPostGroups()
    return (
        <div id = 'blog-post-list' className = 'w-full md:w-[20%] h-full flex flex-col pt-14 md:pt-8 p-4 md:p-2 gap-2 overflow-scroll border-r-[2px]'>
            {postGroups.map((group, groupIndex) => {
                return (
                <div key = {groupIndex} id = {'blog-post-group-' + _.camelCase(group.title)} className = {'flex flex-col'}>
                    <Text style = 'blogGroupTitle' classNames = 'select-none'>{group.title}</Text>
                    {group.posts.map((post, postIndex) => {
                        return (
                            <React.Fragment key = {postIndex}>
                                <div id = {'blog-post-list-item-' + post.id} className = {'relative w-full h-min flex flex-col py-2 px-4 rounded-lg' + (currentPost && currentPost.id === post.id ? ' bg-yellow bg-opacity-60 dark:bg-primary-100 dark:bg-opacity-20' : ' hover:bg-primary-800 hover:bg-opacity-20 dark:hover:bg-primary-100 dark:hover:bg-opacity-20') +  ' cursor-pointer'} onClick = {() => changePost(post)}>
                                    <Text style = 'blogListItemTitle' classNames = {'select-none ml-2 md:ml-0' + (currentPost && currentPost.id === post.id ? ' text-primary-50' : '')}>{post.title}</Text>
                                    <div className = 'flex flex-row w-full h-min items-center gap-2'>
                                        <Text style = 'blogListItemDate' classNames = {'select-none ml-2 md:ml-0' + (currentPost && currentPost.id === post.id ? ' text-primary-50' : '')}>{post.date.toLocaleDateString()}</Text>
                                        <Text style = 'blogListItemSubtitle' classNames = {'select-none ml-2 md:ml-0' + (currentPost && currentPost.id === post.id ? ' text-primary-50' : '')}>{post.title}</Text>
                                    </div>
                                    {!isLandscape && (groupIndex !== (postGroups.length - 1)) ? <div className = 'divider absolute bottom-0 h-[1.5px] w-[90%] bg-primary-500 dark:bg-primary-500 bg-opacity-20 dark:bg-opacity-20 ml-2'/> : null}
                                </div>
                                {postIndex !== (group.posts.length - 1) ? <div className = 'divider h-[1.5px] w-[90%] bg-primary-500 dark:bg-primary-500 bg-opacity-20 dark:bg-opacity-20 ml-2'/> : null}
                            </React.Fragment>
                        )
                    })}
                </div>
                )
            })}
        </div>
    )
}

function Post({isLandscape, currentPost, changePost}) {
    return (
        <div id = 'blog-post' className = 'w-full h-full bg-primary-100 md:bg-primary-50 md:dark:bg-primary-800 dark:bg-primary-800 flex flex-col pt-24 md:pt-6 p-2 md:p-6 gap-6'>

        </div>
    )
}