import chalk from 'chalk';
import os from 'node:os';

function monitor() {
    // Take a snapshot
    const oldCpus = os.cpus();

    // Take another snapshot after a second
    setTimeout(() => {
        const newCpus = os.cpus();

        const usage = newCpus.map((cpu, i) => {
            return {
                core: i,
                usage: calculateCPU(oldCpus[i], newCpus[i]) + '%',
            };
        });

        console.log(chalk.bgMagenta(`========System Stats========`));
        console.table(usage);

        const totalMemGB = os.totalmem() / (1024 * 1024 * 1024);
        const usedMemGB = (os.totalmem() - os.freemem()) / (1024 * 1024 * 1024);

        const memLine = `Memory used: ${usedMemGB.toFixed(2)} GB / ${totalMemGB.toFixed(2)} GB`;

        console.log(usedMemGB > 16 ? chalk.redBright(memLine) : chalk.greenBright(memLine));
    }, 1000);
}

function calculateCPU(oldCpu, newCpu) {
    const oldTotal = Object.values(oldCpu.times).reduce((a, b) => a + b);
    const newTotal = Object.values(newCpu.times).reduce((a, b) => a + b);

    const idle = newCpu.times.idle - oldCpu.times.idle;

    const total = newTotal - oldTotal;
    const used = total - idle;

    return ((100 * used) / total).toFixed(1);
}

setInterval(monitor, 1000);