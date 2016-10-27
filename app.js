"use strict";

var state = {
	items: []
};

var addItem = function(state, item) {
	state.items.push({
		item: item,
		checked: false
	});
}

var deleteItem = function(state, item) {
	console.log(item);
	var i = state.items.indexOf(item);
	state.items.splice(i, 1);
	console.log(state.items);
}

var renderList = function (state, element){
	var itemsHTML = state.items.map(function(item) {
	return "<li> <span class='shopping-item'>" + item.item + "</span>"+
	 	"		        <div class='shopping-item-controls'>"+
	 	"		          <button class='shopping-item-toggle'>"+
	 	"		            <span class='button-label'>check</span>"+
	 	"		          </button>"+
	 	"		          <button class='shopping-item-delete'>"+
	 	"		            <span class='button-label'>delete</span>"+
	 	"		          </button>"+
	 	"		        </div>"+
	 	"		      </li>";
	}); 

	element.html(itemsHTML);
}

$(function(){
	$("#js-shopping-list-form").submit(function(e) {
		e.preventDefault();
		addItem(state, $(".input").val());
		renderList(state, $(".shopping-list"));
		this.reset();

	});

	$("ul").on("click",".shopping-item-delete", function(e){
		var item = $(this).closest("li").find(".shopping-item").text();
		deleteItem(state, item);
	    renderList(state, $(".shopping-list"));
	});

	$("ul").on("click",".shopping-item-toggle", function(e){
		$(this).closest("li").toggleClass("shopping-item-checked");
	});
});
	
	


