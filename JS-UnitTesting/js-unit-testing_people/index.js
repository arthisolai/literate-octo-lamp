export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => person.firstName + " " + person.lastName);
}

export function getNameAndAge(people) {
  return people.map((person) => `${person.lastName} (${person.age})`);
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => {
    return person.age === age;
  });
}

export function getPeopleNamesOlderThan(people, age) {
  return people
    .filter((person) => {
      return person.age > age;
    })
    .map((person) => person.firstName + " " + person.lastName);
}

export function getPeopleByLastName(people, lastName) {
  return people
    .filter((person) => {
      return person.lastName === lastName;
    })
    .map((person) => person.firstName + " " + person.lastName);
}

export function findPersonById(people, id) {
  return people.find((people) => people.id === id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((people) => people.age > age);
}

export function getFullNamesSortedByAge(people) {
  return people
    .sort((a, b) => a.age - b.age)
    .map((people) => `${people.firstName} ${people.lastName}`);
}
