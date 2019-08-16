const { Strings } = require("../dist/index");

const result1 = Strings.removeNonPrintable("ÄçÇéffÉêPHP-MySQLöÖÐþúÚ");
const result2 = Strings.removeNonPathable("<a thing> /|~`|path");
const result3 = Strings.removeNonAlphaNumberic("<3a'{} th;i1ng(> /|~`|p:ath2");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result2);

