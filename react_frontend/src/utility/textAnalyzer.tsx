// liczbę wszystkich znaków (z uwzględnieniem spacji),

// liczbę słów,

// liczbę zdań (kończących się ., ! lub ?),

// najdłuższe słowo,

// średnią długość słowa (zaokrągloną do 2 miejsc po przecinku).

export function textAnalyzer(text: string): number{
    const words = text.split(' ');
    const uniqueWords = new Set(words);
    return uniqueWords.size;
}