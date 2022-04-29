export const ThreadStart = (task, interval) => {
    task();
    return setInterval(task, interval);
} 