const coolGreeting = (person) => {
  return person.isCool
    ? `What is UP ${person.name.toUpperCase()}? How you been doin'?`
    : `Greetings ${person.name}, how have you been lately?`;
};

const haveBirthday = (person) => {
  person.age += 1;
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle;
};

const carMaker = (name, maker, year) => {
  return {
    name,
    maker,
    year,
    needsOilChange: false,
  };
};

const weAreNotFriends = (person) => {
  return person.friends.pop();
};

const listHobbies = (person) => {
  person.hobbies.forEach((hobby) => {
    console.log(`${person.name} likes ${hobby}.`);
  });
};

const getNextOpponent = (team) => {
  if (!team.matches.length) return null;
  return team.matches[0].teamName;
};

const listAllKeys = (obj) => {
  return Object.keys(obj);
};

const listAllValues = (obj) => {
  return Object.values(obj);
};

const convertToMatrix = (arr) => {
  if (arr.length === 0) return [];

  const keys = Object.keys(arr[0]);
  const matrix = [keys];

  arr.forEach((obj) => {
    matrix.push(keys.map((k) => obj[k]));
  });

  return matrix;
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
