var fs, arr;
var dir, str;
var cont, item;

fs=require('fs');
cont=fs.readFileSync('Assignment1_names-1.txt').toString();
arr=cont.split('\,');
arr.sort();

for(str=arr.shift();str&&(item=arr.shift());)
    str+='\,'+item;
console.log(str);