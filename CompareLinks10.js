function CompareLinks10(){
  
  var arry10a = [];
  var arry10n = [];
  var diff = 0;
  var tlrnce = .33;

// 9 crossing alternating

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

// 10 crossing nonalternating

  for(i=1;i<65;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=65;i<96;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=65;i<96;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=65;i<96;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=96;i<112;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1,0,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=96;i<112;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=96;i<112;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=96;i<112;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=96;i<112;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=96;i<112;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=96;i<112;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1,0,0,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,1,0,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1,1,0,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1,0,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1,0,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,1,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,1,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1,1,1,0}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1,1,0,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1,0,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,1,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

  for(i=112;i<114;i++){
    strn1 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{0,0,0,0}.png';
    strn2 = 'https://dl.dropboxusercontent.com/u/14676645/LinkInfo/L10n/linkL10n'+i+'{1,1,1,1}.png';
    
    resemble(strn1).compareTo(strn2).ignoreNothing().onComplete(function(data){diff = data.misMatchPercentage;});    
  
    if(diff>tlrnce){arry10n.push(" "+i+" ")};
  };

document.getElementById("10a").innerHTML = "10a --> {"+arry10a+"}";
document.getElementById("10n").innerHTML = "10n --> {"+arry10n+"}";

}