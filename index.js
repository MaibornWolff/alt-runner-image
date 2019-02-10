const ALT = require('@maibornwolff/alt-core-js');
const FS = require('fs');

const RESOURCES = process.env.ALT_SRC;

const findFileNameForId = scenarioId => {
  return FS.readdirSync(RESOURCES + '/scenarios').find(scenario =>
    scenario.startsWith(scenarioId + '-')
  );
};

const getScenarioPath = scenario =>
  scenario.toString().endsWith('yaml')
    ? `${RESOURCES}/scenarios/${scenario}`
    : `${RESOURCES}/scenarios/${findFileNameForId(scenario)}`;

process.argv
  .slice(2)
  .map(getScenarioPath)
  .forEach(scenarioPath =>
    ALT.runScenario(
      scenarioPath,
      RESOURCES + '/actions',
      process.env.OUT_SRC,
      RESOURCES + '/environment/config.yaml'
    )
  );
