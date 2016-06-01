//created an interface for the class Task to implement
//making sure that any classes which implement the ITask interface will have at least 3 properties: description, done, priority, and a method called markDone that takes no arguments and returns no values (which is what the : void means).
interface ITask {
  description: string;
  done: boolean;
  priority: string;
  markDone(): void;
}

class Task implements ITask {
  done: boolean = false;
  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true;
  }
}
