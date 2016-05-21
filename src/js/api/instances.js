define(function() {

    var instances = [];
    var uniqueIndex = 0;

    var playerById = function(id) {
        for (var p = 0; p < instances.length; p++) {
            if (instances[p].id === id) {
                return instances[p];
            }
        }
        return null;
    };

    return {
        selectPlayer: function(query) {
            if (!query) {
                return instances[0];
            } else if (typeof query === 'string') {
                return playerById(query);
            } else if (typeof query === 'number') {
                return instances[query];
            }
            return null;
        },

        addPlayer: function(api) {
            uniqueIndex++;
            api.uniqueId = uniqueIndex;
            instances.push(api);
            return api;
        },

        removePlayer: function(api) {
            for (var i = instances.length; i--;) {
                if (instances[i].uniqueId === api.uniqueId) {
                    instances.splice(i, 1);
                    break;
                }
            }
        }
    };
});
