const ALT = require('@maibornwolff/alt-core-js');
const FS = require('fs');

const RESOURCES = process.env.ALT_SRC;
const ENVIRONMENT = process.env.ALT_ENV;
const PARALLEL_PROCESSES = process.env.ALT_PARALLEL_PROCESSES;

const findFileNameForId = scenarioId => {
  return FS.readdirSync(RESOURCES + '/' + ENVIRONMENT + '/scenarios').find(scenario =>
    scenario.startsWith(scenarioId + '-')
  );
};

const getScenarioPath = scenario =>
  scenario.toString().endsWith('yaml')
    ? `${RESOURCES}/${ENVIRONMENT}/scenarios/${scenario}`
    : `${RESOURCES}/${ENVIRONMENT}/scenarios/${findFileNameForId(scenario)}`;


ALT.runMultipleSceanriosWithConfig(
  RESOURCES + '/actions',
  process.env.OUT_SRC,
  RESOURCES + '/environment',
  { numberOfScenariosRunInParallel: PARALLEL_PROCESSES, environmentNameToBeUsed: ENVIRONMENT },
  process.argv.slice(2).map(getScenarioPath).join()
);
