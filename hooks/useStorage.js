// https://dev.to/devlargs/nextjs-hook-for-accessing-local-or-session-storage-variables-3n0

const useStorage = () => {
    const isBrowser = (() => typeof window !== 'undefined')()
    const getItem = (key, type) => {
        const storageType = `${type ?? 'session'}Storage`
        const value = window[storageType][key]
        return isBrowser ? value !== undefined ? JSON.parse(value) : '' : ''
    }
    const setItem = (key, value, type) => {
        const storageType = `${type ?? 'session'}Storage`
        if (isBrowser) {
            window[storageType].setItem(key, value)
            return true
        }
    }
    const removeItem = (key, type) => {
        const storageType = `${type ?? 'session'}Storage`
        window[storageType].removeItem(key)
    }
    return { getItem, setItem, removeItem }
}

export { useStorage }