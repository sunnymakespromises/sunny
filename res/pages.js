let pages = 
    [
        {
            id: 0,
            title: 'Finder',
            headerTitle: 'Finder',
            headerItems: ['File', 'Edit', 'View', 'Go', 'Window', 'Help'],
            path: '/',
            logo: 'logos/finder.png',
            mobileDocked: false,
            visible: {
                desktop: true,
                mobile: false
            }
        },
        // {
        //     id: 1,
        //     title: 'Mail',
        //     headerTitle: 'Mail',
        //     headerItems: ['File', 'Edit', 'View', 'Mailbox', 'Message', 'Format', 'Window', 'Help'],
        //     path: '/contact',
        //     logo: 'logos/mail.png',
        //     mobileDocked: true,
        //     visible: {
        //         desktop: true,
        //         mobile: true
        //     }
        // },
        {
            id: 2,
            title: 'Contacts',
            headerTitle: 'Contacts',
            headerItems: ['File', 'Edit', 'View', 'Card', 'Window', 'Help'],
            path: '/about',
            logo: 'logos/contacts.png',
            mobileDocked: true,
            visible: {
                desktop: true,
                mobile: true
            }
        },
        // {
        //     id: 3,
        //     title: 'Files',
        //     headerTitle: 'Files',
        //     headerItems: ['File', 'Edit', 'View', 'Window', 'Help'],
        //     path: '/files',
        //     logo: 'logos/files.png',
        //     mobileDocked: true,
        //     visible: {
        //         desktop: true,
        //         mobile: true
        //     }
        // },
        // {
        //     id: 9,
        //     title: 'Notes',
        //     headerTitle: 'Notes',
        //     headerItems: ['File', 'Edit', 'View', 'Window', 'Help'],
        //     path: '/blog',
        //     logo: 'logos/notes.png',
        //     mobileDocked: true,
        //     visible: {
        //         desktop: true,
        //         mobile: true
        //     }
        // },
        {
            id: 3,
            title: 'LinkedIn',
            headerTitle: 'LinkedIn',
            path: 'https://www.linkedin.com/in/marquis-livingston-0b510815b/',
            logo: 'logos/linkedin.png',
            mobileDocked: false,
            visible: {
                desktop: true,
                mobile: true
            }
        },
        {
            id: 4,
            title: 'GitHub',
            headerTitle: 'GitHub',
            path: 'https://www.github.com/sunnymakespromises',
            logo: 'logos/github.png',
            mobileDocked: false,
            visible: {
                desktop: true,
                mobile: true
            }
        },
        {
            id: 6,
            title: 'EPLB',
            headerTitle: 'Premier League Belt',
            path: 'https://www.eplb.xyz',
            logo: 'logos/eplb.png',
            mobileDocked: false,
            visible: {
                desktop: true,
                mobile: true
            }
        },
        {
            id: 5,
            title: 'catdogsnake',
            headerTitle: 'catdogsnake',
            path: 'https://www.catdogsnake.xyz',
            logo: 'logos/catdogsnake.png',
            mobileDocked: false,
            visible: {
                desktop: true,
                mobile: true
            }
        },
        {
            id: 7,
            title: 'Betsy',
            headerTitle: 'Betsy',
            path: 'https://www.betsy.digital',
            logo: 'logos/betsy.png',
            mobileDocked: false,
            visible: {
                desktop: true,
                mobile: true
            }
        },
        // {
        //     id: 7,
        //     title: 'Wallet',
        //     headerTitle: 'Wallet',
        //     headerItems: ['File', 'Edit', 'View', 'Window', 'Help'],
        //     path: '/donate',
        //     logo: 'logos/wallet.png',
        //     mobileDocked: false,
        //     visible: {
        //         desktop: true,
        //         mobile: true
        //     }
        // }
    ]
    
const getPageById = (id) => {
    return pages.find((page) => page.id === id)
}

const getCurrentPage = (pathname) => {
    let selectedPage = pages.find(page => page.id === 8)
    for (let page of pages) { // loops through the pages
        if (page.path.includes('*')) { // if the page's path contains a '*'
            let subfolders = page.path.split('/') // splits the page's subfolders via '/'
            let currentPathNameSubfolders = pathname.split('/') // splits the pathname's subfolders via '/'
            if (subfolders.length === currentPathNameSubfolders.length) { // if the two have the same number of subfolders 
                for (let i = 0; i < subfolders.length; i++) { // loops through the page's subfolders
                    if (subfolders[i] === '*') { // if the current subfolder is '*'
                        currentPathNameSubfolders[i] = '*' // sets the corresponding subfolder in the pathname's subfolder to '*'
                    }
                }
                if (_.isEqual(subfolders, currentPathNameSubfolders)) {
                    selectedPage = page // sets selectedPage to the current page
                    break // break, we found the right page so there is no need to keep searching
                }
            }
        }
        else { // if the page's path does not contain a *
            if (page.path === pathname) { // if the page's path equals pathname
                selectedPage = page // sets selectedPage to the current page
                break // break, we found the right page so there is no need to keep searching
            }
        }
    }
    return selectedPage
}

export default pages
export { getCurrentPage, getPageById }