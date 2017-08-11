
$(document).ready(function(){
	var json = 0
	$.ajax({
		    	url:"http://mindicador.cl/api",  
		    	type:"GET",  
		    	dataType:"json",  
		    	success:function(data) {
		    		json = data
		      		$('#dolar').text(json.dolar.valor.toFixed(2)); 
		      		$('#euro').text(json.euro.valor.toFixed(2)); 
		      		$('#utm').text(json.utm.valor.toFixed(2)); 
		      		$('#uf').text(json.uf.valor.toFixed(2)); 
		      		
		    	}
		  	});

	$('#btn_peso').on('click', function(event){
						$('#dolar_input').val($('#peso_input').val() / json.dolar.valor)
						$('#euro_input').val($('#peso_input').val() / json.euro.valor)

					});

			$('#btn_dolar').on('click', function(event){
						$('#peso_input').val($('#dolar_input').val() * json.dolar.valor)
					});


});