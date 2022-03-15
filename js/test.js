(function(){
  console.log('dandan2')
  $('h1').click(function(){
    $.ajax({
		type: "get",
		url: "https://10.96.64.48/fei.php",
		data: {name:'fileNamaSelect'},
		
		//请求成功
		success : function(data1) {
			console.log('success'+data1)
            
		},
		//请求失败，包含具体的错误信息
		error : function(e){
			console.log(e);
		}
	});
  })
})()
