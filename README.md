# Angular Standalone Library With HOT RELOAD

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [1. Library creation](#library-creation)
  - [2. Application creation](#application-creation)
  - [3. Verification](#verification)
  - [4. Cleaning up](#cleaning-up)

## Introduction
The Angular Standalone Library is designed to be a reusable and modular library built with Angular Hot Reload. This library can be used across multiple Angular applications, allowing for better code reuse and maintainability.

## Features
- **Modularity:** Easily integrate the library into any Angular project.
- **Reusability:** Use the components and services provided by the library in multiple projects.
- **Ease of Development:** Streamlined development workflow with Angular CLI.
- **Hot Reload:** Experience real-time updates during development with hot reload support, working seamlessly from both the library and the application end.
- **Testing:** Comprehensive testing setup to ensure code quality.

## Getting Started

### 1. Library creation
Let’s follow the steps described there and create our library:

```bash
ng new shared-lib --no-create-application
```
```bash
cd shared-lib/
```
```bash
ng generate library buttons
```

library created!

- `shared-lib` is a common workspace for your libraries
- `buttons` is an example library which you can reuse in other projects

#### Renaming the library
Adding a common prefix to your libraries, such as `@lib/buttons`, helps in organizing and identifying your libraries uniquely. 

- Go to `shared-lib\projects\buttons\package.json`.
- Locate the `"name"` key in the file.
- Change the value from `"buttons"` to `"@lib/buttons"`.
- Save the updated `package.json` file.

#### Build and Link
- `ng build buttons --watch --configuration development`
- go to `shared-lib\dist\buttons` and run `npm link`

### 2. Application creation
We already have our library created, so now it’s time for the client application.
```bash
ng new demo-app
```

- add `"@lib/buttons": "0.0.1"` as a dependency in the application’s `package.json` (last dependency, after zone.js)
- add `"preserveSymlinks": true` to angular.json in the `options` object under `projects/demo-app/architect/build`. This allows the linking of your library to continue working when the app is served.
- disable caching options of cli in `angular.json` file

    ```
    "cli": {
      "cache": {
        "enabled": false
      }
    },
    "projects": {...}
    ```

- to link the library, run `npm link @lib/buttons`
- add `ButtonsComponent` in import
- add template `<lib-buttons [btnTxt]="btnTxt1"></lib-buttons>`
- set button text `btnTxt1 = 'demo-app';`
- run `ng serve`
- open `http://localhost:4200` in browser

### 3. Verification
To verify which version of the library you are using, you can ran the bellow command:
```
npm list -g
```

### 4. Cleaning up
After you’ll finish working on your changes locally, you can stop using linked library in the client application in a following way:

- From Application -

    ```
    npm unlink @lib/buttons --no-save
    ```

- From Library -

    - go to `shared-lib\dist\buttons`
    
        ```
        npm rm -g @lib/buttons
        ```