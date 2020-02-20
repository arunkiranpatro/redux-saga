function debounceImmediate(func, delay) {
    let inDebounce;
    return function innerDebounce() {
        const context = this;
        const args = arguments;
        if (inDebounce) {
            clearTimeout(inDebounce);
            inDebounce = setTimeout(() => func.apply(context, args), delay);
        } else {
            func.apply(context, args);
            inDebounce = setTimeout(function voidDebuounce() {
                inDebounce = void 0;
            }, delay);
        }
    };
}

export default debounceImmediate;
