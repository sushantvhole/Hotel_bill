
  let name, email;
  document.getElementById("name").addEventListener("mouseout", () => {
    name = document.getElementById("name").value;
    document.getElementById("name-cont").innerHTML = name;
  });

  document.getElementById("email").addEventListener("mouseout", () => {
    email = document.getElementById("email").value;
    document.getElementById("email-cont").innerHTML = email;
  });





  let Starters_pr = 250,Indiafd_pr = 400,Chinfd_pr = 600, Desert_pr = 300;
  let starterbill="",indiafbill="",chinafdbill="",desertbill="";
  

  let starter_q=0,india_q=0,chinf_q=0,desert_q=0;

  document.getElementById("starter").addEventListener("mouseout",()=>{
    if(document.getElementById("starter").value==""||document.getElementById("starter").value==0){
       starterbill=``;
       starter_q=0;
       show()
    }else{

        starter_q=document.getElementById("starter").value;
       starterbill=`<tr><td>Starter</td><td> ${Starters_pr} </td> <td> ${starter_q} </td> <td>${Starters_pr} * ${starter_q} = ${Starters_pr*starter_q}</td></tr>`
       show()
    }
      });



  document.getElementById("indian_food").addEventListener("mouseout",()=>{
    if(document.getElementById("indian_food").value==""||document.getElementById("indian_food").value==0){
        indiafbill=``;
        india_q=0;
        show()
    }else{

        india_q=document.getElementById("indian_food").value;
       indiafbill=`<tr><td>Indian Food</td><td> ${Indiafd_pr} </td> <td> ${india_q} </td> <td>${Indiafd_pr} * ${india_q} = ${Indiafd_pr*india_q}</td></tr>`
       show()
    }
      });




  document.getElementById("chinese_food").addEventListener("mouseout",()=>{
    if(document.getElementById("chinese_food").value==""||document.getElementById("chinese_food").value==0){
        chinafdbill=``;
        chinf_q=0;
        show()
    }else{

        chinf_q=document.getElementById("chinese_food").value;
        chinafdbill=`<tr><td>Chinese Food</td><td> ${Chinfd_pr} </td> <td> ${chinf_q} </td> <td>${Chinfd_pr} * ${chinf_q} = ${Chinfd_pr*chinf_q}</td></tr>`
       show()
    }
      });




  document.getElementById("desert").addEventListener("mouseout",()=>{
    if(document.getElementById("desert").value==""||document.getElementById("desert").value==0){
        desertbill=``;
        desert_q=0;
        show()
    }else{

        desert_q=document.getElementById("desert").value;
        desertbill=`<tr><td>desert</td><td> ${Desert_pr} </td> <td> ${desert_q} </td> <td>${Desert_pr} * ${desert_q} = ${Desert_pr*desert_q}</td></tr>`
       show()
    }
      });

     


      function show(){
        document.getElementById("bill_cont").innerHTML=starterbill+indiafbill+chinafdbill+desertbill;
        // document.getElementById("total").innerHTML= Starters_pr*starter_q+Indiafd_pr*india_q+Chinfd_pr*chinf_q+Desert_pr*desert_q;
        let total =
        Starters_pr * starter_q +
        Indiafd_pr * india_q +
        Chinfd_pr * chinf_q +
        Desert_pr * desert_q;
      document.getElementById("total").innerHTML = `${total} Rs`;
  
      let gst = (total / 100) * 18;
      document.getElementById("gst").innerHTML = `${gst} Rs`;
  
      let tip=(total/100)*5;
      document.getElementById("tip").innerHTML=`${tip} Rs`;

      

      
  
      let total_Bill=total+gst+tip;
      document.getElementById("total_bill").innerHTML=`${total_Bill} Rs`;
      }
      show()








      // 

      console.log("starting up");

      setTimeout(()=>{
        console.log("wait for 2 second");
      },2000);

      setTimeout(()=>{
        console.log("wait for zero second")
      },0);

      console.log("furnished");

      
        


 




 

