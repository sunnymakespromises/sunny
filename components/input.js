/* /components/input.js */
export default function Input({ value, status, type, style, classNames, onChange, ...extras }) {
    /* NOTE
     * status can be one of three values: true, false, and null
     * true = valid/green
     * false = error/red
     * null = nothing
     */
    let options = [
        { 
            title: 'settingsMain', 
            classNames: 'transition ease-in-out text-primary-900 dark:text-primary-50 text-2xl bg-primary-50 dark:bg-primary-700 hover:bg-primary-50 hover:dark:bg-primary-600 focus:bg-primary-50 focus:dark:bg-primary-600 focus:outline-none p-2 rounded',
            trueStatus: 'bg-emerald-50 border border-emerald-500 text-emerald-900',
            falseStatus: 'bg-rose-50 border border-rose-500 text-rose-900',
            nullStatus: 'border border-transparent'
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
        <input className = {'font-main w-min ' + getOption()?.classNames + (status === false ? ' ' + getOption()?.falseStatus : '') + (status === true ? ' ' + getOption()?.trueStatus : '') + (status === null ? ' ' + getOption()?.nullStatus : '') + (classNames ? ' ' + classNames : '')} value = {value} type = {type} onChange = {onChange} {...extras}></input>
    )
}