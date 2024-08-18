const mongoose=require('mongoose');
  mongoose.connect('mongodb+srv://gagangkurup10:omen16@clusterinternship.zup2cqv.mongodb.net/blogappdb?retryWrites=true&w=majority&appName=Clusterinternship').then((res)=>{
      console.log('DB is connected');
  }).catch((error)=>{
      console.log('Error in connection')
  })