const numbers = [2, 13, 3, 7, 17, 5, 11, 19, 9];
const names = ["Eva", "Adel", "Cedric", "Dior", "Frank", "Bob"];
const fruits = ["pineapple", "kiwi", "banana", "pear", "cherry"];

//sortByLength() - String tömböt a szavak hossza szerint rendezi és a rendezett tömböz adja vissza
function sortByLength() {
  return names.sort((a, b) => a.length - b.length) 
}
console.log("Nevek rendezve hossz szerint: " + sortByLength())
function sortByLengthFruits(){
    return fruits.sort((a, b) => a.length - b.length)
}
console.log("Gyümölcsök rendezve hossz szerint: " + sortByLengthFruits())
// sortByLengthAsc() - String tömböt a szavak hossza szerint rendezi ABC sorrendbe és a rendezett tömböz adja vissza
function sortByLengthAsc(){

}
// sortFrom15() - számokat rendez a 15-től való távolság alapján és a rendezett tömböt adja vissza
function sortFrom15(){
    let tav = [];
    numbers.forEach((item) => {
        tav.push(15 - Math.abs(item));
    })
    return tav.sort((a, b) => a - b)
    
}
console.log("15-től való távolság: " + sortFrom15())
// addAsterisk() - String tömb mindegy elemének az elejére és végére egy csillagot tesz és visszaadja a módosított tömböt
function addAsterisk() {
  return names.map((item) => ' *'+item+'*')
}
console.log("Nevek csillaggal: " + addAsterisk());

// between5And15() - számokat tartalmazó tömb 5 és 15 közötti elemeit adja vissza egy tömbben
function between5And15() {
  return numbers.filter((item) => item >= 5 && item <= 15)
}
console.log("5 és 15 között: " + between5And15());

// isAllOdd() - számokat tartalmazó tömb minden eleme páratlan-e. Visszatérési érték true vagy false
function isAllOdd() {
  return numbers.every((item) => item % 2 != 0)
}
console.log("Mind páratlan-e? " + isAllOdd());

// hasEven() - számokat tartalmazó tömb tartalmaz-e páros elemet. Visszatérési érték true vagy false
function hasEven() {
  return numbers.some((item) => item % 2 == 0)
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
