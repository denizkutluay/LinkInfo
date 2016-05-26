function CompareLinks11aD(){
  
  var arry11aD = [];
  var diff = 0;
  var tlrnce = .33;

// 11 crossing alternating double {0,0}

  for(i=385;i<531;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11aD.push(" "+i+" ")};
  };

  for(i=385;i<531;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11aD.push(" "+i+" ")};
  };

  for(i=385;i<531;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11aD.push(" "+i+" ")};
  };

document.getElementById("11aD").innerHTML = "11aD --> {"+arry11aD+"}";

}