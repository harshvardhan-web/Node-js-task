console.log('Starting App.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./functions.js');

const argv = yargs.argv;
var command = argv._[0];

console.log('Command is: ',command);
console.log('Process is: ', process.argv);
console.log('Yargs: ',argv);

console.log('Command is : ',command);
if(command==='add'){
  notes.addPatient(argv.pid, argv.pname);
}else if(command==='read'){
  notes.getPatients();
}else{
  console.log('Command not recognized');
}
