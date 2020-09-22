/**
 * Helper function for creating branch
 **/
function createbranch(name, id) {
  return {
    name: name,
    id: id,
  };
}

/**
 * Helper function for creating year
 **/
function createyear(name, id, branch) {
  return {
    name: name,
    id: id,
    branch:branch,
  };
}

/**
 * Helper function for creating subject
 **/
function createsubject(name, id, year,branch) {
  return {
    name: name,
    id: id,
    year:year,
    branch:branch,
    
  };
}


/**
 * Removes all options but the first value in a given select
 * and than selects the only remaining option
 **/
function removeOptions(select) {
  while (select.options.length > 1) {                
    select.remove(1);
  }
  
  select.value = "";
}

/**
 * Adds given options to a given select
 **/
function addOptions(select, options) {
  console.log(select, options)
  options.forEach(function(option) {
    select.options.add(new Option(option.name, option.id));
  });
}

/**
 * Select elements references
 **/
var branchSelect = document.getElementById('branch-select');
var yearSelect = document.getElementById('year-select');
var subjectSelect = document.getElementById('subject-select');

/**
 * Available branch
 **/
var branch = [
  createbranch('CSE', 'cse'),
  createbranch('IT', 'it'),
  createbranch('ECE', 'ece'),
  createbranch('EEE', 'eee'),
  createbranch('CIVIL', 'civil'),
  createbranch('MECH', 'mech'),
];

/**
 * Available year
 **/
var year = [

  createyear('I', 'i', 'cse'),          //cse
  createyear('II', 'ii', 'cse'),
  createyear('III', 'iii', 'cse'),
  createyear('IV', 'iv', 'cse'),

   createyear('I', 'i', 'it'),          //it
  createyear('II', 'ii', 'it'),
  createyear('III', 'iii', 'it'),
  createyear('IV', 'iv', 'it'),
  
   createyear('I', 'i', 'ece'),         //ece
  createyear('II', 'ii', 'ece'),
  createyear('III', 'iii', 'ece'),
  createyear('IV', 'iv', 'ece'),
    
   createyear('I', 'i', 'eee'),         //eee
  createyear('II', 'ii', 'eee'),
  createyear('III', 'iii', 'eee'),
  createyear('IV', 'iv', 'eee'),
   
   createyear('I', 'i', 'civil'),       //civil
  createyear('II', 'ii', 'civil'),
  createyear('III', 'iii', 'civil'),
  createyear('IV', 'iv', 'civil'),
  
   createyear('I', 'i', 'mech'),        //mech
  createyear('II', 'ii', 'mech'),
  createyear('III', 'iii', 'mech'),
  createyear('IV', 'iv', 'mech'),
  
];

/**
 * Available subject
 **/
