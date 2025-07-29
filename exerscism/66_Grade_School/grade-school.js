// Solución al ejercicio de Exercism: "Grade School"
// Enunciado tomado de Exercism.org

export class GradeSchool {
  constructor() {
    this.students = {};
  }

  roster() {
    const ordenado = Object.fromEntries(
      Object.entries(this.students).map(([key, arr]) => [key, [...arr].sort()])
    );
    return ordenado;
  }

  add(studentName, studentGrade) {
    const yaExiste = Object.values(this.students).some((arr) =>
      arr.includes(studentName)
    );

    if (yaExiste) {
      for (const key in this.students) {
        this.students[key] = this.students[key].filter(
          (student) => student !== studentName
        );
      }
    }

    if (this.students[studentGrade] === undefined) {
      this.students[studentGrade] = [studentName];
    } else {
      this.students[studentGrade].push(studentName);
    }
  }

  grade(studentGrade) {
    if (this.students[studentGrade] === undefined) {
      return [];
    } else {
      return [...this.students[studentGrade]].sort();
    }
  }
}

// Test case 1
const school = new GradeSchool();
console.log(school);

// Test case 2
school.add("Aimee", 2);
console.log(school);

// Test case 3
school.add("Blair", 2);
school.add("James", 2);
school.add("Paul", 2);
console.log(school);

// Test case 4
school.add("Chelsea", 3);
school.add("Logan", 7);
console.log(school);

// Test case 5
school.add("Franklin", 5);
school.add("Bradley", 5);
school.add("Jeff", 1);
console.log(school.grade(5));

// Test case 6
console.log(school.grade(1));

// Test case 7
school.add("Jennifer", 4);
school.add("Kareem", 6);
school.add("Christopher", 4);
school.add("Kyle", 3);
console.log(school.roster());

// Test Case 8
school.add("Aimee", 2);
school.add("Aimee", 1);

console.log(school.grade(2));
console.log(school.grade(1));
