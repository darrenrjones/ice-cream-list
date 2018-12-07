const ul = document.getElementsByClassName('ice-cream-list')[0];

for (const flavor of iceCreamFlavors) {
  let listItem = document.createElement("li");
  listItem.className = 'ice-cream-flavor';

  const flavorText = document.createTextNode(flavor);
  listItem.appendChild(flavorText);
  ul.appendChild(listItem);
}