// HERE TO UNDERSTAND "OBJECTS"

// "aCourse" is an object that can contain other objects
const aCourse = {
    //keys that store data are called properties
    //keys that store functions are called methods
    code: "CSE121b",
    name: "Javascript Lenguage",
    sections: [
        { 
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'
        },
        { 
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'
        }
    ],
    // enrollStudent: function(sectionNum) {
    //     sectionIndex = this.sections.findIndex(
    //         (section) => sections.sectionNum == sectionNum
    //     );
    //     if (sectionIndex >= 0) {
    //         this.sections[sectionIndex].enrolled++;
    //         renderSections(this.sections);
    //     }
    // },
    // dropStudent: function(sectionNum) {
    //     sectionIndex = this.sections.findIndex(
    //         (section) => sections.sectionNum == sectionNum
    //     );
    //     if (sectionsIndex >= 0) {
    //         this.sections[sectionIndex].enrolled--;
    //         renderSections(this.sections)
    //     }
    // },

    //same functionality but less code!!
    changeEnrollement: function(sectionNum, add = true) {
        sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            if (add) {
                this.sections[sectionIndex].enrolled++;
            }
            else {
                this.sections[sectionIndex].enrolled--;
            }
            renderSections(this.sections); //this = aCourse(creo xd)
        }
    } 
};

function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");

    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function renderSections(sections) {
    const html = sections.map(
        (section) => <tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>
    )
    document.querySelector("#sections").innerHTML = html.join("");
}
// event listener
document.querySelector("#enrollStudent").addEventListener("click", function() {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function() {
    const sectionNum = document.querySelector("#sectionNumber").value;//dont forget to call the document. befores searching a value
    aCourse.dropStudent(sectionNum);
})

setCourseInfo(aCourse);
renderSections(aCourse);
