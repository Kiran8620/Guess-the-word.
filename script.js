// Level Basic
const words = [
    'Apple', 'Ant', 'Axe', 'Arrow', 'Angel', 'Anchor', 'Almond', 'Apron', 'Airport', 'Art',
    'Banana', 'Ball', 'Bat', 'Bear', 'Boat', 'Book', 'Bottle', 'Bread', 'Butterfly', 'Bridge',
    'Cat', 'Car', 'Cake', 'Chair', 'Clock', 'Cloud', 'Cup', 'Coat', 'Camera', 'Crayon',
    'Dog', 'Duck', 'Drum', 'Door', 'Doll', 'Desk', 'Diamond', 'Dolphin', 'Dragon', 'Dress',
    'Elephant', 'Egg', 'Eagle', 'Ear', 'Engine', 'Envelope', 'Earth', 'Eye', 'Elbow', 'Eskimo',
    'Fish', 'Fan', 'Fork', 'Frog', 'Fox', 'Feather', 'Fire', 'Flower', 'Flag', 'Forest',
    'Goat', 'Giraffe', 'Guitar', 'Gold', 'Grass', 'Garden', 'Glove', 'Gate', 'Ghost', 'Gem',
    'Hat', 'Horse', 'House', 'Hammer', 'Hand', 'Helicopter', 'Heart', 'Hill', 'Honey', 'Hut',
    'Ice', 'Igloo', 'Iron', 'Insect', 'Island', 'Ink', 'Ivy', 'Instrument', 'Idea', 'Item',
    'Jacket', 'Jaguar', 'Jelly', 'Jeep', 'Jewel', 'Jar', 'Jet', 'Jigsaw', 'Juice', 'Jungle',
    'Kite', 'Key', 'Kangaroo', 'King', 'Kitchen', 'Knife', 'Kettle', 'Kiwi', 'Knee', 'Knot',
    'Lion', 'Lamp', 'Leaf', 'Lemon', 'Laptop', 'Ladder', 'Lake', 'Lace', 'Ladybug', 'Lava',
    'Monkey', 'Moon', 'Map', 'Mouse', 'Milk', 'Mountain', 'Magnet', 'Mirror', 'Mushroom', 'Mango',
    'Nest', 'Nail', 'Nose', 'Nut', 'Net', 'Notebook', 'Necklace', 'Needle', 'Night', 'Navy',
    'Owl', 'Orange', 'Oven', 'Octopus', 'Oyster', 'Olive', 'Orchid', 'Onion', 'Ox', 'Oil',
    'Pencil', 'Parrot', 'Piano', 'Pizza', 'Penguin', 'Pillow', 'Plant', 'Plate', 'Peach', 'Pear',
    'Queen', 'Quilt', 'Quail', 'Quartz', 'Quiver', 'Question', 'Quiet', 'Quick', 'Quench', 'Quote',
    'Rabbit', 'Rainbow', 'Ring', 'Rocket', 'Rose', 'River', 'Radio', 'Robot', 'Ruler', 'Road',
    'Sun', 'Star', 'Snake', 'Spoon', 'Socks', 'Sand', 'Shell', 'Ship', 'Seal', 'Sky',
    'Tiger', 'Tree', 'Train', 'Tomato', 'Turtle', 'Table', 'Truck', 'Towel', 'Tent', 'Teapot',
    'Umbrella', 'Unicorn', 'Uniform', 'Urn', 'Uncle', 'Ukulele', 'Unicycle', 'Universe', 'Utensil', 'Upgrade',
    'Vase', 'Violin', 'Vulture', 'Van', 'Violet', 'Village', 'Voice', 'Vehicle', 'Vegetable', 'Victory',
    'Whale', 'Wolf', 'Wagon', 'Wind', 'Water', 'Wheel', 'Window', 'Wood', 'Wrench', 'Wire',
    'Xylophone', 'X-ray', 'Xerox', 'Xmas', 'Xenon', 'Xylem', 'Xenophobia', 'Xenolith', 'Xenial', 'Xanthic',
    'Yak', 'Yarn', 'Yacht', 'Yam', 'Yellow', 'Yawn', 'Yogurt', 'Yoke', 'Year', 'Yard',
    'Zebra', 'Zoo', 'Zipper', 'Zucchini', 'Zone', 'Zap', 'Zephyr', 'Zinc', 'Zombie', 'Zigzag'
];

