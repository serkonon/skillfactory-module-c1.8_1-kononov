jQuery.prototype.html = function(html=''){
	this.each(element => {if (html) {element.innerHTML = html}})
	return this;
}

$('div').html('<h2>Method html</h2>');
$('button').click(_ => console.log($('div').elements[0].innerHTML));



