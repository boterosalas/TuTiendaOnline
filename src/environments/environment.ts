// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCB1TsKTNo7whAG-WZ3wErwMcezM2PC5Is",
    authDomain: "fabrica-de-clientes.firebaseapp.com",
    databaseURL: "https://fabrica-de-clientes.firebaseio.com",
    projectId: "fabrica-de-clientes",
    storageBucket: "fabrica-de-clientes.appspot.com",
    messagingSenderId: "648942701779"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
