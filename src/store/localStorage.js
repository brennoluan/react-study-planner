export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('study-planner-state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (error) {
        console.warn('Error loading state from localStorage:', error)
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('study-planner-state', serializedState)
    } catch (error) {
        console.warn('Error saving state to localStorage:', error)
    }
}

export const throttle = (func, delay) => {
    let timeoutId;
    let lastExecTime = 0;

    return (...args) => {
        const currentTime = Date.now()

        if (currentTime - lastExecTime > delay) {
            func.apply(this, args)
            lastExecTime = currentTime;
        } else {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                func.apply(this, args)
                lastExecTime = Date.now()
            }, delay - (currentTime - lastExecTime))
        }
    }
}