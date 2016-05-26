function CompareLinks11nT(){
  
  var arry11nT = [];
  var diff = 0;
  var tlrnce = .33;

// 11 crossing nonalternating triple {0,0,0}

  for(i=438;i<460;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{1,0,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11nT.push(" "+i+" ")};
  };

  for(i=438;i<460;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11nT.push(" "+i+" ")};
  };

  for(i=438;i<460;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11nT.push(" "+i+" ")};
  };

  for(i=438;i<460;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{1,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11nT.push(" "+i+" ")};
  };

  for(i=438;i<460;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{1,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11nT.push(" "+i+" ")};
  };

  for(i=438;i<460;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11nT.push(" "+i+" ")};
  };

  for(i=438;i<460;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11n/linkL11n'+i+'{1,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11nT.push(" "+i+" ")};
  };

document.getElementById("11nT").innerHTML = "11nT --> {"+arry11nT+"}";

}


