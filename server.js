var express=require('express')
var axios=require('axios')
var cherio=require('cheerio')
var app=express()

app.get('/home',(req,res)=>{

axios.get('https://www.theguardian.com/us-news/2022/feb/11/qanon-donald-trump-big-lie-elections-swing-states').then((value) => {
    const html=value
    console.log(html);
    const $=cherio.load(html)
    $('a:contains("news")',html).each(function(){
        const title=$(this).text()
        res.json(title)
    })
    
})
})



app.listen(3000,()=>{
    console.log("server is runnnig on the port: ");
})