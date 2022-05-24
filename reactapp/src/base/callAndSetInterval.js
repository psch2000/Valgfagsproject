

// Calss the task and then makes a interval that calls the task between intervals.
export const callAndSetInterval = (task, interval) => {
    task();
    return setInterval(task, interval);
} 