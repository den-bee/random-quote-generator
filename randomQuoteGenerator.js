const randomQuote = ["I'm gonna make him an offer he can't refuse.", "May the Force be with you", "I'll be back!", "Mama always said life was like a box of chocolates. You never know what you're gonna get.", "I see dead people", "Say hello to my little friend!", "Here's Johnny!", "My precious...", "Fly, you fools!", "Ogres are like onions", "I am Groot", "I want to play a game", "You're a wizard, Harry", "Just keep swimming, just keep swimming", "That's a bingo!", "Not quite my tempo", "Why so serious?"];

const randomCharacter = ["Vito Corleone", "Han Solo", "The Terminator", "Forrest Gump", "Cole Sear", "Tony Montana", "Jack Torrance", "Gollum", "Gandalf", "Shrek", "Groot", "Jigsaw", "Hagrid", "Dory", "Conolel Hans Landa", "Terence Fletcher", "The joker"];

const randomMovie = ["The Godfather", "Star Wars", "The Terminator", "Forrest Gump", "The Sixth Sense", "Scarface", "The Shining", "The Lord of The Rings", "The Lord of The Rings", "Shrek", "Guardians of the Galaxy", "Saw", "Harry Potter and the Sorcerer's Stone", "Finding Nemo", "Inglourious Basterds", "Whiplash", "The Dark Knight"];

let randomizerOne = Math.floor(Math.random() * randomQuote.length);
let randomizerTwo = Math.floor(Math.random() * randomCharacter.length);
let randomizerThree = Math.floor(Math.random() * randomMovie.length);

while (randomizerOne != randomizerTwo || randomizerOne != randomizerThree || randomizerTwo != randomizerThree) {
    console.log(randomQuote[randomizerOne]);
    console.log(randomCharacter[randomizerTwo]);
    console.log(randomMovie[randomizerThree]);
    break;
};







