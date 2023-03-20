/* /components/text.js */
export default function Text({ style, styles, classNames, children, ...extras }) {
    let options = [
        { 
            title: 'main', 
            classNames: 'whitespace-nowrap font-main text-xl text-primary-900 dark:text-primary-50'
        },
        { 
            title: 'appTitle', 
            classNames: 'whitespace-nowrap font-light text-lg md:text-base text-primary-50'
        },
        { 
            title: 'headerText', 
            classNames: 'whitespace-nowrap font-regular text-base text-primary-50 md:text-shadow-sm md:shadow-[#00000066]'
        },
        { 
            title: 'contactTitle', 
            classNames: 'font-bold text-3xl text-primary-900 dark:text-primary-50'
        },
        { 
            title: 'contactGroupTitle', 
            classNames: 'font-bold text-xl md:text-xs text-primary-500 dark:text-primary-500 text-opacity-50 dark:text-opacity-50'
        },
        { 
            title: 'contactListItem', 
            classNames: 'font-bold md:font-main text-2xl md:text-sm text-primary-900 dark:text-primary-100'
        },
        { 
            title: 'contactInfoTitle', 
            classNames: 'font-main text-base md:text-sm text-primary-500 dark:text-primary-500'
        },
        { 
            title: 'contactInfoData', 
            classNames: 'break-words font-main text-base md:text-sm text-primary-800-500 md:text-primary-800 md:dark:text-primary-100 dark:text-primary-100'
        },
        { 
            title: 'blogListItemTitle', 
            classNames: 'text-ellipsis font-bold text-base md:text-sm text-accent-500 md:text-primary-800 md:dark:text-primary-100 dark:text-primary-100'
        },
        { 
            title: 'blogListItemSubtitle', 
            classNames: 'text-ellipsis font-main text-base md:text-xs text-accent-500 text-opacity-60 md:text-primary-800 md:text-opacity-60 md:dark:text-primary-100 dark:text-primary-100'
        },
        { 
            title: 'blogListItemDate', 
            classNames: 'text-ellipsis font-main text-base md:text-xs text-accent-500 md:text-primary-800 md:dark:text-primary-100 dark:text-primary-100'
        },
        { 
            title: 'blogGroupTitle', 
            classNames: 'whitespace-nowrap font-bold text-lg md:text-xs text-primary-500 dark:text-primary-500 text-opacity-50 dark:text-opacity-50'
        }
    ]

    /* getOption
     * 
     * Gets the option given by the style parameter.
     * - Searches through optioins and returns the option whose title matches the 
     *   style parameter.
     */
    const getOption = () => {
        return options.find((option) => { // searches through options
            return option.title === style // returns option whose title matches the style parameter
        })
    }

    return (
        <p className = {getOption()?.classNames + (classNames ? ' ' + classNames : '')} style = {styles} {...extras}>{children}</p>
    )
}