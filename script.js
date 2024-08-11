



function clickon(){
    var gridPane = document.getElementById("gridPane");
    var child =document.createElement("div");
    child.className="child";
    child.id="ch"
    // button elemnt
    var btn=document.createElement("button")
    btn.className="btn";
    //close button
    var closeimg =document.createElement("img");
    closeimg.setAttribute("src","assests/close.png");
 
    closeimg.setAttribute('width','15px');
    closeimg.setAttribute('onclick','deleteon()')
    closeimg.setAttribute('id','del')
    btn.appendChild(closeimg);
     child.appendChild(btn);
    // a link
    var a=document.createElement("a");
    a.setAttribute('href','')
    
    var diva =document.createElement("div");
    diva.className="div-p";
    a.appendChild(diva)
    var pa=document.createElement("p");
    pa.id="par";
    pa.innerText=document.getElementById("additemContent").value
    diva.appendChild(pa)
    child.appendChild(a)
    
    // for hr
    var divhr=document.createElement("div");
    divhr.className="div-r";
    var phr=document.createElement("p");
    phr.innerText='___________________';
    divhr.appendChild(phr);
    child.appendChild(divhr);
    // divdate for date 
    var divdate=document.createElement("div");
    divdate.className="div-date";
    var datep=document.createElement("p");
    var d = new Date();
   
    var d = new Date(), hours = d.getHours(), time = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+" , "+(hours%12||12)+":"+d.getMinutes().toString().padStart(2, '0')+":"+d.getSeconds().toString().padStart(2, '0')+" "+(hours<12?"AM":"PM");

    datep.innerText=time;
    
    divdate.appendChild(datep);
    divhr.appendChild(divdate)
    
    
    //add the final child a\to add button
    
    gridPane.appendChild(child);
}

function deleteon(){
   var item=document.getElementsByClassName("btn")
  for(var i=0;i<item.length;i++){
    item[i].addEventListener("click",function(){
        this.parentElement.style.display='none'
    })
  }

}
// for search
function searchon() {
    var searchItems = document.getElementsByClassName("child");
    var text1 = document.getElementById("searchitemContent").value 

    for (var i = 0; i < searchItems.length; i++) {
       
       
        var text2=searchItems[i].getElementsByTagName("p")[0].innerHTML

        if (text1 === text2) {
            searchItems[i].style.display = ""; 
        } else {
            searchItems[i].style.display = "none"; 
        }
    }
}


