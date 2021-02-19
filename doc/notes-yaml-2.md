[← go back](../README.md)
---
# YAML Notes (Bonus)

## Snippet Options

```yml
- run: npm ci
  working-directory: "./path/directory"
```
- set the customdirectory to use

```yml
jobs:
  custom_name:
  custom-name:
```
- name the job to run on

## creating dependent jobs

```yml
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - run: ./setup_server.sh
  build:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - run: ./build_server.sh
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: ./test_server.sh
```
- By default, the jobs in your workflow all run in parallel at the same time
  - able to create custom sub jobs: `setup` / `build` / `test` / `publish-npm`
- `need`: creates the dependency
  - jobs will run in series
    - if one job fails, all dependent jobs are skipped
  - if you need the jobs to continue 
    - set `if` conditional statement

## Using a Build Matrix (e.g. node)

```yml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [6, 8, 10]
    steps:
      - uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node }}
```
- workflow to run tests across multiple combinations
  - e.g. OS / platforms / languages
- `strategy`: receives the build options as an array
  - e.g. run the job multiple times, using different versions of Node.js

---

```yml
on: [push]

on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
```

## GitHub Actions
- an open source market for CI/CD tools
- Actions: reusable chunks of code for your own workflows
- Apps: already pre-builts solutions, fully-managed integrations
  - no need to deploy custom code, none required


- Node Continuous Integration
- release event
- not every code change of the master branch requires a new release
  - e.g. fixing a typo on the README
- The workflow publishes the package to the npm registry if CI tests pass.
- setup-node action creates an .npmrc file on the runner


- checkout: brings source code into current working directory
  - able to run commands
- setup-node: able to run node commands


- jobs will run concurrently & parallel (default)
  - but can override it based on condition, `need`
- able to tell GitHub Actions to start this job after this specific job is finished
  - build once, then push out to 2 different registries
    - to build the code, before releasing it to npm & gpr
    - useful if it's a library container