var client = require('cheerio-httpcli'); 
let url = 'https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EB%A1%9C%EB%98%90%EC%B5%9C%EA%B7%BC%EB%8B%B9%EC%B2%A8%EB%B2%88%ED%98%B8'; 
var param = {}; 

client.fetch(url, param, function(err, $, res){
     if(err){
          console.log(err);
           return; 
        }
     $(".num_box=").each(function(post) { 
        result=$(".num_box").text();
         console.log(result); 

        }); 
    });

