let findTheOldest = function(people) {
    let oldest = people.reduce((oldestPerson, person) => {
        let currentYear = new Date();
        currentYear = currentYear.getFullYear();
        let oldestAge;
        let age;
        (person.yearOfDeath) ? 
            age = person.yearOfDeath - person.yearOfBirth : age = currentYear - person.yearOfBirth;
        (oldestPerson.yearOfDeath) ? 
            oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth : oldestAge = currentYear - oldestPerson.yearOfBirth; 
        console.log(person, age, oldestPerson)
        
        if(age > oldestAge){
            oldestPerson = person;
        }
        return oldestPerson;
        
    }, people[0]);    
    return oldest;
}

module.exports = findTheOldest
