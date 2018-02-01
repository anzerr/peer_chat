"use strict";

const { spawn } = require('child_process');

const create = (port, peer, delay) => {
    setTimeout(function() {
        const param = (peer) ? ['main.js', '--port', port, '--peer', JSON.stringify(peer)] : ['main.js', '--port', port];
        console.log(param);
        const ls = spawn('node', param);
        ls.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        ls.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`);
        });

        ls.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    }, delay)
}

var start = 500, last = null, x = 0;
for (var i = 0; i < 50; i += 10) {
    create(start + i, (last)? [last, '127.0.0.1:' + (start + 2)] : null, x * 500);
    last = '127.0.0.1:' + (start + i + 2);
    x += 1;
}