// Level Hard
const wordLvl2 = [
    "axiomatic", "abstruse", "alacrity", "antediluvian", "apocryphal", "ameliorate", 
    "anachronistic", "assiduous", "auspicious", "autochthonous", // A
    "brouhaha", "bellicose", "bombastic", "bloviate", "bourgeoisie", "blunderbuss", 
    "bumptious", "bifurcate", "baneful", "bibliophile", // B
    "cacophony", "capricious", "cynosure", "contumacious", "conflagration", 
    "calumny", "circumlocution", "chicanery", "coruscate", "compunction", // C
    "defenestration", "deleterious", "diaphanous", "dirigible", "discombobulate", 
    "dilettante", "dyspeptic", "dystopia", "draconian", "disconsolate", // D
    "ephemeral", "equanimity", "esoteric", "ebullient", "effervescent", 
    "egregious", "eidetic", "echelon", "enervate", "excoriate", // E
    "flummox", "fatuous", "fastidious", "farrago", "felicitous", 
    "feral", "fractious", "florid", "fructify", "fustigate", // F
    "gregarious", "grandiloquent", "garrulous", "glabrous", "gelid", 
    "gossamer", "gibbous", "gynarchy", "gasconade", "gloaming", // G
    "harangue", "histrionic", "hubris", "heterogeneous", "heuristic", 
    "halcyon", "hermetic", "hagiography", "heuristic", "hedonistic", // H
    "intransigent", "insidious", "ineffable", "idiosyncratic", "indefatigable", 
    "incorrigible", "indelible", "incarnadine", "inimical", "inchoate", // I
    "juxtapose", "jejune", "jingoistic", "judicious", "jocund", 
    "jettison", "juggernaut", "jocularity", "juvenescent", "jackanapes", // J
    "kerfuffle", "kaleidoscopic", "knavery", "kith", "kakistocracy", 
    "kibitz", "ken", "keening", "knotty", "kreplach", // K
    "languorous", "lachrymose", "legerdemain", "lugubrious", "labyrinthine", 
    "loquacious", "laconic", "lissome", "libidinous", "lilliputian", // L
    "magnanimous", "mendacious", "myrmidon", "maudlin", "mellifluous", 
    "meretricious", "misanthropic", "malapropism", "moribund", "multifarious", // M
    "nadir", "nefarious", "nugatory", "neophyte", "noisome", 
    "nonplussed", "numinous", "nascent", "nidifugous", "nincompoop", // N
    "obfuscate", "obstreperous", "omniscient", "obsequious", "otiose", 
    "orotund", "ossified", "ostentatious", "oleaginous", "obdurate", // O
    "pernicious", "perspicacious", "pusillanimous", "prestidigitation", "pugnacious", 
    "penumbra", "plangent", "phlegmatic", "pulchritudinous", "precarious", // P
    "quixotic", "quintessence", "quibble", "quagmire", "quiescent", 
    "querulous", "quotidian", "quintessential", "quaff", "quidnunc", // Q
    "recalcitrant", "recondite", "redolent", "refulgent", "raconteur", 
    "ruminate", "reticent", "rancorous", "rambunctious", "reprobate", // R
    "sesquipedalian", "sagacious", "sycophant", "salubrious", "serendipitous", 
    "soporific", "splendiferous", "susurration", "spurious", "supercilious", // S
    "tintinnabulation", "taciturn", "turbid", "tumultuous", "tmesis", 
    "trenchant", "truculent", "terpsichorean", "transmogrify", "treacly", // T
    "ubiquitous", "unctuous", "umbrage", "usurp", "undulate", 
    "uxorious", "ululate", "uncouth", "unguent", "upbraid", // U
    "vicissitude", "verisimilitude", "vexatious", "vituperative", "veritable", 
    "voracious", "vapid", "venal", "vociferous", "vestigial", // V
    "wanderlust", "whimsical", "winsome", "woebegone", "welter", 
    "wheedle", "wunderkind", "wont", "wizened", "whirligig", // W
    "xenophobia", "xeric", "xenial", "xylophonic", "xenogenic", 
    "xiphoid", "xanthous", "xenograft", "xerox", "xanthoma", // X
    "yammer", "yokel", "yeoman", "yare", "yawp", 
    "yesternight", "ytterbium", "yawner", "yokemate", "yashmak", // Y
    "zephyr", "zeitgeist", "zealot", "zenith", "zymurgy", 
    "zebrine", "zoonotic", "zoolatry", "zodiacal", "zapateado" // Z
  ];

// Game Logic

//Variables and Selectors declaration

let startBtn = document.querySelector("#start-btn");//start button
let startDiv = document.querySelector('.start');//start div

// Select Body
let body = document.querySelector('body');

let word = document.querySelector('#word');//<h3 id="word">Word</h3>
let game = document.querySelector(".game");//<div class="game hidden"></div>
let currWord = "";
let life = 2;//life line
let score = 0;

// store random index
let randomIndex = Math.random() * 260;

// Select guess button
let guessBtn = document.querySelector("#guess-btn");

// Select Input 
let guess = document.querySelector('#guess');

// Select ending
let end = document.querySelector(".end");

// End Msg
let endMsg = document.querySelector("#end-msg");
//Style for Ending msg
endMsg.style.textAlign = 'center'

//End button
let endBtn = document.querySelector("#end-btn");

// Add new node scorecard
let scoreCard = document.createElement("h1");

// Add number of lifeline
let heart = document.createElement('h4');

// add new node Level
let level = document.createElement("p");

// finalScore after game is over
let result = document.createElement("p");

