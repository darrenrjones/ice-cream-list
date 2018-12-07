var items = [];
$.each(iceCreamFlavors, function (i, flavor) {
  items.push('<li class="ice-cream-flavor">'+ flavor + '</li>');
});

$('.ice-cream-list').append(items.join(''));
