var cats = [
  {
    name: "Pırıltı",
    image: "img/img1.jpg",
  },
  {
    name: "Tomy",
    image: "img/img2.jpg",
  },
  {
    name: "Turuncu",
    image: "img/img3.jpg",
  },
  {
    name: "Zeytin",
    image: "img/img4.jpg",
  },
  {
    name: "Patates",
    image: "img/img5.jpg",
  },
];

var index = 0;
var slaytCount = cats.length;
var settings = {
  duration: "3000",
  random: true,
};
init(settings);

function init(settings) {
  var prev;
  setInterval(function () {
    if (settings.random) {
      //random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      //artan index
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      console.log(index);
      index++;
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = cats[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", cats[index].image);
}

var dogs = [
  {
    name: "Jack",
    image: "img/img6.jpg",
  },
  {
    name: "Joe",
    image: "img/img7.jpg",
  },
  {
    name: "Billie",
    image: "img/img8.jpg",
  },
  {
    name: "Kont",
    image: "img/img9.jpg",
  },
  {
    name: "Pudra",
    image: "img/img10.jpg",
  },
];

var index = 0;
var slaytCount1 = dogs.length;
var settings = {
  duration: "3000",
  random: true,
};
init1(settings);

function init1(settings) {
  var prev;
  setInterval(function () {
    if (settings.random) {
      //random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      //artan index
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide1(index);
      console.log(index);
      index++;
    }
    showSlide1(index);
  }, settings.duration);
}
function showSlide1(i) {
  index = i;
  if (i < 0) {
    index = slaytCount1 - 1;
  }
  if (i >= slaytCount1) {
    index = 0;
  }
  document.querySelector(".card-title-2").textContent = dogs[index].name;
  document
    .querySelector(".card-img-top-2")
    .setAttribute("src", dogs[index].image);
}

var penguins = [
  {
    name: "Pennie",
    image: "img/pen1.jpg",
  },
  {
    name: "Slash",
    image: "img/pen2.jpg",
  },
  {
    name: "Bash",
    image: "img/pen3.jpg",
  },
];

var index = 0;
var slaytCount2 = penguins.length;
var settings = {
  duration: "3000",
  random: true,
};
init2(settings);
function init2(settings) {
  var prev;
  setInterval(function () {
    if (settings.random) {
      //random index
      do {
        index = Math.floor(Math.random() * slaytCount2);
      } while (index == prev);
      prev = index;
    } else {
      //artan index
      if (slaytCount2 == index + 1) {
        index = -1;
      }
      showSlide2(index);
      console.log(index);
      index++;
    }
    showSlide2(index);
  }, settings.duration);
}

function showSlide2(i) {
  index = i;
  if (i < 0) {
    index = slaytCount2 - 1;
  }
  if (i >= slaytCount2) {
    index = 0;
  }
  document.querySelector(".card-title-3").textContent = penguins[index].name;
  document
    .querySelector(".card-img-top-3")
    .setAttribute("src", penguins[index].image);
}

var ducks = [
  {
    name: "Jose",
    image: "img/duck1 (1).jpg",
  },
  {
    name: "Tırıltı",
    image: "img/duck2.jpg",
  },
  {
    name: "Peny",
    image: "img/duck3.jpg",
  },
];

var index = 0;
var slaytCount3 = ducks.length;
var settings = {
  duration: "3000",
  random: true,
};

init3(settings);
function init3(settings) {
  var prev;
  setInterval(function () {
    if (settings.random) {
      //random index
      do {
        index = Math.floor(Math.random() * slaytCount3);
      } while (index == prev);
      prev = index;
    } else {
      //artan index
      if (slaytCount3 == index + 1) {
        index = -1;
      }
      showSlide3(index);
      console.log(index);
      index++;
    }
    showSlide3(index);
  }, settings.duration);
}

function showSlide3(i) {
  index = i;
  if (i < 0) {
    index = slaytCount3 - 1;
  }
  if (i >= slaytCount3) {
    index = 0;
  }
  document.querySelector(".card-title-4").textContent = ducks[index].name;
  document
    .querySelector(".card-img-top-4")
    .setAttribute("src", ducks[index].image);
}
