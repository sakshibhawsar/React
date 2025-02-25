var listofQuestion =[]
var ans=[]
/*---quiz.html---*/
          function savequestion(){
            var ques = document.getElementById("quest").value
            var opt1 = document.getElementById("opt1").value
            var opt2 = document.getElementById("opt2").value
            var opt3 = document.getElementById("opt3").value
            var opt4 = document.getElementById("opt4").value
            var ans = document.getElementById("ans").value
            var obj ={
                Question:ques,
                Option1:opt1,
                Option2:opt2,
                Option3:opt3,
                Option4:opt4,
                Answer:ans
            }
            listofQuestion.push(obj)
            localStorage.setItem("quiz", JSON.stringify(listofQuestion))
            //showQuestion()
          }
          function showQuestion(){
            listofQuestion = JSON.parse(localStorage.getItem("quiz"))
            document.getElementById("show").innerHTML = listofQuestion.map((que)=>
              ` <div style="background-color:#364153; width:500px; margin-bottom:24px; color: white; border-radius:8px">
                    <div style="display:flex; align-items:right; justify-content:flex-end;">
                    <button onclick="delquestion(${listofQuestion.indexOf(que)})" style="background-color:#51a2ff;
                    margin-top:8px; margin-right:8px; border-radius:8px; width:90px; height:36px; cursor:pointer;" 
                    onmouseover="style.backgroundColor='#2b7fff';"
                    onmouseout="this.style.backgroundColor='#51a2ff';">
                    Delete</button>
                    </div>
                   <h1 style="margin-left:12px; margin-bottom:4px">Q. ${que.Question}</h1>
                   <h3 style="margin-left:12px; margin-bottom:4px">A. ${que.Option1}</h3>
                   <h3 style="margin-left:12px; margin-bottom:4px">B. ${que.Option2}</h3>
                   <h3 style="margin-left:12px; margin-bottom:4px">C. ${que.Option3}</h3>
                   <h3 style="margin-left:12px; margin-bottom:4px">D. ${que.Option4}</h3>
                   <h2 style="margin-left:12px; margin-bottom:4px">Answer= ${que.Answer}</h2>
                </div>`
           ).join("") 
          }
          function delquestion(index){
            listofQuestion.splice(index, 1)
            localStorage.setItem("quiz", JSON.stringify(listofQuestion))
            showQuestion()
          }
          /*---showtest.html---*/
          function starttest(){
              window.location.href = "question.html"
          }
          function selopt(index, ansval){
              ans[index]=ansval
          }
          function Submit(){
            var Score=0
             for(var i=0; i<listofQuestion.length; i++){
              if(ans[i]==listofQuestion[i].Answer){
                Score++
              }
             }
             document.body.innerHTML = "<h1>Score: "+Score+"</h1>"
          }