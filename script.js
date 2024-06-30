var button = document.querySelector('button');
var generatedText = document.querySelector('.generated-compliment');


const arrCompliments = [
    "You're so efficient, you can cook Minute rice in 30 seconds. ⏱️🍚",
    "I saved a sample of your DNA … just in case cloning ever becomes legal. 🧬",
    "You're the reason the gene pool needs a lifeguard. 🏊‍♂️🧬",
    "You're more fun than bubble wrap. 🎉",
    "I love you like waffles love Nutella. 🧇❤️🍫",
    "You're the reason I smile when I wake up in the morning. 😊☀️",
    "You're so awesome, you could sell a dirt popsicle to a guinea pig. 🍦🐹",
    "You're so perfect that if you were an Instagram photo, I'd assume you were made with AI. 📸👌",
    "Guess what I'm wearing right now? That smile you gave me. 😊",
    "If you were a haircut, I'd never wear a hat. 💇‍♂️🚫🧢",
    "You're the reason I believe in love. ❤️",
    "Your aura is a rainbow dipped in sparkles. 🌈✨",
    "You're so smart. I bet you do crossword puzzles in ink. 🧠✒️",
    "Your laugh is the best ringtone. 😂🎶",
    "Your brain must hold the Guinness World Record for awesomeness. 🧠🏆",
    "If you were a vegetable, you'd be a cute-cumber. 🥒😊",
    "You're like a human charger, I feel more energized just by being around you. 🔋💡",
    "If being awesome was a crime, you'd be serving a life sentence. 😎🚔",
    "You're the salsa to my tortilla chips. You spice up my life! 🌶️🥑",
    "If you were a book, you'd be the final copy of a limited edition. 📚✨",
    "You're so cool, penguins are jealous. 🐧😎",
    "Your kindness is a balm to all who encounter it. 💖👼",
    "You're not just a star; you're the whole constellation. ⭐🌌",
    "If smiles were water, you'd be an ocean. 😄🌊",
    "You're the marshmallow to my hot chocolate, making everything better. ☕🍫",
    "Your creativity is a mixtape I never want to stop listening to. 🎨🎵",
    "You're the superhero in the movie of my life. 🦸‍♂️🎥",
    "You're the 'Ctrl' to my 'Z', always making things better. ⌨️❤️",
    "If laughter was a currency, you'd be a billionaire. 😂💰",
    "You're like a human highlighter, you brighten up every room you enter. 🖍️💡",
    "Your presence is more soothing than a cat purring. 😌🐱",
    "You're the secret ingredient in the recipe of life. 🌟🍲",
    "If you were a day of the week, you'd be Saturday—everyone's favorite. 📅❤️",
    "You're like the charger to my phone, absolutely essential. 🔌📱",
    "Your smile could light up an entire city. 😃💡",
    "You're the sprinkle of joy on the doughnut of life. 🍩😊",
    "If you were a scent, you'd be fresh-baked cookies—warm and comforting. 🍪💖",
    "You're the glue in the friendship bracelet of life. 🌈🤝",
    "Your generosity knows no bounds, like an all-you-can-eat buffet. 🍽️❤️",
    "If you were a season, you'd be spring, bringing warmth and renewal. 🌸🌞",
    "You're the high score in the arcade game of life. 🕹️🏆",
    "Your humor is like a breath of fresh air in a stuffy room. 😂🌬️",
    "If you were a landscape, you'd be a breathtaking view that everyone wants to see. 🏞️😍",
    "You're the warmth of the sun on a chilly day. ☀️🧣",
    "If you were a journey, you'd be a scenic route, full of surprises and delights. 🚗🌄",
    "You're the magic in the mundane, turning ordinary moments into extraordinary ones. ✨🌟",
    "If you were a movie, you'd be a blockbuster hit everyone loves. 🎬❤️",
    "You're the harmony in the choir of life, making everything sound better. 🎶👫",
    "If you were a dessert, you'd be a sundae—because you make everything better. 🍨😋",
    "You're the pep talk I need on a Monday morning. 🗣️☕",
    "Your optimism is like an unlimited data plan, always there when I need it. 📱💡",
    "You're the puzzle piece that makes the picture complete. 🧩❤️",
    "If you were a star, you'd be the brightest in the night sky. 🌟🌌",
    "You're the bookmark in the novel of my life. 📖❤️",
    "Your energy is more invigorating than a double espresso. ☕💥",
    "You're the hero in the story of my life. 🦸❤️",
    "If you were a plant, you'd be a sunflower, bright and uplifting. 🌻😊",
    "You're the melody that makes my heart sing. 🎵❤️",
    "Your kindness is like a soft blanket on a cold night. 🛌💖",
    "If you were a holiday, you'd be Christmas, bringing joy and happiness. 🎄🎁",
    "You're the lighthouse guiding me through the storm. 🌊💡",
    "Your courage is more inspiring than a superhero movie. 🦸‍♂️🎥",
    "If you were a sport, you'd be a marathon, showing endurance and strength. 🏃‍♂️🏅",
    "You're the icing on the cake of life. 🎂❤️",
    "Your laughter is the soundtrack of my favorite movie. 😂🎬",
    "If you were a city, you'd be Paris, beautiful and enchanting. 🗼❤️",
    "You're the rainbow after the rain, full of hope and color. 🌈☔",
    "Your wisdom is like a map, guiding me on the right path. 🗺️💡",
    "If you were a drink, you'd be a warm cup of tea, comforting and soothing. 🍵❤️",
    "You're the adventure I've always wanted to take. 🚀❤️",
    "Your spirit is as free and wild as a mustang. 🐎💨",
    "If you were a gemstone, you'd be a diamond, precious and strong. 💎✨",
    "You're the calm in the center of my storm. 🌪️❤️",
    "Your creativity is like a box of crayons, coloring my world. 🖍️🌈",
    "If you were a time of day, you'd be sunrise, bringing light and hope. 🌅❤️",
    "You're the anchor that keeps me grounded. ⚓❤️",
    "Your passion is the spark that ignites my own. 🔥❤️",
    "If you were a musical instrument, you'd be a violin, creating beautiful melodies. 🎻❤️",
    "You're the compass that leads me to happiness. 🧭❤️",
    "Your voice is my favorite song. 🎤❤️",
    "If you were a season, you'd be autumn, cozy and full of color. 🍂❤️",
    "You're the fireworks in my night sky. 🎆❤️",
    "Your imagination is the key that unlocks my dreams. 🔑💭",
    "If you were a fabric, you'd be velvet, luxurious and soft. 🧶❤️",
    "You're the peace in my chaotic world. ☮️❤️",
    "You're the WiFi in the desert of my digital life. 🌵📶",
    "If you were a fruit, you'd be a fine-apple. 🍍😉",
    "You're the 'skip ad' button on the YouTube of my day. ▶️🚫",
    "Your dance moves are the glitch in the matrix I always want to see. 💃🕺",
    "Your love is the melody that my heart dances to. 💃❤️",
    "If you were a flower, you'd be a rose, beautiful and cherished. 🌹❤️",
    "You're the light that brightens my darkest days. 💡❤️",
    "Your friendship is the treasure I've always been searching for. 🗝️❤️",
    "If you were a scent, you'd be lavender, calming and lovely. 🌿❤️",
    "You're the home I've always dreamed of. 🏡❤️"
];

button.addEventListener('click', function() {
    generate();
});

function generate() {
    var randomCompliment = arrCompliments[Math.floor(Math.random() * arrCompliments.length)];
    
    // Trigger reanimation by removing and re-adding the element
    generatedText.classList.remove('generated-compliment'); // Remove animation class
    void generatedText.offsetWidth; // Trigger reflow
    generatedText.classList.add('generated-compliment'); // Add animation class again
    
    // Delay setting new text to ensure reanimation
    setTimeout(function() {
        generatedText.textContent = randomCompliment;
    }, 50); // Adjust as needed
}