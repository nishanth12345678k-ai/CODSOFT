const d=document.getElementById('display');
function append(v){d.value+=v;}
function clearDisplay(){d.value='';}
function delChar(){d.value=d.value.slice(0,-1);}
function calculate(){try{d.value=eval(d.value);}catch{d.value='Error';}}