//@인성 노드JS, express를 이용하여 MySQL, ReactNative 간 DB연동을 위한 백엔드 서버 구축
//@인성 현재 데이터베이스에는 경기지역화폐 가맹점들에 대한 정보가 저장돼있음

const express = require('express')
const app = express()
const port = 3000
const cors = require("cors");
var word = "hello"

//@인성 다른 프로토콜을 이용한 통신시 HTTP의 보안 문제가 발생함으로 cors 통신을 이용
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log(`${word}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '12345678',
  database : 'creditcard'
});

connection.connect();

app.get('/get', (req, res) => {
  var name = req.query.name
  connection.query(`SELECT * FROM Stores where 가맹점명 LIKE '%${name}%'`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(name)
      console.log(result)
      res.send(result)
    }
  })});

app.get('/stores', (req, res) => {
  connection.query("SELECT * FROM Stores", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result)
    }
  });
});

app.get('/benefit', (req, res) => {
  var name = req.query.name
  connection.query(`SELECT * FROM benefit where 적용브랜드 LIKE '%모든가맹점%' or 적용브랜드 LIKE '%${name}%' `, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(name)
      console.log(result)
      res.send(result)
    }
});});
