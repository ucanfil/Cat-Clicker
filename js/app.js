// Wrapping our function with $() in case it runs before DOM,
// and also cannot be manipulated inside console.
$(function () {

  /* ====== M O D E L ====== */
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

 /* ====== V I E W - 1 ====== */
  const viewCatList = {
    init: function() {
      this.render();
    },
    render: function() {
      // Emptying cat-list-display if any input rendered before
      $("#cat-list-display").html("");
      let listElement = "";
      // Getting cats array from octopus and looping over, setting listElement
      // and appending it to cat-list-display
      octopus.getCats().cats.forEach(function (cat, i) {
        listElement += "<li class='cat cat" + i + "'>" + cat.name + "</li>"
      });
      $("#cat-list-display").append(listElement);
    }
  };

 /* ====== V I E W - 2 ====== */
  const viewCat = {
    init: function() {
      // Selecting DOM Elements for easy access
      this.catImageDisplay = $("img");
      this.catCounterDisplay = $(".click-count");
      this.catNameDisplay = $(".cat-name");
      this.render();
    },
    render: function() {
      // Setting currentCat's properties as to be rendered
      $(this.catImageDisplay).attr("src", octopus.getCats().currentCat.src);
      $(this.catCounterDisplay).text(octopus.getCats().currentCat.clickCount);
      $(this.catNameDisplay).text(octopus.getCats().currentCat.name);
    }
  };

 /* ====== V I E W - 3 ====== */
  const viewAdmin = {
    init: function() {
      // Selecting DOM Elements for easy access
      this.adminButton = $(".admin-button");
      this.cancelButton = $(".cancel-button");
      this.saveButton = $(".save-button");

      // On click run octopus' openAdminArea method
      this.adminButton.click(function () {
        octopus.openAdminArea();
      });

      // On click run octopus' closeAdminArea method
      this.cancelButton.click(function (e) {
        octopus.closeAdminArea();
        e.preventDefault();
      });

      // On click run octopus' saveCurrentCat method
      this.saveButton.click(function (e) {
        octopus.saveCurrentCat();
        // Prevents form element to be submitted on click
        e.preventDefault();
      });

      this.render();
    },
    render: function() {
      // If admin panel is true then removes hidden class else adds hidden class
      if (octopus.getCats().adminPanel) {
        $("form").removeClass("hidden");
      } else if (!octopus.getCats().adminPanel) {
        $("form").addClass("hidden");
      }
    }
  }

  /* ====== O C T O P U S / C O N T R O L L E R ====== */
  const octopus = {
    init: function() {
      // First cat in the array is setting to be default
      model.currentCat = model.cats[0];
      // Setting views to be initialized
      viewCatList.init();
      viewCat.init();
      viewAdmin.init();
      this.setClickCount();
      this.setCurrentCat();
    },

    setCurrentCat: function() {
      // On click, loops over cats in model, and sets the currentCat property
      $("#cat-list-display").on("click", "li", function () {
        let clickedCat = $(this).text();
        model.cats.forEach(function(cat, i) {
          if (cat.name === clickedCat) {
            model.currentCat = cat;
          }
        });
        // We need to render cats after changes
        viewCat.render();
      });
    },

    setClickCount: function() {
      // On click, increments currentCat's clickCount by 1
      $("img").click(function() {
        model.currentCat.clickCount++;
        // We need to render cats after changes
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
      // Saving input properties as currentCat properties
      model.currentCat.name = $("#cat-name-input").val();
      model.currentCat.src = $("#imgURL").val();
      model.currentCat.clickCount = $("#clicks-input").val();
      // We need to render viewCat, viewCatList after changes
      viewCat.render();
      viewCatList.render();
    }
  }
  octopus.init();
});