const fs=require('fs');
fs.rmdir("mydir",(err)=>{
    if(err){
        console.log("Error creating directory:",err);
        return;
    }
    console.log("Directory created")
})