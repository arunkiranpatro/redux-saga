function debounce(func, delay) {
    let inDebounce;
    return function innerDebounce() {
        const context = this;
        const args = arguments;
        clearTimeout(inDebounce);
        inDebounce = setTimeout(function runFunc() {
            func.apply(context, args);
        }, delay);
    };
}

export default debounce;
