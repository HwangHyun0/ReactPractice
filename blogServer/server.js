const express = require('express')
const app = express()
const path = require('path')

app.listen(8080, function(){
    console.log('listening on 8080')
})

/* ajax ����ȭ �ڵ�? */
app.use(express.json());
var cors = require('cors'); //�ٸ� ������ ��û?
app.use(cors());


app.use(express.static(path.join(__dirname, '../blog/dist')));

app.get('/',function(req , res){
    res.sendFile(path.join(__dirname,'../blog/dist/index.html'));
})

app.get('/product',function(req , res){
    res.json({name : 'black suit'})
}) //������ ����Ʈ�� ���� �� client-side rendering
 

app.get('*',function(req , res){
    res.sendFile(path.join(__dirname,'../blog/dist/index.html'));
})   //����Ʈ ����͸� ����� �� ( ���� �ϴܿ� ��� )
 