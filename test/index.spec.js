import { loginUSer } from '../src/firebaseAuth.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
// const mockfirestore = new firebasemock.MockFirestore();
// const mockstorage = new firebasemock.MockStorage();
const mocksdk = new firebasemock.MockFirebaseSdk(
  () => {
    return null;
  },
  // use null if your code does not use AUTHENTICATION
  () => {
    return mockauth;
  }
  // use null if your code does not use FIRESTORE
  // () => {
  //   return mockfirestore;
  // },
  // // use null if your code does not use STORAGE
  // () => {
  //   return mockstorage;
  // },

);

mockauth.autoFlush();
global.firebase = mocksdk;



// describe('registerUSer', () => {
//   test('debería ser una función', () => {
//     expect(typeof registerUSer).toBe('function');
//   });

// });

describe('loginUSer', () => {
  test('debería ser una función', () => {
    expect(typeof loginUSer).toBe('function');
  });

  test('deberia poder loguearme', () => {
    const promesa = loginUSer('usuario@beerlovers.com', '12345678')
    return promesa
      .then((user) => {
        expect(typeof user).toBe('object');
        expect(user.email).toBe('usuario@beerlovers.com')
      })

  })

});



// describe('registroGmail', () => {
//   test('debería ser una función', () => {
//     expect(typeof registroGmail).toBe('function');
//   });
// });

// describe('cerrarSesion', () => {
//   test('debería ser una función', () => {
//     expect(typeof cerrarSesion).toBe('function');
//   });
// });
