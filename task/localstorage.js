var listofStudents =[]

        function savename(){
            var uname = document.getElementById("name").value
            var email = document.getElementById("email").value
            var age = document.getElementById("age").value
            var city = document.getElementById("city").value
            var obj ={
                Username:uname,
                Email:email,
                Age:age,
                City:city
            }
            listofStudents.push(obj)
            localStorage.setItem("students", JSON.stringify(listofStudents))
        }
        function showdata(){
            var dataInstring = localStorage.getItem("students")
            var listofStudents = JSON.parse(dataInstring)
            document.getElementById("student-data").innerHTML = 
            listofStudents.map((student, i) =>
                `<div style="box-shadow: 1px 1px 5px 1px gray; padding: 20px; margin: 20px;">
                  <button onclick="deletestudent(${i})">Delete</button>
                  <h1>Username:${student.Username}</h1>
                  <h1>Email:${student.Email}</h1>
                  <h1>Age:${student.Age}</h1>
                  <h1>City:${student.City}</h1>
                </div>`
        ).join("")
        }
        function deletestudent(index){
            listofStudents.splice(index, 1)
            localStorage.setItem("students" ,JSON.stringify(listofStudents))
            showdata()
        }