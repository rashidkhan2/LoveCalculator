function loveclcuketor(){
   var fastName = document.getElementById('fastName').value;
   var lastName = document.getElementById('lastName').value;

   if(fastName == ""){
      alert('Please enter your name');
   }else if (fastName.length <=2 ) {
      alert('Min lenght is 3')
   }else if(!isNaN(fastName)){
      alert('Numbers are not allowed');
   }

   else if(lastName == ""){
      alert('Please enter your love name');
   }else if (lastName.length <=2 ) {
      alert('Min lenght is 3')
   }else if(!isNaN(lastName)){
      alert('Numbers are not allowed');
   }
   else{
   var love = Math.random() * 100;
   love = Math.floor(love);
   document.getElementById('loveId').value = love + "%"; 
   }
   
      }