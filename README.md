# Cat Clicker App

This cat clicker project is made using MVC (MV*) design pattern. Styling was not number one priority.

 - There is model object for holding the data: cat images, click counts for each cat separately, and current cat.

 - There is view object for cat list user can choose cats from, for the staged area of current cat that shows current cat's photograph, click counts and name of the cat and admin area which user can enter new name, imgURL, number of clicks for a custom entry.

 - And octopus object handles the user interaction, by changing current cat photograph and its properties to be rendered.

## Getting Started

You can simply fork the repo from [here](https://github.com/ucanfil/Cat-Clicker) to your system and style/add functionalities as you wish.

## Prerequisities

You just need a modern browser to use the app.

## Installing

Clone the repository into your system and open index.html file with your browser or better yet:
> You can play the game online [here.](https://ucanfil.github.io/Cat-Clicker/)

## Playing Instructions

 - Current cat's click count and name are rendered at the top of the page.
 - You can change the current cat from the list below.
 - For every click over the cats image, its clicks increment.
 - Clicking "admin" button opens up admin-panel. In here you can change the current cat properties with your inputs and by clicking "save" button current cat will be set.(Use https protocol for a desired jpg/png file)
 - If you don't enter any inputs and click "save" it will delete the current cat.
 - If you change your mind click "cancel" button for closing admin-panel.

## Built With

  * JQuery, MVC design pattern
  * Html5
  * Css3, flexbox

## Authors

- Burak Tilek - [Ucanfil](https://github.com/ucanfil)