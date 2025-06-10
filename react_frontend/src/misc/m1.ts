//0
const FirstName: string = "Adam";
const LastName: string = "Mickiewicz";
const FullName: string = FirstName + " " + LastName;
console.log(FullName);

//1
let booleanVal: boolean = true;
const booleanStrVal: string = "false";
// Przypisanie wartości (mutuje zmienną `booleanVal`, ale nie jest metodą tablicową)
booleanVal = booleanStrVal as unknown as boolean;
console.log("booleanVal: " + booleanVal);

//2
let booleanVal2: boolean = true;
const booleanStrVal2: string = "false";
// Przypisanie wartości (mutuje zmienną `booleanVal2`, ale nie jest metodą tablicową)
booleanVal2 = Boolean(booleanStrVal2);
console.log("booleanVal2: " + booleanVal2);

//3
let anyVar: any = 54.3;
// Przypisanie wartości (mutuje zmienną `anyVar`, ale nie jest metodą tablicową)
anyVar = Math.round(anyVar);
console.log("anyVar: " + anyVar);

//4
const arrStr: string[] = ["abc", "cde", "fgh,", "ijk", "asdd23", "asdd234", "asdd623"];
const arrStr2: string[] = ["1abc", "1cde", "1fgh,", "1ijk", "1asdd23", "11133", "111"];

// --- METODY TABLICOWE (Część 1) ---

// .map() - NIE MUTUJE oryginalnej tablicy, zwraca NOWĄ tablicę z przekształconymi elementami.
console.log("\n--- .map() ---");
console.log("arrStr (map do uppercase): " + arrStr.map(i => i.toUpperCase()));
console.log("arrStr po map(): " + arrStr); // arrStr pozostaje niezmienione

// .filter() - NIE MUTUJE oryginalnej tablicy, zwraca NOWĄ tablicę z elementami spełniającymi warunek.
console.log("\n--- .filter() ---");
console.log("arrStr (words with > 3 characters): " + arrStr.filter(i => i.length > 3));

// Modyfikacja elementu tablicy przez indeks - MUTUJE tablicę (dodaje/zmienia element na miejscu).
// Ważne: `const` zapobiega tylko ponownemu przypisaniu całej tablicy, nie modyfikacji jej zawartości.
console.log("\n--- Modyfikacja przez indeks ---");
arrStr[7] = "added";
console.log("arrStr po arrStr[7] = \"added\": " + arrStr); // arrStr jest teraz dłuższe i zawiera "added"

// .at() - NIE MUTUJE, zwraca wartość elementu na danym indeksie.
console.log("\n--- .at() ---");
console.log("arrStr.at(0): " + arrStr.at(0));
console.log("arrStr.at(-1): " + arrStr.at(-1)); // Ostatni element

// .concat() - NIE MUTUJE oryginalnej tablicy, zwraca NOWĄ tablicę będącą połączeniem.
console.log("\n--- .concat() ---");
console.log("arrStr.concat(arrStr2): " + arrStr.concat(arrStr2)); // arrStr i arrStr2 pozostają niezmienione

// .copyWithin() - MUTUJE tablicę, kopiując elementy w obrębie tej samej tablicy.
// Nie zmienia długości tablicy.
console.log("\n--- .copyWithin() ---");
const arrCopyWithinTest = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log("Original arrCopyWithinTest: " + arrCopyWithinTest);
arrCopyWithinTest.copyWithin(0, 3, 6);
console.log("arrCopyWithinTest.copyWithin(0, 3, 6): " + arrCopyWithinTest); // arrCopyWithinTest zostało zmienione

// .entries() - NIE MUTUJE tablicy, zwraca iterator par [indeks, wartość].
// Pętla `for...of` iteruje po tym iteratorze.
console.log("\n--- .entries() ---");
for (const [index, value] of arrStr.entries()) {
    console.log(`${index}: ${value}`);
}

//5
// .every() - NIE MUTUJE tablicy, zwraca boolean (true, jeśli WSZYSTKIE elementy spełniają warunek).
console.log("\n--- .every() ---");
console.log("arrStr.every(i => i.length > 3): " + arrStr.every(i => i.length > 3)); // Prawdopodobnie false, bo "abc" ma długość 3

// .some() - NIE MUTUJE tablicy, zwraca boolean (true, jeśli CO NAJMNIEJ JEDEN element spełnia warunek).
console.log("\n--- .some() ---");
console.log("arrStr.some(i => i.length > 3): " + arrStr.some(i => i.length > 3)); // Prawdopodobnie true, bo są dłuższe stringi

// .find() - NIE MUTUJE tablicy, zwraca PIERWSZY element spełniający warunek (lub undefined, jeśli żaden nie pasuje).
console.log("\n--- .find() ---");
console.log("arrStr.find(i => i.length > 3): " + arrStr.find(i => i.length > 3));

// .findIndex() - NIE MUTUJE tablicy, zwraca INDEKS pierwszego elementu spełniającego warunek (lub -1).
console.log("\n--- .findIndex() ---");
console.log("arrStr.findIndex(i => i.length > 3): " + arrStr.findIndex(i => i.length > 3));

// .sort() - MUTUJE tablicę, sortując jej elementy na miejscu.
console.log("\n--- .sort() ---");
const numbersToSort = [10, 2, 100, 20, 5];
console.log("Original numbersToSort: " + numbersToSort);
numbersToSort.sort((a, b) => a - b); // Sortowanie numeryczne rosnąco
console.log("numbersToSort.sort() (numerycznie): " + numbersToSort); // numbersToSort zostało zmienione

// --- POZOSTAŁE WAŻNE METODY TABLICOWE ---

