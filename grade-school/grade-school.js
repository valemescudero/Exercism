//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.newSchool = {};
  }

  roster() {
    console.log(this.newSchool);
    return JSON.parse(JSON.stringify(this.newSchool));
  }

  add(student,grade) {
    if (!this.newSchool.hasOwnProperty(grade)) {
      this.newSchool[grade] = [student];
    } else {
      this.newSchool[grade].push(student)
    }
    this.newSchool[grade].sort()
  }
 
  grade(grade) {
    if (!this.newSchool.hasOwnProperty(grade)) {
      return [];
    } else {
      return  JSON.parse(JSON.stringify(this.newSchool[grade]));
    }
  }
}
