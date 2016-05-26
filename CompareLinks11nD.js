function CompareLinks11nD(){
  
  var arry11nD = [];
  var diff = 0;
  var tlrnce = .33;

// 11 crossing alternating double {0,0}

  for(i=255;i<438;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11nD.push(" "+i+" ")};
  };

  for(i=255;i<438;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11nD.push(" "+i+" ")};
  };

  for(i=255;i<438;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11nD.push(" "+i+" ")};
  };

document.getElementById("11nD").innerHTML = "11nD --> {"+arry11nD+"}";

}