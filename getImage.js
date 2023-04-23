const express=require('express')
const router=express.Router()

router.use('/image',express.static('./image'))

module.exports=router