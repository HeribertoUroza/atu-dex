// import axios from '../node_modules/axios/dist/axios';
// const axios = require('axios');
import axios from 'axios';

const pokemonList = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
    "Fearow",
    "Ekans",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sandshrew",
    "Sandslash",
    "Nidoran♀",
    "Nidorina",
    "Nidoqueen",
    "Nidoran♂",
    "Nidorino",
    "Nidoking",
    "Clefairy",
    "Clefable",
    "Vulpix",
    "Ninetales",
    "Jigglypuff",
    "Wigglytuff",
    "Zubat",
    "Golbat",
    "Oddish",
    "Gloom",
    "Vileplume",
    "Paras",
    "Parasect",
    "Venonat",
    "Venomoth",
    "Diglett",
    "Dugtrio",
    "Meowth",
    "Persian",
    "Psyduck",
    "Golduck",
    "Mankey",
    "Primeape",
    "Growlithe",
    "Arcanine",
    "Poliwag",
    "Poliwhirl",
    "Poliwrath",
    "Abra",
    "Kadabra",
    "Alakazam",
    "Machop",
    "Machoke",
    "Machamp",
    "Bellsprout",
    "Weepinbell",
    "Victreebel",
    "Tentacool",
    "Tentacruel",
    "Geodude",
    "Graveler",
    "Golem",
    "Ponyta",
    "Rapidash",
    "Slowpoke",
    "Slowbro",
    "Magnemite",
    "Magneton",
    "Farfetch’d",
    "Doduo",
    "Dodrio",
    "Seel",
    "Dewgong",
    "Grimer",
    "Muk",
    "Shellder",
    "Cloyster",
    "Gastly",
    "Haunter",
    "Gengar",
    "Onix",
    "Drowzee",
    "Hypno",
    "Krabby",
    "Kingler",
    "Voltorb",
    "Electrode",
    "Exeggcute",
    "Exeggutor",
    "Cubone",
    "Marowak",
    "Hitmonlee",
    "Hitmonchan",
    "Lickitung",
    "Koffing",
    "Weezing",
    "Rhyhorn",
    "Rhydon",
    "Chansey",
    "Tangela",
    "Kangaskhan",
    "Horsea",
    "Seadra",
    "Goldeen",
    "Seaking",
    "Staryu",
    "Starmie",
    "Mr. Mime",
    "Scyther",
    "Jynx",
    "Electabuzz",
    "Magmar",
    "Pinsir",
    "Tauros",
    "Magikarp",
    "Gyarados",
    "Lapras",
    "Ditto",
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Porygon",
    "Omanyte",
    "Omastar",
    "Kabuto",
    "Kabutops",
    "Aerodactyl",
    "Snorlax",
    "Articuno",
    "Zapdos",
    "Moltres",
    "Dratini",
    "Dragonair",
    "Dragonite",
    "Mewtwo",
    "Mew",
    "Chikorita",
    "Bayleef",
    "Meganium",
    "Cyndaquil",
    "Quilava",
    "Typhlosion",
    "Totodile",
    "Croconaw",
    "Feraligatr",
    "Sentret",
    "Furret",
    "Hoothoot",
    "Noctowl",
    "Ledyba",
    "Ledian",
    "Spinarak",
    "Ariados",
    "Crobat",
    "Chinchou",
    "Lanturn",
    "Pichu",
    "Cleffa",
    "Igglybuff",
    "Togepi",
    "Togetic",
    "Natu",
    "Xatu",
    "Mareep",
    "Flaaffy",
    "Ampharos",
    "Bellossom",
    "Marill",
    "Azumarill",
    "Sudowoodo",
    "Politoed",
    "Hoppip",
    "Skiploom",
    "Jumpluff",
    "Aipom",
    "Sunkern",
    "Sunflora",
    "Yanma",
    "Wooper",
    "Quagsire",
    "Espeon",
    "Umbreon",
    "Murkrow",
    "Slowking",
    "Misdreavus",
    "Unown",
    "Wobbuffet",
    "Girafarig",
    "Pineco",
    "Forretress",
    "Dunsparce",
    "Gligar",
    "Steelix",
    "Snubbull",
    "Granbull",
    "Qwilfish",
    "Scizor",
    "Shuckle",
    "Heracross",
    "Sneasel",
    "Teddiursa",
    "Ursaring",
    "Slugma",
    "Magcargo",
    "Swinub",
    "Piloswine",
    "Corsola",
    "Remoraid",
    "Octillery",
    "Delibird",
    "Mantine",
    "Skarmory",
    "Houndour",
    "Houndoom",
    "Kingdra",
    "Phanpy",
    "Donphan",
    "Porygon2",
    "Stantler",
    "Smeargle",
    "Tyrogue",
    "Hitmontop",
    "Smoochum",
    "Elekid",
    "Magby",
    "Miltank",
    "Blissey",
    "Raikou",
    "Entei",
    "Suicune",
    "Larvitar",
    "Pupitar",
    "Tyranitar",
    "Lugia",
    "Ho-Oh",
    "Celebi",
    "Treecko",
    "Grovyle",
    "Sceptile",
    "Torchic",
    "Combusken",
    "Blaziken",
    "Mudkip",
    "Marshtomp",
    "Swampert",
    "Poochyena",
    "Mightyena",
    "Zigzagoon",
    "Linoone",
    "Wurmple",
    "Silcoon",
    "Beautifly",
    "Cascoon",
    "Dustox",
    "Lotad",
    "Lombre",
    "Ludicolo",
    "Seedot",
    "Nuzleaf",
    "Shiftry",
    "Taillow",
    "Swellow",
    "Wingull",
    "Pelipper",
    "Ralts",
    "Kirlia",
    "Gardevoir",
    "Surskit",
    "Masquerain",
    "Shroomish",
    "Breloom",
    "Slakoth",
    "Vigoroth",
    "Slaking",
    "Nincada",
    "Ninjask",
    "Shedinja",
    "Whismur",
    "Loudred",
    "Exploud",
    "Makuhita",
    "Hariyama",
    "Azurill",
    "Nosepass",
    "Skitty",
    "Delcatty",
    "Sableye",
    "Mawile",
    "Aron",
    "Lairon",
    "Aggron",
    "Meditite",
    "Medicham",
    "Electrike",
    "Manectric",
    "Plusle",
    "Minun",
    "Volbeat",
    "Illumise",
    "Roselia",
    "Gulpin",
    "Swalot",
    "Carvanha",
    "Sharpedo",
    "Wailmer",
    "Wailord",
    "Numel",
    "Camerupt",
    "Torkoal",
    "Spoink",
    "Grumpig",
    "Spinda",
    "Trapinch",
    "Vibrava",
    "Flygon",
    "Cacnea",
    "Cacturne",
    "Swablu",
    "Altaria",
    "Zangoose",
    "Seviper",
    "Lunatone",
    "Solrock",
    "Barboach",
    "Whiscash",
    "Corphish",
    "Crawdaunt",
    "Baltoy",
    "Claydol",
    "Lileep",
    "Cradily",
    "Anorith",
    "Armaldo",
    "Feebas",
    "Milotic",
    "Castform",
    "Kecleon",
    "Shuppet",
    "Banette",
    "Duskull",
    "Dusclops",
    "Tropius",
    "Chimecho",
    "Absol",
    "Wynaut",
    "Snorunt",
    "Glalie",
    "Spheal",
    "Sealeo",
    "Walrein",
    "Clamperl",
    "Huntail",
    "Gorebyss",
    "Relicanth",
    "Luvdisc",
    "Bagon",
    "Shelgon",
    "Salamence",
    "Beldum",
    "Metang",
    "Metagross",
    "Regirock",
    "Regice",
    "Registeel",
    "Latias",
    "Latios",
    "Kyogre",
    "Groudon",
    "Rayquaza",
    "Jirachi",
    "Deoxys",
    "Turtwig",
    "Grotle",
    "Torterra",
    "Chimchar",
    "Monferno",
    "Infernape",
    "Piplup",
    "Prinplup",
    "Empoleon",
    "Starly",
    "Staravia",
    "Staraptor",
    "Bidoof",
    "Bibarel",
    "Kricketot",
    "Kricketune",
    "Shinx",
    "Luxio",
    "Luxray",
    "Budew",
    "Roserade",
    "Cranidos",
    "Rampardos",
    "Shieldon",
    "Bastiodon",
    "Burmy",
    "Wormadam",
    "Mothim",
    "Combee",
    "Vespiquen",
    "Pachirisu",
    "Buizel",
    "Floatzel",
    "Cherubi",
    "Cherrim",
    "Shellos",
    "Gastrodon",
    "Ambipom",
    "Drifloon",
    "Drifblim",
    "Buneary",
    "Lopunny",
    "Mismagius",
    "Honchkrow",
    "Glameow",
    "Purugly",
    "Chingling",
    "Stunky",
    "Skuntank",
    "Bronzor",
    "Bronzong",
    "Bonsly",
    "Mime Jr.",
    "Happiny",
    "Chatot",
    "Spiritomb",
    "Gible",
    "Gabite",
    "Garchomp",
    "Munchlax",
    "Riolu",
    "Lucario",
    "Hippopotas",
    "Hippowdon",
    "Skorupi",
    "Drapion",
    "Croagunk",
    "Toxicroak",
    "Carnivine",
    "Finneon",
    "Lumineon",
    "Mantyke",
    "Snover",
    "Abomasnow",
    "Weavile",
    "Magnezone",
    "Lickilicky",
    "Rhyperior",
    "Tangrowth",
    "Electivire",
    "Magmortar",
    "Togekiss",
    "Yanmega",
    "Leafeon",
    "Glaceon",
    "Gliscor",
    "Mamoswine",
    "Porygon-Z",
    "Gallade",
    "Probopass",
    "Dusknoir",
    "Froslass",
    "Rotom",
    "Uxie",
    "Mesprit",
    "Azelf",
    "Dialga",
    "Palkia",
    "Heatran",
    "Regigigas",
    "Giratina",
    "Cresselia",
    "Phione",
    "Manaphy",
    "Darkrai",
    "Shaymin",
    "Arceus",
    "Victini",
    "Snivy",
    "Servine",
    "Serperior",
    "Tepig",
    "Pignite",
    "Emboar",
    "Oshawott",
    "Dewott",
    "Samurott",
    "Patrat",
    "Watchog",
    "Lillipup",
    "Herdier",
    "Stoutland",
    "Purrloin",
    "Liepard",
    "Pansage",
    "Simisage",
    "Pansear",
    "Simisear",
    "Panpour",
    "Simipour",
    "Munna",
    "Musharna",
    "Pidove",
    "Tranquill",
    "Unfezant",
    "Blitzle",
    "Zebstrika",
    "Roggenrola",
    "Boldore",
    "Gigalith",
    "Woobat",
    "Swoobat",
    "Drilbur",
    "Excadrill",
    "Audino",
    "Timburr",
    "Gurdurr",
    "Conkeldurr",
    "Tympole",
    "Palpitoad",
    "Seismitoad",
    "Throh",
    "Sawk",
    "Sewaddle",
    "Swadloon",
    "Leavanny",
    "Venipede",
    "Whirlipede",
    "Scolipede",
    "Cottonee",
    "Whimsicott",
    "Petilil",
    "Lilligant",
    "Basculin",
    "Sandile",
    "Krokorok",
    "Krookodile",
    "Darumaka",
    "Darmanitan",
    "Maractus",
    "Dwebble",
    "Crustle",
    "Scraggy",
    "Scrafty",
    "Sigilyph",
    "Yamask",
    "Cofagrigus",
    "Tirtouga",
    "Carracosta",
    "Archen",
    "Archeops",
    "Trubbish",
    "Garbodor",
    "Zorua",
    "Zoroark",
    "Minccino",
    "Cinccino",
    "Gothita",
    "Gothorita",
    "Gothitelle",
    "Solosis",
    "Duosion",
    "Reuniclus",
    "Ducklett",
    "Swanna",
    "Vanillite",
    "Vanillish",
    "Vanilluxe",
    "Deerling",
    "Sawsbuck",
    "Emolga",
    "Karrablast",
    "Escavalier",
    "Foongus",
    "Amoonguss",
    "Frillish",
    "Jellicent",
    "Alomomola",
    "Joltik",
    "Galvantula",
    "Ferroseed",
    "Ferrothorn",
    "Klink",
    "Klang",
    "Klinklang",
    "Tynamo",
    "Eelektrik",
    "Eelektross",
    "Elgyem",
    "Beheeyem",
    "Litwick",
    "Lampent",
    "Chandelure",
    "Axew",
    "Fraxure",
    "Haxorus",
    "Cubchoo",
    "Beartic",
    "Cryogonal",
    "Shelmet",
    "Accelgor",
    "Stunfisk",
    "Mienfoo",
    "Mienshao",
    "Druddigon",
    "Golett",
    "Golurk",
    "Pawniard",
    "Bisharp",
    "Bouffalant",
    "Rufflet",
    "Braviary",
    "Vullaby",
    "Mandibuzz",
    "Heatmor",
    "Durant",
    "Deino",
    "Zweilous",
    "Hydreigon",
    "Larvesta",
    "Volcarona",
    "Cobalion",
    "Terrakion",
    "Virizion",
    "Tornadus",
    "Thundurus",
    "Reshiram",
    "Zekrom",
    "Landorus",
    "Kyurem",
    "Keldeo",
    "Meloetta",
    "Genesect",
    "Chespin",
    "Quilladin",
    "Chesnaught",
    "Fennekin",
    "Braixen",
    "Delphox",
    "Froakie",
    "Frogadier",
    "Greninja",
    "Bunnelby",
    "Diggersby",
    "Fletchling",
    "Fletchinder",
    "Talonflame",
    "Scatterbug",
    "Spewpa",
    "Vivillon",
    "Litleo",
    "Pyroar",
    "Flabebe",
    "Floette",
    "Florges",
    "Skiddo",
    "Gogoat",
    "Pancham",
    "Pangoro",
    "Furfrou",
    "Espurr",
    "Meowstic",
    "Honedge",
    "Doublade",
    "Aegislash",
    "Spritzee",
    "Aromatisse",
    "Swirlix",
    "Slurpuff",
    "Inkay",
    "Malamar",
    "Binacle",
    "Barbaracle",
    "Skrelp",
    "Dragalge",
    "Clauncher",
    "Clawitzer",
    "Helioptile",
    "Heliolisk",
    "Tyrunt",
    "Tyrantrum",
    "Amaura",
    "Aurorus",
    "Sylveon",
    "Hawlucha",
    "Dedenne",
    "Carbink",
    "Goomy",
    "Sliggoo",
    "Goodra",
    "Klefki",
    "Phantump",
    "Trevenant",
    "Pumpkaboo",
    "Gourgeist",
    "Bergmite",
    "Avalugg",
    "Noibat",
    "Noivern",
    "Xerneas",
    "Yveltal",
    "Zygarde",
    "Diancie",
    "Hoopa",
    "Volcanion",
    "Rowlet",
    "Dartrix",
    "Decidueye",
    "Litten",
    "Torracat",
    "Incineroar",
    "Popplio",
    "Brionne",
    "Primarina",
    "Pikipek",
    "Trumbeak",
    "Toucannon",
    "Yungoos",
    "Gumshoos",
    "Grubbin",
    "Charjabug",
    "Vikavolt",
    "Crabrawler",
    "Crabominable",
    "Oricorio",
    "Cutiefly",
    "Ribombee",
    "Rockruff",
    "Lycanroc",
    "Wishiwashi",
    "Mareanie",
    "Toxapex",
    "Mudbray",
    "Mudsdale",
    "Dewpider",
    "Araquanid",
    "Fomantis",
    "Lurantis",
    "Morelull",
    "Shiinotic",
    "Salandit",
    "Salazzle",
    "Stufful",
    "Bewear",
    "Bounsweet",
    "Steenee",
    "Tsareena",
    "Comfey",
    "Oranguru",
    "Passimian",
    "Wimpod",
    "Golisopod",
    "Sandygast",
    "Palossand",
    "Pyukumuku",
    "Type: Null",
    "Silvally",
    "Minior",
    "Komala",
    "Turtonator",
    "Togedemaru",
    "Mimikyu",
    "Bruxish",
    "Drampa",
    "Dhelmise",
    "Jangmo-o",
    "Hakamo-o",
    "Kommo-o",
    "Tapu Koko",
    "Tapu Lele",
    "Tapu Bulu",
    "Tapu Fini",
    "Cosmog",
    "Cosmoem",
    "Solgaleo",
    "Lunala",
    "Nihilego",
    "Buzzwole",
    "Pheromosa",
    "Xurkitree",
    "Celesteela",
    "Kartana",
    "Guzzlord",
    "Necrozma",
    "Magearna",
    "Marshadow",
    "Poipole",
    "Naganadel",
    "Stakataka",
    "Blacephalon",
    "Zeraora"
]
/*
const getMoveList = (poke_name = `bulbasaur`) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${poke_name}`)
    .then(response => {
      const { data } = response; // this is object of API response
      console.log('DATA',data.moves.map(moveName => {
        return moveName.move.name
      }))
    })
}
console.log(getMoveList())
*/


