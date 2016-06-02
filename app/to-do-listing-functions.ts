/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  //It takes parameters for the person whose tasks we're looking for, as well as the collection of all tasks to look through
  //We declare that this taskCollection parameter is of type Array, which itself is holding a group of elements of type Task by using this syntax: Task[].
  export var describeTasksForPerson = function(assignee: IPerson, taskCollection: Task[]):
  //Inside the function, we create our output variable descriptions. We use the var descriptions: String[] syntax to say that it will be an array of strings. We set it equal to a default value of an empty array. Then we loop through the taskCollection and if the IPerson in the task.assignedTo property is equal to the input assignee parameter, then we push the current task's description string into our output array descriptions and return it.
  String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }
}
