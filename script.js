 let Irdvalue = ()=>{
 let IRD__number= document.getElementById('IRD number').value
 let IRD__regex = /^\d{3}-?\d{3}-?\d{3}$/
 if(IRD__regex.test(IRD__number)){
 IRD__number=IRD__number.replace(/[-.,]/g , '')
 console.log(IRD__number)
 if(IRD__number <  10,000,000 && IRD__number > 150,000,000){
     alert(" Your IRD is not Valid </br>Please enter the valid IRD in the format of xxx-xxx-xxx")
   
 }
 const n = IRD__number;
 let splitnumber = Array.from(n.toString()).map(Number);
 
 let checkdigit = splitnumber[splitnumber.length - 1]
  console.log("checkdigit :",checkdigit)
  if(splitnumber.length==7){
      splitnumber.push(0)
  }
  if(splitnumber.length==8){
    splitnumber.pop()
    let cal__num;
    for(let i=0; i<splitnumber.length;i++){
         cal__num = ((0*3)+(splitnumber[0]*2)+(splitnumber[1]*7)+(splitnumber[2]*6)+(splitnumber[3]*5)+(splitnumber[4]*4)+(splitnumber[5]*3)+(splitnumber[6]*2))
       } 
      
    console.log(cal__num)
       let result = (cal__num % 11)
       console.log(result)
       if (result == 0){
           result == checkdigit
           alert ("you entered the valid IRD")
       }  
       else if (result !== 0){
          if((11-result) == checkdigit){
           alert("you entered valid IRD")
          }
          else if(11-result !== checkdigit){
              let recal__num=((0*7)+(splitnumber[0]*4)+(splitnumber[1]*3)+(splitnumber[2]*2)+(splitnumber[3]*5)+(splitnumber[4]*2)+(splitnumber[5]*7)+(splitnumber[6]*6))
              console.log(recal__num)
              let result2 = (recal__num % 11)
              if((11-result2) == checkdigit){
                  alert("you entered valid IRD Number recall")
              }
              else{
              alert("IRD NUMBER IS INVALID")
          }
          }
       }
  }
 else if(splitnumber.length==9){
    splitnumber.pop()
    let cal__num;
    for(let i=0; i<splitnumber.length;i++){
         cal__num = ((splitnumber[0]*3)+(splitnumber[1]*2)+(splitnumber[2]*7)+(splitnumber[3]*6)+(splitnumber[4]*5)+(splitnumber[5]*4)+(splitnumber[6]*3)+(splitnumber[7]*2))
       } 
      
    console.log(cal__num)
       let result = (cal__num % 11)
       console.log(result)
       if (result == 0){
           result == checkdigit
           alert ("you entered the valid IRD")
       }  
       else if (result !== 0){
          if((11-result) == checkdigit){
           alert("you entered valid IRD")
          }
          else if(11-result !== checkdigit){
              let recal__num=((splitnumber[0]*7)+(splitnumber[1]*4)+(splitnumber[2]*3)+(splitnumber[3]*2)+(splitnumber[4]*5)+(splitnumber[5]*2)+(splitnumber[6]*7)+(splitnumber[7]*6))
              console.log(recal__num)
              let result2 = (recal__num % 11)
              if((11-result2) == checkdigit){
                  alert("you entered valid IRD Number recall2")
              }
              else
              alert("IRD NUMBER IS INVALID")
          }
       }
  }
}
else{
    alert("please enter the IRD number in the format of XXX-XXX-XXX")
}

 }

 document.getElementById("button").addEventListener("click",Irdvalue)


