const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/cars')
.then(()=> console.log('Connected to MongoDB..'))
.catch(err=> console.log('Could not connect to MongoDB..', err));


const BrandSchema=mongoose.Schema({
name: String,
isIndian: Boolean,
categories:[String],
inception: { type : Date , default: Date.now},
rating: Number
});

const Brand = mongoose.model('Brand', BrandSchema);

async function createBrand(){
    const brand = new Brand({
        name : 'Honda',
        isIndian: false,
        categories:['MPV','SUV','Sedan'],
        rating: 4
        });
        
        const result= await brand.save();
        console.log(result);
}

async function getBrands(){
   const brands= await Brand
//    .find({ name: { $eq: 'Tata'}})
.find()
.or({ name: 'Toyota'}, {name: 'Mahindra'}, {name: 'Tata'})
   .limit(5)
   .sort({ name : 1})
   .select({ name : 1, rating: 1});



   console.log(brands);
}

getBrands();
//createBrand();

//eq()
//neq
//gte()
//lte()
//in
//nin()
//gt()
//lt()

