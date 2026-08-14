const os = require('node:os');
function monitor() {
    //Take a snapshot 
    //Take another snapshot after a second



    const oldCpus = os.cpus();

    console.log('old', oldCpus);

    setTimeout(() => {
        const newCpus = os.cpus();

        const usage = newCpus.map((cpu, i) => {
            return {
                core: i,
                usage: calculateCPU(oldCpus[i], newCpus[i]) + '%',



            };
        });

        console.table(usage)
    }, 1000);
}


function calculateCPU(oldCpu, newCpus) {
    const oldTotal = Object.values(oldCpus.times).reduce((a, b) =>
        a + b);
    const newTotal = Object.values(newCpus.times).reduce((a, b) =>
        a + b);

    const idle = newCpus.times.idle - oldCpus.times.idle

    const total = newTotal - oldTotal;
    const used = total - idle;
    return ((100 * used) / total).toFixed(1);
}


setInterval(monitor, 1000);