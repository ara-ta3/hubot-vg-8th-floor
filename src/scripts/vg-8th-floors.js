// Description
//  8F
//
// Commands:
//  hubot パンゲア - display map
//  hubot メガラニカ - display map
//  hubot ムー - display map
//  hubot アトランティス - display map
//  hubot パシフィック - display map
//  hubot ジパング - display map
//  hubot レムリア - display map
//  hubot アフリカ - display map
//  hubot ユーラシア - display map
//  hubot ノースアメリカ - display map
//  hubot サウスアメリカ - display map
//  hubot オーストラリア - display map
//  hubot アンタークティカ - display map
//  hubot アジト - display map

const vg8thFloor = require("node-vg-8th-floors");
const stringMap = {
    "パンゲア": "pangea",
    "メガラニカ": "megallanica",
    "ムー": "mu",
    "アトランティス": "atlantis",
    "パシフィス": "pacifis",
    "ジパング": "zipang",
    "レムリア": "lemuria",
    "アフリカ": "africa",
    "ユーラシア": "eurasia",
    "ノースアメリカ": "northAmerica",
    "サウスアメリカ": "southAmerica",
    "オーストラリア": "australlia",
    "アンタークティカ": "antarctica",
    "アジト": "ajito"
};

module.exports = (robot) => {
    robot.respond(/(.+)$/i, function(msg) {
        const matched = msg.match[1];
        const floorName = stringMap[matched];
        if (typeof floorName === "undefined") {
            return;
        }
        const floor = vg8thFloor(floorName);
        msg.send([
            "```",
            floor,
            "```"
        ].join("\n"));
    });
};
