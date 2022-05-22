//testing de funciones de app.js
const calculate = require('./../js/app.js');

describe('Testing the file app.js', () => { 
    test('test in calculate function', () => {
        expect(calculate('1+1')).toBe(2);
    })
     });