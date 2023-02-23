import { useEffect } from 'react'

/* /components/button.js */
export default function Button({ text, style, isListener, classNames, onClick, ...extras }) {
    /* useEffect
     * @param []
     *
     * Sets a DOM keydown listener. Runs on page load.
     * - If the button is a listener, adds a DOM listener for keydowns.
     */
    useEffect(() => {
        if (isListener) {
            const listener = (e) => {
                if (e.code === 'Enter' || e.code === 'NumpadEnter') { // if key pressed is enter
                    e.preventDefault() // stop enter button from executing
                    onClick() // runs the onClick function
                }
            }
            document.addEventListener('keydown', listener) // adds the DOM keydown listener
            return () => {
                document.removeEventListener('keydown', listener) // removes the listener
            }
        }
    }, [onClick])


    let options = [
        {
            title: 'settingsMain',
            classNames: 'transition ease-in-out bg-accent-500 hover:bg-accent-400 dark:hover:bg-accent-400 p-2 rounded',
            textClassNames: 'contents whitespace-nowrap font-main text-2xl text-primary-50 dark:text-primary-50 font-bold'
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
        <div className = {getOption()?.classNames + (classNames ? ' ' + classNames : '') + ' cursor-pointer'} onClick = {onClick} {...extras}>
            <p className = {getOption()?.textClassNames}>{text}</p>
        </div>
    )
}