const express = require('express')
const app = express()
const path = require('path')

app.listen(8080, function(){
    console.log('listening on 8080')
})

/* ajax 최적화 코드? */
app.use(express.json());
var cors = require('cors'); //다른 도메인 요청?
app.use(cors());


app.use(express.static(path.join(__dirname, '../blog/dist')));

app.get('/',function(req , res){
    res.sendFile(path.join(__dirname,'../blog/dist/index.html'));
})

app.get('/product',function(req , res){
    res.json({name : 'black suit'})
}) //데이터 리액트로 보낼 때 client-side rendering
 

app.get('*',function(req , res){
    res.sendFile(path.join(__dirname,'../blog/dist/index.html'));
})   //리액트 라우터를 사용할 때 ( 가장 하단에 사용 )
 