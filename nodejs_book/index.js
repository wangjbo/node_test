const express = require('express')
const app = express()
const articles = [ {title:'Example'} ]


app.set('port',3000)

// read
app.get('/articles',(req,res,next) => {
        res.send(articles)
    }
)

// create
app.post('/articles',(req,res,next) => {
        res.send('ok')
    }
)

// read article by id
app.get('/articles/:id',(req,res,next) => {
        let id = req.params.id 
        console.log('fetching',id);
        res.send('ok ',id)
    }
)

app.listen(app.get('port'),() => {
        console.log('连接上了');
    }
)