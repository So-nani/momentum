const myFavoriteMusic = [
{
  title: "You Make Me",
  artist: "Aviici"
},
{
  title: "Wating For Love",
  artist: "Aviici"
},
{
  title: "Tien Tien",
  artist: "Mili"
},
{
  title: "Summoning 101",
  artist: "Mili"
},
{
  title: "In Hell We Live, Lament",
  artist: "Mili"
},
{
  title: "She Wolf",
  artist: "David Guetta"
},
{
  title: "Titanium",
  artist: "David Guetta"
},
{
  title: "Fisrt of the Year",
  artist: "Skrillex"
},
{
  title: "Make It Bun Dem",
  artist: "Skrillex"
},
{
  title: "Get Lucky",
  artist: "Daft Punk"
},
{
  title: "Giorgio by Moroder",
  artist: "Daft Punk"
}
]

const music = document.querySelector("#music span:first-child");
const artist = document.querySelector("#music span:last-child");
const todaysMusic = myFavoriteMusic[Math.floor(Math.random() * myFavoriteMusic.length)];

music.innerText = todaysMusic.title;
artist.innerText = todaysMusic.artist;