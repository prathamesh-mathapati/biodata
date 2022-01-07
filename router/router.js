const express=require('express')
const router=express.Router()
const {login,logout,showstate,postdisric,postSate,showdisrict,showChild,state}=require('./../InsertData/data')
const {autindecationToke}=require("./../Auth/secuirity")


router.post('/login',login)
router.post('/logout',autindecationToke,logout)
router.get('/showstate',showstate)
// router.get('/state',state)
router.post('/postSate/:State/:District',autindecationToke,postSate)
router.post('/postdisric',postdisric)
router.get('/showdisrict',showdisrict)
router.get('/showChild',showChild)

module.exports=router