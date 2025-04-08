function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

const search = (query) => {
    console.log('Searching for', query)
}

const searchWithDebounce = debounce(search, 1000)


searchWithDebounce('H')
searchWithDebounce('Ha')
searchWithDebounce('Har')
searchWithDebounce('Hard')
searchWithDebounce('Hard ')
searchWithDebounce('Hard JS')