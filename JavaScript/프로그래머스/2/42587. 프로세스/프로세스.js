function solution(priorities, location) {
    const queue = priorities.map((priority, index) => ({ index, priority }));
    let order = 0;

    while (queue.length) {
        const process = queue.shift();
        const hasHigherPriority = queue.some(({ priority }) => priority > process.priority);

        if (hasHigherPriority) {
            queue.push(process);
        } else {
            order++;
            if (process.index === location) return order;
        }
    }
}