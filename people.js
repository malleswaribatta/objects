const people = [
  {
    name: "Rahul",
    age: 24,
    city: "Pune",
    hobbies: [
      { type: "playing", details: ["chess"] },
      { type: "gardening", details: "gardening" },
    ],
    pets: [
      {
        name: "max",
        age: 4,
        fullyVaccinated: true,
        vaccinated: true,
        type: "dog",
        favActivity: ["fetch"],
      },
    ],
    vehiles: ["car"],
    employement: true,
    profession: "software engineer",
    study: "computer science",
  },
  {
    name: "Ananya",
    age: 30,
    city: "Bangalore",
    hobbies: [{ type: "cooking" }],
    pets: [
      {
        name: "kiwi",
        age: 6,
        fullyVaccinated: false,
        vaccinated: true,
        type: "parrot",
        favActivity: ["mimics"],
      },
    ],
    vehiles: [],
    employement: false,
    profession: undefined,
    study: "computer science",
  },
  {
    name: "Ramesh",
    age: 45,
    city: "Jaipur",
    hobbies: [
      { type: "gardening", details: "rose gardening" },
      { type: "reading", details: "reading historical fiction" },
    ],
    pets: [
      {
        name: "bella",
        age: 3,
        fullyVaccinated: true,
        vaccinated: true,
        type: "cat",
        favActivity: ["lounging in sun"],
      },
      {
        name: "leo",
        age: 3,
        fullyVaccinated: true,
        vaccinated: true,
        type: "cat",
        favActivity: ["lounging in sun"],
      },
    ],
    vehiles: [],
    employement: true,
    profession: "business",
    study: undefined,
  },
  {
    name: "Kavya",
    age: 28,
    city: "Chennai",
    hobbies: [
      { type: "reading", details: "modern fantasy novels" },
      { type: "waching", details: "binge-watching sci-fi shows " },
    ],
    pets: [
      {
        name: "snowy",
        age: 2,
        fullyVaccinated: false,
        vaccinated: true,
        type: "rabbit",
        favActivity: ["backyard", "nibbling on carrots"],
      },
    ],
    vehiles: [],
    employement: false,
    profession: "dancer",
    study: undefined,
  },
];

//---**Hypothetical Questions:**---

// const countOfCurrentlyEmployed = function (people) {
//   return people.reduce(function (count, person) {
//     return person.employement ? count + 1 : count;
//   }, 0);
// };
const pets = people.flatMap(({ pets }) => pets);

const peopleOwnsCar = (people) =>
  people.filter(({ vehiles }) => vehiles.includes("car"));

//---1
const countOfCurrentlyEmployed = function (people) {
  return people.filter(({ employement }) => employement).length;
};

// console.log(countOfCurrentlyEmployed(people));

//---2
const countOfPeopleOwnsCar = function () {
  return peopleOwnsCar.length;
};

// console.log(countOfPeopleOwnsCar());

//---3
const countOfPetsFullyVaccinated = function (people) {
  return people
    .flatMap(({ pets }) => pets)
    .filter(({ fullyVaccinated }) => fullyVaccinated).length;
};

// console.log(countOfPetsFullyVaccinated(people));

//---4
const nameAndTypeOfCorrespondingPet = function (people) {
  const pets = people.flatMap(({ pets }) => pets);

  return pets.map(({ name, type }) => ({ petName: name, petType: type }));
};

// console.log(nameAndTypeOfCorrespondingPet(people));

//---5
const cities = people.map(({ city }) => city);

// console.log(cities);

//---6
const hobbiesAndCountOfHobbies = function (people) {
  const hobbies = people.reduce(function (arr, { hobbies }) {
    return hobbies.reduce((arr, { type }) => {
      if (arr.includes(type)) {
        return arr;
      }

      arr.push(type);
      return arr;
    }, arr);
  }, []);

  return [hobbies.length, hobbies];
};

// console.log(hobbiesAndCountOfHobbies(people));

