// `import { log } from "console";` - ta linia nie jest zazwyczaj potrzebna w TypeScript/Node.js,
// ponieważ `console.log` jest globalnie dostępny. Można ją bezpiecznie usunąć.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// --- Sekcja 1: Podstawowe typy i zmienne ---
/**
 * @section Podstawowe typy i zmienne
 * Przykłady deklaracji i użycia podstawowych typów danych w TypeScript:
 * string, boolean, number, any.
 * Pokazuje również proste operacje na zmiennych i ich mutację.
 */
// 0. Typowanie string
var FirstName = "Adam";
var LastName = "Mickiewicz";
var FullName = FirstName + " " + LastName;
console.log("Pe\u0142ne imi\u0119: ".concat(FullName)); // Użycie template string dla czytelności
// 1. Typowanie boolean (próba przypisania niezgodnego typu przez asercję)
var booleanVal = true;
var booleanStrVal = "false"; // String "false"
// `as unknown as boolean` - to jest asercja typu, która "mówi" TypeScriptowi,
// aby traktował `booleanStrVal` (który jest stringiem) jako `boolean`.
// Jest to ryzykowne i powinno być używane tylko wtedy, gdy jesteś absolutnie pewien,
// że konwersja jest bezpieczna. W tym przypadku string "false" NIE jest booleanem false.
booleanVal = booleanStrVal;
console.log("booleanVal (po asercji): " + booleanVal); // Wynik to string "false", nie boolean false!
// 2. Poprawne konwertowanie stringa na boolean
var booleanVal2 = true;
var booleanStrVal2 = "false";
// `Boolean(value)` - funkcja globalna, która konwertuje wartość na typ boolean.
// Pamiętaj, że w JavaScript/TypeScript:
// - Puste stringi "", 0, null, undefined, NaN to `false`.
// - NIEpuste stringi (np. "false", "0", " ") to `true`.
// Zatem `Boolean("false")` zwróci `true`!
booleanVal2 = Boolean(booleanStrVal2);
console.log("booleanVal2 (po Boolean()): " + booleanVal2); // Wynik to true (boolean), bo "false" nie jest pustym stringiem
// 3. Typowanie any (dowolny typ) i operacje na liczbach
var anyVar = 54.3; // Zmienna typu 'any' może przechowywać dowolny typ
// `Math.round()` - zaokrągla liczbę do najbliższej całkowitej.
anyVar = Math.round(anyVar); // Mutuje zmienną `anyVar`
console.log("anyVar (po zaokrągleniu): " + anyVar);
// --- Sekcja 2: Tablice i ich metody ---
/**
 * @section Tablice i ich metody
 * Demonstracja deklaracji tablic oraz kluczowych metod tablicowych w JavaScript/TypeScript.
 * Podkreślono, czy dana metoda mutuje (zmienia) oryginalną tablicę, czy zwraca nową.
 */
