const mongoose = require('mongoose');
const Student = require('./student.js');


const mongoURI = 'mongodb://localhost:27017/students';
const db = mongoose.connection;

//mongoose.connect(mongoURI);

mongoose.connect(mongoURI, { useNewUrlParser: true}, () => {
	console.log('the connection with mongod is established')
})

//setTimeout(()=>{db.close()}, 5000)


const allStudent = [{
	name: "Abdullah Alshahrani"
},{
	name: "Abdullah Binmahfouz"
},{
	name: "Abdulrahman Alsulami"
},{
	name: "Afnan Masrahi"
},{
	name: "Ahmad Al Arif"
},{
	name: "Amal Algregri"
},{
	name: "Bandar Al-Huthali"
},{
	name: "Bandari Alotaibi"
},{
	name: "Dalia Dammas"
},{
	name: "Doaa Turkistani"
},{
	name: "Fahad Alturkistani"
},{
	name: "Faisal Alsulaimani"
},{
	name: "Leena Yaseen"
},{
	name: "Fatmah Kalantan"
},{
	name: "Hanin Nouh"
},{
	name: "Hatim Alattas"
},{
	name: "Ibrahim Zahran"
},{
	name: "Khadijah Saber"
},{
	name: "Mohammed AL-Amri"
},{
	name: "Mohammed Almahdawi"
},{
	name: "Mohammed Alghamdi"
},{
	name: "Razan Sannan"
},{
	name: "Safwan AlQulayti"
},{
	name: "Sara Alraddadi"
},{
	name: "Sarah AlAhmadi"
},{
	name: "Wardah Almalki"
}];

// Student.create(allStudent,(error,students) => {
// 		if (error){
// 			console.log(error)
// 		}else {
// 			console.log(students)
// 		}
// 		db.close()
// 	})

// Student.insertMany(allStudent,(error,students) => {
// 	if (error){
// 		console.log(error)
// 	}else {
// 		console.log(students)
// 	}
// 	db.close()
// })

// Student.findOneAndUpdate({name:"Hatim Alattas"},{attending: false},(error,students) => {
// 	if (error){
// 		console.log(error)
// 	}else {
// 		console.log(students)
// 	}
// 	db.close()
// })

// Student.findOneAndUpdate({name:"Bandari Alotaibi"},{attending: false},(error,students) => {
// 	if (error){
// 		console.log(error)
// 	}else {
// 		console.log(students)
// 	}
// 	db.close()
// })

Student.find({},(error,students) => {
	if (error){
		console.log(error)
	}else {
		console.log(students)
	}
	db.close()
})

// Student.deleteOne({name:"Leena Yaseen"},(error,students) => {
// 	if (error){
// 		console.log(error)
// 	}else {
// 		console.log(students)
// 	}
// 	db.close()
// })

db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))