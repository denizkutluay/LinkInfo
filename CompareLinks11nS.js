function CompareLinks11nS(){
  
  var arry11nS = [];
  var diff = 0;
  var tlrnce = .33;

// 11 crossing nonalternating single {0}

  for(i=1;i<255;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11nS.push(" "+i+" ")};
  };

document.getElementById("11nS").innerHTML = "11nS --> {"+arry11nS+"}";

}