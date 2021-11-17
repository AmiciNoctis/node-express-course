const express = require('express');
const app = express();

app.listen(6660, function () {
  console.log("The server is running!");
})

const mockUserData=[{name:'Mark'},{name:'Jill'}]
  app.get('/users', function(req,res){
     res.json({
        users: mockUserData
      })
  })
  app.get('/users/:id', function(req, res){
      console.log(req.params.id)
      res.json({
        success: true,
        message: 'got one user',
        users: req.params.id
      })
  })
  