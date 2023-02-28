/* /components/text.js */
export default function Text({ style, styles, classNames, children, ...extras }) {
    let options = [
        { 
            title: 'main', 
            classNames: 'contents whitespace-nowrap font-main text-xl text-primary-900 dark:text-primary-50'
        },
        { 
            title: 'appTitle', 
            classNames: 'whitespace-nowrap font-light text-lg md:text-base text-primary-50'
        },
        { 
            title: 'headerText', 
            classNames: 'whitespace-nowrap font-regular text-base text-primary-50 text-shadow-sm shadow-[#00000066]'
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