class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true;
  }
}

var tasks = [];
tasks.push(new Task("Do the dishes.", "High"));
tasks.push(new Task("Buy chocolate.", "Low"));
tasks.push(new Task("Wash the laundry.", "High"));
tasks[0].markDone();
console.log(tasks);



// ///shortened
// class Task {
//   done: boolean;
//   constructor(public description: string, public priority: string){
//     this.done = false;
//   }
//   markDone(){
//     this.done = true;
//   }
// }
//
// ///shortened
// class Task {
//   done: boolean;
//   description: string;
//   priority: string;
//   constructor(public description: string, public priority: string){
//     this.done = false;
//     this.description = description;
//     this.priority = priority;
//   }
//   markDone(){
//     this.done = true;
//   }
// }
