const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/FruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({ name:{type:String,required:true},rating:{type:Number,min:1,max:10},review:String });
const personSchema = new mongoose.Schema({ name: String,age:Number,favouriteFruit:fruitSchema });


const Fruit = mongoose.model("Fruit",fruitSchema);
const Person = mongoose.model("Person",personSchema);

const fruit = new Fruit ({
    name:"peache",
    rating:9,
    review:"delicious"
})
const cherry = new Fruit ({
    name:"cherry",
    rating:8,
    review:"Great"
})
cherry.save();
// const kiwi = new Fruit ({
//     name:"kiwi",
//     rating:5,
//     review:"delicious"
// })
// const mango = new Fruit ({
//     name:"mango",
//     rating:10,
//     review:"delicious"
// })
// const banana = new Fruit ({
//     name:"banana",
//     rating:9,
//     review:"delicious"
// })



// const person = new Person ({
//     name:"john",
//     age:32,
// })


const person = new Person ({
    name:"john",
    age:32,
    favouriteFruit:cherry
})
// fruit.save();
person.save();
// Fruit.insertMany([kiwi,mango,banana],function(err){
//     if(err){
//         console.log(err);
//     } else{
//         console.log("success");
//     }
// })


// Fruit.find(function(err,fruits){
//     if(err){
//         console.log(err);
//     } else {
//         fruits.forEach(function(element){
//         console.log(element.name);
//         })
//         mongoose.connection.close();
//     }
// })


// Fruit.updateOne({_id:"5f0f1ac910646641e01b9353"},{name:"peach"},function(err){
//     if(err){
//         console.log(err);

//     } else {
//         console.log("success");
//     }
// })


// Fruit.deleteMany({name:"pineapple"},function(err){
//     if(err){
//         console.log(err);

//     } else {
//         console.log("success");
//     }
// })
