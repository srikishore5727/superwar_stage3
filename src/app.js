const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    // Instead of forloop use Map method
    // Code here

    let detailedPlayers = players.map(function (players, i) {
    if (i % 2 === 0) {
      var type = "hero";
    } else {
      var type = "villain";
    }
    const details = {
      name: players,
      strength: getRandomStrength(),
      image: `images/super-${i + 1}.png`,
      type: type,
    };
    return details;
  });
    
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100)+1;
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here

    const hero = players.filter(function (obj) {
        return obj.type === "hero";
      });
      const villain = players.filter(function (obj) {
        return obj.type === "villain";
      });
    
      if (type === "hero") {
        var x = hero.map(function (players) {
          let frag = `<div class="player">
          <img src="${players.image}" alt="">
          <div class="name">${players.name}</div>
          <div class="strength">${players.strength}</div>
        </div>`;
          return frag;
        });
        fragment = x.join(" ");
      } else {
        var x = villain.map(function (players) {
          let frag = `<div class="player">
          <img src="${players.image}" alt="">
          <div class="name">${players.name}</div>
          <div class="strength">${players.strength}</div>
        </div>`;
          return frag;
        });
        fragment = x.join(" ");
      }
      return fragment;
    };
    

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}