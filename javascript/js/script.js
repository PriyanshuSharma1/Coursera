function makeMultiplier(multiplier)
{
	return(
		function (x) {
			return x*multiplier;
		})
}
var double=makeMultiplier(2);
console.log(double(2));



// var student = new Object();
// student.info= new Object();
// student.info.name='Priyanshu';
// console.log(student);
// console.log('the name of the student is: '+student.info.name);
// console.log(student['info']);

// var student=
// {
// 	branch:'Dhapasi',
// 	info: {
// 		name:'Priyanshu',
// 		favcolor:'blue'
// 	}
// };
// console.log(student);

// function multiply(x,y)
// {
// 	return (x*y);
// }
// console.log(multiply(2,3));
// multiply.version="v.1.0";
// console.log(multiply.version);

// function makeMultiplier(multiplier){
// 	var myFunc=function(x){
// 		return(multiplier*x);
// 	}
// 	return myFunc;

// }
// var multiplyby5=makeMultiplier(5);
// console.log(multiplyby5(10));

// function dooperation(x, operation){
// 	return operation(x);
// }
// var result=dooperation(3,multiplyby5);
// console.log(result);

// var a=5;
// var b= a;
// console.log(a);
// console.log(b);
// b=2;
// console.log(a);

// var a={x:7};
// var b=a;
// console.log(a);
// console.log(b);
// b.x=2;
// console.log(a);

// function passbyref(a){
// 	a.x=3;
// };
// var num ={x:2};
// console.log(num);
// passbyref(num);
// console.log(num);

 // var names=[2,3,'apple',function(name){
 // 	console.log('Hello'+name);
 // }]
 // for(name in names){
 // 	console.log('hello'+names[name]);
 // }


