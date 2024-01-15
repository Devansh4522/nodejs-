const fs=require("fs");

//synchronous
// let txt=fs.readFileSync("a.txt","utf-8");
// txt=txt.replace("xwa","aaa")
// console.log(txt);
// fs.writeFileSync("b.txt",txt)

//not synchronous
let txt=fs.readFile("a.txt",(err,data)=>{
    fs.writeFile("c.txt",data,()=>{
        console.log("Writing complete")
    })
});
console.log("Message displayed")