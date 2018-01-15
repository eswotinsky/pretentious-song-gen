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
var name = ["Apollo", "Athena", "Atlas", "Beethoven", "Chopin", "Daedalus", "Gaia", "Homer", "Icarus", "Markov", "Maui", "Odin", "Persephone", "Perseus", "Triton", "Ulysses", "Zarathustra", "Zeus"];


//list of nouns
var noun = ["Advent", "Conundrum", "Denouement", "Discord", "Ennui", "Euphoria", "Folly", "Gambit", "Lament", "Pact", "Paradigm", "Quorum", "Refuge", "Sanctum", "Shackles", "Stratagem", "Strife", "Unity", "Vision"];



//list of adjectives
var adj = ["fecund", "luminous", "verdant"];

})
