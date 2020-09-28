// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ApiUrl:"http://localhost:3000/",
  firebaseConfig : {
    apiKey: "AIzaSyBf_o7lyHo3wWibWZ6WG3KmTW01BZ00Me4",
    authDomain: "naukaries-c69f9.firebaseapp.com",
    databaseURL: "https://naukaries-c69f9.firebaseio.com",
    projectId: "naukaries-c69f9",
    storageBucket: "naukaries-c69f9.appspot.com",
    messagingSenderId: "402729519288",
    appId: "1:402729519288:web:812eb149d17a2f970c8c4d",
    measurementId: "G-1H6BC0Z031"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
