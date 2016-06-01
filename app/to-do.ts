
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
  constructor(public description: string, public priority: string, public assignedTo?: IPerson){}
  markDone(){
    this.done = true;
  }
}
