
var client = require('cheerio-httpcli'); 
var URL =require('url');
let url = 'https://smartstore.naver.com/gonggami';
var param = {}; 
client.fetch(url, param, function(err, $, res){
  if(err){
       console.log(err);
        return; 
     }
 $(".area_status").each(function(idx) { 
   
    result=$("span.blind").text();
     }); 

     sold="일시품절";
     if(result.includes(sold)==true){
      

      console.log("품절");
     }
     else{
      
       console.log("재고있음");
     }
 });
