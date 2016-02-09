//css styles
var stylesheet = document.styleSheets;
stylesheet[0].insertRule('.overResLimit { border: 1px solid red}', stylesheet[0].length);
stylesheet[0].insertRule('.resLimitReached { color: maroon } ', stylesheet[0].length);
stylesheet[0].insertRule('.craftline { width: 500px; }', stylesheet[0].length);
stylesheet[0].insertRule('.autokraft { width: 500px; float: left; }', stylesheet[0].length);
stylesheet[0].insertRule('.subpanel { float: left; }', stylesheet[0].length);
//yep, i suck with css
stylesheet[0].insertRule('.craftline .tab-pane.fade { display: none; }', stylesheet[0].length);
stylesheet[0].insertRule('.craftline .tab-pane.fade.active { display: block !important; }', stylesheet[0].length);

var options = {
    interval: 1000,

    auto: {
        build: {
            enabled: false,
            items: {
                lumbermill: {
                    enabled: true,
                    uses: ["wood"]
                },
                mine: {
                    enabled: true,
                    uses: ["wood", "mineral"]
                },
                warehouse: {
                    enabled: true,
                    uses: ["wood", "mineral"]
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
                    uses: ["wood", "mineral", "food"]
                },
                library: {
                    enabled: true,
                    uses: ["wood", "mineral"]
                },
                banner: {
                    enabled: true,
                    uses: ["wood", "copper"]
                },
                foundry: {
                    enabled: false,
                    uses: ["copper", "mineral"]
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
                },
                kiln: {
                    enabled: false,
                    uses: ["mineral", "block"]
                },
                statue: {
                    enabled: false,
                    uses: ["bronze"]
                },
                towncenter: {
                    enabled: false,
                    uses: ["block","structure","coin"]
                },
                workbench: {
                    enabled: false,
                    uses: ["steel"]
                },
                castle: {
                    enabled: false,
                    uses: ["block","gold"]
                },
                relic: {
                    enabled: false,
                    uses: ["token"]
                },
                shipyard: {
                    enabled: false,
                    uses: ["wood","structure"]
                },
                docks: {
                    enabled: false,
                    uses: ["iron","plank"]
                },
                bank: {
                    enabled: false,
                    uses: ["block","steel","coin"]
                },
                crusher: {
                    enabled: false,
                    uses: ["copper","iron","steel"]
                },
                blockyard: {
                    enabled: false,
                    uses: ["bronze","pickaze"]
                },
                bunker: {
                    enabled: false,
                    uses: ["frame","pickaxe"]
                },
                laboratory: {
                    enabled: false,
                    uses: ["frame","glass"]
                },
                scienceoutpost: {
                    enabled: false,
                    uses: ["frame","glass","territory"]
                },
                tradeoutpost: {
                    enabled: false,
                    uses: ["frame","coin","territory"]
                },
                militaryoutpost: {
                    enabled: false,
                    uses: ["frame","sword","armor","territory"]
                },
                quarry: {
                    enabled: false,
                    uses: ["mineral","pickaxe"]
                },
                carpentry: {
                    enabled: false,
                    uses: ["frame","brick"]
                },
                blastfurnace: {
                    enabled: false,
                    uses: ["brick"]
                },
                compressor: {
                    enabled: false,
                    uses: ["brick","glass","frame"]
                },
                share: {
                    enabled: false,
                    uses: ["token"]
                },
                repository: {
                    enabled: false,
                    uses: ["block","glass","bottlecost"]
                },
                trainstation: {
                    enabled: false,
                    uses: ["wood","iron","frame"]
                },
                workshop: {
                    enabled: false,
                    uses: ["brick","plate","engine"]
                },
                powerplant: {
                    enabled: false,
                    uses: ["frame","plate"]
                },
                cementkiln: {
                    enabled: false,
                    uses: ["steel","plate"]
                },
                university: {
                    enabled: false,
                    uses: ["cement","brick","frame"]
                },
                concretemixer: {
                    enabled: false,
                    uses: ["brick","plate"]
                },
                toolfactory: {
                    enabled: false,
                    uses: ["brick","concrete"]
                },
                barracks: {
                    enabled: false,
                    uses: ["concrete"]
                }
            },
            threshold: "60"
        },

        craft: {
            enabled: true,
            items: {
                pickaxe: {
                    enabled: false,
                    cost: {
                        "wood": 20,
                        "copper": 1
                    }
                },
                spear: {
                    enabled: false,
                    cost: {"wood": 50, "copper": 3}
                },
                sword: {
                    enabled: false,
                    cost: {"iron": 10}
                },
                block: {
                    enabled: false,
                    cost: {"wood": 100, "mineral": 200}
                },
                coin: {
                    enabled: false,
                    cost: {"gold": 5}
                },
                bronze: {
                    enabled: true,
                    cost: {"copper": 40, "tin": 10}
                },
                structure: {
                    enabled: false,
                    cost: {"wood": 1000, "iron": 20}
                },
                armor: {
                    enabled: false,
                    cost: {"steel": 30, "bronze": 5}
                },
                supplies: {
                    enabled: false,
                    cost: {"plank": 5, "food": 500, "water": 100}
                },
                chest: {
                    enabled: false,
                    cost: {"plank": 100, "steel": 30, "bronze": 5, "lock": 1}
                },
                glass: {
                    enabled: false,
                    cost: {"tin": 50, "sand": 200, "coal": 50}
                },
                bottle: {
                    enabled: false,
                    cost: {"glass": 5}
                },
                greatsword: {
                    enabled: false,
                    cost: {"steel": 100}
                },
                frame: {
                    enabled: false,
                    cost: {"block": 500, "structure": 100, "steel": 100}
                },
                brick: {
                    enabled: false,
                    cost: {"sand": 500, "clay": 150}
                },
                gunpowder: {
                    enabled: false,
                    cost: {"sand": 300, "coal": 100, "bronze": 10, "chemicals": 5}
                },
                ammo: {
                    enabled: false,
                    cost: {"iron": 50, "gunpowder": 10}
                },
                musket: {
                    enabled: false,
                    cost: {"wood": 500, "iron": 500, "steel": 300}
                },
                plate: {
                    enabled: false,
                    cost: {"copper": 400, "iron": 200, "nickel": 10}
                },
                engine: {
                    enabled: false,
                    cost: {"steel": 400, "plate": 100, "bronze": 200}
                },
                book: {
                    enabled: false,
                    cost: {"knowledge": 2500}
                },
                strategy: {
                    enabled: false,
                    cost: {"plans": 2500}
                },
                patent: {
                    enabled: false,
                    cost: {"coin": 2500}
                }
            },
            threshold: "100"
        },

        science: {
            threshold: "60",
            items: {
                economy: false,
                science: false,
                military: false
            }
        }
    }
};