var arrStr = ["abc", "cde", "fgh", "ijk", "asdd23", "asdd234", "asdd623"];
var arrStr2 = ["1abc", "1cde", "1fgh,", "1ijk", "1asdd23", "11133", "111"];
console.log("\n--- Metody Tablicowe (Część 1) ---");
// .map() - NIE MUTUJE oryginalnej tablicy.
// Tworzy i zwraca NOWĄ tablicę, w której każdy element jest wynikiem
// zastosowania funkcji przekazanej jako argument do elementu oryginalnej tablicy.
console.log("\n--- .map() ---");
console.log("arrStr (map do uppercase): " + arrStr.map(function (i) { return i.toUpperCase(); }));
console.log("arrStr po map(): " + arrStr); // arrStr pozostaje niezmienione
// .filter() - NIE MUTUJE oryginalnej tablicy.
// Tworzy i zwraca NOWĄ tablicę zawierającą tylko te elementy,
// które spełniają warunek określony w funkcji callback.
console.log("\n--- .filter() ---");
console.log("arrStr (słowa z > 3 znakami): " + arrStr.filter(function (i) { return i.length > 3; }));
console.log("arrStr po filter(): " + arrStr); // arrStr pozostaje niezmienione
// Modyfikacja elementu tablicy przez indeks - MUTUJE tablicę.
// Bezpośrednie przypisanie wartości do indeksu zmienia element w oryginalnej tablicy.
// Ważne: `const` dla tablicy oznacza, że nie można ponownie przypisać całej tablicy,
// ale można modyfikować jej zawartość (elementy).
console.log("\n--- Modyfikacja przez indeks ---");
arrStr[7] = "added"; // Dodaje element na indeksie 7
console.log("arrStr po arrStr[7] = \"added\": " + arrStr); // arrStr jest teraz dłuższe i zawiera "added"
// .at() - NIE MUTUJE tablicy.
// Zwraca element z tablicy pod określonym indeksem. Obsługuje indeksy ujemne (liczone od końca).
console.log("\n--- .at() ---");
console.log("arrStr.at(0): " + arrStr.at(0));
console.log("arrStr.at(-1): " + arrStr.at(-1)); // Zwraca ostatni element
// .concat() - NIE MUTUJE oryginalnych tablic.
// Tworzy i zwraca NOWĄ tablicę, która jest połączeniem dwóch lub więcej tablic.
console.log("\n--- .concat() ---");
console.log("arrStr.concat(arrStr2): " + arrStr.concat(arrStr2));
console.log("arrStr po concat(): " + arrStr); // arrStr i arrStr2 pozostają niezmienione
// .copyWithin() - MUTUJE tablicę.
// Kopiuje sekwencję elementów tablicy do innej pozycji w tej samej tablicy.
// Nie zmienia długości tablicy.
console.log("\n--- .copyWithin() ---");
var arrCopyWithinTest = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log("Original arrCopyWithinTest: " + arrCopyWithinTest);
arrCopyWithinTest.copyWithin(0, 3, 6); // Kopiuje elementy od indeksu 3 do 5 (d, e, f)
// i wkleja je od indeksu 0.
console.log("arrCopyWithinTest.copyWithin(0, 3, 6): " + arrCopyWithinTest); // arrCopyWithinTest zostało zmienione
// .entries() - NIE MUTUJE tablicy.
// Zwraca nowy obiekt iteratora tablicy, który zawiera pary [indeks, wartość] dla każdego indeksu w tablicy.
// Często używany w pętlach `for...of`.
console.log("\n--- .entries() ---");
for (var _i = 0, _a = arrStr.entries(); _i < _a.length; _i++) {
    var _b = _a[_i], index = _b[0], value = _b[1];
    console.log("".concat(index, ": ").concat(value));
}
// 5. Metody sprawdzające zawartość tablicy
// .every() - NIE MUTUJE tablicy.
// Zwraca `true`, jeśli funkcja callback zwróci `true` dla WSZYSTKICH elementów tablicy.
console.log("\n--- .every() ---");
console.log("arrStr.every(i => i.length > 3): " + arrStr.every(function (i) { return i.length > 3; }));
// .some() - NIE MUTUJE tablicy.
// Zwraca `true`, jeśli funkcja callback zwróci `true` dla CO NAJMNIEJ JEDNEGO elementu tablicy.
console.log("\n--- .some() ---");
console.log("arrStr.some(i => i.length > 3): " + arrStr.some(function (i) { return i.length > 3; }));
// .find() - NIE MUTUJE tablicy.
// Zwraca PIERWSZY element w tablicy, który spełnia warunek określony w funkcji callback.
// Zwraca `undefined`, jeśli żaden element nie spełnia warunku.
console.log("\n--- .find() ---");
console.log("arrStr.find(i => i.length > 3): " + arrStr.find(function (i) { return i.length > 3; }));
// .findIndex() - NIE MUTUJE tablicy.
// Zwraca INDEKS pierwszego elementu w tablicy, który spełnia warunek.
// Zwraca `-1`, jeśli żaden element nie spełnia warunku.
console.log("\n--- .findIndex() ---");
console.log("arrStr.findIndex(i => i.length > 3): " + arrStr.findIndex(function (i) { return i.length > 3; }));
// .sort() - MUTUJE tablicę.
// Sortuje elementy tablicy na miejscu i zwraca posortowaną tablicę.
// Domyślnie sortuje jako stringi. Dla liczb potrzebna jest funkcja porównująca.
console.log("\n--- .sort() ---");
var numbersToSort = [10, 2, 100, 20, 5];
console.log("Original numbersToSort: " + numbersToSort);
numbersToSort.sort(function (a, b) { return a - b; }); // Sortowanie numeryczne rosnąco (a-b dla rosnąco, b-a dla malejąco)
console.log("numbersToSort.sort() (numerycznie): " + numbersToSort); // numbersToSort zostało zmienione
// --- Pozostałe Ważne Metody Tablicowe ---
// .forEach() - NIE MUTUJE tablicy.
// Wykonuje podaną funkcję callback raz dla każdego elementu tablicy.
// Nie zwraca żadnej wartości (zwraca `undefined`).
console.log("\n--- .forEach() ---");
console.log("Iteracja z .forEach():");
arrStr.forEach(function (item, index) {
    console.log("Element ".concat(index, ": ").concat(item));
});
console.log("arrStr po forEach(): " + arrStr); // arrStr pozostaje niezmienione
// .reduce() - NIE MUTUJE tablicy.
// Wykonuje funkcję "reducer" na każdym elemencie tablicy (od lewej do prawej),
// zwracając pojedynczą wartość wynikową.
console.log("\n--- .reduce() ---");
var sumOfLengths = arrStr.reduce(function (accumulator, currentValue) { return accumulator + currentValue.length; }, 0);
console.log("Suma długości stringów w arrStr (reduce): " + sumOfLengths);
var combinedString = arrStr.reduce(function (acc, val) { return acc + " " + val; });
console.log("Połączone stringi z arrStr (reduce): " + combinedString);
console.log("arrStr po reduce(): " + arrStr); // arrStr pozostaje niezmienione
// .push() - MUTUJE tablicę.
// Dodaje jeden lub więcej elementów na koniec tablicy i zwraca nową długość tablicy.
console.log("\n--- .push() ---");
var pushArray = ['apple', 'banana'];
console.log("Original pushArray: " + pushArray);
var newLength = pushArray.push('orange', 'grape');
console.log("pushArray po push(): " + pushArray); // pushArray zostało zmienione
console.log("Nowa długość: " + newLength);
// .pop() - MUTUJE tablicę.
// Usuwa OSTATNI element z tablicy i zwraca ten usunięty element.
console.log("\n--- .pop() ---");
var popArray = ['one', 'two', 'three'];
console.log("Original popArray: " + popArray);
var removedElement = popArray.pop();
console.log("popArray po pop(): " + popArray); // popArray zostało zmienione
console.log("Usunięty element: " + removedElement);
// .shift() - MUTUJE tablicę.
// Usuwa PIERWSZY element z tablicy i zwraca ten usunięty element.
console.log("\n--- .shift() ---");
var shiftArray = ['first', 'second', 'third'];
console.log("Original shiftArray: " + shiftArray);
var shiftedElement = shiftArray.shift();
console.log("shiftArray po shift(): " + shiftArray); // shiftArray zostało zmienione
console.log("Usunięty element: " + shiftedElement);
// .unshift() - MUTUJE tablicę.
// Dodaje jeden lub więcej elementów na POCZĄTEK tablicy i zwraca nową długość tablicy.
console.log("\n--- .unshift() ---");
var unshiftArray = ['middle', 'last'];
console.log("Original unshiftArray: " + unshiftArray);
var newUnshiftLength = unshiftArray.unshift('new_first', 'new_second');
console.log("unshiftArray po unshift(): " + unshiftArray); // unshiftArray zostało zmienione
console.log("Nowa długość: " + newUnshiftLength);
// .splice() - MUTUJE tablicę.
// Zmienia zawartość tablicy przez usunięcie istniejących elementów i/lub dodanie nowych.
// Zwraca tablicę zawierającą usunięte elementy.
console.log("\n--- .splice() ---");
var spliceArray = ['a', 'b', 'c', 'd', 'e'];
console.log("Original spliceArray: " + spliceArray);
// splice(start: number, deleteCount?: number, ...items: T[])
// Usunięcie 2 elementów od indeksu 1 ('b', 'c'), i dodanie 'x', 'y'
var removedSpliceElements = spliceArray.splice(1, 2, 'x', 'y');
console.log("spliceArray po splice(1, 2, 'x', 'y'): " + spliceArray); // spliceArray zostało zmienione
console.log("Usunięte elementy przez splice: " + removedSpliceElements);
// .slice() - NIE MUTUJE tablicy.
// Zwraca PŁYTKĄ KOPIĘ fragmentu tablicy do nowej tablicy.
// Oryginalna tablica pozostaje niezmieniona.
console.log("\n--- .slice() ---");
var sliceArray = ['red', 'green', 'blue', 'yellow', 'purple'];
console.log("Original sliceArray: " + sliceArray);
var slicedPart = sliceArray.slice(1, 4); // Kopiuje elementy od indeksu 1 do 3 (4 jest wyłączone)
console.log("slicedPart (od indeksu 1 do 3): " + slicedPart); // ['green', 'blue', 'yellow']
console.log("sliceArray po slice(): " + sliceArray); // sliceArray pozostaje niezmienione
// .indexOf() - NIE MUTUJE tablicy.
// Zwraca indeks pierwszego wystąpienia podanego elementu w tablicy.
// Zwraca -1, jeśli element nie zostanie znaleziony.
console.log("\n--- .indexOf() ---");
var searchArray = ['apple', 'orange', 'apple', 'banana'];
console.log("searchArray.indexOf('apple'): " + searchArray.indexOf('apple')); // 0
console.log("searchArray.indexOf('grape'): " + searchArray.indexOf('grape')); // -1
// .lastIndexOf() - NIE MUTUJE tablicy.
// Zwraca indeks ostatniego wystąpienia podanego elementu w tablicy.
// Zwraca -1, jeśli element nie zostanie znaleziony.
console.log("\n--- .lastIndexOf() ---");
console.log("searchArray.lastIndexOf('apple'): " + searchArray.lastIndexOf('apple')); // 2
// .includes() - NIE MUTUJE tablicy.
// Zwraca boolean (true/false) w zależności od tego, czy tablica zawiera dany element.
console.log("\n--- .includes() ---");
console.log("searchArray.includes('orange'): " + searchArray.includes('orange')); // true
console.log("searchArray.includes('kiwi'): " + searchArray.includes('kiwi')); // false
// .join() - NIE MUTUJE tablicy.
// Tworzy i zwraca nowy string, łącząc wszystkie elementy tablicy w jeden.
// Można podać opcjonalny separator.
console.log("\n--- .join() ---");
var joinArray = ['alpha', 'beta', 'gamma'];
console.log("joinArray.join('-'): " + joinArray.join('-')); // "alpha-beta-gamma"
console.log("joinArray po join(): " + joinArray); // joinArray pozostaje niezmienione
console.log("\n--- PODSUMOWANIE ZMIAN W arrStr ---");
// Wyświetlamy końcowy stan arrStr, które było mutowane przez:
// arrStr[7] = "added";
// arrStr.copyWithin(0, 3, 6); // Wcześniejsze użycie, które wpłynęło na arrStr
// arrStr.sort(); // Jeśli było używane na arrStr bezpośrednio
console.log("final arrStr[]: " + arrStr);
// --- Sekcja 3: Typy obiektowe, aliasy i interfejsy ---
/**
 * @section Typy obiektowe, aliasy i interfejsy
 * Przykłady definiowania i użycia struktur danych w TypeScript.
 */
