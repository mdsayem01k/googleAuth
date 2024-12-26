const { googleLogin } = require('../controllers/authController');

const router=require('express').Router()

router.get('/test',(req,res)=>{
    res.send('test pass');
})

router.post('/googlelogin',googleLogin)

module.exports=router;