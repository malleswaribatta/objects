const people = [
  {
    name: "Rahul",
    age: 24,
    city: "Pune",
    hobbies: [
      { type: "playing", details: "chess" },
      { type: "gardening", details: "" },
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
    vehicles: ["car"],
    employement: true,
    profession: "software engineer",
    study: "computer science",
  },
  {
    name: "Ananya",
    age: 30,
    city: "Bangalore",
    hobbies: [{ type: "cooking", details: "Italian recipes" }],
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
    vehicles: [],
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
      { type: "reading", details: "historical fiction" },
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
    vehicles: [],
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
      { type: "watching", details: "binge-watching sci-fi shows " },
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
    vehicles: [],
    employement: false,
    profession: "dancer",
    study: undefined,
  },
];

//---**Hypothetical Questions:**---

const pets = (people) => people.flatMap(({ pets }) => pets);

//---1
const countOfCurrentlyEmployed = (people) =>
  people.filter(({ employement }) => employement).length;

// console.log(countOfCurrentlyEmployed(people));

//---2
const peopleOwnsCar = (people) =>
  people.filter(({ vehicles }) => vehicles.includes("car"));
const countOfPeopleOwnsCar = peopleOwnsCar.length;

// console.log(countOfPeopleOwnsCar);

//---3
const countOfFullyVaccinatedPets = function () {
  return pets(people).filter(({ fullyVaccinated }) => fullyVaccinated).length;
};

// console.log(countOfPetsFullyVaccinated());

//---4
const nameAndTypeOfPets = function () {
  return pets(people).map(({ name, type }) => ({
    petName: name,
    petType: type,
  }));
};

// console.log(nameAndTypeOfCorrespondingPet());

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
  return people
    .filter(({ employement }) => !employement)
    .map(({ pets }) => pets).length;
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
  const CSPeople = people.filter(({ study }) => study === "computer science");

  const CountOfCSPeopleWhoHavePets = CSPeople.filter(
    ({ pets }) => pets.length > 0
  );

  return {
    countOfCoumputerSciencePeople: CSPeople.length,
    CSPeopleWhoHavePets: CountOfCSPeopleWhoHavePets.length,
  };
};

// console.log(countOfCSPeopleAndTheirPets(people));

//---10
const countOfPeopleHavingMoreThanOnePet = (people) =>
  people.filter(({ pets }) => pets.length > 2).length;

// console.log(countOfPeopleHavingMoreThanOnePet(people));

//---11
const petsAndTheirLikes = function (people) {
  const petsHasLikes = pets(people).filter(
    ({ favActivity }) => favActivity.length !== 0
  );

  return petsHasLikes.map(({ name }) => name);
};

// console.log(petsAndTheirLikes(people));

//12
const namesOfPets = function (people) {
  const peopleOfBangaloreOrChennai = people.filter(({ city }) =>
    ["Bangalore", "Chennai"].includes(city)
  );

  const pets = peopleOfBangaloreOrChennai.flatMap(({ pets }) => pets);
  return pets.map(({ name }) => name);
};

// console.log(namesOfPets(people));

//13
const countOfVaccinatedPets = function (people) {
  const peopleNotOwnsCar = () =>
    people.filter(({ vehicles }) => !vehicles.includes("car"));
  const pets = peopleNotOwnsCar().flatMap(({ pets }) => pets);
  const vaccinatedPets = pets.filter(({ vaccinated }) => vaccinated);

  return vaccinatedPets.length;
};

// console.log(countOfVaccinatedPets(people));

//14
const getPetsOccrences = (object, { type }) => {
  if (!(type in object)) {
    object[type] = 0;
  }

  object[type] = object[type] + 1;

  return object;
};

const commonTypePetInGroup = function () {
  const petsOccurences = Object.entries(pets.reduce(getPetsOccrences, {}));
  const commonPet = petsOccurences.reduce((pet1, pet2) =>
    pet1[1] > pet2[1] ? pet1 : pet2
  );

  return commonPet[0];
};

// console.log(commonTypePetInGroup());

//15
const countOfPeopleHasMoreThanTwoHobbies = function (people) {
  return people.filter(({ hobbies }) => hobbies.length > 2).length;
};

// console.log(countOfPeopleHasMoreThanTwoHobbies(people));

//17
const youngestPet = function () {
  return pets(people).reduce((pet1, pet2) =>
    pet1.age < pet2.age ? pet1 : pet2
  ).name;
};

// console.log(youngestPet(people));

//18

// const booksReadByPeople = function (people) {
//   const readers = people.filter(({ hobbies }) =>
//     hobbies.map((d) => d.type).includes("reading")
//   );
//   const hobbies = readers.flatMap(({ hobbies }) =>
//     hobbies.filter(({ type }) => type === "reading")
//   );
//   console.log(hobbies);
//   // return readers.map(({ name}) => ({ name: name, hobbies.}));
// };

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
