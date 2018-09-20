const ALT = require('alt-core-js');
const FS = require('fs');

//const RESOURCES = '/alt-runner-app/src';
const RESOURCES = process.env.ALT_SRC;
console.log(process.argv[2]);

const findFileNameForId = (scenarioId) => {
    return FS.readdirSync(RESOURCES + '/scenarios').find(scenario => scenario.startsWith(scenarioId + "-"));
}

let scenarioPath = process.argv[2].toString().endsWith('yaml') ? 
                    `${RESOURCES}/scenarios/${process.argv[2]}` 
                    :
                    `${RESOURCES}/scenarios/${findFileNameForId(process.argv[2])}`;

ALT.runScenario(scenarioPath, RESOURCES + '/actions', RESOURCES + '/environment/config.yaml');