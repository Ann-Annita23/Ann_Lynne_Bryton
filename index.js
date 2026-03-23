//Array of student
const students = [
  { name: "Alice", marks: 80 },
  { name: "Bob", marks: 45 },
  { name: "Charlie", marks: 60 }
];

// The main function 
function processStudentsData(students) {
  const total = calculateTotalScore(students);
  const average = calculateAverage(total, students.length);

  const passed = getPassedStudents(students);
  const failed = getFailedStudents(students);

  let report = generateStudentReportLines(students);
  report = buildFinalReport(report, average, passed, failed);

  console.log(report);

  return { // this sends results all together
    average,
    passed,
    failed,
    report
  };
}

// function to calculateTotalScore
function calculateTotalscore(students){
    for(let student of students){
        total+=student.marks
    }
    return total
}

// getting those students who have passed
function getPassedStudent(student){
    let passed = []
    for(let student of students){
    if(students.marks>=50){
        passed.push(student.name)
    }
    }
    return passed
}

//getting those who have failed
function getFailedStudent(student){
    let failed = []
    for(let student of students){
        if(students.marks<50){
            failed.push(student.name)
        }
    }
    return failed
}

//generate reports
function generateStudentReportLines(students){
    let report=""
    for(let student of students){
        report += student.name + "has scored " + student.marks + "\n"
    }
    return report
}

// calculate report
function calculateAverage(total, count){
    return total / count
}

//building a final report
function buildFinalReport(report, average, passed, failed) {
  report += "\nAverage Score: " + average + "\n";
  report += "Passed: " + passed.join(", ") + "\n";
  report += "Failed: " + failed.join(", ") + "\n";

  return report;
}

console.log(calculateTotalScore(students));// expected answer 185