let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
//Memory representation
//Create the memory representation of the above snippet on notebook.
//Take a photo/screenshot and add it to the folder code
//Answer the following with reason:
user == newUser; // ture because both variable name refer same memory address
user === newUser;//true the value or property same with same data type and same memory location
user.name === newUser.name;//true
user.name == newUser.name;//true
user.sibling == newUser.sibling;// true
user.sibling === newUser.sibling;//true
user.sibling == allBrothers;//false because they belongs diffrents memory location but value is same
user.sibling === allBrothers;//false
brothersCopy === allBrothers;//false because memory location diffrent
brothersCopy == allBrothers;//false
brothersCopy == user.sibling;//false
brothersCopy === user.sibling;//false
brothersCopy[0] === user.sibling[0];//true
brothersCopy[1] === user.sibling[1];//true
user.sibling[1] === newUser.sibling[1];//true