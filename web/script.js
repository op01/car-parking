const API_KEY = 'nvd9xrdwgkpwW6e'
const API_SECRET = 'Hu1K5Nu0hNqwNMhk2RPAlqIMe'
const API_APP_ID = 'CarParking'

var microgear = Microgear.create({
	key: API_KEY,
	secret: API_SECRET,
	alias : "mydashboard"         /*  optional  */
});

microgear.on('message',function(topic,msg) {
	console.log(topic)
	// console.log(msg)
	// document.getElementById("data").innerHTML = msg;
	const arr = msg.split(' ')
	// console.log(arr)
	const disL = arr[0]
	const disR = arr[1]
	callback(disL,disR)
	// console.log('END')
});

microgear.on('connected', function() {
	console.log('con')
// 	microgear.setAlias('htmlgear');    /* al ias can be renamed anytime with this function */
	document.getElementById("data").innerHTML = "Now I am connected with netpie...";
	// setInterval(function() {
	// 	microgear.chat('mydashboard',"Hello from myself at "+Date.now());
	// 	console.log('sent')
	// },5000);
});

microgear.on('disconnected', function(e) {
	console.log('dis',e)
    // document.getElementById("data").innerHTML = "GG"
})

microgear.on('present', function(event) {
	console.log('pre',event);
	document.querySelector("#status").innerHTML = event.type
});

microgear.on('absent', function(event) {
	console.log(event);
});

microgear.connect(API_APP_ID);

function switchToggle(){
	document.body.innerHTML = ""
}