// 1. Deklaracja zmiennych z jawnym typowaniem
var nameVar = "Mateusz";
var age = 22;
var isStudent = true;
// let num: number = 23;
// nameVar = num; // Wynik próby przypisania: TS2322: Type 'number' is not assignable to type 'string'.
// TypeScript wykrywa błąd typu na etapie kompilacji,
// ponieważ `nameVar` jest typu `string`, a próbujemy przypisać `number`.
// 2. Dodawanie stringa do liczby (co dzieje się w JavaScript/TypeScript)
var numbers = [1, 2, 3, 4, 5];
var fruits = ["apple", "banana", "cherry"];
// W JavaScript/TypeScript, operator `+` działa jako dodawanie numeryczne LUB konkatenacja stringów.
// Jeśli jeden z operandów jest stringiem, a drugi nie jest obiektem, to drugi operand
// jest konwertowany na string i następuje konkatenacja.
console.log("Dodawanie stringa: ".concat(fruits[0], " do liczby ").concat(numbers[0], " "));
console.log("Wynik: ".concat(numbers[0] + fruits[0])); // Wynik: "1apple" (liczba 1 staje się stringiem "1", a potem jest konkatenacja)
// To samo dzieje się tutaj, po prostu wcześniej skonkatenowaliśmy już "1apple"
console.log("Dodawanie stringa: ".concat(fruits[0], " do \"").concat(numbers[0] + fruits[0], "\" "));
console.log("Wynik: ".concat(numbers[0] + fruits[0] + " do " + fruits[0], " ")); // Wynik: "1apple do apple"
// Brak błędu, ponieważ JavaScript domyślnie konwertuje typy w tej operacji
// ("type coercion" lub "type coversion"). TypeScript nie zgłasza błędu,
// bo to jest zgodne z zachowaniem JS, choć może prowadzić do nieoczekiwanych wyników.
// 3. Obiekty z typem `any` - brak sprawdzania struktury
var personExample = {
    name: "Adrian",
    age: 2,
    city: "Warszawa"
};
var personSecondExample = {
    name: "Adrian",
    age: 22,
    city: "Warszawa"
};
// Dzięki typowi `any`, możemy dodawać nowe właściwości w trakcie działania programu
// bez żadnych ostrzeżeń ze strony TypeScripta.
personExample.street = "Kwiatowa";
console.log("personExample (z dodanym 'street'):", personExample);
personSecondExample.street = "Kwiatowa";
console.log("personSecondExample (z dodanym 'street'):", personSecondExample);
var product1 = {
    id: 1,
    name: "Mleko",
    price: 2.99
};
var product2 = {
    id: 2,
    name: "Chleb",
    price: 1.99,
    description: "Brązowy" // Opcjonalna właściwość jest podana
};
console.log("Produkt 1:", product1);
console.log("Produkt 2:", product2);
var productArray = [product1, product2];
console.log("\nIteracja po tablicy produktów:");
for (var i = 0; i < productArray.length; i++) {
    console.log("- Nazwa: ".concat(productArray[i].name, ", Cena: ").concat(productArray[i].price));
}
// Extra: Rozszerzanie obiektów za pomocą operatora spread (...)
// Operator spread tworzy NOWY obiekt, kopiując wszystkie właściwości z istniejącego obiektu
// i dodając/nadpisując nowe. Oryginalny obiekt (product3) pozostaje niezmieniony.
var product3 = {
    id: 3,
    name: "Czekolada",
    price: 3.99,
    description: "Czekoladowa"
};
var extendedProduct = __assign(__assign({}, product3), { kcal: 300 // Dodaje nową właściwość 'kcal'
 });
