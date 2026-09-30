
let students = 0;
let presentStudents = [];

function startScanner() {

    const scanner = new Html5Qrcode("reader");

    scanner.start(

        { facingMode: "environment" },

        {
            fps: 10,
            qrbox: 250
        },

        function(decodedText) {

            
            let studentData = decodedText.split("|");

            let studentId = studentData[0];
            let studentName = studentData[1];
            let studentGroup = studentData[2];


           
            if (presentStudents.includes(decodedText)) {

                alert("This student is already present!");

                scanner.stop();

                return;
            }


            
            presentStudents.push(decodedText);

            students++;


            
            let list =
                document.getElementById("attendanceList");


           
            let student =
                document.createElement("li");


            /
            let time =
                new Date().toLocaleTimeString();


            
            student.textContent =
                studentId +
                " | " +
                studentName +
                " | Group: " +
                studentGroup +
                " | " +
                time;


            list.appendChild(student);


            
            document.getElementById("studentCount").textContent =
                students + " Students";


            
            document.getElementById("studentName").textContent =
                studentName;


            document.getElementById("attendanceTime").textContent =
                "Attendance recorded successfully!";


            
            scanner.stop();
        }
    )

    .catch(function(error) {

        console.log("Camera error:", error);

    });
}


function endAttendance() {

    alert("Attendance has ended!");

}

