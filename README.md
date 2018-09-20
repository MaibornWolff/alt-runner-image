# alt-runner-image

Docker-based execution environment for [ALT](https://www.npmjs.com/package/alt-core-js) scenario tests. Enables execution of the scenarios without
having to provide own `Node` context.

## Example

```docker
docker run
  -v /src:/alt-runner-app/src           # root directory containing ./scenarios & ./actions sub directories
  -v /output:/alt-runner-app/out        # output directory where .log files and diagrams will be saved after the execution
  bboron86/alt-runner-image:latest
  npm start s1-my-first-scenario.yaml   # run command with scenario-name as input param
```
