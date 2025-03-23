// A simple grade calculator.
function gradeMachine(marks) {
    let result;
  
    // First, i check if the input is valid.
    if (marks < 0 || marks > 100) {
      result = "incorrectInput";
      return result;
    }
  
    // Then, i figure out the grade.
    if (marks >= 79) {
      result = "A";
    } else if (marks >= 60) {
      result = "B";
    } else if (marks >= 49) {
      result = "C";
    } else if (marks >= 40) {
      result = "D";
    } else {
      result = "E";
    }
  
    return result;
  }
  
  // I try it out, with multiple results.
  let scores = [58, 85, 30, -10, 110];
  let results = scores.map(score => "Grade for " + score + " is " + gradeMachine(score)).join(", ");
  
  console.log(results);
  