const getTags = (poke_name = `bulbasaur`) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${poke_name}`)
        .then(response => {
            const {
                data
            } = response; // this is object of API response
            console.log('DATA', data.types.map(types => {
                return types.type.name
            }))
        })
}

/*

// ----- Functions Needed ------

1. Validation function
//  Make's sure pokemon name entered is valid
// Check if pokemon object entered exists in array before checking
 
2.  API function
//  Calls API for pokemon name

3. Pokemon Factory
//  Takes in API data and spits out pokemon object

// EXAMPLE:     
const charizard = {
    "name": "Charizard",
    "number": "006",
    "sprite": "https://img.pokemondb.net/sprites/sun-moon/icon/charizard.png",
    "picture": 'URL_STRING',
    "type": ['fire', 'flying'],
    "moves": ['Scratch', 'Ember', 'Growl'],
    "stats": [45, 49, 49, 65, 65, 45], // HP, Attack, Defense, Sp. Attack, Sp. Defense, Speed
    "index": 5
}
*/

const validate = (input, arr = pokemonList) => {
    const cleanInput = input.trim().toLowerCase();
    return arr.reduce((acc, e) => {
        const pokemon = e.toLowerCase()
        if (pokemon === cleanInput) {
            acc = true;
        }
        return acc;
    }, false);
};

const getPokemonData = (name = 'charizard') => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
};

const buildPokemon = (pokemon) => {
    console.log('building pokemon')
    return new Promise((resolve, reject) => {
        // checks pokemon, if valid pokemon object continue to line 84
        // if NOT, validate that it is a pokemon and get pokemon data, call buildPokemon again
        if (typeof pokemon === 'string') {
            if (!validate(pokemon)) {
                reject('Pokemon not found');
                // return false;
            } else {
                return getPokemonData(pokemon)
                    .then(response => {
                        resolve(buildPokemon(response.data))
                    }).catch(err => {
                        reject(err);
                    })
            }
        }
        const monster = {};
        monster['name'] = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
        monster['number'] = getPokemonNumber(pokemon.id);
        monster['sprites'] = getSprites(pokemon.sprites);
        monster['picture'] = `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`
        monster['types'] = getTypes(pokemon.types);
        monster['moves'] = getMoves(pokemon.moves);
        monster['stats'] = getStats(pokemon.stats);
        monster['index'] = pokemon.id - 1;
        resolve(monster)
    });
};

const getPokemonNumber = (number) => {
    if (number < 10) {
        return `00${number}`;
    } else if (number > 9 && number < 100) {
        return `0${number}`
    } else if (number > 99) {
        return `${number}`
    } else {
        return null;
    }
};

const getSprites = (sprites) => {
    const arr = [];
    if (sprites.front_default) {
        arr[0] = {
            name: 'default',
            sprite: sprites.front_default,
        }
    }
    if (sprites.front_shiny) {
        arr[1] = {
            name: 'shiny',
            sprite: sprites.front_shiny,
        }
    }
    if (sprites.back_default) {
        arr[2] = {
            name: 'default',
            sprite: sprites.back_default,
        }
    }
    if (sprites.back_shiny) {
        arr[3] = {
            name: 'shiny',
            sprite: sprites.back_shiny,
        }
    }
    if (sprites.front_female) {
        arr[4] = {
            name: 'female',
            sprite: sprites.front_female,
        }
    }
    if (sprites.front_shiny_female) {
        arr[5] = {
            name: 'shiny female',
            sprite: sprites.front_shiny_female,
        }
    }
    if (sprites.back_female) {
        arr[6] = {
            name: 'female',
            sprite: sprites.back_female,
        }
    }
    if (sprites.back_shiny_female) {
        arr[7] = {
            name: 'shiny female',
            sprite: sprites.back_shiny_female,
        }
    }
    return arr;
};

const getTypes = (types) => {
    const arr = [];
    for (let i = 0; i < types.length; i++) {
        const type = types[i];
        arr[type.slot - 1] = type.type.name;
    }
    return arr;
}

const getMoves = (moves) => {
    const arr = [];
    for (let i = 0; i < moves.length; i++) {
        const move = moves[i].move;
        arr.push(move.name)
    }
    return arr;
}

const getStats = (stats) => {
    const arr = [];
    for (let i = 0; i < stats.length; i++) {
        const stat = stats[i];
        if(stat.stat.name === 'hp') {
            arr[0] = {
                name: 'HP',
                base_stat: stat.base_stat,
            }
        }
        if(stat.stat.name === 'attack') {
            arr[1] = {
                name: 'Attack',
                base_stat: stat.base_stat,
            }
        }
        if(stat.stat.name === 'defense') {
            arr[2] = {
                name: 'Defense',
                base_stat: stat.base_stat,
            }
        }
        if(stat.stat.name === 'special-attack') {
            arr[3] = {
                name: 'Sp.Attack',
                base_stat: stat.base_stat,
            }
        }
        if(stat.stat.name === 'special-defense') {
            arr[4] = {
                name: 'Sp.Defense',
                base_stat: stat.base_stat,
            }
        }
        if(stat.stat.name === 'speed') {
            arr[5] = {
                name: 'Speed',
                base_stat: stat.base_stat,
            }
        }
    }
    return arr;
}

const getMoveInfo = (move) => {
    const cleanMove = move.trim().toLowerCase();
    return axios.get(`https://pokeapi.co/api/v2/move/${cleanMove}/`)
}

const buildMove = (move) => {
    return getMoveInfo(move)
    .then( response => {
        return response.data
    })
    .then( data => {
        return {
            name: data.name.toUpperCase(),
            type: data.type.name[0].toUpperCase() + data.type.name.slice(1),
            power: data.power,
            pp: data.pp,
        }
    })
    .catch( err => {
        return 'error getting moves'
    })
}

export {
    validate,
    getPokemonData,
    buildPokemon,
    buildMove,
};