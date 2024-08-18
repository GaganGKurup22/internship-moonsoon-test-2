const mongoose=require('mongoose');
  mongoose.connect('mongodb+srv://home:home@cluster0.08cgy0s.mongodb.net/blogdb?retryWrites=true&w=majority&appName=Cluster0').then((res)=>{
      console.log('DB is connected');
  }).catch((error)=>{
      console.log('Error in connection')
  })