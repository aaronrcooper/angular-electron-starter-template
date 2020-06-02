# Angular Electron Starter Template
This template allows you to build an Angular 9 application that can be ran as a desktop application using Electron.

# Electron
Electron is a framework for creating web applications that are able to be run as desktop applications. 

# Electron Folder
Inside this folder, you will see two files. `main.ts`, and `tsconfig.json`. These files will be used when you compile your
Electron application. The `main` file will be compiled to JavaScript, and be used as the entry point for your Angular application when
running the Electron application. `tsconfig` indicates that the `electron` directory is the root of a TypeScript project, and contains information
that the TypeScript compiler will use in order to compile your `main.ts` file to JavaScript.

The `main.ts` file contains all of the relevant code to create and display the application. Within this file, you can determine screen size, application behavior on create and close and even whether or not Chromium DevTools should be opened when opening the application. There are many options 

# Package
The `package.json` file contains the `main` entry point for the Electron application, as well as the script for building and running the application.


This file also contains many Angular properties for your application that you can change as well.

# Versions
This starter template uses Angular version `9.1.9` and Electron version `9.0.1`.

# Ignore File
In the `.gitignore` file, I have added `electron/dist` to be ignored. Since this is the build of the files, we would not want to commit this to version control.

# Running the Application
The application can be ran using the following command while in the root of the project directory:
```
npm run electron
```

This command will execute three commands as part of it:
1. `ng build --base-href ./` which will build the application and set the `base-href` property to the root directory.
2. `tsc --p electron` which will compile the code in the `electron` folder to JavaScript.
3. `electron .` which will run the Electron application using the `main` property in your `package.json` file.
