const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];
    for (let k = 0; k < expr.length; k += 10) {
        let sign = expr.slice(k, k + 10);
        switch(sign) {
            case "**********": sign = " "; break;
            case "0000001011": sign = "a"; break;
            case "0011101010": sign = "b"; break;
            case "0011101110": sign = "c"; break;
            case "0000111010": sign = "d"; break;
            case "0000000010": sign = "e"; break;
            case "0010101110": sign = "f"; break;
            case "0000111110": sign = "g"; break;
            case "0010101010": sign = "h"; break;
            case "0000001010": sign = "i"; break;
            case "0010111111": sign = "j"; break;
            case "0000111011": sign = "k"; break;
            case "0010111010": sign = "l"; break;
            case "0000001111": sign = "m"; break;
            case "0000001110": sign = "n"; break;
            case "0000111111": sign = "o"; break;
            case "0010111110": sign = "p"; break;
            case "0011111011": sign = "q"; break;
            case "0000101110": sign = "r"; break;
            case "0000101010": sign = "s"; break;
            case "0000000011": sign = "t"; break;
            case "0000101011": sign = "u"; break;
            case "0010101011": sign = "v"; break;
            case "0000101111": sign = "w"; break;
            case "0011101011": sign = "x"; break;
            case "0011101111": sign = "y"; break;
            case "0011111010": sign = "z"; break;
            case "1011111111": sign = "1"; break;
            case "1010111111": sign = "2"; break;
            case "1010101111": sign = "3"; break;
            case "1010101011": sign = "4"; break;
            case "1010101010": sign = "5"; break;
            case "1110101010": sign = "6"; break;
            case "1111101010": sign = "7"; break;
            case "1111111010": sign = "8"; break;
            case "1111111110": sign = "9"; break;
            case "1111111111": sign = "0"; break;
        }
        result.push(sign);
    }
    return result.join("");
}

module.exports = {
    decode
}