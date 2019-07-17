const fs = require('fs');
const readline = require('readline-sync');
var rom;

exports.selectrom = function(){
    var temprom = readline.question('What rom would you like to use? ');
    rom = fs.readFileSync(temprom);
};

exports.intname = function(){
    var intname = rom.slice(0x0, 0xB);
    return intname;
};

exports.gameid = function() {
    var gameid = rom.slice(0xC, 0xC+4);
    return gameid;
};