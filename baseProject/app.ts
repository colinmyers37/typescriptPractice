// const person: {
//     name: string;
//     age: number;
// }
const person = {
  name: 'Colin',
  age: 21,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
};

person.role.push('admin');
person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['sport'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}
