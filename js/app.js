/* $(function() { */
const model = {
  cats: [
    {
      name: "Minik",
      src: "img/1.jpg",
      clickCount: 0
    },
    {
      name: "Dummy",
      src: "img/2.jpg",
      clickCount: 0
    },
    {
      name: "Sari",
      src: "img/3.jpg",
      clickCount: 0
    },
    {
      name: "Pamuk",
      src: "img/4.jpg",
      clickCount: 0
    },
    {
      name: "Arap",
      src: "img/5.jpg",
      clickCount: 0
    },
  ],
  currentCat: "",
  adminPanel: false
};

  const viewCatList = {
    init: function() {
      this.render();
    },
    render: function() {
      let listElement = "";
      octopus.getCats().cats.forEach(function(cat, i) {
        listElement += "<li class='cat cat" + i + "'>" + cat.name + "</li>"
      });
      $("#cat-list-display").append(listElement);
    }
  };

  const viewCat = {
    init: function() {
      this.adminButton = $(".admin-button");
      this.cancelButton = $(".cancel-button");
      this.saveButton = $(".save-button");
      this.catImageDisplay = $("img");
      this.catCounterDisplay = $(".click-count");
      this.catNameDisplay = $(".cat-name");

      this.adminButton.click(function() {
        octopus.openAdminArea();
      });

      this.cancelButton.click(function(e) {
        octopus.closeAdminArea();
        e.preventDefault();
      });

      this.saveButton.click(function(e) {
        octopus.saveCurrentCat();
        e.preventDefault();
      });

      this.render();
    },
    render: function() {
      $(this.catImageDisplay).attr("src", octopus.getCats().currentCat.src);
      $(this.catCounterDisplay).text(octopus.getCats().currentCat.clickCount);
      $(this.catNameDisplay).text(octopus.getCats().currentCat.name);
    }
  }

  const octopus = {
    init: function() {
      model.currentCat = model.cats[0];
      viewCatList.init();
      viewCat.init();
      this.setClickCount();
      this.setCurrentCat();
    },

    setCurrentCat: function() {
      $("#cat-list-display").on("click", "li", function() {
        let clickedCat = $(this).text();
        model.cats.forEach(function(cat, i) {
          if (cat.name === clickedCat) {
            model.currentCat = cat;
          }
        });
        viewCat.render();
      });
    },

    setClickCount: function() {
      $("img").click(function() {
        model.currentCat.clickCount++;
        viewCat.render();
        });
    },

    getCats: function() {
      return model;
    },

    openAdminArea: function() {
      model.adminPanel = true;
    },

    closeAdminArea: function() {
      model.adminPanel = false;
    },

    saveCurrentCat: function() {
      model.cats.forEach(function (cat, i) {
        if (model.cats[i].currentCat === true) {
          model.cats[i].name = $("#cat-name-input").val();
          model.cats[i].src = $("#imgURL").val();
          model.cats[i].clickCount = $("#clicks-input").val();
        }
      });
    }
  }

octopus.init();
/* }); */