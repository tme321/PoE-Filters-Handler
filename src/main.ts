import { Sockets } from './filterEntrySpec/sockets/sockets';
import { writeEntry } from "./writer";
import { FilterEntry } from "./filterEntrySpec";

import { readFilter } from "./reader";

/*
export const quickEntrySpec: FilterEntry = {
    state: "Show",
    AreaLevel: [{ operator: "<=", value: 12 },{ operator: ">", value: 2 }],
    Quality: [{ operator: "=", value: 20 }],
    Rarity:  [{ operator: "=", value: "Rare" }],
    Class: ["Two Hand Axes"],
    BaseType: ["Stone Axe"],
    LinkedSockets: [{ operator: "=", value: 2 }],
    SocketGroup: [{ operator: "=", value: "RGB" as Sockets }],
    SetBorderColor: { r: 255, g: 0, b: 0, a: 255 },
    SetTextColor: { r: 255, g: 0, b: 0, a: 255 },
    SetBackgroundColor: { r: 255, g: 0, b: 0, a: 255 },
    SetFontSize: 37,
    PlayAlertSound: { id: 0, volume: 100 },
    PlayAlertSoundPositional: { id: 0, volume: 100 },
    MinimapIcon: {
        size: 0, 
        color: "Red",
        shape: "Star"
    },
    PlayEffect: { color: "Red" },
}

const entry = writeEntry(quickEntrySpec);
console.log(entry);

const filter = readFilter(entry);
console.log(`Filter Blocks Returned: ${filter.length}`);

*/

//console.log(`entries: ${JSON.stringify(filter)}`);

const filterFile = process.argv[2];

const fs = require("fs");

const buffer = fs.readFileSync(filterFile);

const fileContent = buffer.toString();

const filter = readFilter(fileContent);
console.log(`Filter Blocks Returned: ${filter.length}`);
console.log(`Fiter:\n${JSON.stringify(filter)}`);
