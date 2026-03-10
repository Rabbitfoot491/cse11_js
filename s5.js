let add=(a,b)=>{    //give flexibility to user to use different names while calling
    console.log (a+b);
};
add(20, 30); 
let x=new object() //object is class which works like constructor stored in x; dynamic creation of object
x.name="krishna";
x.age=20;
x.address={};
x.address.street="crossing republik";
x["address"]["flatno"]=201;
console.log();
//array is special kind of object
let myinfo=new Array();
let myinfo1=Array();
console.log(myinfo, myinfo1);
