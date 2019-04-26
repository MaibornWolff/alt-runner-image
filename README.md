# alt-runner-image

[![Npm Version](https://img.shields.io/badge/alt--core--js-1.5.0-green.svg)](https://www.npmjs.com/package/@maibornwolff/alt-core-js)

Docker-based execution environment for [ALT](https://www.npmjs.com/package/@maibornwolff/alt-core-js) scenario tests. Enables execution of the scenarios without
having to provide own `Node` context.

## Example: Docker CLI

```bash
docker run
  -v /src:/src                                # mounting scenarios' & actions' root directory
  -e ALT_SRC=/src                             # declaring the mounted path as resource directory
  -v /output:/out                             # output directory where .log files and diagrams will be saved after the execution
  -e OUT_SRC=/out
  -e ALT_ENV=dev                              # which env file from /src/environment should be used
  -e ALT_PARALLEL_PROCESSES=10                # number of scenarios which should run in parallel (only for LOAD runs)
  maibornwolff/alt-runner-image:latest
  runScenario s1-my-first-scenario.yaml       # run command with scenario-name as input param
```

## Example: .gitlab-ci.yml

```yaml
run-my-scenario:
  stage: test
  image: maibornwolff/alt-runner-image:latest
  script:
  - export ALT_SRC=$(pwd)/src                 # directory path containing ./scenarios & ./actions directories
  - export OUT_SRC=$(pwd)/out                 # output directory for logs & sequence diagrams
  - export ALT_ENV=dev                        # which env file from /src/environment should be used
  - export ALT_PARALLEL_PROCESSES=10          # # number of scenarios which should run in parallel (only for LOAD runs)
  - runScenario s1-my-first-scenario.yaml     # execution script available inside the container: 'runScenario'
  when: manual
  ...
```
