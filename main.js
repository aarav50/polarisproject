
        var a = document.querySelector("#hi")
        var d = document.querySelector("#hii")
        var e = document.querySelector("#hiii")
        var b = 0
        var k=[]
        function onSubmit(even){
            even.preventDefault()
            var temp=document.createElement("div")
            temp.id=`hiiiii${b}`
            temp.className="styleingclass4"
            var tempy=document.createElement("h2")
            tempy.className="styleingclass3"
            tempy.textContent=`Name Of Activity:${d.value}`
            var tempyy=document.createElement("h2")
            tempyy.className="styleingclass3"
            tempyy.textContent=`Priority:${e.value}`
            var tempyyy=document.createElement("button")
            
            tempyyy.textContent="finish"
            tempyyy.id=`hiiiiiiiii${b}`
            tempyyy.className="buttonclassmain"
            temp.appendChild(tempy)
            temp.appendChild(tempyy)
            temp.appendChild(tempyyy)
            document.body.appendChild(temp)
            b=b+1

            d.value=""
            e.value="Select"
            

        }
        function click(event){
            if (event.target.className=="buttonclassmain"){
                var outlinee=event.target.id
                var code="hiiiii"+outlinee.slice(10)
                document.getElementById(code).remove()



            }
        }
        a.onsubmit = onSubmit
        document.addEventListener("click",click)
        


        






