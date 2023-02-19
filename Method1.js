var user = {
    firstName : "Rishabh",
    lastName : "Yadav",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList: ["React",2,true,false],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses.`
    }

}; 
var courseList = true;
console.log(user.loginCount);
console.log(user.getCourseCount());
user.buyCourse("React js Course");
user.buyCourse("Python Course");
user.buyCourse();
console.table(user)
console.log(user.getCourseCount());


