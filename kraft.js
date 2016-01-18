var options = {
    debug: true,
    interval: 1000,

    auto: {
        build : {
            enabled: true,
            items: {
                lumbermill: {
                    enabled: true,
                    uses: ["wood"]
                },
                mine: {
                    enabled: true,
                    uses: ["wood","mineral"]
                },
                warehouse: {
                    enabled: true,
                    uses: ["wood","mineral"]
                },
                fountain: {
                    enabled: true,
                    uses: ["mineral"]
                },
                pasture: {
                    enabled: false,
                    uses: ["wood"]
                },
                house: {
                    enabled: true,
                    uses: ["wood","mineral","food"]
                },
                library: {
                    enabled: true,
                    uses: ["wood","mineral"]
                },
                banner: {
                    enabled: true,
                    uses: ["wood","copper"]
                },
                foundry: {
                    enabled: false,
                    uses: ["copper","mineral"]
                },
                barn: {
                    enabled: true,
                    uses: []
                },
                casino: {
                    enabled: true,
                    uses: ["gold"]
                },
                market: {
                    enabled: false,
                    uses: ["wood"]
                }
            },
            threshold: 60
        },

        craft: {
            enabled: true,
            items: {
                pickaxe: false,
                spear: false,
                sword: false,
                block: true,
                coin: true
            },
            threshold: 100
        }
    }
}

var getBuildSelector = function(name) {
    var selector = null;
    switch (name) {
        case 'lumbermill':
            selector = '.block.build_lumbermill';
            break;
        case 'mine':
            selector = '.block.build_mine';
            break;
        case 'warehouse':
            selector = '.block.build_warehouse';
            break;
        case 'fountain':
            selector = '.block.build_fountain';
            break;
        case 'pasture':
            selector = '.block.build_pasture';
            break;
        case 'house':
            selector = '.block.build_house';
            break;
        case 'library':
            selector = '.block.build_library';
            break;
        case 'banner':
            selector = '.block.build_banner';
            break;
        case 'foundry':
            selector = '.block.build_foundry';
            break;
        case 'barn':
            selector = '.block.build_barn';
            break;
        case 'casino':
            selector = '.block.build_casino';
            break;
        case 'market':
            selector = '.block.build_market';
            break;
    }
    return selector;

}

var getCraftSelector = function(name) {
    var selector = null;
    switch (name) {
        case 'pickaxe':
            selector = '.block.craft_pickaxe';
            break;
        case 'sword':
            selector = '.block.craft_sword';
            break;
        case 'spear':
            selector = '.block.craft_spear';
            break;
        case 'block':
            selector = '.block.craft_block';
            break;
        case 'coin':
            selector = '.block.craft_coin';
            break;
    }
    return selector;
}

var Manager = function() {};
Manager.prototype = {
    self: this,
    start: function() {
        this.loop = setInterval( this.doStuff.bind(this) , options.interval);
        console.log('Started');
    },
    stop: function() {
        clearInterval(this.loop);
        this.loop = null;
        console.log('Stopped');
    },
    doStuff: function() {
        if (options.auto.build.enabled ) {
            this.build();
        }
        if (options.auto.craft.enabled ) {
            this.craft();
        }
    },
    craft: function() {
        var items = options.auto.craft.items;
        for (var item in items) {
            if ( items.hasOwnProperty(item) && items[item] == true) {
                if (this.canCraft(item)
                    && this.craftIsUnlocked(item)
                ) {
                    crafting(item);
                    console.log('Crafted ' + item);
                }
            }
        }
    },
    exceedBuildThreshold: function(name) {
        var limitedResources = options.auto.craft.items[name]
        var result = true;
        for (var resourceName in limitedResources) {
            if ( items[resourceName] < maximums[resourceName] * options.auto.build.threshold / 100 ) {
                result = false;
                break;
            }
        }
        console.debug('exceed for ' + name, result);
        return result;
    },
    build: function() {
        var items = options.auto.build.items;
        for (var item in items) {
            if ( items.hasOwnProperty(item) && items[item].enabled == true) {
                if (
                    this.canBuild(item)
                    && this.exceedBuildThreshold(item)
                    && this.buildIsUnlocked(item)
                ) {
                    console.log('Building ' + item);
                    build(item);
                }
            }
        }
    },
    canCraft: function(name) {
        if ( $(getCraftSelector(name) + '.unavailable').length == 0 ) {
            return true
        }
        return false;
    },
    craftIsUnlocked: function(name) {
        return ( unlocked.hasOwnProperty('.craft_' + name ) && unlocked['.craft_' + name] == 1);
    },
    buildIsUnlocked: function(name) {
        if (name == 'lumbermill' || name == 'mine' ) {
            return true;
        }
        return ( unlocked.hasOwnProperty('.build_' + name ) && unlocked['.build_' + name] == 1);
    },
    canBuild: function(name) {
        if ( $(getBuildSelector(name) + '.unavailable').length == 0 ) {
            return true
        }
        return false;
    }
}
var x = new Manager();
x.start();

var appendAutoTab = function() {
    var htmlTab = '<li id="autokraftpane"><a data-toggle="tab" href="#autokraft" aria-expanded="false">AutoKraft</li>';
    $('#legacypane').after(htmlTab);

    var buildingsList, craftingList;
    buildingsList = craftingList =  '';

    for (var item in options.auto.build.items ) {
        if (options.auto.build.items[item]) {
            checked = 'checked';
        }
        buildingsList += '<input name="'+ item +'"type="checkbox" ' + checked + ' />'+item+'<br/>';
    }

    for (var item in options.auto.craft.items ) {
        var checked = '';
        if (options.auto.craft.items[item]) {
            checked = 'checked';
        }
        craftingList += '<input name="'+ item +'"type="checkbox" ' + checked + ' />'+item+'<br/>';
    }

    var htmlSettings = '<div id="autokraft" class="autokraft tab-pane fade"><h3>AutoKraft settings</h3><div class="craftline">' +
        '<div id="Build">' +
            buildingsList +
        '</div>' +
        '<div id="Craft"></div>' + craftingList
        '</div></div>';
    $('#legacy').after(htmlSettings);

}

appendAutoTab();