console.log("\nRozszerzony produkt (extendedProduct):", extendedProduct);
var userID = 1;
console.log("ID użytkownika (alias typu):", userID);
var statusVar = "available";
console.log("Status produktu (typ literałowy):", statusVar);
var employee1 = {
    name: "Adam",
    surname: "Mickiewicz",
    position: "writer",
    salary: 3000
};
console.log("Dane pracownika (dziedziczenie interfejsów):", employee1);
// --- Sekcja 5: Funkcje i ich typowanie ---
/**
 * @section Funkcje i ich typowanie
 * Przykłady definiowania funkcji w TypeScript, w tym typowanie parametrów,
 * wartości zwracanych, parametry opcjonalne i typ `void`.
 */
// 1. Podstawowe funkcje z typowaniem parametrów i wartości zwracanej
function add(a, b) {
    return a + b;
}
console.log("Wynik dodawania (1+2):", add(1, 2));
// console.log(add(1, "2")); // Ten kod spowodowałby błąd kompilacji:
// TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
function welcome(name) {
    return "Hello, " + name;
}
console.log("Powitanie:", welcome("Mateusz"));
// 2. Funkcje z parametrami opcjonalnymi
// Parametr `taxRate` jest opcjonalny (oznacza to `?`).
// Jeśli nie zostanie podany, będzie `undefined`.
function calculateTax(amount, taxRate) {
    // Sprawdzamy, czy `taxRate` nie jest `null` ani `undefined`.
    // Jeśli tak, przypisujemy mu domyślną wartość 0.23.
    if (taxRate === null || taxRate === undefined) {
        taxRate = 0.23;
    }
    // Można też użyć operatora nullish coalescing `??` dla zwięzłości:
    // const actualTaxRate = taxRate ?? 0.23;
    // return amount * actualTaxRate;
    return amount * taxRate;
}
console.log("Podatek od 100 (stawka 0.1):", calculateTax(100, 0.1));
console.log("Podatek od 100 (stawka domyślna):", calculateTax(100));
// 3. Funkcje zwracające `void` (nic)
// Funkcja `logMsg` nie zwraca żadnej wartości.
function logMsg(msg) {
    console.log("Wiadomość do logu:", msg);
}
logMsg("Hello");
logMsg(String(123)); // Konwersja liczby na string przed przekazaniem
// --- Sekcja 6: Typy unii i interfejsy dla funkcji ---
/**
 * @section Typy unii i interfejsy dla funkcji
 * Pokazuje użycie typów unii dla zmiennych i parametrów funkcji,
 * oraz interfejs dla definiowania kontraktu funkcji.
 */
