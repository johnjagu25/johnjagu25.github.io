var stripeHeader=function(object){
    return "<div><div class='stripeName'>"+object.name+"</div><div class='stripe'></div></div>"
}
var templateType={
    "a":function(object){
        var temp = "";      
        temp+="<p style='text-indent:4%'>"+object.text.replace(object.highlight,"<b>"+object.highlight+"</b>")+"</p></div>";
        return temp;
    },
    "b":function(object){
var temp="<div>";
for(var prop in object["text"]){
    temp+="<span style='display:inline-block;width:20%'>"+prop+"</span><span style='display:inline-block;width:80%'>"+object["text"][prop]+"</span><br/>";
}
return temp+="</div>";
    },
    "c":function(object){
        
        var temp="<div><ul style='list-style-type: disc;'>";
        for(var i=0;i<object["text"].length;i++){
            temp+="<li >"+object["text"][i]+"</li>";
        }
        return temp+"</ul></div>";
    },
    "d":function(object){
        var temp= "<div>";
        temp+="<span span class='stripeName' style='display:inline-block;width:90%'>"+object["text"]+"</span><span style='display:inline-block;width:8%;font-weight:bold'>"+object['year']+"</span>";
temp+="<div>"+object['subtext']+"</div></div>";
return temp;
    },
    "e":function(object){
        var temp = "<div>";
        for(var prop in object){
            if(typeof object[prop]==="object")
            {
temp+="<div style='margin-top:10px;margin-bottom:10px'><span class='stripeName' style='width:90%'>"+prop.toUpperCase()+"</span><span style='font-weight:bold;width:8%'>"+object[prop].year+"</span></div>";

for(var val in object[prop]){
    var obj = object[prop][val]; 
    if(typeof obj ==="object"){
    temp+="<div ><span class='stripeName'  style='width:100%'>"+val.toUpperCase()+"</span>";
    temp+="<p style='text-indent: 5%;'>"+obj.header+"</p></div>";
   if(obj.text){
       temp+=templateType["c"](obj);
   }
   if(obj["technology background"])
{
    temp+="<div ><span class='stripeName' style='width:100%;font-size:14px'>Technology Background</span>"+templateType["c"](obj["technology background"])+"</div>";
}
}   
}            }
        }
        temp+="</div>";      
        return temp;
    }
   
}
function template(flag,object){   

    if(templateType[flag])
   return templateType[flag](object);
}

$(document).ready(function(){
    var temp = "";
    for(var prop in data){
        data[prop].name=prop.toUpperCase();
    var flag = data[prop].flag;  

    var tempvalue = template(flag,data[prop]);    
    if(tempvalue)
    {
        temp+="<div class='wrapper'>";
        temp+="<div class='header'>";
    temp+=stripeHeader(data[prop]);
    temp+="</div><div class='content'>";
        temp+=tempvalue;  
        temp+="</div></div>";
    }    
    }
    $("article").html(temp);

})
