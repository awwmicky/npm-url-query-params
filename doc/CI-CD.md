# CI/CD (yaml) Notes

## GitHub Actions
- an open source market for CI/CD tools
- Actions: reusable chunks of code for your own workflows
- Apps: already pre-builts solutions, fully-managed integrations
  - no need to deploy custom code, none required

```yml
on:
  release:
    types: [created]
    types: [published]
```
- release event
- not every code change of the master branch requires a new release
  - e.g. fixing a typo on the README
- The workflow publishes the package to the npm registry if CI tests pass.
- setup-node action creates an .npmrc file on the runner

```yml
on: [push]

on:
  push:
    branches: [master]
  pull_request:
    branches: [master]

jobs:
  - run: npm ci
  - run: npm test
  - run: npm run build
```
- Node Continuous Integration

```yml
steps:
  uses: actions/checkout@v2
  uses: actions/setup-node@v2
```
- checkout: brings source code into current working directory
  - able to run commands
- setup-node: able to run node commands

```yml
jobs:
  custom_name:
  custom-name:
```
- name the job to run on

```yml
- name: 
  run: 
  working-directory: "./path/directory"
```
- working-directory, using a specific target

```yml
jobs:
  build:

  publish-npm:
    needs: build
  
  publish-gpr:
    needs: build
```
- jobs will run concurrently & parallel (default)
  - but can override it based on condition, `need`
- able to tell GitHub Actions to start this job after this specific job is finished
  - build once, then push out to 2 different registries
    - to build the code, before releasing it to npm & gpr
    - useful if it's a library container

---

## TEMP

```yml
name: "🚀 release"

on:
  release:
    types: [published]

jobs:
  release:
    name: 🚀 release
      runs-on: ubuntu-latest
      steps:
        - name: 📚 checkout
          uses: actions/checkout@v2.3.4
        - name: 🟢 node
          uses: actions/setup-node@v2.1.4
          with:
            node-version: 12
            registry-url: https://registry.npmjs.org
        - name: 🚀 publish
          run: npm publish --access public
          working-directory: "@awwmicky+url-query-params"
          env:
            NODE_AUTH_TOKEN: ${{secrets.NPM_AUTH_TOKEN}}
```