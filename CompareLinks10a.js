function CompareLinks10a(){
  
  var arry10a = [];
  var diff = 0;
  var tlrnce = .33;

// 10 crossing alternating

  for(i=1;i<122;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=122;i<165;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=122;i<165;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=122;i<165;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=165;i<174;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1,0,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=165;i<174;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=165;i<174;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=165;i<174;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=165;i<174;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=165;i<174;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=165;i<174;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1,0,0,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,1,0,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1,1,0,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1,0,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1,0,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,1,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,1,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1,1,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1,1,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1,0,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,1,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

  for(i=174;i<175;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10a/linkL10a'+i+'{1,1,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10a.push(" "+i+" ")};
  };

document.getElementById("10a").innerHTML = "10a --> {"+arry10a+"}";

}