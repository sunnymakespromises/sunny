/* /components/title.js */
export default function Title({ text, style, classNames, ...extras }) {
    let options = [
        { 
            title: 'settingsMain', 
            classNames: 'contents whitespace-nowrap font-main text-3xl font-bold text-primary-900 dark:text-primary-50'
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
        <p className = {getOption()?.classNames + (classNames ? ' ' + classNames : '')} {...extras}>{text}</p>
    )
}