import 'whatwg-fetch';

const dogs = [{ name: 'Mochi', age: 2 }, { name: 'Simba', age: 6 }];
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', 'poop');

// another option of Interpolated
// console.log(`Hello I am ${var}`);

// Styled
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue');

// warning!
console.warn('STOP RIGHT THERE!!!');

// Error :|
console.error('LOOK WHAT YOU DID!!!');

// Info
console.info('I\'m turning 26 tomorrow');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Josh');
console.count('Caleb');
console.count('Caleb');
console.count('Josh');
console.count('Caleb');
console.count('Josh');
console.count('Josh');
console.count('Caleb');
console.count('Caleb');
console.count('Caleb');
console.count('Caleb');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/joshswl')
  .then(data => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
