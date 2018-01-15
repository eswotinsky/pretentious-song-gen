$(document).ready(function(){
  $("button").click(function() {
    $("#results").text(randWord(name) + "'s " + randWord(noun));
})

//return the value of a random index from a passed array
function randWord(list) {
  var i = Math.floor(Math.random() * list.length);
  return list[i];
}


//list of proper names
var name = ["Apollo", "Athena", "Beethoven", "Chopin", "Daedalus", "Gaia", "Homer", "Icarus", "Maui", "Odin", "Persephone", "Ulysses", "Zarathustra", "Zeus"];


//list of nouns
var noun = ["Advent", "Conundrum", "Denouement", "Ennui", "Folly", "Gambit", "Lament", "Paradigm", "Quorum", "Stratagem", "Vision"];

})


//list of adjectives
var adj = ["fecund", "luminous", "verdant"];
