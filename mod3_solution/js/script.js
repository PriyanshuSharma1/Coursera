$(function()
{
	$("navbarToggle").blur(function(event){
		var screenWidth= window.innerWidth;
		if (screenWidth<768)
		{
			$("#myNavbar").collapse('hide');
		}
	})
})