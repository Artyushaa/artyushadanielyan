function createAnalytics() {
    let counter = 0;
    const listener = () => (counter++);
    let isDestroyed = false
    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener)
            isDestroyed = true
        },
        getClick() {
            if (isDestroyed)
                return `Destroyed. Total clicks = ${counter} !!`
            return counter
        }
    }
}

window.analytics = createAnalytics()