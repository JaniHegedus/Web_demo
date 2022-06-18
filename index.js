
function alapok()
{
  console.log("Hello Buzz!");
  let mosh= "mosh";
  console.log(mosh);
  let person = {
    name:"Jani",
    age: 19
  };
  console.log(person)
  person.age=32;
  console.log("13 years after: \n");
  console.log(person);
  let selected="name";
  person[selected]="Korbusz";
  let selectedcolors= ["red","blue"];
  console.log("A színek száma: "+selectedcolors.length);
  selectedcolors[2]="green";
  selectedcolors[3]=2;
  console.log(square(3));
}
function arged(name)
{
  console.log("Hello "+name);
}
function square(number)
{
  return number*number;
}
alapok();
arged("John");