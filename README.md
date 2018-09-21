# alt-runner-image

Docker-based execution environment for [ALT](https://www.npmjs.com/package/alt-core-js) scenario tests. Enables execution of the scenarios without
having to provide own `Node` context.

## Example: Docker CLI

```bash
docker run
  -v /src:/src                                # mounting scenarios' & actions' root directory
  -e ALT_SRC=/src                             # declaring the mounted path as resource directory
  -v /output:/out                             # output directory where .log files and diagrams will be saved after the execution
  -e OUT_SRC=/out
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
  - runScenario s1-my-first-scenario.yaml     # execution script available inside the container: 'runScenario'
  when: manual
  ...
```