"use strict";

const core = require('./Singularity/core.js'), base = (require('path').resolve(__dirname)).replace(/\\/g, '/');

core({
    absoluteRoot: base,
    projectRoot: base + '/app',
    command: function(c, config) {
        var node = {};

        c.if('peer', function() {
            console.log(c.get('peer'));
            try {
                node.peer = JSON.parse(c.get('peer')) || [];
            } catch(e) {
                node.peer = [];
            }
        });

        config.node = node;
    }
});
