// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDKpcuoyWR1lMzH-nmZXJEsuoTJ5LJm6b0",
    authDomain: "gdmesas.firebaseapp.com",
    databaseURL: "https://gdmesas.firebaseio.com",
    projectId: "gdmesas",
    storageBucket: "gdmesas.appspot.com",
    messagingSenderId: "685427580402"
  }
};