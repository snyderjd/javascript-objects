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
    }
};

// console.log(pet.bark());
// console.log(pet.fetch("stick"));
// console.log(pet.sit());

