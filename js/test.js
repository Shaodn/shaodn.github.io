(function(){
  console.log('dandan2')
  $('h1').click(function(){
    $.ajax({
        //请求方式
        type : "GET",
        //请求的媒体类型
        //请求地址
        url : "https://10.96.64.48:8443/fei.php",
        
        header:{
        "Access-Control-Allow-Origin":"*"
        },
        crossDomain: true,
        //请求失败，包含具体的错误信息
        success:function(){
            console.log('success')
        },
        error : function(e){
            console.log(e);
            console.log(e.responseText);
        }
    });
  })
})()