var getBuildSelector = function (name) {
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

};

var getCraftSelector = function (name) {
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
};

var Manager = function () {};

Manager.prototype = {
    self: this,
    saveSettings: function() {
        localStorage.setItem('autokraft_options', JSON.stringify(options));
    },
    loadSettings: function() {
        var retrievedObject = localStorage.getItem('autokraft_options');
        if (retrievedObject != null) {
            var loadedOptions = JSON.parse(retrievedObject);
            options = this.updateSettings(loadedOptions, options);
        }
    },
    updateSettings: function(currentSettings, newSettings) {
        return $.extend(true, newSettings, currentSettings);
    },
    init: function() {
        this.loadSettings();
        appendAutoTab();
    },
    start: function () {
        this.loop = setInterval(this.doStuff.bind(this), options.interval);
    },
    stop: function () {
        clearInterval(this.loop);
        this.loop = null;
    },
    doStuff: function () {
        if (options.auto.build.enabled) {
            this.build();
        }
        if (options.auto.craft.enabled) {
            this.craft();
        }
        this.doScience();
        this.updateResourceColors();
    },
    updateResourceColors: function() {
        var resourceRows = $('.inventory table tbody tr').contents();
        var blockStart = false;
        for (var i=0; i<resourceRows.length; i++) {
            if ($(resourceRows[i]).hasClass('resource')) {
                blockStart = true;
            }
            if (blockStart && $(resourceRows[i]).hasClass('amount')) {
                var rowContent = $(resourceRows[i]).text();
                if (parseInt (rowContent.split('/')[0]) ==
                    parseInt (rowContent.split('/')[1])) {
                    $(resourceRows[i]).addClass('resLimitReached');
                } else {
                    $(resourceRows[i]).removeClass('resLimitReached');
                }
                blockStart = false;
            }
        }
    },
    build: function () {
        var items = options.auto.build.items;
        for (var item in items) {
            if (items.hasOwnProperty(item) && items[item].enabled == true) {
                if (
                    this.canBuild(item)
                    && this.exceedBuildThreshold(item)
                    && this.buildIsUnlocked(item)
                ) {
                    build(item);
                }
            }
        }
    },
    craft: function () {
        var craftItems = options.auto.craft.items;
        for (var item in craftItems) {
            if (craftItems[item].enabled == true
                && this.canCraft(item)
                && this.craftIsUnlocked(item)
                && this.exceedCraftThreshold(item)
                && this.lessThanMaxValue(item)
            ) {
                crafting(item);
            }
        }
    },
    doScience: function() {
        if (!this.exceedScienceThreshold()) {
            return;
        }
        var science = null;
        for (var item in options.auto.science.items) {
            if (options.auto.science.items[item] == true) {
                if (science == null) {
                    science = { name: item, value: bonus[item] }
                } else {
                    if ( bonus[item] < science.value ) {
                        science = { name: item, value: bonus[item] }
                    }
                }
            }
        }

        if (science != null) {
            develop(science.name)
        }
    },
    getResourceValue: function (name) {
        if (craft.hasOwnProperty(name)) {
            return craft[name];
        }
        if (items.hasOwnProperty(name) >= 0) {
            return items[name];
        }
        return null
    },
    exceedBuildThreshold: function (name) {
        var limitedResources = options.auto.build.items[name].uses;
        var result = true;
        for (var resIdx in limitedResources) {
            var resourceName = limitedResources[resIdx];
            if (this.getResourceValue(resourceName) < maximums[resourceName] * options.auto.build.threshold / 100) {
                result = false;
                break;
            }
        }
        return result;
    },
    exceedCraftThreshold: function (name) {
        var limitedResources = options.auto.craft.items[name].cost;
        var result = true;
        for (var resourceName in limitedResources) {
            var resourceCost = limitedResources[resourceName];
            if (this.getResourceValue(resourceName) < maximums[resourceName] * options.auto.craft.threshold / 100 ||
                this.getResourceValue(resourceName) < resourceCost
            ) {
                result = false;
                break;
            }
        }
        return result;
    },
    exceedScienceThreshold: function() {
        return ( items.knowledge >= maximums.knowledge * options.auto.science.threshold / 100 );
    },
    lessThanMaxValue: function(name) {
        var keyName = 'limit';
        if ( options.auto.craft.items[name].hasOwnProperty(keyName) &&
            options.auto.craft.items[name][keyName] > 0 &&
            craft[name] >= options.auto.craft.items[name][keyName] ) {
            return false;
        }
        return true;
    },
    canCraft: function (name) {
        return $(getCraftSelector(name) + '.unavailable').length == 0;
    },
    craftIsUnlocked: function (name) {
        return ( unlocked.hasOwnProperty('.craft_' + name) && unlocked['.craft_' + name] == 1);
    },
    buildIsUnlocked: function (name) {
        if (name == 'lumbermill' || name == 'mine') {
            return true;
        }
        return ( unlocked.hasOwnProperty('.build_' + name) && unlocked['.build_' + name] == 1);
    },
    canBuild: function (name) {
        if ($(getBuildSelector(name) + '.unavailable').length == 0) {
            return true
        }
        return false;
    }
};

