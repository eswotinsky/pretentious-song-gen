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
var name = ["Aphrodite", "Apollo", "Athena", "Atlas", "Beethoven", "Chopin", "Daedalus", "Gaia", "Homer", "Icarus", "Markov", "Maui", "Newton", "Odin", "Persephone", "Perseus", "Shiva", "Triton", "Ulysses", "Zarathustra", "Zeus"];


//list of nouns
var noun = ["Advent", "Conundrum", "Denouement", "Despair", "Discord", "Ennui", "Euphoria", "Fall", "Folly", "Gambit", "Lament", "Pact", "Paradigm", "Quorum", "Refuge", "Regret", "Sanctum", "Shackles", "Stratagem", "Strife", "Unity", "Vision"];


//"The [adj] [noun]"
  
//list of adjectives
var adj = ["Cerulean", "Fecund", "Luminous", "Righteous", "Serpentine", "Tenacious", "Verdant"];

})
