

callapi()
function  callapi(){
fetch('https://opentdb.com/api.php?amount=1&type=multiple')
.then(res=>res.json())
.then(data=>{
    question=data['results'][0]['question']
    category=data['results'][0]['category']
    righta=data['results'][0]['correct_answer']
    diff=data['results'][0]['difficulty']
    wrong=data['results'][0]['incorrect_answers']
    a=wrong.concat([righta])
    foption=[]
    choicelist=["1023", "1032", "1203", "1230", "1302", "1320", "2013", "2031", "2103", "2130", "2301", "2310", "3012", "3021", "3102", "3120", "3201", "3210"]
    document.getElementById("qn").innerHTML=question;
    x=choicelist[ranval(19)]
    for(i=0;i<4;i++){
        foption[x.charAt(i)]=a[i]
    }
    for(k=0;k<4;k++){
        tmp="option"+k
        document.getElementById(tmp).innerHTML=foption[k]        
    }}).catch(err=>console.log('error in promise !'+err))}

function ranval(l){
    return Math.floor(Math.random()*l)
}
function clicked(y){
    tmp="option"+y
    document.getElementById("selected").innerHTML=document.getElementById(tmp).innerHTML}
function result(){
    
    if(document.getElementById("selected").innerHTML==righta){
        document.getElementById("result").innerHTML="<b>CORRECT!</b>";
    }
    else{
        document.getElementById("result").innerHTML="<b>WRONG!</b>";
    }
    
}
function nextqn(){
    
     callapi() 
    document.getElementById("result").innerHTML="{result here}"
    document.getElementById("selected").innerHTML=""
    
}