var toggleAk = function() {
    (options.auto.enabled == true) ? kraftManager.stop() : kraftManager.start();
    options.auto.enabled = !options.auto.enabled;
}

var toggleOptionItem = function (item) {
    if (options.auto.build.items.hasOwnProperty(item)) {
        options.auto.build.items[item].enabled = !options.auto.build.items[item].enabled;
        kraftManager.saveSettings();
    }
    if (options.auto.craft.items.hasOwnProperty(item)) {
        options.auto.craft.items[item].enabled = !options.auto.craft.items[item].enabled;
        kraftManager.saveSettings();
    }
    if (options.auto.science.items.hasOwnProperty(item)) {
        options.auto.science.items[item] = !options.auto.science.items[item];
        kraftManager.saveSettings();
    }
};

function switchAll(type, state) {
    var selector = '';
    switch (type) {
        case 'build' :
            selector = 'build';
            break;
        case 'craft':
            selector = 'craft';
            break;
        default:
            return;
    }
    Object.keys(options.auto[selector].items).forEach( function(k) {
        options.auto[selector].items[k].enabled = state;
        $('input[name="'+ k + '"].autokraft_option').prop('checked', state);
    });
    kraftManager.saveSettings();
};

var updateMaxValueCrafting = function(itemName) {
    var defaultValue = options.auto.craft.items[itemName].hasOwnProperty('limit') ?
        options.auto.craft.items[itemName].limit
        : 0;
    var newValue = parseInt(prompt("Enter new limit for [" + itemName + "]. 0 is for no limit", defaultValue));
    if (isNaN(newValue)) {
        return defaultValue;
    }
    if (newValue < 0) { newValue = 0 };
    options.auto.craft.items[itemName].limit = newValue;
    $('span.craft_limit_setter[data-name='+itemName+']')[0].innerHTML = newValue;
    return newValue;
};

