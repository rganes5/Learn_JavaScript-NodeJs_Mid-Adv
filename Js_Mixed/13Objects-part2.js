var student={ 
    name: "Ganesh",
    age: 24,
    place:"Kumily",
    qualification: "BCA",
    loggedInFromGoogle: true,
    courseList:[],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function(){
       return `${this.name} is enrolled into ${this.courseList.length} courses`;
    },
    info: function(){
        return`${this.name} is ${this.age} years old from a place called ${this.place} and his qualification is ${this.qualification} and he is enrolled into ${this.courseList}`;
    }
};
var courseList=true;
console.log(student.getCourseCount());
student.buyCourse("React JS Course");
student.buyCourse("Angular JS Course");
console.log(student.getCourseCount());
console.log(student.info());