// 1. Typ unii (Union Type) dla zmiennych
// Zmienna `userId` może przechowywać wartość typu `string` LUB `number`.
var userId; // union type
userId = "123";
console.log("ID użytkownika (string):", userId);
userId = 123;
console.log("ID użytkownika (number):", userId);
// Funkcja akceptująca parametr o typie unii
function showInfo(data) {
    console.log("Wyświetlana informacja:", data);
}
showInfo("Ala ma kota");
showInfo(42);
showInfo(true);
// Można by zaimplementować ten interfejs w klasie lub użyć go jako typ dla funkcji:
var myLogger = {
    log: function (message) {
        console.log("Custom Logger:", message);
    }
};
myLogger.log("To jest wiadomość z niestandardowego loggera.");
// --- Definicje klas abstrakcyjnych i bazowych ---
/**
 * @abstract class Shape
 * Abstrakcyjna klasa bazowa dla wszystkich kształtów geometrycznych.
 * Implementuje wspólne właściwości i metody, a także definiuje metody abstrakcyjne,
 * które muszą być zaimplementowane przez klasy dziedziczące.
 * Klasy abstrakcyjnej nie można bezpośrednio instancjonować (utworzyć obiektu).
 */
var Shape = /** @class */ (function () {
    /**
     * @param name - Nazwa kształtu. Jest chronioną (protected) właściwością,
     * co oznacza, że jest dostępna w tej klasie i klasach dziedziczących.
     * Dzięki użyciu 'protected' w parametrze konstruktora, TypeScript
     * automatycznie tworzy i inicjalizuje właściwość 'name'.
     * Posiada domyślną wartość "Shape", jeśli nie zostanie podana.
     */
    function Shape(name) {
        if (name === void 0) { name = "Shape"; }
        this.name = name;
        // Ciało konstruktora klasy bazowej. Tutaj można by dodać dodatkową logikę
        // inicjalizacyjną wspólną dla wszystkich kształtów.
    }
    /**
     * @method getName()
     * Metoda zwracająca nazwę kształtu.
     * @returns {string} Nazwa kształtu.
     */
    Shape.prototype.getName = function () {
        return this.name;
    };
    return Shape;
}());
// --- Definicje konkretnych klas kształtów ---
/**
 * @class Square
 * Klasa reprezentująca kwadrat, dziedzicząca po Shape i implementująca Drawable.
 */
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    /**
     * @param name - Nazwa kwadratu, przekazywana do konstruktora klasy bazowej Shape.
     * @param side - Długość boku kwadratu. Jest to prywatna właściwość (private),
     * utworzona i zainicjalizowana automatycznie przez TypeScript
     * dzięki modyfikatorowi 'private' w parametrze konstruktora.
     * Posiada domyślną wartość 0, jeśli nie zostanie podana.
     */
    function Square(name, side) {
        if (side === void 0) { side = 0; }
        var _this = _super.call(this, name) || this; // Wywołanie konstruktora klasy bazowej Shape
        _this.side = side;
        return _this;
        // Brak 'this.side = side;' - jest zbędne dzięki 'private side' w parametrze
    }
    /**
     * @method calcArea()
     * Implementacja abstrakcyjnej metody z klasy bazowej Shape.
     * Oblicza pole powierzchni kwadratu.
     * @returns {number} Pole powierzchni kwadratu.
     */
    Square.prototype.calcArea = function () {
        return this.side * this.side;
    };
    /**
     * @method draw()
     * Implementacja metody z interfejsu Drawable.
     * Symuluje rysowanie kwadratu.
     */
    Square.prototype.draw = function () {
        console.log("draw square");
    };
    /**
     * @method getSide()
     * Publiczny "getter" dla prywatnej właściwości 'side'.
     * Umożliwia bezpieczny odczyt wartości boku kwadratu z zewnątrz klasy.
     * @returns {number} Długość boku kwadratu.
     */
    Square.prototype.getSide = function () {
        return this.side;
    };
    /**
     * @method setSide()
     * Publiczny "setter" dla prywatnej właściwości 'side'.
     * Umożliwia bezpieczną modyfikację wartości boku kwadratu z zewnątrz klasy.
     * Tutaj można dodać logikę walidacji, np. aby zapobiec ustawieniu ujemnej wartości.
     * @param side - Nowa długość boku.
     */
    Square.prototype.setSide = function (side) {
        // Przykład walidacji:
        if (side < 0) {
            console.warn("Długość boku nie może być ujemna. Wartość nie została zmieniona.");
            return;
        }
        this.side = side;
    };
    return Square;
}(Shape));
/**
 * @class Circle
 * Klasa reprezentująca koło, dziedzicząca po Shape i implementująca Drawable.
 */
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    /**
     * @param name - Nazwa koła, przekazywana do konstruktora klasy bazowej Shape.
     * @param radius - Długość promienia koła. Prywatna właściwość, automatycznie
     * utworzona i zainicjalizowana. Domyślna wartość to 0.
     */
    function Circle(name, radius) {
        if (radius === void 0) { radius = 0; }
        var _this = _super.call(this, name) || this; // Wywołanie konstruktora klasy bazowej Shape
        _this.radius = radius;
        return _this;
    }
    /**
     * @method calcArea()
     * Implementacja abstrakcyjnej metody z klasy bazowej Shape.
     * Oblicza pole powierzchni koła.
     * @returns {number} Pole powierzchni koła.
     */
    Circle.prototype.calcArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    /**
     * @method draw()
     * Implementacja metody z interfejsu Drawable.
     * Symuluje rysowanie koła.
     */
    Circle.prototype.draw = function () {
        console.log("draw circle");
    };
    /**
     * @method getRadius()
     * Publiczny "getter" dla prywatnej właściwości 'radius'.
     * @returns {number} Długość promienia koła.
     */
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    /**
     * @method setRadius()
     * Publiczny "setter" dla prywatnej właściwości 'radius'.
     * @param radius - Nowa długość promienia.
     */
    Circle.prototype.setRadius = function (radius) {
        // Przykład walidacji:
        if (radius < 0) {
            console.warn("Promień nie może być ujemny. Wartość nie została zmieniona.");
            return;
        }
        this.radius = radius;
    };
    return Circle;
}(Shape));
// --- Przykładowe użycie klas ---
console.log("--- Tworzenie i testowanie pojedynczych obiektów ---");
var square = new Square("Kwadrat 5x5", 5);
console.log("".concat(square.getName(), " | Pole: ").concat(square.calcArea().toFixed(2), " | Bok: ").concat(square.getSide()));
var circle = new Circle("Koło R=3", 3);
console.log("".concat(circle.getName(), " | Pole: ").concat(circle.calcArea().toFixed(2), " | Promie\u0144: ").concat(circle.getRadius()));
console.log("\n--- Modyfikacja wartości przez settery ---");
square.setSide(7);
console.log("".concat(square.getName(), " (po zmianie boku) | Pole: ").concat(square.calcArea().toFixed(2), " | Nowy bok: ").concat(square.getSide()));
circle.setRadius(-1); // Próba ustawienia niepoprawnej wartości
console.log("".concat(circle.getName(), " (po pr\u00F3bie zmiany promienia na -1) | Promie\u0144: ").concat(circle.getRadius())); // Promień nie powinien się zmienić
console.log("\n--- Użycie polimorfizmu z tablicą ---");
// Tablica może przechowywać obiekty, które są zarówno Shape, jak i Drawable.
var arrShapes = [];
arrShapes.push(square);
arrShapes.push(circle);
arrShapes.push(new Square("Mały Kwadrat", 2));
arrShapes.push(new Circle("Duże Koło", 7));
for (var _c = 0, arrShapes_1 = arrShapes; _c < arrShapes_1.length; _c++) {
    var shape = arrShapes_1[_c];
    // Możemy wywoływać metody zarówno z Shape, jak i z Drawable
    console.log("\n--- Informacje o ".concat(shape.getName(), " ---"));
    shape.draw(); // Metoda z interfejsu Drawable
    console.log("Pole: ".concat(shape.calcArea().toFixed(2))); // Metoda z klasy bazowej Shape
    // Jeśli potrzebujemy specyficznych metod (jak getSide() / getRadius()),
    // musimy sprawdzić typ obiektu za pomocą 'instanceof'.
    if (shape instanceof Square) {
        console.log("D\u0142ugo\u015B\u0107 boku (specyficzna dla Kwadratu): ".concat(shape.getSide()));
    }
    else if (shape instanceof Circle) {
        console.log("D\u0142ugo\u015B\u0107 promienia (specyficzna dla Ko\u0142a): ".concat(shape.getRadius()));
    }
}
// --- Próba instancjonowania klasy abstrakcyjnej (pokazuje błąd kompilacji) ---
// const shapeExample: Shape = new Shape("Ogólny Kształt");
// Powyższa linia spowodowałaby błąd TS2511: Cannot create an instance of an abstract class.
// (Nie można utworzyć instancji klasy abstrakcyjnej).
