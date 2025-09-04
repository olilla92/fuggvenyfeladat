const numbers = [2, 13, 3, 7, 17, 5, 11, 19, 9];
const names = ["Eva", "Adel", "Cedric", "Dior", "Frank", "Bob"];
const fruits = ["pineapple", "kiwi", "banana", "pear", "cherry"];

//sortByLength() - String tömböt a szavak hossza szerint rendezi és a rendezett tömböz adja vissza
function sortByLength() {
  for (let i = 0; i < numbers.length; i++) {}
}

// sortByLengthAsc() - String tömböt a szavak hossza szerint rendezi ABC sorrendbe és a rendezett tömböz adja vissza

// sortFrom15() - számokat rendez a 15-től való távolság alapján és a rendezett tömböt adja vissza

// addAsterisk() - String tömb mindegy elemének az elejére és végére egy csillagot tesz és visszaadja a módosított tömböt
function addAsterisk() {
  const asterisk = [];
}
console.log(addAsterisk());

// between5And15() - számokat tartalmazó tömb 5 és 15 közötti elemeit adja vissza egy tömbben
function between5And15(ot) {
  const otos = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 5 && numbers[i] <= 15) {
      otos.push(numbers[i]);
    }
  }
  return otos;
}
console.log("5 és 15 között: " + between5And15());

// isAllOdd() - számokat tartalmazó tömb minden eleme páratlan-e. Visszatérési érték true vagy false
function isAllOdd() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      return false;
    } else {
      return true;
    }
  }
}
console.log("Mind páratlan-e? " + isAllOdd());

// hasEven() - számokat tartalmazó tömb tartalmaz-e páros elemet. Visszatérési érték true vagy false
function hasEven() {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }
}
console.log("Van-e közte páros szám? " + hasEven());

// sigma() - számokat tartalmazó tömb elemeit összeszorozza és a szorzatot adja vissza
function sigma() {
  let eredmeny = 1;
  for (let i = 0; i < numbers.length; i++) {
    eredmeny *= numbers[i];
  }
  return eredmeny;
}
console.log("Az összes szám szorzata: " + sigma());
