var log = require('logger');

var modules = {
    control: {
        spawner: require('control.spawner')
    },
    roles: {
        harvester: require('roles.harvester')
    }
};

module.exports.loop = function () {
    // check if there are enough creeps, if not spawn them
    modules.control.spawner.run();

    // loop through creeps and make sure each has an action to perform
    _.each(Game.creeps, function(creep) {
        switch (creep.memory.role) {
            case 'harvester':
                modules.roles.harvester.run(creep);
                break;
            case 'builder':
                modules.roles.builder.run(creep);
                break;
            default:
                modules.roles.harvester.run(creep);
        }
    });
};
