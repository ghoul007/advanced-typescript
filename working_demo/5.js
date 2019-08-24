"use strict";
const pet = { name: 'Sam', age: 5 };
const petReadonly = { name: 'Sam', age: 5 };
const petOptional = { name: 'Sam' };
const petWithStringAge = { name: 'Sam', age: '5' };
const petNoOptionals = {
    age: 5,
    favouritePark: 'House',
    name: 'Sam',
};
pet.age = 6;
/**
 * We are unable to change the age of the readonly pet
 */
petNoOptionals.age = 6;
