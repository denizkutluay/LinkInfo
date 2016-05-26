function CompareLinks11aS(){
  
  var arry11aS = [];
  var diff = 0;
  var tlrnce = .33;

// 11 crossing alternating single {0}

  for(i=1;i<385;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11aS.push(" "+i+" ")};
  };

document.getElementById("11aS").innerHTML = "11aS --> {"+arry11aS+"}";

}