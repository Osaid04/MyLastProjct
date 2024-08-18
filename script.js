



function clickon() {
    let counter =0;
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
    counter++;
      // Generate a unique key for uniqe element
      var randomNumber = Math.random();
      var uniqueKey = 'item_'+randomNumber

      // Create an object for the new item
      let newItem =[ 
           document.getElementById("additemContent").value,
     '___________________',
         time
      ];
  
      // Save the new item to localStorage using the unique key
      localStorage.setItem(uniqueKey,JSON.stringify(newItem));
 }

 function deleteon() {
    var items = document.getElementsByClassName("btn");

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function(event) {
            // Hide the parent element of the clicked button
            this.parentElement.style.display = 'none';

            // becuse its button i want to get the title of its parent the child 
            // same as i get the title from its parent the child
            var itemText = this.parentElement.querySelector('p').innerText;
            
            
            for (let k = 0; k < localStorage.length; k++) {
                let key = localStorage.key(k);
                let storedItem = JSON.parse(localStorage.getItem(key));

                if (storedItem[0] === itemText) {
                    localStorage.removeItem(key);
                    break; // Exit the loop once the item is found and removed
                }
            }
        });
    }
}

window.onload = function() {
    var gridPane = document.getElementById("gridPane");

    // Loop through all items in localStorage
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);

    
     
            var storedItem = JSON.parse(localStorage.getItem(key))

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
            pa.innerText=storedItem[0]
            diva.appendChild(pa)
            child.appendChild(a)
            
            // for hr
            var divhr=document.createElement("div");
            divhr.className="div-r";
            var phr=document.createElement("p");
            phr.innerText=storedItem[1];
            divhr.appendChild(phr);
            child.appendChild(divhr);
            // divdate for date 
            var divdate=document.createElement("div");
            divdate.className="div-date";
            var datep=document.createElement("p");
            var d = new Date();
           
          var time = storedItem[2]
            datep.innerText=time;
            
            divdate.appendChild(datep);
            divhr.appendChild(divdate)
            
            
            //add the final child a\to add button
            
            gridPane.appendChild(child);
 
    }
};
function searchon() {
    var searchItems = document.getElementsByClassName("child");
    var text1 = document.getElementById("searchitemContent").value.toLowerCase();

  
    for (var i = 0; i < searchItems.length; i++) {
       
       
        var text2=searchItems[i].getElementsByTagName("p")[0].innerHTML.toLowerCase()

        if (text1 === text2) {
            searchItems[i].style.display = ""; 
        } else {
            searchItems[i].style.display = "none"; 
        }
    }
}

