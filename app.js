function makeLine(x,length) {
    var line = "";
    var sp = "";
    for (var j = 1; j <= x; j++) {
        line += "* ";
    }
    for (var y = 1; y <= length - x; y++) {
        sp += " ";
    }
    return sp + line + "\n"; 

} 

function buildTriangle(length) {
    var triangle = ""; 
    for (var x = 1; x <= length; x++) {
        triangle += makeLine(x,length);
    }
    return triangle;
} 
console.log(buildTriangle(10));
