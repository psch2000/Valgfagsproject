export const callAndSetInterval = (task, interval) => {
    task();
    return setInterval(task, interval);
} 