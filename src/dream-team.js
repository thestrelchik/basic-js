const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
    let stringWords = [];
    let words = [];
    let name ;
    let isFalse = false;
    if(members === undefined || members === null || members === false) {
      return isFalse;
    }

    for(let i=0; i<members.length; i++){
        
        if(typeof members[i] == 'string') {
            let trim = members[i].trim();
            
            stringWords.push(trim);
        } 
        
    }
    if(stringWords.length == 0) {
        return isFalse;
    }
    
    for(let j=0; j<stringWords.length; j++) {
        let word =(stringWords[j][0]);
        words.push(word);
        
    }
    console.log(words);
   name = words.sort().join('').toUpperCase();
   name = name.split('').sort().join('');
    
    return name;
  }

module.exports = {
  createDreamTeam
};
