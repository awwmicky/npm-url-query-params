[← go back](../README.md)
---
# Examples

## Goal: GH Actions
- update for every project version
- automate updates
  - publish to NPM
  - publish to GH Packages
  - update to GH release/tag

---

### OPTION - 1

```yml
name: Node.js Package

on:
  release:
    types: [created]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1
        with:
          node-version: 12
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      - run: npm test

  publish-npm:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1
        with:
          node-version: 12
          registry-url: https://registry.npmjs.org/
      - run: npm ci
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{secrets.PUBLISH_NPM_TOKEN}}

  publish-gpr:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - uses: actions/setup-node@v1
        with:
          node-version: 12
          registry-url: https://npm.pkg.github.com/
          scope: '@YOUR_USERNAME'
      - run: npm ci
      - run: echo registry=https://npm.pkg.github.com/YOUR_USERNAME >> .npmrc
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.PUBLISH_GITHUB_TOKEN}}
```

### OPTION - 2

```yml
name: Sveltefire Package

on:
  release:
    types: [created]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12
      - run: npm ci
      - run: npm test

  publish-npm:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12
          registry-url: https://registry.npmjs.org/
      - run: npm ci
      - run: npm build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.npm_token}}

  publish-gpr:
      needs: build
      runs-on: ubuntu-latest
      steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
          with:
          node-version: 12
          registry-url: https://npm.pkg.github.com/
          scope: '@your-github-username'
      - run: npm ci
      - run: npm publish
          env:
          NODE_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

### OPTION - 3

```yml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v1
      with:
        node-version: '10.x'
        registry-url: 'https://registry.npmjs.org'
    - run: npm install
    - run: npm publish --access public
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
    - uses: actions/setup-node@v1
      with:
        registry-url: 'https://npm.pkg.github.com'
        scope: '@octocat'
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

### NPM
```yml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Setup .npmrc file to publish to npm
    - uses: actions/setup-node@v2
      with:
        node-version: '12.x'
        registry-url: 'https://registry.npmjs.org'
        # Defaults to the user or organization that owns the workflow file
        scope: '@octocat'
    - run: yarn
    - run: yarn publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### GITHUB
```yml
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Setup .npmrc file to publish to GitHub Packages
    - uses: actions/setup-node@v2
      with:
        node-version: '12.x'
        registry-url: 'https://npm.pkg.github.com'
        # Defaults to the user or organization that owns the workflow file
        scope: '@octocat'
    - run: npm install
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```