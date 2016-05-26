function CompareLinks11aT(){
  
  var arry11aT = [];
  var diff = 0;
  var tlrnce = .33;

// 11 crossing alternating triple {0,0,0}

  for(i=531;i<548;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{1,0,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11aT.push(" "+i+" ")};
  };

  for(i=531;i<548;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11aT.push(" "+i+" ")};
  };

  for(i=531;i<548;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11aT.push(" "+i+" ")};
  };

  for(i=531;i<548;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{1,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11aT.push(" "+i+" ")};
  };

  for(i=531;i<548;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{1,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11aT.push(" "+i+" ")};
  };

  for(i=531;i<548;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11aT.push(" "+i+" ")};
  };

  for(i=531;i<548;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L11a/linkL11a'+i+'{1,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry11aT.push(" "+i+" ")};
  };

document.getElementById("11aT").innerHTML = "11aT --> {"+arry11aT+"}";

}


