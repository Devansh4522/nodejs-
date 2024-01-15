//common js

const a= require("./module1")
a.hello()
a.ahello("Devansh")

const {hello,ahello}= require("./module1")
hello()
ahello("Devansh")







//ES6 modules

// import shello,{hello,ahello} from "./module2.js"
// hello()
// ahello("Devansh")
// shello("Dev")