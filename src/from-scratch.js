const coolGreeting = () => {
if (person && person.isCool){
  return `What is UP ${person.name.toUpperCase()}? How you been doin'?`,

return  `Greetings ${person.name}, how have you been lately`
}
};

const haveBirthday = () => {
};

const becomeSecretAgent = () => {
};

const carMaker = (name, maker, year) => {
  return{
    name,
    maker,
    year,
    needsOilChange: false
  }
};

const weAreNotFriends = (person) => {
  if (!person || ! Array.isArray(person.friends))
    return person.friends.pop()
};

const listHobbies = (person) => {
};

const getNextOpponent = () => {
};

const listAllKeys = (obj) => {
  return Object.keys(obj)
};

const listAllValues = () => {
  return Object.values(obj)
};

const convertToMatrix = () => {
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
