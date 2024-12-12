const mongoose =require('mongoose')

const Local_url = 'mongodb://127.0.0.1:27017/admissionportalprojact';
const live_url = 'mongodb+srv://nirpalrawat:LHQXtw6MVi6suedl@cluster0.1simf.mongodb.net/Admissionportal?retryWrites=true&w=majority&appName=Cluster0'
const connectDb = () =>{

    return mongoose.connect(live_url)

.then(()=>{

    console.log('connect db')

})
.catch((error)=>{

    console.log(error)
})


}

module.exports = connectDb