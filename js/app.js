/* $(function() { */
  const model = [
    {name: "Minik",
    src: "img/1.jpg",
  clickCount: 0},
    {name: "Dummy",
    src: "img/2.jpg",
  clickCount: 0},
    {name: "Sari",
    src: "img/3.jpg",
  clickCount: 0},
    {name: "Pamuk",
    src: "img/4.jpg",
  clickCount: 0},
    {name: "Arap",
    src: "img/5.jpg",
  clickCount: 0},
  ];

  const viewCatList = {
    render: function() {
      let listElement = "";
      model.forEach(function(cat, i) {
        listElement += "<li class='cat " + i + "'>" + cat.name + "</li>"
      });
      $("#cat-list-display").append(listElement);
    }
  };

  const viewCat = {
    render: function() {

    }
  }






/* }); */




/* const catsDiv = document.querySelector("ul");
const cats = document.querySelectorAll("li");

function catInit() {
  for (let i = 0; i < 5; i++) {
    const elem = document.createElement("li");
    elem.innerText = 'Cat - ' + (i+1);
    catsDiv.appendChild(elem);
  }
};

catInit(); */