// select reset button
let reset = document.querySelector("#reset-btn");

// function for start
function startFunc(){

    startDiv.classList.add('hidden');

    game.classList.remove('hidden');
    
    currWord = (words[Math.ceil(Math.random() * 10)]).toLowerCase();//random words from array[words] stored in currWord
    console.log(currWord);
    word.textContent = currWord.split('').sort(() => Math.random() - 0.5).join('');//currWord split as array and sorted randomly in word.textContent.

    //to show display
    scoreCard.style.display = '';
    level.style.display = '';

    //scorecard
    word.before(scoreCard);//scorecard position
    scoreCard.textContent = 'Score: ' + score;//display scorecards;
    // Style for Scorecard
    scoreCard.style.display = 'flex';
    scoreCard.style.justifyContent = 'center';

    // Level
    scoreCard.after(level);//level position
    level.textContent = "Level: Basic";//content of level
    // Style for Level
    level.style.textAlign = 'center';
    level.style.color = '#179BAE';

    // Life
    scoreCard.after(heart);
    heart.textContent = "Heart: " + (life + 1);//display life 
    heart.classList.remove("hidden");
    // Style for life
    heart.style.textAlign = 'center';
    heart.style.color = '#A02334';

};

function gamePlay(){
    if(guess.value === currWord){//condition for correct
       
        if(words.length > 0 || wordLvl2.length > 0){
            score += 10//plus 10 points after each correct answer
            currWord = words.splice(randomIndex, 1)[0].toLowerCase();//random words from array[words] stored in currWord but, once
            console.log(currWord);
            word.textContent = currWord.split('').sort(() => Math.random() - 0.5).join('');
            guess.value = '';//reset input
            heart.classList.remove("hidden");
            scoreCard.textContent = 'Score: ' + score;//update score
            heart.textContent = "Heart: " + (life + 1);//display life 


            if(score >= 200 && score < 500){

                currWord = wordLvl2.splice(randomIndex, 1)[0].toLowerCase();//random words from array[words] stored in currWord but, once
                console.log(currWord);
                 word.textContent = currWord.split('').sort(() => Math.random() - 0.5).join('');
                guess.value = '';
            
                scoreCard.textContent = 'Score: ' + score;

                heart.classList.remove("hidden");
                level.textContent = "Level: Hard";//content of level
                level.style.color = 'red';//style for level after score 200.
                heart.textContent = "Heart: " + (life + 1);//display life 

            }else if(score === 500){//winning condition

            end.classList.remove("hidden");
            game.classList.add('hidden');
            endMsg.textContent = "You Won";
                    

            endMsg.style.color = "green";
            scoreCard.style.display = 'none';
            level.style.display = 'none';


            result.textContent = "Your final score is: " + score;
            endMsg.after(result);
            // Style for result
            result.style.textAlign = 'center';

            heart.classList.remove("hidden");
            heart.textContent = "Heart: " + (life + 1);//display life 
            endMsg.after(heart);

            }
        }
        
    }else if(life === 0){//lossing condition

        end.classList.remove("hidden");
        game.classList.add('hidden');
        scoreCard.style.display = 'none';
        level.style.display = 'none';
        endMsg.textContent = "Game Over";
        endMsg.style.color = "red";
        // Style Game Over Msg
        endMsg.style.textAlign = 'center';

        endMsg.after(result);
        result.textContent = "Your final score is: " + score;
        // Style for result
        result.style.textAlign = 'center';

        endMsg.after(heart);
        heart.textContent = "Heart: " + (life - life);//display life 

    }else{// condition for wrong
        if(score > 0 && score <= 500){
        
        score -= 10;
        life -= 1;
        guess.value = '';
        scoreCard.textContent = 'Score: ' + score;
        currWord = words.splice(randomIndex, 1)[0].toLowerCase();//random words from array[words] stored in currWord but, once
        console.log(currWord);
        word.textContent = currWord.split('').sort(() => Math.random() - 0.5).join('');
        heart.textContent = "Heart: " + ((life + 1));//display life }
      
    }else{

            if(score === 0){
                life -= 1;
                guess.value = '';
                scoreCard.textContent = 'Score: ' + score;
                currWord = words.splice(randomIndex, 1)[0].toLowerCase();//random words from array[words] stored in currWord but, once
                console.log(currWord);
                word.textContent = currWord.split('').sort(() => Math.random() - 0.5).join('');
                heart.textContent = "Heart: " + ((life + 1));//display life }
            }
        }
    }
}   

//function for reset
function resetBtn(){
    life = 2;
    guess.value = '';
    score = 0;
    scoreCard.style.display = 'none';
    level.style.display = 'none';
    startDiv.classList.remove("hidden");
    heart.classList.add("hidden");
    game.classList.add('hidden');
    end.classList.add("hidden");
}


//Event

startBtn.addEventListener("click", startFunc);

guessBtn.addEventListener("click", gamePlay);

endBtn.addEventListener("click", resetBtn);

reset.addEventListener("click", resetBtn);