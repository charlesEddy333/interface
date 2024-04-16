//Generate a random number from 1 to 6
const firstRandomNum = math.floor(Math.random() * 6) + 1


//images/1.png upto images/6.png
const firstDiceimage = ' + firstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceimage);