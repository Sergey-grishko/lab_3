function submitClick()
{ 
    var input = document.getElementById("text").value; 
    var countNumber = input.length; 

    t2_post.removeChild(document.getElementById("t2_post").children[0]); 

    var ol = document.createElement("ol"); 
    ol.setAttribute("id", "ol"); 
    t2_post.appendChild(ol); 

    for (i = 0; i < Math.ceil(countNumber); i+=2){ 
        var li = document.createElement("li"); 
        if (Math.ceil(countNumber) % 2 == 1 && i == countNumber-1) {
            li.innerHTML = input.charAt(i) + "_"; 
        }else {
            li.innerHTML = input.substring(i, i+2); 
        }
        ol.appendChild(li); 
    } 
}


function email_validate(email)
{
var regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regMail.test(email) == false)
    {
    document.getElementById("email").style.border = '3px solid red';
    }
    else
    {
    document.getElementById("email").style.border = '3px solid green';	
    }
}





