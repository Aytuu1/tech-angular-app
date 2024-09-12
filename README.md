## Angular & TypeScript
[Angular Github](https://github.com/Aytuu1/tech-angular-app) 

## Git Kurulumu
git -v
npm -v
git config --global user.name "Aytuğ Atasever"
git config --global user.email "aytuuc1@gmail.com"


## Node JS
npm list
npm list -g

## Angular Kurulum
npm install -g typescript
npm install -g @angular/cli
npm uninstall -g @angular/cli
ng version
ng v
ng new tech-angular-app
cd tech-angular-app
ng serve -o

ng serve --port 999 -o

## Angular CLI Hazır Bileşenler
ng generate component login = ng g c login
ng g pipe loginPipe
ng g service loginService
ng g module loginModule
ng g directive loginDirective
ng g interface loginInterface
ng g enum loginEnum

## 3.Parti Uygulamalar Ekle
### Fontawesome
(Terminal) => npm i font-awesome
angular.json =>"node_modules/font-awesome/css/font-awesome.css"
### Bootstrap
(Terminal) => npm i bootstrap
angular.json => "styles": [
              "src/styles.css",
               "node_modules/font-awesome/css/font-awesome.css",
               "node_moodules/bootstrap/dist/css/bootstrap.min.css"
            ],
### jQuery
(Terminal) => npm i jquery
angular.json =>
              "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ], 



            






# TechAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
