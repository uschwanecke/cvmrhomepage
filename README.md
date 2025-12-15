# CvmrWebpage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
-> a parameter for base url is configured in package.json 


## Adding content

Go to the folder assets. 
In the content and images folder are subfolder, for each side a separate one. You can add new images and content by placing them into the respective folders and json files. 

Every element (except them with name content*) in json can have an `active` flag. If it is missing or true, the content will be displayed. If it is set to false, the content will be omitted.


## Deployment

Run Build and copy the content of the dist folder into your public_html folder (scp -r ....)
