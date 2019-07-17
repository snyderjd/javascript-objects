// Practice: Represent your Pet
// Create an object that represents your pet.

// 1. Name property with a string value.
// 2. Species property with a string value.
// 3. Nicknames property with an array value.Array contains strings.
// 4. Age property with an integer value

const pet = {
    name: 'Robert',
    species: 'dog',
    nicknames: ['Bob', 'Bert', 'Rob'],
    age: 6,
    favoriteToys: [],
    bark: function() {
        const sentence = `${this.name} says WOOF!!`;
        window.alert(sentence);
    },
    fetch: function(item) {
        const sentence = `${this.name} fetched the ${item}!`;
        window.alert(sentence);
    },
    sit: function() {
        const sentence = `${this.name} sat down.`;
        window.alert(sentence);
    },
    play: function(toy) {
        if (toy.includes('ball') || toy.includes('bone')) {
            this.favoriteToys.push(toy);
        }
    }
};

// console.log(pet.bark());
// console.log(pet.fetch("stick"));
// console.log(pet.sit());

/* ---------- Practice: My Pet "This" ----------
1. Give your pet a new key named favoriteToys whose value is an empty array.
2. Now define another new key named play whose value is a function with a single parameter named toy.
3. The function should determine if your pet liked the toy, and if s / he does, then it should be added to the favoriteToys array using the this keyword(see example above).

    Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.
*/

// console.log(pet.play('ball'));
// console.log(pet.play('tennis ball'));
// console.log(pet.play('bone'));
// console.log(pet.play('sock'));
// console.log(pet.favoriteToys);




