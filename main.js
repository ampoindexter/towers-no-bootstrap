$(document).ready(init)

function init() {
  $('.disk').on('click', diskSelect);
  $('.tower').on('click', moveDisk)
}

var $selectedDisk;
var $chosenDisk;
var clickedTower;
var numMoves = 0;

// function thisTurn() {
//   clickedTower = '#' + $(this).attr('id');
  
//   if (!$selectedDisk) {
//     diskSelect();
//   } else {
//     moveDisk();
//   }
  
// }


function diskSelect() {
  event.stopPropagation();
  console.log('nthDisk', $(this).find('.disk:nth-of-type(1)'));
  $selectedDisk = $(this).first().parent().find('.disk:nth-of-type(1)').toggleClass('selected');
  console.log('$selectedDisk', $selectedDisk);
  // $selectedDisk.toggleClass('selected');
  // children('.disk:first-child');
  //debugger;
}

function moveDisk() {
  if ($(this).find(':first-child').attr('data-size') > $selectedDisk.attr('data-size')) {
    $selectedDisk.prependTo(this).find(':first');
    $selectedDisk.removeClass('selected');
    $selectedDisk = "";
    numMoves++;
    console.log(numMoves);
  } else {
    alert('Invalid move.')
  }
  if ($('#tower3').children('.disk').length === 3) {
    win();
  } else if (numMoves > 12) {
    alert('Too many moves. Please try again.')
  }
}

function win() {
  alert('YOU FUCKING ROCK!');
}

// function diskDrop() {
//   $('selected').appendTo(clickedTower);
  
   // if (selectedDisk.hasClass('selected')) {
  //   ('.selected').detach();
  // } else {

// function(diskMove) {
//   if ()
// }