console.log('Functions js called');
// module.exports.age=30;
const fs = require('fs');

var addPatient = (pid,pname) =>{
  console.log('Adding the Patient ', pid, pname);
  fs.appendFile('patient-details.txt', `The Patient ID is ${pid} & Patient name is ${pname}.`, function(err){
    if(err) throw err;
    console.log("Added Successfully");
  });
}

var getPatients = ()=>{
  console.log('Getting all patients');
  fs.readFile('patient-details.txt', function(err, data){
    if(err){
      console.log("Encountered Error");
    }else{
      console.log(data);
    }
  });

}

module.exports = {
  addPatient,
  getPatients
}
