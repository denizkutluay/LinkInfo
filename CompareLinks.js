function CompareLinks9(){
  
  var arry9a = [];
  var arry9n = [];
  var diff = 0;
  var tlrnce = .29;

// 9 crossing alternating

  for(i=1;i<43;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9a.push(" "+i+" ")};
  };

  for(i=43;i<55;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9a.push(" "+i+" ")};
  };

  for(i=43;i<55;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9a.push(" "+i+" ")};
  };

  for(i=43;i<55;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9a.push(" "+i+" ")};
  };

  for(i=55;i<56;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{1,0,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9a.push(" "+i+" ")};
  };

  for(i=55;i<56;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9a.push(" "+i+" ")};
  };

  for(i=55;i<56;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9a.push(" "+i+" ")};
  };

  for(i=55;i<56;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{1,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9a.push(" "+i+" ")};
  };

  for(i=55;i<56;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{1,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9a.push(" "+i+" ")};
  };

  for(i=55;i<56;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9a.push(" "+i+" ")};
  };

  for(i=55;i<56;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9a/linkL9a'+i+'{1,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9a.push(" "+i+" ")};
  };

// 9 crossing nonalternating

  for(i=1;i<20;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9n/linkL9n'+i+'{0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9n/linkL9n'+i+'{1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9n.push(" "+i+" ")};
  };

  for(i=20;i<29;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9n/linkL9n'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9n/linkL9n'+i+'{1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9n.push(" "+i+" ")};
  };

  for(i=20;i<29;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9n/linkL9n'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9n/linkL9n'+i+'{0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9n.push(" "+i+" ")};
  };

  for(i=20;i<29;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9n/linkL9n'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L9n/linkL9n'+i+'{1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry9n.push(" "+i+" ")};
  };

document.getElementById("9a").innerHTML = "9a --> {"+arry9a+"}";
document.getElementById("9n").innerHTML = "9n --> {"+arry9n+"}";

}