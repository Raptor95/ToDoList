
// Check off specific todos by clicking
$("ul").on("click","li",function (){

	$(this).toggleClass("completed");
});

//Delete Todos by clicking on X
$("ul").on("click","span",function(event)
{
	$(this).parent().fadeOut(500, function()
	{
		$(this).remove();
	});

	event.stopPropagation();
});

//Enter todo task in the input box and click enter to add the task to the list
$("input[type = 'text']").keypress(function(event)
{
	if(event.which === 13)
	{
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><i class='fa fa-trash' aria-hidden='true'></i> "+todoText+"</li>");
	}
});

$(".fa-pencil").click(function()
{
	$("input[type = 'text']").fadeToggle();
});
	