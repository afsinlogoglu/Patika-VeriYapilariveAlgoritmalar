   
   let fullName = prompt("What is your name?")
   let myName = document.getElementById('myName')
   let myClock = document.getElementById('myClock')
   myName.innerHTML= fullName
   myClock.innerHTML = Date(Date.now()).toString()

    
