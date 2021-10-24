$(document).ready(function(){
		$("#btnGenerate").click(function(){
			var noOfTextbox = $("#noOfTextInput").val();
			var i;
			for(i=1;i<=noOfTextbox;i++)
			{
				$("#container").append('<input type="text" id="textbox'+i+'"><br>');
			}
		$("#container").append('<button id="btnShow" class="btn1">SUBMIT</button>')

		$("#btnShow").click(function(){
			$("#divShowData").append('<h1>Input Values')
			for(i=1;i<=noOfTextbox;i++)
			{
				var data=$("#textbox"+i).val();
				$("#divShowData").append('<input type="text" id="textbox'+i+'" value="'+data+'"><br>');

			}
		})
	})
})