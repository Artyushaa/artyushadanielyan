const utils = () => {
    const fullDate = new Date();
    const date = fullDate.getDate() + "." + fullDate.getMonth() + 1 + '.' + fullDate.getFullYear();
    return date
}

export default utils