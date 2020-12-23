const express = require("express");
const router = express.Router();
var cors = require("cors");
router.use(cors());

//item model
const Item=require('../../models/Item');


router.get("/get", (req, res) => {
  Item.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post("/createWorkflow",(req,res)=>{
	var mydata=new Item();
	const {data}=req.body;
	// mydata.name=name;
	mydata.data=data;
	console.log(data)
	mydata.save()
	.then(item=>{
		res.send("SAVED");
	})
	.catch(err=>{
		res.status(400).send("ERROR");
	})
})

router.delete("/",(req,res)=>{
	const {id}=req.body;
	Item.findOneAndDelete({id:id}, err=>{
		if(err) return res.json({success:false,error:err});
		return res.json({success:true});
	})
})

module.exports=router;