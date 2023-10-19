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



$(function () {
  // iterate over the JSON array
  $.each(games, function (index, item) {
  
    // create a brand new HTML element JUST with code
  
  var card = `<div class="col-md-4"> <div class='card' style="background-color: #582C83; margin-bottom: 10px;"> \
    <h2 class='card-title'> ${ item.title } </h2> \
     <div class='card-body'> Creator: ${ item.author } </div>\
         <div class ='card-footer'> \
         <a href="${ item.link }" target="_blank" class="btn btn-primary" style="background-color: #EAAA00; color: #582C83;"role="button">play</a> \
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
  });

// https://panhead63.github.io/friendly-octo-guide-delta/ Rachel Thompson
// https://loganbeckman21.github.io/charlieLab2/ Logan Beckman
// https://daltrodg.github.io/curly-disco-delta/ Dalton Rodgers
// https://raidengreene.github.io/namefactsdeltafall2023/ Raiden Greene
//  title: "Oppenclicker",
//  link: "https://robcmyk.github.io/Oppenclicker-martin-charlie/",
//  author: "Rob Martin"
//  }
