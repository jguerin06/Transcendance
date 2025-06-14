function test()
{
	icon = document.getElementById("passwordIcon");
	croissant = document.getElementById("michel");
	
	if (croissant.type === "text")
	{
		icon.className = "bx bx-eye-slash";
		croissant.type = "password";
	}
	else
	{
		icon.className = "bx bx-eye-alt"
		croissant.type = "text";
	}
	
}
