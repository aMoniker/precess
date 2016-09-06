var _   = require('lodash');
var log = require('logger');

module.exports = {
    run: function() {
        if (_.isEmpty(Game.creeps)) {
            this.spawnCreep();
        } else {
            console.log('creeps not empty');
        }
    },
    spawnCreep: function() {
        if (_.isEmpty(Game.spawns)) {
            throw 'no spawns available';
        }

        // just use the first spawn for now
        var spawn;
        for (var prop in Game.spawns) {
            spawn = Game.spawns[prop];
            break;
        }

        spawn.createCreep([WORK, MOVE, CARRY], undefined, {
            role: 'harvester'
        });
    }
};
