function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string {
  return people.map(person => greeter(person)).join('\n');
}

let user = ["Jane User", "John Smith"];

console.log(greeterArray(user)); // This will work correctly now.