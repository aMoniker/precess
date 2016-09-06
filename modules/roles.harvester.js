module.exports = {
    run: function(creep) {
        if (creep.carry.energy < creep.carryCapacity) {
            console.log('creep gathering energy', creep);
            this.gatherEnergy(creep);
        } else {
            console.log('creep depositing energy', creep);
            this.depositEnergy(creep);
        }
    },
    gatherEnergy: function(creep) {
        // find the closest energy source, move to it and harvest
        var source = creep.pos.findClosestByRange(FIND_SOURCES);
        var harvest_result = creep.harvest(source);
        if (harvest_result === ERR_NOT_IN_RANGE) {
            creep.moveTo(source);
        }
    },
    depositEnergy: function(creep) {
        // find a valid structure to deposit energy to
        var targets = creep.room.find(FIND_STRUCTURES, {
            filter: (structure) => {
                if (structure.energy >= structure.energyCapacity) {
                    return false;
                }

                var valid_structures = [
                    STRUCTURE_EXTENSION, STRUCTURE_SPAWN, STRUCTURE_TOWER
                ];

                return _.includes(valid_structures, structure.structureType)
            }
        });

        // move to the structure and deposit the energy
        if (targets.length) {
            var transfer_result = creep.transfer(targets[0], RESOURCE_ENERGY);
            if (transfer_result === ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        } else {
            console.log('creep has nowhere to deposit energy!', creep);
        }
    }
};
