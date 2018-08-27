class LOG{

	success(message){
		console.log('%c'+message,'color:#27ae60');
	}

	warning(message){
		console.log('%c'+message, 'color:#f1c40f');
	}

	error(message){
		console.log('%c'+message, 'color:#c0392b');
	}

}

function tester(message)
{
	console.log('%c'+message, 'color:#000');
}


// export default {
// 	success,
// 	warning,
// 	error
// }
// 
var log = new LOG();
export {log,tester};