let greenPlanet = document.getElementById(`greenplanet`);
greenPlanet.innerHTML = `<u>RED ALERT</u> ~ SOMETHING IS WRONG`;
greenPlanet.setAttribute(`class`, `redtext`);

let redPlanet = document.getElementById(`redplanet`);
redPlanet.innerHTML = `This is the <u>RED</u> planet with <u>BLUE</u> text`;
redPlanet.setAttribute(`class`, `bluetext`);

let bluePlanet = document.getElementById(`blueplanet`);
bluePlanet.innerHTML = `This is the <u>BLUE</u> planet with <u>GREEN</u> text`;
bluePlanet.setAttribute(`class`, `greentext`);

console.log(greenPlanet.innerHTML);
console.log(redPlanet.innerHTML);
console.log(bluePlanet.innerHTML);
