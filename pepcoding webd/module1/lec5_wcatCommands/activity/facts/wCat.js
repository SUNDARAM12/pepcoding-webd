let fs= require("fs");
let input = process.argv.splice(2);
//console.log(input);

let file=[];
let flag=[];

for(let i=0;i<input.length;i++){
    if(input[i].startsWith("-")){
        flag.push(input[i]);
    } else {
        file.push(input[i]);
    }
}

//console.log(file);
//console.log(flag);

let data = "";
for(let i=0;i<file.length;i++){
    let fileKaData = fs.readFileSync(file[i],"utf8");
    data += i==file.length-1 ? fileKaData : fileKaData+ "\n";
}
//console.log(data);

//-s flag
function applysFlag(){
    let dataComp = data.split("\r\n");
   // console.log(dataComp);
   let sFlagedData = [];
   let nonEmptyFound = false;
   for(let i = 0;i<dataComp.length;i++){
       if(dataComp[i]!=''){
       sFlagedData.push(dataComp[i]);
       nonEmptyFound=true;
   }
   else if (dataComp[i] == '' && dataComp[i-1]!='' && i-1!=-1){
       sFlagedData.push(dataComp[i]);
      // emptyPushed = true;
   }
}
let sFlagedString = sFlagedData.join("\r\n");
return sFlagedString;
}

data = applysFlag();
console.log(data);
