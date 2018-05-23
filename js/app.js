$(function() {
const model = {
  cats: [
    {
      name: "Minik",
      src: "img/1.jpg",
      clickCount: 0
    },
    {
      name: "Dumm",
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
  adminPanel: null
};

  const viewCatList = {
    init: function() {
      this.render();
    },
    render: function() {
      $("#cat-list-display").html("");
      let listElement = "";
      octopus.getCats().cats.forEach(function(cat, i) {
        listElement += "<li class='cat cat" + i + "'>" + cat.name + "</li>"
      });
      $("#cat-list-display").append(listElement);
    }
  };

  const viewCat = {
    init: function() {
      this.catImageDisplay = $("img");
      this.catCounterDisplay = $(".click-count");
      this.catNameDisplay = $(".cat-name");
      this.render();
    },
    render: function() {
        $(this.catImageDisplay).attr("src", octopus.getCats().currentCat.src);
        $(this.catCounterDisplay).text(octopus.getCats().currentCat.clickCount);
        $(this.catNameDisplay).text(octopus.getCats().currentCat.name);
    }
  }

  const viewAdmin = {
    init: function() {
      this.adminButton = $(".admin-button");
      this.cancelButton = $(".cancel-button");
      this.saveButton = $(".save-button");

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
    render: function () {
      if (octopus.getCats().adminPanel) {
        $("form").removeClass("hidden");
      } else if (!octopus.getCats().adminPanel) {
        $("form").addClass("hidden");
      }
    }
  }

  const octopus = {
    init: function() {
      model.currentCat = model.cats[0];
      viewCatList.init();
      viewCat.init();
      viewAdmin.init();
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
      viewAdmin.render();
    },

    closeAdminArea: function() {
      model.adminPanel = false;
      viewAdmin.render();
    },

    saveCurrentCat: function() {
      model.currentCat.name = $("#cat-name-input").val();
      model.currentCat.src = $("#imgURL").val();
      model.currentCat.clickCount = $("#clicks-input").val();
      viewCat.render();
      viewCatList.render();
    }
  }
octopus.init();
});