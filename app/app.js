/* global prompt: true */

var prompt = require('sync-prompt').prompt;
var people = [];
var Dog = [];
var Cat = [];
var Hog = [];

var person1 = {name: 'bob', age:10, pets: []};
var person2 = {name: 'sam', age:5, pets: []};
var person3 = {name: 'Jill', age:7, pets: []};
people.push(person1, person2, person3);


var info = prompt('Do you want to admit a (d)og, (c)at, (h)og or (q)uit? ');
while(info !== 'q'){
  if(info === 'd'){var name = prompt('Name: ');
    var age = prompt('Age: ');
    var wt = prompt('Weight(lb): ');
    var dog = {name:name, age:age, weight:wt};
    (Dog.push(dog));
  }
  if(info === 'c'){var name = prompt('name: ');
    var ht = prompt('Height: ');
    var tail = prompt('Tail length(in): ');
    var cat = {name:name, hieght:ht, taillength:tail};
    (Cat.push(cat));
  }

  if(info === 'h'){var name = prompt('Name: ');
    var gender = prompt('gender: ');
    var color = prompt('color: ');
    var hog = {name:name, gender:gender, color:color};
    Hog.push(hog); 
  }
  info = prompt('Do you want to admit a (d)og, (c)at, (h)og or (q)uit? ');
}

var option = prompt('(b)ob, (s)am, (j)ill or (q)uit: ');
while(option !== 'q'){
  for(var i = 0; i < people.length; i++){
    if(people[i].name[0] === option){ 
    var client = (people[i]);
        break;
        }
  }
}
var animals;
  console.log('Client: ', client);
  var choice = prompt('what type of Pet? (d)og, (c)at, (h)og: ');

  switch(choice){
    case 'd':
      console.log('Dogs: ', Dog);
      animals = Dog;
      break;
    case 'c':
      console.log('Cats: ', Cat);
      animals = Cat;
      break;
    case 'h':
      console.log( 'Hogs: ', Hog);
      animals = Hog;
      break;
  }

  name = prompt('What is the name of the animal you want to adopt? ');
 for(i = 0; i < animals.length; i++) {
   if(animals[i].name === name){
     var animal = animals[i];
     var index = i;
     break;
   }
   }

   console.log('Animal: ', animal);
   animals.splice(index, 1);
   client.pets.push(animal);
   console.log('After adoption: ', client);
   console.log('Animals array: ', animals);



option = prompt('(b)ob, (s)am, (j)ill or (q)uit ');


//console.log('Dogs: '(Dog));
//console.log('Cats: '(Cat));
//console.log('Hogs: '(Hog));







