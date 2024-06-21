const AuthAdminRouter=require('./AuthAdminRouter');
const express=require("express");
const router=express.Router();
const TextbookAdminRouter=require('./TextbookAdminRouter')
const CategoryAdminRouter=require('./CategoryAdminRouter')
const OrderAdminRouter=require('./OrderAdminRouter')
router.use('/auth',AuthAdminRouter);//用户登录
router.use('/category',CategoryAdminRouter);
router.use('/textbook',TextbookAdminRouter);
router.use('/order',OrderAdminRouter);



module.exports=router;