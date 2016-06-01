
interface IPerson {
  name: string;
  email: string;
}

//created an interface for the class Task to implement
//interface is for declaring intentions for declaration
//making sure that any classes which implement the ITask interface will have at least 3 properties: description, done, priority, and a method called markDone that takes no arguments and returns no values (which is what the : void means).
//a common convention for naming interfaces is to begin it with a capital "I"
interface ITask {
  description: string;
  done: boolean;
  priority: string;
  markDone(): void;
  //assigning the IPerson interface as the type of a property called assignedTo
  //"?" = optional
  assignedTo?: IPerson;
}

//Classes can even implement more than one interface at the same time, allowing you to divide complex classes or objects up into smaller pieces.
class Task implements ITask {
  done: boolean = false;
  //add the new parameter for a person to the constructor on our actual Task class declaration
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){}
  markDone(){
    this.done = true;
  }
}

class HomeTask extends Task {
  //add the new parameter for a person to the constructor on our child Task class declaration
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){
    super(description, priority);
  }
}

class WorkTask extends Task {
  //must be assigned to someone, so the IPerson parameter is not optional
  constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson){
    super(description, priority, assignedTo);
  }
}

class HobbyTask extends Task {
  constructor(public description: string){
    super(description, "low");
  }
}

var diane: IPerson = {
  name: "Diane D",
  email: "diane@epicodus.com"
}

var thor: IPerson = {
  name: "Thor Son of Odin",
  email: "thor@asgard.com"
}

var loki: IPerson = {
  name: "God of mischief",
  email: "loki@geocities.com"
}

var tasks = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy chocolate.", "Low", diane));
tasks.push(new HomeTask("Wash the laundry.", "High"));

tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update website.", "High", diane));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium", thor));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low", loki));

console.log(tasks);