var subject= [

/*************  1st year *****************/

  createsubject('PPS1','pps1','i','civil'),
  createsubject('PPS2','pps2','i','civil'),
  createsubject('EP','ep','i','civil'),
  createsubject('EM','em','i','civil'),
  createsubject('CHEMISTRY','chemistry','i','civil'),
  createsubject('M1','m1','i','civil'),
  createsubject('M2','m2','i','civil'),
  createsubject('ENGLISH','english','i','civil'),
  createsubject('EGM','egm','i','civil'),
  
  
  createsubject('PPS1', 'pps1', 'i','mech'),
  createsubject('PPS2', 'pps2', 'i','mech'),
  createsubject('EP','ep','i','mech'),
  createsubject('EM','em','i','mech'),
  createsubject('CHEMISTRY','chemistry','i','mech'),
  createsubject('M1','m1','i','mech'),
  createsubject('M2','m2','i','mech'),
  createsubject('ENGLISH','english','i','mech'),
  createsubject('EGM','egm','i','mech'),
  
  
  createsubject('PPS1','pps1', 'i','eee'),
  createsubject('PPS2','pps2', 'i','eee'),
  createsubject('EP','ep','i','eee'),
  createsubject('BEE','bee','i','eee'),
  createsubject('CHEMISTRY','chemistry','i','eee'),
  createsubject('M1','m1','i','eee'),
  createsubject('M2','m2','i','eee'),
  createsubject('ENGLISH','english','i','eee'),
  createsubject('EGM','egm','i','eee'),


  createsubject('PPS1','pps1', 'i','ece'),
  createsubject('PPS2','pps2', 'i','ece'),
  createsubject('AP','ap','i','ece'),
  createsubject('BEE','bee','i','ece'),
  createsubject('CHEMISTRY','chemistry','i','ece'),
  createsubject('M1','m1','i','ece'),
  createsubject('M2','m2','i','ece'),
  createsubject('ENGLISH','english','i','ece'),
  createsubject('EGM','egm','i','ece'),


  createsubject('PPS1','pps1', 'i','cse'),
  createsubject('PPS2','pps2', 'i','cse'),
  createsubject('AP','ap','i','cse'),
  createsubject('BEE','bee','i','cse'),
  createsubject('CHEMISTRY','chemistry','i','cse'),
  createsubject('M1','m1','i','cse'),
  createsubject('M2','m2','i','cse'),
  createsubject('ENGLISH','english','i','cse'),
  createsubject('EGM','egm','i','cse'),

  createsubject('PPS1','pps1', 'i','it'),
  createsubject('PPS2','pps2', 'i','it'),
  createsubject('AP','ap','i','it'),
  createsubject('BEE','bee','i','it'),
  createsubject('CHEMISTRY','chemistry','i','it'),
  createsubject('M1','m1','i','it'),
  createsubject('M2','m2','i','it'),
  createsubject('ENGLISH','english','i','it'),
  createsubject('EGM','egm','i','it'),
  
  
  
  /*****************  2nd yeear*************************/

createsubject('Numerical Methods', 'Numerical_Methods', 'ii','civil'),
createsubject('Engineering Geology', 'Engineering_Geology', 'ii','civil'),
createsubject('Strength Of Materials-I','Strength_Of_Materials-I','ii','civil'),
createsubject('Surveying','Surveying','ii','civil'),
createsubject('Environmental Science','Environmental_Science','ii','civil'),
createsubject('Fluid Mechanics','Fluid_Mechanics','ii','civil'),
createsubject('Gender Sensitization','Gender_Sensitization','ii','civil'),
createsubject('Probability and statistics','Probability_and_statistics','ii','civil'),
createsubject('Structural Analysis-I','Structural_Analysis-I','ii','civil'),
createsubject('Strength Of Materials-II','Strength_Of_Materials-II','ii','civil'),
createsubject('Concrete Technology',' Concrete_Technology','ii','civil'),
createsubject('Hydraulics & Hydraulic Machinery','Hydraulics_&_Hydraulic_Machinery','ii','civil'),
createsubject('Building Materials and Construction Planning','Building_Materials_and_Construction_Planning','ii','civil'),
createsubject('Professional Communication','Professional_Communication','ii','civil'),

  
createsubject('Numerical Methods','Numerical_Methods','ii','mech'),
createsubject('Electrical and Electronics Engineering','Electrical_and_Electronics_Engineering','ii','mech'),
createsubject('Mechanics Of Solids','Mechanics_Of_Solids','ii','mech'),
createsubject('Thermodynamics','Thermodynamics','ii','mech'),
createsubject('Metallurgy and Material Science','Metallurgy_and_Material_Science','ii','mech'),
createsubject('Environmental science','Environmental_Science','ii','mech'),
createsubject('Gender Sensitization','Gender_Sensitization','ii','mech'),
createsubject('Production Technology','Production_Technology','ii','mech'),
createsubject('Kinematics of Machinery','Kinematics_of_Machinery','ii','mech'),
createsubject('Thermal Engineering-I','Thermal_Engineering-I','ii','mech'),
createsubject('Mechanics of Fluids and Hydraulic Machines','Mechanics_of_Fluids_and_Hydraulic_Machines','ii','mech'),
createsubject('Machine Drawing','Machine_Drawing','ii','mech'),
createsubject('Probability and Statistics',' Probability_and_Statistics','ii','mech'),
createsubject('Professional Communication','Professional_Communication','ii','mech'),

createsubject('Mathematics-IV','Mathematics-IV','ii','eee'),
createsubject('Electronic Devices & Circuits','Electronic_Devices_&_Circuits','ii','eee'),
createsubject('Network Theory','Network_Theory','ii','eee'),
createsubject('Electro Magnetic Fields','Electro_Magnetic_Fields','ii','eee'),
createsubject('Electrical Machines–I','Electrical_Machines–I','ii','eee'),
createsubject('Environmental Science','Environmental_Science','ii','eee'),
createsubject('Electronic Circuits','Electronic_Circuits','ii','eee'),
createsubject('STLD','STLD','ii','eee'),
createsubject('Fluid Mechanics and Hydraulic Machines','Fluid_Mechanics_and_Hydraulic_Machines','ii','eee'),
createsubject('Electrical Machines-II','Electrical_Machines-II','ii','eee'),
createsubject('Power Systems-I','Power_Systems-I','ii','eee'),
createsubject('Control Systems','Control_Systems','ii','eee'),
createsubject('Gender Sensitization','Gender_Sensitization','ii','eee'),
createsubject('Professional Communication','Professional_Communication','ii','eee'),

createsubject('Mathematics-IV','Mathematics-IV','ii','ece'),
createsubject('Electronic Devices & Circuits','Electronic_Devices_&_Circuits','ii','ece'),
createsubject('Signals and Systems','Signals_and_Systems','ii','ece'),
createsubject('Switching Theory and Logic Design','Switching_Theory_and_Logic_Design','ii','ece'),
createsubject('Electronic Measurements & Instruments','Electronic_Measurements_&_Instruments','ii','ece'),
createsubject('Probability Theory and Stochastic Processes','Probability_Theory_and_Stochastic_Processes','ii','ece'),
createsubject('Gender Sensitization','Gender_Sensitization','ii','ece'),
createsubject('Professional Communication','Professional_Communication','ii','ece'),
createsubject('Principles of Electrical Engineering','Principles_of_Electrical_Engineering','ii','ece'),
createsubject('Electronic Circuit Analysis','Electronic_Circuit_Analysis','ii','ece'),
createsubject('Pulse and Digital Circuits ','Pulse_and_Digital_Circuits ','ii','ece'),
createsubject(' Electromagnetic Theory and Transmission Lines',' Electromagnetic_Theory_and_Transmission_Lines','ii','ece'),
createsubject('Digital System Design','Digital_System_Design','ii','ece'),
createsubject('Environmental Science','Environmental_Science','ii','ece'),


createsubject('Probability & Statistics','Probability_&_Statistics','ii','cse'),
createsubject('Mathematical Foundations of Computer Science','Mathematical_Foundations_of_Computer_Science','ii','cse'),
createsubject('Data Structures','Data_Structures','ii','cse'),
createsubject('Digital Logic Design','Digital_Logic_Design','ii','cse'),
createsubject('Python','Python','ii','cse'),
createsubject('Electronic Devices & Circuits','Electronic_Device_&_Circuits','ii','cse'),
createsubject('Gender Sensitization','Gender_Sensitization','ii','cse'),
createsubject('Design and Analysis of Algorithms','Design_and_Analysis_of_Algorithms','ii','cse'),
createsubject('Computer Organization','Computer_Organization','ii','cse'),
createsubject('Database Management Systems','Database_Management_Systems','ii','cse'),
createsubject('Software Engineering','Software_Engineering','ii','cse'),
createsubject('Java Programming','Java_Programming','ii','cse'),
createsubject('Environmental Science','Environmental_Science ','ii','cse'),
createsubject('Professional Communication','Professional_Communication','ii','cse'),


createsubject('Probability & Statistics','Probability_&_Statistics','ii','it'),
createsubject('Mathematical Foundations of Computer Science','Mathematical_Foundations_of_Computer_Science','ii','it'),
createsubject('Data Structures','Data_Structures','ii','it'),
createsubject('Digital Logic Design','Digital_Logic_Design','ii','it'),
createsubject('Python','Python','ii','it'),
createsubject('Electronic Devices & Circuits','Electronic_Device_&_Circuits','ii','it'),
createsubject('Gender Sensitization','Gender_Sensitization','ii','it'),
createsubject('Design and Analysis of Algorithms','Design_and_Analysis_of_Algorithms','ii','it'),
createsubject('Computer Organization','Computer_Organization','ii','it'),
createsubject('Database Management Systems','Database_Management_Systems','ii','it'),
createsubject('Software Engineering','Software_Engineering','ii','it'),
createsubject('Java Programming','Java_Programming','ii','it'),
createsubject('Environmental Science','Environmental_Science ','ii','it'),
createsubject('Professional Communication','Professional_Communication','ii','it'),

  /******************  3rd year ************************/
  
  createsubject('Managerial Economics and Financial Analysis','Managerial_Economics_and_Financial_Analysis','iii','civil'),
  createsubject('Design of Reinforced Concrete Structures','Design_of_Reinforced_Concrete_Structures','iii','civil'),
  createsubject('Geotechnical Engineering','Geotechnical_Engineering','iii','civil'),
  createsubject('Water Resources Engineering–I','Water_Resources_Engineering–I','iii','civil'),
  createsubject('Personality Development & Behavioral Skills','Personality_Development_&_Behavioral_Skills','iii','civil'),
  createsubject('Environmental_Engineering','Environmental_Engineering','iii','civil'),
  createsubject('Steel Structure Design and Drawing','Steel_Structure_Design_and_Drawing','iii','civil'),
  createsubject('Highway Engineering','Highway_Engineering','iii','civil'),
  createsubject('Foundation Engineering','Foundation_Engineering','iii','civil'),
  createsubject('Quantitative Methods & Logical Reasoning','Quantitative_Methods_&_Logical_Reasoning','iii','civil'),
  
  createsubject('Design of Machine Members-I', 'Design_of_Machine_Members-I', 'iii','mech'),
  createsubject('Thermal Engineering-II', 'Thermal_Engineering-II', 'iii','mech'),
  createsubject('Dynamics of Machinery','Dynamics_of_Machinery','iii','mech'),
  createsubject('Machine tools and Metrology','Machine_tools_and_Metrology','iii','mech'),
  createsubject('Training and Placement Cell Course-I','Training_and_Placement_Cell_Course-I','iii','mech'),
  createsubject('Design of Machine Members-II','Design_of_Machine_Members-II','iii','mech'),
  createsubject('Heat Transfer','Heat_Transfer','iii','mech'),
  createsubject('Finite Element Methods','Finite_Element_Methods','iii','mech'),
  createsubject('Managerial Economics and Financial Analysis','Managerial_Economics_and_Financial_Analysis','iii','mech'),
  createsubject('Training and Placement Cell Course-II','Training_and_Placement_Cell_Course-II','iii','mech'),
  
  createsubject('Managerial Economics and Financial Accounts', 'Managerial_Economics_and_Financial_Accounts', 'iii','eee'),
  createsubject('Power Electronics', 'Power_Electronics','iii','eee'),
  createsubject('Power Systems-II','Power_Systems-II','iii','eee'),
  createsubject('Electrical Machines-III','Electrical_Machines-III','iii','eee'),
  createsubject('Personality Development & Behavioral Skills','Personality_Development_&_Behavioral_Skills','iii','eee'),
  createsubject('IC Applications','IC_Applications','iii','eee'),
  createsubject('Electrical Measurements & Measuring Instruments','Electrical_Measurements_&_Measuring_Instruments','iii','eee'),
  createsubject('Power Semiconductor Drives','Power_Semiconductor_Drives','iii','eee'),
  createsubject('Switchgear & Protection','Switchgear_&_Protection','iii','eee'),
  createsubject('Quantitative Methods & Logical Reasoning','Quantitative_Methods_&_Logical_Reasoning','iii','eee'),


  createsubject('Analog Communications', 'Analog_Communications', 'iii','ece'),
  createsubject('Linear & Digital IC Applications', 'Linear_&_Digital_IC_Applications', 'iii','ece'),
  createsubject('Control Systems Engineering','Control_Systems_Engineering','iii','ece'),
  createsubject('Quantitative Methods & Logical Reasoning','Quantitative_Methods_&_Logical_Reasoning','iii','ece'),
  createsubject('Managerial Economics and Financial Analysis','Managerial_Economics_and_Financial_Analysis','iii','ece'),
  createsubject('VLSI Design','VLSI_Design','iii','ece'),
  createsubject('Digital Signal Processing','Digital_Signal_Processing','iii','ece'),
  createsubject('Microprocessors and Microcontrollers','Microprocessors_and_Microcontrollers','iii','ece'),
  createsubject('Personality Development & Behavioural Skills','Personality_Development_&_Behavioural_Skills','iii','ece'),
  
  
  createsubject('Linux Programming ', 'Linux_Programming', 'iii','cse'),
  createsubject('Computer Networks', 'Computer_Networks', 'iii','cse'),
  createsubject('Operating Systems','Operating_Systems','iii','cse'),
  createsubject('Formal Languages & Automata Theory','Forma_Languages_&_Automata_Theory','iii','cse'),
  createsubject('Quantitative Methods & Logical Reasoning','Quantitative_Methods_&_Logical_Reasoning','iii','cse'),
  createsubject('Web Technologies','Web_Technologies','iii','cse'),
  createsubject('Compiler Design','Compiler_Design','iii','cse'),
  createsubject('Data Warehousing & Data Mining','Data_Warehousing_&_Data_Mining','iii','cse'),
  createsubject('Managerial Economics & Financial Analysis','Managerial_Economics_&_Financial_Analysis','iii','cse'),
  createsubject('Personality Development & Behavioural Skills', 'Personality_Development_&_Behavioural_Skills','iii','cse'),
 

  createsubject('Linux Programming ', 'Linux_Programming', 'iii','it'),
  createsubject('Computer Networks', 'Computer_Networks', 'iii','it'),
  createsubject('Operating Systems','Operating_Systems','iii','it'),
  createsubject('Cloud Computing','Cloud_Computing','iii','it'),
  createsubject('Personality Development & Behavioral Skills','Personality_Development_&_Behavioral_Skills','iii','it'),
  createsubject('Web Technologies','Web_Technologies','iii','it'),
  createsubject('Automata & Compiler Design','Automata_&_Compiler_Design','iii','it'),
  createsubject('Data Warehousing & Data Mining','Data_Warehousing_&_Data_Mining','iii','it'),
  createsubject('Managerial Economics & Financial Analysis','Managerial_Economics_&_Financial_Analysis','iii','it'),
  createsubject('Quantitative Methods & Logical Reasoning','Quantitative_Methods_&_Logical_Reasoning','iii','it'),

  /******************  4th year ************************/
  
  
  createsubject('Estimating & Costing', 'Estimating_&_Costing', 'iv','civil'),
  createsubject('Water Resources Engineering-II', 'Water_Resources_Engineering–II', 'iv','civil'),
  createsubject('Railways, Airports and Harbours Engineering','Railways,_Airports_and_Harbours_Engineering','iv','civil'),
  createsubject('Construction Management','Construction_Management','iv','civil'),
  createsubject('Rehabilitation and Retrofitting of Structures','Rehabilitation_and_Retrofitting_of_Structures','iv','civil'),
  createsubject('Pre- Stressed Concrete Structures','Pre-Stressed_Concrete_Structures','iv','civil'),
  
  createsubject('Operation Research', 'Operation_Research', 'iv','mech'),
  createsubject('CAD/CAM', 'CAD/CAM', 'iv','mech'),
  createsubject('Mechanical Measurements and instrumentation','Mechanical_Measurements_and_instrumentation','iv','mech'),
  createsubject('Production Planning and Control','Production_Planning_and_Control','iv','mech'),
  createsubject('Plant Layout and Material Handling','Plant_Layout_and_Material_Handling','iv','mech'),
  createsubject('Unconventional Machining Processes','Unconventional_Machining_Processes','iv','mech'),
  
  createsubject('Microprocessors and Interfacing Devices (ES)', 'Microprocessors_and_Interfacing_Devices(ES)', 'iv','eee'),
  createsubject('Power System Operation & Control(PC)', 'Power_System_Operation_& _Control(PC)', 'iv','eee'),
  createsubject('Computer Methods In Power Systems(PC)','Computer_Methods_In _Power_Systems(PC)','iv','eee'),
  createsubject('Utilization of Electrical Energy','Utilization_of_Electrical_Energy','iv','eee'),
  createsubject('Fundamentals of HVDC and FACTS Devices','Fundamentals_of_HVDC_and_FACTS_Devices','iv','eee'),
  createsubject('EHVAC Transmission','EHVAC_Transmission','iv','eee'),
 
  createsubject('Digital Communication', 'Digital_Communication', 'iv','ece'),
  createsubject('Embedded System Design', 'Embedded_System_Design', 'iv','ece'),
  createsubject('Antennas & Microwave Engineering','Antennas_&_Microwave_Engineering','iv','ece'),
  createsubject('Cellular and Mobile Communications','Cellular_and_Mobile_Communications','iv','ece'),
  createsubject('Data Communications and Networking','Data_Communications_and_Networking','iv','ece'),
  createsubject('Radar Engineering','Radar_Engineering','iv','ece'),
  
  createsubject('Mobile Application Development', 'Mobile_Application_Development', 'iv','cse'),
  createsubject('Information Security', 'Information_Security', 'iv','cse'),
  createsubject('Cloud Computing','Cloud_Computing','iv','cse'),
  createsubject('Design Patterns','Design_Patterns','iv','cse'),
  createsubject('E-Commerce','E-Commerce','iv','cse'),
  createsubject('Semantic Web and Social Networks','Semantic_Web_and_Social_Networks','iv','cse'),
 
  createsubject('Mobile Application Development', 'Mobile_Application_Development', 'iv','it'),
  createsubject('Information Security', 'Information_Security', 'iv','it'),
  createsubject('Software Testing Methodologies','Software_Testing_Methodologies','iv','it'),
  createsubject('Design Patterns','Design_Patterns','iv','it'),
  createsubject('E-Commerce','E-Commerce','iv','it'),
  createsubject('Semantic Web and Social Networks','Semantic_Web_and_Social_Networks','iv','it'),



];

/**
 * Updates year
 **/
function updateyear() {
  var selectedbranch = branchSelect.value;
  var options = year.filter(function(year) {
    return year.branch === selectedbranch;
  });
  
  removeOptions(yearSelect);
  removeOptions(subjectSelect);
  addOptions(yearSelect, options);
}

/**
 * Updates subject
 */
function updatesubject() {
  var selectedyear = yearSelect.value;
  var selectedbranch=branchSelect.value
  var options = subject.filter(function(subject) {
    return subject.year == selectedyear && subject.branch==selectedbranch;
  });
  
  removeOptions(subjectSelect);
  addOptions(subjectSelect, options);
}

/**
 * Adds options to branch select
 **/
addOptions(branchSelect, branch);