var updateThreshold = function (type) {
    var curType = null;
    switch (type) {
        case 'build_thresh':
            curType = 'build';
            break;
        case 'craft_thresh':
            curType = 'craft';
            break;
        case 'science_thresh':
            curType = 'science';
            break;
        default:
            return false;
    }

    var newValue = prompt("Please enter new [" + curType + "] threshold in percents", options.auto[curType].threshold);

    if (newValue != null) {
        if (newValue < 0) {
            newValue = 0;
        } else if (newValue > 100) {
            newValue = 100;
        }
        options.auto[curType].threshold = newValue;
        //update text
        $('#' + curType + '_thresh_value').text(newValue);
    }
    kraftManager.saveSettings();
};

var appendAutoTab = function () {
    if ($('#autokraftpane').length) {
        return;
    }
    var htmlTab = '<li id="autokraftpane"><a data-toggle="tab" href="#autokraft" aria-expanded="false">AutoKraft</li>';
    $('#legacypane').after(htmlTab);

    var buildingsList, craftingList, buildingThreshold, craftingThreshold;
    buildingsList = craftingList = '';

    var akTabs =  '<ul class="nav nav-tabs">'
        + '<li class="active"><a data-toggle="tab" href="#ak_Settings">Settings</a></li>'
        + '<li><a data-toggle="tab" href="#ak_Build">Buildings</a></li>'
        + '<li><a data-toggle="tab"  href="#ak_Craft">Crafting</a></li>'
        + '<li><a data-toggle="tab"  href="#ak_Science">Science</a></li>'
        + '</ul>';

    var akSettingsTab = '<div id="ak_Settings" class="tab-pane fade"></div>';
    var akSettingsButtons = '<div>'
            + '<input name="ak_enable" type="checkbox" '  +
        ( (options.auto.enabled == true) ? ' checked ' : '' )
        + ' class="autokraft_option" onclick="toggleAk();"> Enable'
        + '</div>';


    var akBuildTab = '<div id="ak_Build" class="tab-pane fade"></div>';
    var akBuildButtons = '<div>'
        + '<button class="btn btn-default option_threshold" type="button" id="build_thresh">'
        + 'Threshold <span id="build_thresh_value">' + options.auto.build.threshold + '</span> %'
        + '</button>'
        + '<button class="enable_toggle btn btn-default" type="button" data-state=true data-type="build">Enable all</button>'
        + '<button class="enable_toggle btn btn-default" type="button" data-state=false data-type="build">Disable all</button>'
        + '</div>';

    var akCraftTab = '<div id="ak_Craft" class="tab-pane fade"></div>';
    var akCraftButtons = '<div>'
        + '<button class="btn btn-default option_threshold" type="button" id="craft_thresh">'
        + 'Threshold <span id="craft_thresh_value">' + options.auto.craft.threshold + '</span> %'
        + '</button>'
        + '<button class="enable_toggle btn btn-default" type="button" data-state=true data-type="craft">Enable all</button>'
        + '<button class="enable_toggle btn btn-default" type="button" data-state=false data-type="craft">Disable all</button>'
        + '</div>';

    var akScienceTab = '<div id="ak_Science" class="tab-pane fade"></div>';
    var akScienceButtons = '<div>'
        + '<button class="btn btn-default option_threshold" type="button" id="science_thresh">'
        + 'Threshold <span id="science_thresh_value">' + options.auto.science.threshold + '</span> %'
        + '</button>'
        + '</div>';


    //create build items tab
    var akBuildTable = '<table class="table table-hover"><thead><th>enable</th><th>name</th></thead>';

    for (var item in options.auto.build.items) {
        var checked = '';
        if (options.auto.build.items[item].enabled) {
            checked = 'checked';
        }
        akBuildTable +=
        '<td><input name="' + item + '" type="checkbox" ' + checked + ' class="autokraft_option"></td>'
        + '<td>' + item + '</td>'
        + '</tr>';
    }
    akBuildTable += '</table>';

    //create craft items table
    var akCraftTable = '<table class="table table-hover"><thead><th>enable</th><th>name</th><th>max amount</th></thead>';
    for (var item in options.auto.craft.items) {
        var checked = '';
        if (options.auto.craft.items[item].enabled) {
            checked = 'checked';
        }
        akCraftTable +=
                '<td><input name="' + item + '" type="checkbox" '+checked+' class="autokraft_option"></td>'
                + '<td>' + item + '</td>'
                + '<td><span class="craft_limit_setter" data-name="'+item+'">' + options.auto.craft.items[item].limit + '</span></td>'
                + '</tr>';
    }
    akCraftTable += '</table>';


    var akScienceTable = '<div>';
    for (var item in options.auto.science.items) {
        var checked = '';
        if (options.auto.science.items[item]) {
            checked = 'checked';
        }
        akScienceTable += '<span class="checkbox-inline"><input name="' + item + '" type="checkbox" ' + checked
            + ' class="autokraft_option">&nbsp;' + item + '</span>';

    }
    akScienceTable += '</div>';

    var htmlSettings = '<div id="autokraft" class="autokraft tab-pane fade"><h3>AutoKraft settings</h3>'
            +'<div class="craftline"></div></div>';

    $('#legacy').after(htmlSettings);
    $(akTabs).appendTo( ('#autokraft .craftline') );
    $(akSettingsTab).appendTo( ('#autokraft .craftline') );
    $(akBuildTab).appendTo( ('#autokraft .craftline') );
    $(akCraftTab).appendTo( ('#autokraft .craftline') );
    $(akScienceTab).appendTo( ('#autokraft .craftline') );
    $(akSettingsButtons).appendTo('#ak_Settings');
    $(akBuildButtons).appendTo('#ak_Build');
    $(akBuildTable).appendTo('#ak_Build');
    $(akCraftButtons).appendTo('#ak_Craft');
    $(akCraftTable).appendTo('#ak_Craft');
    $(akScienceButtons).appendTo('#ak_Science');
    $(akScienceTable).appendTo('#ak_Science');

    $('.autokraft_option').on('click', function (e) {
        toggleOptionItem(this.name);
    });
    $('.option_threshold').on('click', function (e) {
        updateThreshold(this.id)
    });
    $('.enable_toggle').on('click', function(e){
        switchAll($(this).data('type'), $(this).data('state'));
    });
    $('.craft_limit_setter').on('click', function(e){
        updateMaxValueCrafting($(this).data('name'));
    })

};

