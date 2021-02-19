[← go back](../README.md)
---
# YAML Notes

## Insight
- It’s important to know what you want to do, before starting configuring 
- For now, make it something quite simple, but very useful.

## Mission

### The Solution
This is my starting point and what I want to achieve:

- I have an open source package which is published to NPM
- When I publish a new release on Github 
  - I want to update / re-publish this package to NPM
  - automate my updates to go live

### The Problem
- To do this manually we need to login and publish/re-publish through NPM CLI
- it’s not a massive amount of work to do those two steps each time 
  - I want to push out an update to the package w/ ease
  - to automate a fixed process

## Create the Workflow
- The execution chains or jobs which will run
- configuring the workflow, the names & steps

---

# The Breakdown

EXAMPLE: 

publish to npm

run when there's a new update 🚀

release type (name) == "published"

## Initial
```yml
name: NPM Publish # <- encompass name of workflow

on: # <- listener, when workflow shall run
 release:
   types: [published]

jobs: # <- CI, tasks we want to execute
  build:
    runs-on: ubuntu-latest
```
- for publishing
  - this is important and required 
  - releases could also be updated or deleted 
  - this makes sure that we run on release publish only
- define OS to build the project
  - it uses a VM (virtual machine) to run the project
    - creating a new computer on a server
    - it is similar to running it locally
      1. clone our project
      2. install all packages / dependencies
      3. do the publishing/deploy steps
    - this is the development environment
      - but more specifc in steps
      - say what tools it needs to run the steps
      - setting the steps in a configuration file
- further we need to define the steps within our job

```yml
# jobs: build: runs-on: ubuntu-latest

steps:
  - name: 📚 checkout
    uses: actions/checkout@v2
  - name: 🟢 node
    uses: actions/setup-node@v2
    with:
      node-version: 12
      registry-url: https://registry.npmjs.org/
  — run: npm install
  — run: npm publish — access public
    env:
      NODE_AUTH_TOKEN: ${{secrets.NPM_AUTH_TOKEN}}
```
- in the VM process, it is creating a .npmrc file
  - applying the credentials to publish 
1. clone the repo
   - `uses: actions/checkout@v2`
2. install node & specify package registry
   - known working version & registry link
   - `uses: actions/setup-node@v2`
3. install dependencies
   - `run: npm install`
4. publish to NPM
   - pass a auth-token to our node environment
   - `run: npm publish --access public`

---

## Configure Auth Token
- generate tokens
  - NPM - `${{secrets.NPM_AUTH_TOKEN}}`
    - https://www.npmjs.com/settings/[user_name]/tokens
  - GitHub - `${{secrets.GH_AUTH_TOKEN}}`
    - https://github.com/settings/tokens
    - accept - write:packages / read:packages / delete:packages
- adding token to current repository
  - into the repository secrets, in settings
  - it keeps it secure & private
- go to:
  - repo > 
  - settings (tab) > 
  - secrets (sidebar) >
  - "new secret" btn (top right) >
  - add "name" (in CAPS) & "value" (paste TOKEN)