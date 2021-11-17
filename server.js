const express = require('express');
const app = express();

app.listen(6660, function () {
  console.log("The server is running!");
})

const mockUserData=[{name:'Mark'},{name:'Jill'}]
  app.get('/users', function(req,res){
     res.json({
        success: true,
        message: 'successfully got users. Nice!',
        users: mockUserData
      })
})
  