// .forEach() - NIE MUTUJE tablicy, wykonuje funkcję dla każdego elementu. Nie zwraca nic (undefined).
console.log("\n--- .forEach() ---");
console.log("Iteracja z .forEach():");
arrStr.forEach((item, index) => {
    console.log(`Element ${index}: ${item}`);
});
console.log("arrStr po forEach(): " + arrStr); // arrStr pozostaje niezmienione

// .reduce() - NIE MUTUJE tablicy, zwraca pojedynczą wartość (wynik "redukcji" tablicy do jednej wartości).
console.log("\n--- .reduce() ---");
const sumOfLengths = arrStr.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);
console.log("Suma długości stringów w arrStr (reduce): " + sumOfLengths);
const combinedString = arrStr.reduce((acc, val) => acc + " " + val);
console.log("Połączone stringi z arrStr (reduce): " + combinedString);
console.log("arrStr po reduce(): " + arrStr); // arrStr pozostaje niezmienione

// .push() - MUTUJE tablicę, dodaje jeden lub więcej elementów na koniec tablicy i zwraca nową długość tablicy.
console.log("\n--- .push() ---");
const pushArray = ['apple', 'banana'];
console.log("Original pushArray: " + pushArray);
const newLength = pushArray.push('orange', 'grape');
console.log("pushArray po push(): " + pushArray); // pushArray zostało zmienione
console.log("Nowa długość: " + newLength);

// .pop() - MUTUJE tablicę, usuwa ostatni element z tablicy i zwraca ten usunięty element.
console.log("\n--- .pop() ---");
const popArray = ['one', 'two', 'three'];
console.log("Original popArray: " + popArray);
const removedElement = popArray.pop();
console.log("popArray po pop(): " + popArray); // popArray zostało zmienione
console.log("Usunięty element: " + removedElement);

// .shift() - MUTUJE tablicę, usuwa pierwszy element z tablicy i zwraca ten usunięty element.
console.log("\n--- .shift() ---");
const shiftArray = ['first', 'second', 'third'];
console.log("Original shiftArray: " + shiftArray);
const shiftedElement = shiftArray.shift();
console.log("shiftArray po shift(): " + shiftArray); // shiftArray zostało zmienione
console.log("Usunięty element: " + shiftedElement);

// .unshift() - MUTUJE tablicę, dodaje jeden lub więcej elementów na początek tablicy i zwraca nową długość tablicy.
console.log("\n--- .unshift() ---");
const unshiftArray = ['middle', 'last'];
console.log("Original unshiftArray: " + unshiftArray);
const newUnshiftLength = unshiftArray.unshift('new_first', 'new_second');
console.log("unshiftArray po unshift(): " + unshiftArray); // unshiftArray zostało zmienione
console.log("Nowa długość: " + newUnshiftLength);

// .splice() - MUTUJE tablicę, zmieniając jej zawartość przez usunięcie istniejących elementów i/lub dodanie nowych.
// Zwraca tablicę zawierającą usunięte elementy.
console.log("\n--- .splice() ---");
const spliceArray = ['a', 'b', 'c', 'd', 'e'];
console.log("Original spliceArray: " + spliceArray);
// Usunięcie 2 elementów od indeksu 1, i dodanie 'x', 'y'
const removedSpliceElements = spliceArray.splice(1, 2, 'x', 'y');
console.log("spliceArray po splice(1, 2, 'x', 'y'): " + spliceArray); // spliceArray zostało zmienione
console.log("Usunięte elementy przez splice: " + removedSpliceElements);

// .slice() - NIE MUTUJE tablicy, zwraca PŁYTKĄ KOPIĘ fragmentu tablicy.
console.log("\n--- .slice() ---");
const sliceArray = ['red', 'green', 'blue', 'yellow', 'purple'];
console.log("Original sliceArray: " + sliceArray);
const slicedPart = sliceArray.slice(1, 4); // Kopiuje od indeksu 1 do 4 (wyłączając)
console.log("slicedPart: " + slicedPart); // ['green', 'blue', 'yellow']
console.log("sliceArray po slice(): " + sliceArray); // sliceArray pozostaje niezmienione

// .indexOf() - NIE MUTUJE, zwraca indeks pierwszego wystąpienia elementu (lub -1).
console.log("\n--- .indexOf() ---");
const searchArray = ['apple', 'orange', 'apple', 'banana'];
console.log("searchArray.indexOf('apple'): " + searchArray.indexOf('apple')); // 0
console.log("searchArray.indexOf('grape'): " + searchArray.indexOf('grape')); // -1

// .lastIndexOf() - NIE MUTUJE, zwraca indeks ostatniego wystąpienia elementu (lub -1).
console.log("\n--- .lastIndexOf() ---");
console.log("searchArray.lastIndexOf('apple'): " + searchArray.lastIndexOf('apple')); // 2

// .includes() - NIE MUTUJE, zwraca boolean (czy tablica zawiera dany element).
console.log("\n--- .includes() ---");
console.log("searchArray.includes('orange'): " + searchArray.includes('orange')); // true
console.log("searchArray.includes('kiwi'): " + searchArray.includes('kiwi'));     // false

// .join() - NIE MUTUJE tablicy, zwraca string, łącząc wszystkie elementy.
console.log("\n--- .join() ---");
const joinArray = ['alpha', 'beta', 'gamma'];
console.log("joinArray.join('-'): " + joinArray.join('-')); // "alpha-beta-gamma"
console.log("joinArray po join(): " + joinArray); // joinArray pozostaje niezmienione


//end
console.log("\n--- PODSUMOWANIE ---");
// Wyświetlamy końcowy stan arrStr, które było mutowane przez:
// arrStr[7] = "added";
// arrStr.copyWithin(0, 3, 6);
// arrStr.sort();
console.log("final arrStr[]: " + arrStr);