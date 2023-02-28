let pages = 
    [
        {
            id: 8,
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
        {
            id: 1,
            title: 'Mail',
            headerTitle: 'Mail',
            headerItems: ['File', 'Edit', 'View', 'Mailbox', 'Message', 'Format', 'Window', 'Help'],
            path: '/contact',
            logo: 'logos/mail.png',
            mobileDocked: true,
            visible: {
                desktop: true,
                mobile: true
            }
        },
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
        {
            id: 0,
            title: 'System Settings',
            headerTitle: 'System Settings',
            headerItems: ['File', 'Edit', 'View', 'Window', 'Help'],
            path: '/settings',
            logo: 'logos/settings.png',
            mobileDocked: true,
            visible: {
                desktop: true,
                mobile: true
            }
        },
        {
            id: 3,
            title: 'Files',
            headerTitle: 'Files',
            headerItems: ['File', 'Edit', 'View', 'Window', 'Help'],
            path: '/files',
            logo: 'logos/files.png',
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
            path: 'https://github.com/sunnymakespromises',
            logo: 'logos/github.png',
            mobileDocked: false,
            visible: {
                desktop: true,
                mobile: true
            }
        },
        {
            id: 5,
            title: 'EPLB',
            headerTitle: 'EPLB',
            path: 'https://www.eplb.xyz',
            logo: 'logos/settings.png',
            mobileDocked: false,
            visible: {
                desktop: true,
                mobile: true
            }
        },
        {
            id: 6,
            title: 'F1LTHY',
            headerTitle: 'F1LTHY',
            path: 'https://www.f1lthyware.com',
            logo: 'logos/f1lthy.png',
            mobileDocked: false,
            visible: {
                desktop: true,
                mobile: true
            }
        },
        {
            id: 7,
            title: 'Wallet',
            headerTitle: 'Wallet',
            headerItems: ['File', 'Edit', 'View', 'Window', 'Help'],
            path: '/donate',
            logo: 'logos/wallet.png',
            mobileDocked: false,
            visible: {
                desktop: true,
                mobile: true
            }
        }
    ]

const getPage = (pathname) => {
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
export { getPage }