class Cat{
	constructor(name){
		this.name = name;
	}
	getName(){
		return this.name;
	}
}

var c1 = new Cat('momo');
console.log('c1'+c1.getName())
class Momo extends Cat{
	constructor(name,color){
		super(name);
		this.color = color;
	}
	showColor(){
		return this.color;
	}
}

var m1 = new Momo('momo','yellow')
console.log('m1'+m1.getName(),m1.showColor())