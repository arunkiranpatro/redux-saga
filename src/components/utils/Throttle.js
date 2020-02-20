function throttle(func, limit) {
    let inThrottle;
    return function innerThrottle() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(function makeThrottleFalse() {
                inThrottle = false;
            }, limit);
        }
    };
}

export default throttle;
