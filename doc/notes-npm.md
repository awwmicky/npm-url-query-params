[← go back](../README.md)
---
# Notes

## NPM Dev Process
- connecting all 3 links
  - first the setup, then the usage 
  - (package) --> [ node_modules ] <-- (application)
1. seperate the code
   - my-package = building the npm
     - use `module.export = ___`
   - my-test = testing the npm
2. setup in my-package
   - `cd my-package` > `npm link`
     - creates a symbolic link in the global node_modules folder
     - a redirect to the targeted directory
   - linking custom node_modules
     - ~\npm\node_modules\my-package ->
     - ~\url-query-params\my-package
3. setup in my-test
   - `cd my-app` > `npm link my-package`
     - what to directory to link to: `___`
     - will behave like the npm is already in the system
   - linking custom node_modules
     - ~\url-query-params\my-app\node_modules\my-package -> 
     - ~\npm\node_modules\my-package ->
     - ~\url-query-params\my-package
4. run `node index.js`

---
## unlink packages
- `cd my-app` > `npm unlink my-package` > `npm uninstall`
- `cd my-packages` > `npm unlink`

---

## NPM Publish Registry
- quick about
  - JS utilities/libraries of snippets
  - set as a dependency for any project
1. test run my-package
   - `npm publish --dry-run`
2. include only main `index.js` file
   - in package.json add `"files": [ "index.js" ]`
   - it lowers the bundle size of the package
3. set the incremented version
   - update version: `npm version [major/minor/patch]`
   - apply semantic versioning
     - `1.0.0`
     - `1.` == MAJOR
       - breaking changes to code base
     - `.0.` == MINOR
       - apply additional/bonus features
     - `.0` == PATCH
       - security/bug fixes
4. now publish npm
   - `npm publish --access public`
   - scoped vs unscoped
     - unscoped: public by default
     - scoped: private only for user
5. update npm in project
   - `"dependencies": { "@awwmicky/___":"^1.0.0" }`
    - `^` helps check to update versions automatically
    - `npm update` will update all accordingly

---

# CI/CD Automation
- continuous integration/deployment
  - GitHub Actions allows to automate specific set of steps after an update happens
    - CI: run some tests / perform some branching
    - CD: deploy to 'web server' / 'package registry' / 'to a given destination'
- workflow purpose
  - CI: merge new code into code base
  - CD: push code out to app/customers

---

## Sources
- pt1 🔗: [developing npm packages locally](https://www.youtube.com/watch?v=VuysNccCnEQ)
- pt2 📦: [publishing npm packages](https://www.youtube.com/watch?v=S_wvHDOrac0)
- pt3 🤖: [automating npm publish with github actions](https://www.youtube.com/watch?v=exhlcvCs6yw)
- GitHub Repo: [bradgarropy](https://github.com/bradgarropy/npm-publish)