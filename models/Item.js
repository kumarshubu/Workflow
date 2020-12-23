const mongoose =require("mongoose");
const schema=mongoose.Schema;

//create scheema
const User = new schema({
	data:{
		type:Array,
		required:true
	}
	// id:{
	// 	type:Number
	// }
});
module.exports=Item=mongoose.model('taskDB',User);