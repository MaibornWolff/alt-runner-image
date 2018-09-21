const ALT = require('alt-core-js');
const FS = require('fs');

const RESOURCES = process.env.ALT_SRC;

const findFileNameForId = (scenarioId) => {
    return FS.readdirSync(RESOURCES + '/scenarios').find(scenario => scenario.startsWith(scenarioId + "-"));
}

let scenarioPath = process.argv[2].toString().endsWith('yaml') ? 
                    `${RESOURCES}/scenarios/${process.argv[2]}` 
                    :
                    `${RESOURCES}/scenarios/${findFileNameForId(process.argv[2])}`;

ALT.runScenario(
    scenarioPath, 
    RESOURCES + '/actions', 
    process.env.OUT_SRC, 
    RESOURCES + '/environment/config.yaml'
);