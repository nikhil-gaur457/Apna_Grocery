const express =require('express');
const app=express();
const path=require('path')

app.use( express.static( "public" ) );

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'/public')))


app.listen('3000',()=>{
    console.log("Listening at 3000!!")
})

app.get('/',(req,res)=>{
    res.render('home');
})