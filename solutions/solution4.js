const ul = document.querySelector("ul");

for (let i = 0; i < iceCreamFlavors.length; i++) {
  const flavor = iceCreamFlavors[i];

  const listItem = document.createElement("li");
  listItem.className = 'ice-cream-flavor'
  listItem.textContent = flavor;

  ul.appendChild(listItem);
}