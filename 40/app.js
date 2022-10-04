"use strict";

function make_album(albumtitle, artistname, songcount) {
  let album = {
    title: albumtitle,
    artist: artistname,
    Track: track(songcount),
  };
  function track(songcount) {
    return songcount;
  }

  return album;
}

let album1 = make_album("The Dark Side of the Moon", "Pink Floyd", 5);
let album2 = make_album("The Wall", "Pink Floyd", 6);
let album3 = make_album("The Division Bell", "Pink Floyd", 3);
console.log(album1);
console.log(album3);
console.log(album2);
