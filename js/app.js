$(function() {
const model = [
  {
    name: "Minik",
    src: "img/1.jpg",
    clickCount: 0,
    currentCat: true
  },
  {
    name: "Dummy",
    src: "img/2.jpg",
    clickCount: 0,
    currentCat: false
  },
  {
    name: "Sari",
    src: "img/3.jpg",
    clickCount: 0,
    currentCat: false
  },
  {
    name: "Pamuk",
    src: "img/4.jpg",
    clickCount: 0,
    currentCat: false
  },
  {
    name: "Arap",
    src: "img/5.jpg",
    clickCount: 0,
    currentCat: false
  },
];

  const viewCatList = {
    init: function() {
      viewCatList.render();
    },
    render: function() {
      let listElement = "";
      model.forEach(function(cat, i) {
        listElement += "<li class='cat cat" + i + "'>" + cat.name + "</li>"
      });
      $("#cat-list-display").append(listElement);
    }
  };

  const viewCat = {
    init: function() {
      viewCat.render();
    },
    render: function() {
      const catImageDisplay = $("img");
      const catCounterDisplay = $(".click-count");
      const catNameDisplay = $(".cat-name");
      model.forEach(function (cat, i) {
        if(cat.currentCat) {
          catImageDisplay.attr("src", cat.src);
          catNameDisplay.text(cat.name);
          catCounterDisplay.text(cat.clickCount);
        }
      });
    }
  }

  const octopus = {
    init: function() {
      viewCatList.init();
      viewCat.init();
      this.setClickCount();
      this.setCurrentCat();
    },

    setCurrentCat: function() {
      $("#cat-list-display").on("click", "li", function() {
        let clickedCat = $(this).text();
        model.forEach(function(cat, i) {
          if (cat.name === clickedCat) {
            model[i].currentCat = true;
          } else {
            model[i].currentCat = false;
          }
        });
        viewCat.render();
      });
    },

    setClickCount: function() {
      $("img").click(function() {
        model.forEach(function(cat, i) {
          if (model[i].currentCat === true) {
            model[i].clickCount++;
          }
        });
        viewCat.render();
      });
    }
  }

octopus.init();
});