//----7
const countOfPetsBelongToUnemployed = function (people) {
  return people.filter(({ employement }) => employement).map(({ pets }) => pets)
    .length;
};

// console.log(countOfPetsBelongToUnemployed(people));

//---8
const averageAge = function (people) {
  const ages = people.map(({ age }) => age);
  const totalAge = ages.reduce((total, age) => age + total, 0);

  return totalAge / ages.length;
};

// console.log(averageAge(people));

//---9--- CS --> compute science
const countOfCSPeopleAndTheirPets = function (people) {
  const CSPeople = people.filter(
    (person) => person.study === "computer science"
  );

  const petsCount = CSPeople.reduce(
    (count, person) => count + person.pets.length,
    0
  );

  return {
    countOfCoumputerSciencePeople: CSPeople.length,
    countOfPets: petsCount,
  };
};

// console.log(countOfCSPeopleAndTheirPets(people));

//---10
const countOfPeopleHavingMoreThanOnePet = function (people) {
  const moreThanOnePet = people.filter((person) => person.pets.length > 2);

  return moreThanOnePet.length;
};

// console.log(countOfPeopleHavingMoreThanOnePet(people));

const petsAndTheirLikes = function () {
  const petsHasLikes = pets.filter(
    ({ favActivity }) => favActivity.length !== 0
  );

  return petsHasLikes.map(function ({ name, favActivity }) {
    return [name, favActivity.join("")];
  });
};

// console.log(petsAndTheirLikes(people));

//12
const namesOfPets = function (people) {
  const peopleBelongsToBangOrChannai = people.filter(({ city }) =>
    ["Bangalore", "Chennai"].includes(city)
  );

  const pets = peopleBelongsToBangOrChannai.flatMap((person) => person.pets);
  return pets.map(({ name }) => name);
};

// console.log(namesOfPets(people));

//13
const countOfVaccinatedPets = function () {
  const pets = peopleOwnsCar(people).flatMap(({ pets }) => pets);
  const vaccinatedPets = pets.filter(({ vaccinated }) => vaccinated);

  return vaccinatedPets.length;
};

// console.log(countOfVaccinatedPets());

//14
const getNoOfpets = (object, { type }) => {
  if (!(type in object)) {
    object[type] = 0;
  }

  object[type] = object[type] + 1;

  return object;
};

const commonTypePetInGroup = function () {
  const petsOccurences = Object.entries(pets.reduce(getNoOfpets, {}));
  console.log(petsOccurences);
  const commonPet = petsOccurences.reduce((pet1, pet2) =>
    pet1[1] > pet2[1] ? pet1 : pet2
  );

  return commonPet[0];
};

console.log(commonTypePetInGroup());

//15
const countOfPeopleHasMoreThanTwoHobbies = function (people) {
  const peopleHasMoreThanTwoHobbies = people.filter(
    ({ hobbies }) => hobbies.length > 2
  );

  return peopleHasMoreThanTwoHobbies.length;
};

console.log(countOfPeopleHasMoreThanTwoHobbies(people));

//17
const youngestPet = function () {
  const littlePet = pets.reduce(function (min, pet) {
    return min < pet.age ? min : pet;
  }, Infinity);

  return { pet: littlePet.name, age: littlePet.age };
};

// console.log(youngestPet(people));

//18

const booksReadByPeople = function (people) {
  const readers = people.filter(({ reading }) => reading.length !== 0);

  return readers.map((reader) => [reader.name, reader.reading]);
};

// console.log(booksReadByPeople(people));

//19
const countOfcitiesStartsWithB = function (people) {
  const cities = people.map(({ city }) => city);

  return cities.filter((city) => city.startsWith("B"));
};

// console.log(countOfcitiesStartsWithB(people));

//20
const peopleNotHavePets = function (people) {
  const notHavePets = people.filter(({ pets }) => pets.length === 0);

  return notHavePets.map(({ name }) => name);
};

// console.log(peopleNotHavePets(people));
