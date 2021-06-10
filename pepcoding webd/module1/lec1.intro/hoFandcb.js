function getFirstName(fullName){
fullName= fullName.split(" ");
return fullName[0];
}
function getLastName(fullName){
fullName= fullName.split(" ");
return fullName[1];
}
function callMe(fullName,fun){
    let name = fun (fullName);
    console.log(name);
}
callMe("steve rogers",getFirstName);
callMe("tony stark",getLastName);