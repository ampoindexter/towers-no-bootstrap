$(document).ready(init)

function init() {
  $('.disk').on('click', diskSelect);
  $('.tower').on('click', moveDisk);
  $('#reset').on('click', resetGame);
}

var $selectedDisk;
var $chosenDisk;
var clickedTower;
var numMoves = 0;

function diskSelect() {
  event.stopPropagation();
  $selectedDisk = $(this).first().parent().children('.disk:nth-of-type(1)').toggleClass('selected');
}

function moveDisk() {
  if ($(this).find(':first-child').attr('data-size') > $selectedDisk.attr('data-size')) {
    $selectedDisk.prependTo(this).find(':first');
    $selectedDisk.removeClass('selected');
    $selectedDisk = "";
    numMoves++;
    checkWin();
  } else {
    alert('Invalid move.')
  }
}

function resetGame() {
  location.reload();
}

function checkWin() {
  if ($('#tower3').children('.disk').length === 3) {
    alert('YOU FUCKING ROCK!');
  } else if (numMoves > 12) {
    alert('Too many moves. Please try again.');
  }
}
