[← go back](../README.md)
---
# Tasks

## Checklist
- [x] setup environment
  - [x] development
  - [x] testing
  - [x] production

- [ ] create files
  - [x] .github/workflows
  - [x] .gitignore
  - [x] README.md
    - [x] apply status
    - [x] have links: github / npm / cdn
    - [x] apply badges: npm v / github r
  - [x] LICENSE.md
    - [x] apply MIT

- [ ] setup GitHub Actions
  - [ ] CI/CD: test & build
  - [x] set auth tokens

- [ ] automate per update
  - [x] NPM Packages
  - [x] GitHub Packages
  - [ ] GitHub Releases (tags/zip)

- [ ] technologies to use
  - [x] node
  - [x] npm
  <!-- - [ ] babel -->
  - [ ] typescript
    - [ ] convert to index.min.js
  - [x] jest/jasmine
    - [x] implement unit testing
  - [x] yaml
    - [ ] runs on github actions

## Specifics (GitHub Actions)
- git push
  - check if `package.json` version updated
    - `true`: update new release/tag w/ exact version
    - `false`: skip GitHub Actions
- on: release
  - check if there is a new `release`
    - `true`: update & publish npm & gpr
    - `false`: skip GitHub Actions