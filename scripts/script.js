//const classCharlies = [
    
//  ];



//   const data = [{
//     id: 1,
//     show: 'Suits',
//     place: 'Peacock',
//     status: 'Watching',
//   }, {
//     id: 2,
//     show: 'Lucifer',
//     place: 'Netflix',
//     status: 'Finished',
//   }, {
//     id: 3,
//     show: 'Outer Banks',
//     place: 'Netflix',
//     status: 'Caught Up',
//   }, {
//     id: 4,
//     show: 'The Rookie',
//     place: 'Hulu',
//     status: 'Caught Up',
//   }];

const games = [
  {
    title: "Defeat Green Goblin",
    link: "https://sladeberryman.github.io/charlie-376/", 
    author: "Slade Berryman"
  },
  {
    title: "Where will you go?",
    link: "https://armac7.github.io/Charlie-Lab/", 
    author: "Ryan McDonald"
  },
  {
    title: "LW's Oblivion Tale",
    link: "https://v-sec0.github.io/centurion-charlie-lab/",
    author: "Levon Watkins"
    },
    {
title: "World of Pigs",
link: "https://beth-ann-tucker.github.io/silver-octo-meme-delta-lab/",
author: "Beth Ann Tucker"
},
{
  title: "Doge's Sunglasses",
  link: "https://johnnycaringi.github.io/Charlie-Caringi/",
  author: "John Caringi"
  },
  {
    title: "Facts.",
    link: "https://rastifer.github.io/animated-octo-dollop-delta-jrast/",
    author: "Jacob Rast"
    },
    {
      title: "Dogebread",
      link: "https://cnorwood10.github.io/congenial-pancake-charlie-376/",
      author: "Colby Norwood"
      },
  {
    title: "JB's fun name facts",
    link: "https://jparker13.github.io/silver-computing-machine-DELTA/",
    author: "Janna Parker"
    },
    {
      title: "Pick a Meme",
      link: "https://ellarohling.github.io/bookish-umbrella-charlie-fall2023/",
      author: "Ella Rohling"
      },
    {
      title: "Ft. Will Smith",
      link: "https://bjacks01.github.io/Brando-Charlie-Lab/",
      author: "Brandon Jacks"
      },
    {
      title: "Doge goes Wow",
      link: "https://lucashasting.github.io/Doge-Game/",
      author: "Lucas Hasting"
      },
    {
      title: "Crying Spongebob",
      link: "https://seungyeonchang.github.io/charlie_fall_2023/",
      author: "Seungyeon Chang"
      },
    {
      title: "Fun Game Zone",
      link: "https://rachelhoneycutt.github.io/ubiquitous-octo-sniffle-charlie/",
      author: "Rachel Honeycutt"
      },
    {
      title: "Special Doge Game",
    link: "https://panhead63.github.io/Charlie-lab/",
      author: "Rachel Thompson"
      },
    {
      title: "Bonk",
      link: "https://raidengreene.github.io/charlielabfall2023-ideal-garbanzo/",
      author: "Raiden Greene"
      },
    {
      title: "Doge goes to the Gym",
      link: "https://daltrodg.github.io/special-guide-charlie/",
      author: "Dalton Rodgers"
      },
    {
      title: "Flying Pigs Olympics",
      link: "https://tyrepickett.github.io/Charlie-flying-pigs/",
      author: "Tyre Pickett"
      },
    {
      title: "Oppenclicker",
      link: "https://robcmyk.github.io/Oppenclicker-martin-charlie/",
      author: "Rob Martin"
      }
    
];


// iterate over the JSON array
$.each(games, function (index, item) {

  // create a brand new HTML element JUST with code

var card = `<div class="col-md-4"> <div class='card' style ="background-color: purple; margin-bottom: 10px;"> \
  <h2 class='card-title'> ${ item.title } </h2> \
   <div class='card-body'> Creator: ${ item.author } </div>\
       <div class ='card-footer'> \
       <a href="${ item.link }" target="_blank" class="btn btn-primary" style="background-color: gold; color: purple;"role="button">play</a> \
   </div>
   </div>
 </div>`; 

 $('#rowx').append(card);

// if (index == 0 || index % 4 == 0) {
//   $('#row1').append(card);
// }else if (index % 2 == 0) {
//   $('#row3').append(card);
// } else if ((index + 1 ) % 4 == 0) {
//   $('#row4').append(card);
// }else {
//   $('#row2').append(card);
// }

});

// https://panhead63.github.io/friendly-octo-guide-delta/ Rachel Thompson
// https://loganbeckman21.github.io/charlieLab2/ Logan Beckman
// https://daltrodg.github.io/curly-disco-delta/ Dalton Rodgers
// https://raidengreene.github.io/namefactsdeltafall2023/ Raiden Greene
//  title: "Oppenclicker",
//  link: "https://robcmyk.github.io/Oppenclicker-martin-charlie/",
//  author: "Rob Martin"
//  }