var appendGamblingBtn = function() {
    var html = '<button onclick=\'dobet(100)\')>Bet doubling</button>';
    $('.casinolog').before(html);
};

appendGamblingBtn();

var kraftManager = new Manager();
kraftManager.init();


function dobet(roundsAmount) {
    var minbet, maxbet, currentBet, goldEarned, round, betLog;
    round = 0;
    minbet = 0.5;
    maxbet = $('input.betamount').attr("max");
    goldEarned = 0;
    currentBet = minbet;
    betLog = '';

    for (var rNum = 0; rNum < roundsAmount; rNum++) {
        // place a bet
        if (items['gold'] < currentBet) {
            console.log('Run out of gold to gamble!');
            break;
        }
        $('input.betamount').val(currentBet);
        bet('low');
        // parse casino log
        var casinoLog = $('.casinolog').text();
        var gameResult = casinoLog.match(/Sorry/);
        var betResult = $('.betresult').text();
        if (gameResult != null) {
            betLog += "[LOSE] " + currentBet + " for low, got " + betResult + "\n";
            goldEarned = goldEarned - currentBet;
            currentBet = currentBet * 2;
            if (currentBet > maxbet) {
                console.log('Maxbet exceeded! Earnings: ' + goldEarned + ' gold');
                break;
            }
        } else {
            betLog += "[WON] " + currentBet + " for low, got " + betResult + "\n";
            goldEarned = goldEarned + currentBet;
            currentBet = minbet;
        }
        round = round + 1;
        console.log("round #" + round + ", earning: " + goldEarned);
    }
    console.log("Rounds played:" + round + ", earned:" + goldEarned);
    console.log(betLog);
}
