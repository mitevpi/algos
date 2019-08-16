const { Strings } = require("../dist/index");

const result1 = Strings.removeNonPrintable("ÄçÇéffÉêPHP-MySQLöÖÐþúÚ");
const result2 = Strings.removeNonPathable("<a thing> /|~`|path");

console.log(result1);
console.log(result2);
console.log(result2);

