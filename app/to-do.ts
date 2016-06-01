//We've declared our parent class Task. Then we've declared its three child classes HomeTask, HobbyTask, and WorkTask. HomeTasks have the same structure as a basic Task, HobbyTasks are always low priority, and WorkTasks have a due date.
class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true;
  }
}

//By using the keyword extends, we are saying that the class HomeTask is inheriting from the base class Task
class HomeTask extends Task {}

//Since these tasks are always low priority, there's no need to pass the priority parameter in the constructor. We can simply change the constructor method by re-declaring it inside of the new class declaration: It will override the base class's constructor.
//use the keyword super to call the parent method of the same name as the current method. This fills in the rest of the default properties defined in the base class.
class HobbyTask extends Task {
  constructor(public description: string){
    super(description, "low");
  }
}

//we are adding an obligatory due date parameter with the type JavaScript Date object.
class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string){
    super(description, priority);
  }
}

var tasks = [];
tasks.push(new HomeTask("Do the dishes.", "High"));
tasks.push(new HomeTask("Buy chocolate.", "Low"));
tasks.push(new HomeTask("Wash the laundry.", "High"));


tasks.push(new HobbyTask("Practice origami."));
tasks.push(new HobbyTask("Bake a pie."));

//e create three JavaScript Date objects for today, tomorrow and the next day so that we can pass them into our WorkTasks.
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Update blog.", "High"));
tasks.push(new WorkTask(tomorrow, "Go to meeting.", "Medium"));
tasks.push(new WorkTask(nextDay, "Clean ceiling.", "Low"));

console.log(tasks);
