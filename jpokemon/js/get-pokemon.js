var url = 'https://pokeapi.co/api/v2/pokemon/?limit=6&offset=20'
// var url = 'http://40ca7692.ngrok.io/api/v2/pokemon/'

var myTemplate = $('.myTemplate')
  .detach()
  .removeClass('myTemplate')

var rivalTemplate = $('.rivalTemplate')
  .detach()
  .removeClass('rivalTemplate')

//var attackTemplate = $('.attackTemplate')
//  .detach()
//  .removeClass('attackTemplate')

function loadPokemon(pokemon) {
  $.each(pokemon.results, function(i, pokemon) {
    addPokemon(pokemon);
  });
}

function addPokemon(pokemon) {
  var li = myTemplate.clone();
  li.find('.pokemon-name a')
    .text(pokemon.name)
    .attr('href', pokemon.url)

  li.attr('data-id', pokemon.id);
  $('#myPokemonList').append(li);

  var li = rivalTemplate.clone();
  li.find('.pokemon-name a')
    .text(pokemon.name)
    .attr('href', pokemon.url)

  li.attr('data-id', pokemon.id);
  $('#rivalPokemonList').append(li);
}

function displayMyPokemon(ev){
  ev.preventDefault();
  var url = ev.currentTarget.href;
  $.get({
      url: url,
    }).done(function(item) {
        $('#myPokemon').attr('src', item.sprites.front_default);
      });
}

function displayRivalPokemon(ev){
  ev.preventDefault();
  var url = ev.currentTarget.href;
  $.get({
      url: url,
    }).done(function(item) {
        $('#rivalPokemon').attr('src', item.sprites.front_default);

      });
}

//function displayMyAttack(ev){
//  ev.preventDefault();
//  var url = ev.currentTarget.href;
//  $.get({
//      url: url,
//    }).done(function(item) {
//        $('#myAttack').attr();
//    });
//}

$(document).on('click', 'a.myPokemon', displayMyPokemon);
$(document).on('click', 'a.rivalPokemon', displayRivalPokemon);
//$(document).on('click', 'a.myAttack'), displayMyAttack);
$.get({
  url: url,
  success: loadPokemon
});

$(document)
  .on('click', '.pokemon-name a', function(ev) {
    ev.preventDefault();
    var link = $(ev.currentTarget);
    var url = link.attr('href');
    $.get({
      url: url
    });
  });
