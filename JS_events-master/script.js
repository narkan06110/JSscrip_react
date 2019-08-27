// Fonctionnalité 1

var footer = document.getElementsByTagName('footer')[0];
var count = 0;

var clickFooter = function() {
  count += 1
  console.log(`${count} clicks`)
};
footer.addEventListener("click", clickFooter);

// Fonctionnalité 2

var toggler = document.getElementsByClassName('navbar-toggler')[0];

var clickToggler = function() {
  let header = document.getElementById('navbarHeader').classList;
  if (header.contains('collapse')) {
    header.remove('collapse');
  } else {
    header.add('collapse');
  }
}
toggler.addEventListener("click", clickToggler);

// Fonctionnalité 3

var editbtn = document.getElementsByClassName('btn-outline-secondary')[0];

var clickEdit = function() {
  document.getElementsByClassName('card-text')[0].style.color = 'red';
}

editbtn.addEventListener("click", clickEdit);

// Fonctionnalité 4

var editGreen = document.getElementsByClassName('btn-outline-secondary')[1];
var greenClick = false

var clickEditGreen = function() {
  let text = document.getElementsByClassName('card-text')[1];
  if (greenClick) {
    text.style.color = 'black';
    greenClick = false;
  } else {
    text.style.color = 'green';
    greenClick = true;
  }
}

editGreen.addEventListener("click", clickEditGreen);

// Fonctionnalité 5

var navbar = document.getElementsByClassName("navbar");
var cdn = document.querySelector("link")

var noBootstrap = function () {
  cdn.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" ? 
      cdn .href = " " : 
      cdn.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" ;
};

navbar[0].addEventListener("dblclick", noBootstrap);

// Fonctionnalité 6

var viewButtons = document.getElementsByClassName('btn btn-sm btn-success');
var cardImages = document.getElementsByClassName('card-img-top');
var cardTexts = document.getElementsByClassName('card-text');

var isReduced = Array(viewButtons.length).fill(false);

var reduceCard = function(i) {
  let img = cardImages[i];
  let text = cardTexts[i];
  if (isReduced[i]) {
    isReduced[i] = false;
    img.style.height = "100%";
    img.style.width = "100%";
    text.style.fontSize = "";
  } else {
    isReduced[i] = true;
    img.style.height = "20%";
    img.style.width = "20%";
    text.style.fontSize = "0px";
  }
};

for (let i = 0; i<viewButtons.length ; i++) {
  viewButtons[i].addEventListener("mouseover",function() {
    reduceCard(i);
  });
}


