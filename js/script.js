	var sliderRadioWrap = document.querySelector(".slider-radio-wrap");
	var radioIndificator = document.querySelectorAll(".radio-indificator");
	var radioIndificatorCurrent = document.querySelectorAll(".radio-indificator-current");
	var slideOne = document.querySelector(".slide-one");
	var slideTwo = document.querySelector(".slide-two");
	var sliderNext = document.querySelector(".slider-next");
	var sliderPrev = document.querySelector(".slider-prev");
	var serviceNavLabel = document.querySelectorAll(".service-nav label");
	var popularProduct = document.querySelectorAll(".popular-product-item");
	var popularProductImage = document.querySelectorAll(".popular-product-item img");
	var popularProductBuy = document.querySelectorAll(".popular-product-buy");
	var popularProductBookmarks = document.querySelectorAll(".popular-product-bookmarks");
	var deliveryLabel = document.querySelector(".delivery");
	var warrantyLabel = document.querySelector(".warranty");
	var creditLabel = document.querySelector(".credit");
	var writeUsPopup = document.querySelector(".write-us-popup");
	var writeUsClose = document.querySelector(".write-us-close");
	var overlay = document.querySelector(".overlay");
	var map = document.querySelector("#map");
	var mapPopup = document.querySelector("#map-popup");
	var mapPopupClose = document.querySelector(".map-popup-close");
	var popularProductBuy = document.querySelector(".catalog .popular-product-buy");
	var cartPopup = document.querySelector(".cart-popup");
	var cartPopupClose = document.querySelector(".cart-popup-close");

	// Slider
	window.addEventListener("click", function(e) {
	if (e.target.getAttribute("class") == 'slider-radio-label-prev') {
		e.preventDefault();
		slideTwo.style.display = "none";
		slideOne.style.display = "block";
		radioIndificatorCurrent[1].classList.remove("radio-current-show");
		radioIndificatorCurrent[0].classList.add("radio-current-show");
	}
	if (e.target.getAttribute("class") == 'slider-radio-label-next') {
		e.preventDefault();
		slideOne.style.display = "none";
		slideTwo.style.display = "block";
		radioIndificatorCurrent[0].classList.remove("radio-current-show");
		radioIndificatorCurrent[1].classList.add("radio-current-show");
	}
	})
	if (radioIndificator[0]) {
	radioIndificator[0].addEventListener("click", function() {
		radioIndificatorCurrent[1].classList.remove("radio-current-show");
		radioIndificatorCurrent[0].classList.add("radio-current-show");
		slideTwo.style.display = "none";
		slideOne.style.display = "block";
	})
	}

	if (radioIndificator[0]) {
	radioIndificator[0].addEventListener("focus", function() {
		radioIndificatorCurrent[1].classList.remove("radio-current-show");
		radioIndificatorCurrent[0].classList.add("radio-current-show");
		slideTwo.style.display = "none";
		slideOne.style.display = "block";
	})
	}

	if (radioIndificator[0]) {
	radioIndificator[1].addEventListener("click", function() {
		radioIndificatorCurrent[0].classList.remove("radio-current-show");
		radioIndificatorCurrent[1].classList.add("radio-current-show");
		slideOne.style.display = "none";
		slideTwo.style.display = "block";
	})
	}

	if (radioIndificator[0]) {
	radioIndificator[1].addEventListener("focus", function() {
		radioIndificatorCurrent[0].classList.remove("radio-current-show");
		radioIndificatorCurrent[1].classList.add("radio-current-show");
		slideOne.style.display = "none";
		slideTwo.style.display = "block";
	})
	}


	// Service 
		if (serviceNavLabel[0]) {
	serviceNavLabel[0].addEventListener("click", function() {
			serviceNavLabel[0].classList.add('label-current');
			serviceNavLabel[1].classList.remove('label-current');
			serviceNavLabel[2].classList.remove('label-current');
			warrantyLabel.style.display = "none";
			creditLabel.style.display = "none";
			deliveryLabel.style.display = "block";
	})
	}

	if (serviceNavLabel[0]) {
	serviceNavLabel[1].addEventListener("click", function() {
			serviceNavLabel[1].classList.add('label-current');
			serviceNavLabel[0].classList.remove('label-current');
			serviceNavLabel[2].classList.remove('label-current');
			warrantyLabel.style.display = "block";
			creditLabel.style.display = "none";
			deliveryLabel.style.display = "none";
	})
	}

	if (serviceNavLabel[0]) {
	serviceNavLabel[2].addEventListener("click", function() {
			serviceNavLabel[2].classList.add('label-current');
			serviceNavLabel[0].classList.remove('label-current');
			serviceNavLabel[1].classList.remove('label-current');
			warrantyLabel.style.display = "none";
			creditLabel.style.display = "block";
			deliveryLabel.style.display = "none";
	})
	}

	if (serviceNavLabel[0]) {
	serviceNavLabel[0].addEventListener("focus", function() {
			serviceNavLabel[0].classList.add('label-current');
			serviceNavLabel[1].classList.remove('label-current');
			serviceNavLabel[2].classList.remove('label-current');
			warrantyLabel.style.display = "none";
			creditLabel.style.display = "none";
			deliveryLabel.style.display = "block";
	})
	}

	if (serviceNavLabel[0]) {
	serviceNavLabel[1].addEventListener("focus", function() {
			serviceNavLabel[1].classList.add('label-current');
			serviceNavLabel[0].classList.remove('label-current');
			serviceNavLabel[2].classList.remove('label-current');
			warrantyLabel.style.display = "block";
			creditLabel.style.display = "none";
			deliveryLabel.style.display = "none";
	})
	}

	if (serviceNavLabel[0]) {
	serviceNavLabel[2].addEventListener("focus", function() {
			serviceNavLabel[2].classList.add('label-current');
			serviceNavLabel[0].classList.remove('label-current');
			serviceNavLabel[1].classList.remove('label-current');
			warrantyLabel.style.display = "none";
			creditLabel.style.display = "block";
			deliveryLabel.style.display = "none";
	})
	}

		if (document.querySelector(".popular-product-title a")) {
		document.querySelector(".popular-product-title a").addEventListener("focus", function() {
		popularProductBuy[0].classList.remove("popular-product-link");
		popularProductBookmarks[0].classList.remove("popular-product-link");
		popularProductBuy[1].classList.remove("popular-product-link");
		popularProductBookmarks[1].classList.remove("popular-product-link");
		popularProductBuy[2].classList.remove("popular-product-link");
		popularProductBookmarks[2].classList.remove("popular-product-link");
		popularProductBuy[0].classList.remove("popular-product-link");
		popularProductBookmarks[0].classList.remove("popular-product-link");
		popularProductImage[0].classList.remove("popular-product-img-hide");
		popularProductImage[1].classList.remove("popular-product-img-hide");
		popularProductImage[2].classList.remove("popular-product-img-hide");
		popularProductImage[0].classList.remove("popular-product-img-hide");
	})
	}

	if (document.querySelector(".popular-product-title a")) {
		document.querySelector(".popular-manufacturer a").addEventListener("focus", function() {
		popularProductBuy[3].classList.remove("popular-product-link");
		popularProductBookmarks[3].classList.remove("popular-product-link");
		popularProductBuy[1].classList.remove("popular-product-link");
		popularProductBookmarks[1].classList.remove("popular-product-link");
		popularProductBuy[2].classList.remove("popular-product-link");
		popularProductBookmarks[2].classList.remove("popular-product-link");
		popularProductBuy[0].classList.remove("popular-product-link");
		popularProductBookmarks[0].classList.remove("popular-product-link");
		popularProductImage[3].classList.remove("popular-product-img-hide");
		popularProductImage[1].classList.remove("popular-product-img-hide");
		popularProductImage[2].classList.remove("popular-product-img-hide");
		popularProductImage[0].classList.remove("popular-product-img-hide");
	})
	}

	window.addEventListener("click", function(e) {
		// Cart popup
		if (e.target.getAttribute("class") == 'popular-product-buy') {
		e.preventDefault();
		cartPopup.style.display='flex';
		overlay.style.display='block';
		}
		if (e.target.getAttribute("class") == 'cart-popup-close') {
		e.preventDefault();
		cartPopup.style.display='none';
		overlay.style.display='none';
		}
		if (e.target.getAttribute("class") == 'continue-purchases') {
		e.preventDefault();
		cartPopup.style.display='none';
		overlay.style.display='none';
		}
		// Message popup
		if (e.target.getAttribute("class") == 'company-message') {
		e.preventDefault();
		writeUsPopup.style.display='block';
		overlay.style.display='block';
		}
		if (e.target.getAttribute("class") == 'write-us-close') {
		e.preventDefault();
		writeUsPopup.style.display='none';
		overlay.style.display='none';
		}
		// Map popup
		if (e.target.getAttribute("class") == 'map-popup-close') {
		e.preventDefault();
		mapPopup.style.display='none';
		overlay.style.display='none';
		}
		// Popups close
		window.addEventListener("keydown", function(e) {
			if (e.keyCode == 27) {
			cartPopup.style.display='none';
			writeUsPopup.style.display='none';
			overlay.style.display='none';
			mapPopup.style.display='none';
			overlay.style.display='none';
		}
		})
	})

		// Paginator
		var pul = document.querySelectorAll(".paginator-item-btn");
		pul[0].addEventListener("click", function(e) {
		e.preventDefault();
		for (var i = 0; i <= pul.length - 1; i++) {
			console.log(i);
		pul[i].classList.remove("paginator-item-btn-current");
		pul[0].classList.add("paginator-item-btn-current");
		}
		})

		pul[1].addEventListener("click", function(e) {
		e.preventDefault();
		for (var i = 0; i <= pul.length - 1; i++) {
			console.log(i);
		pul[i].classList.remove("paginator-item-btn-current");
		pul[1].classList.add("paginator-item-btn-current");
		}
		})

		pul[2].addEventListener("click", function(e) {
		e.preventDefault();
		for (var i = 0; i <= pul.length - 1; i++) {
			console.log(i);
		pul[i].classList.remove("paginator-item-btn-current");
		pul[2].classList.add("paginator-item-btn-current");
		}
		})

		pul[3].addEventListener("click", function(e) {
		e.preventDefault();
		for (var i = 0; i <= pul.length - 1; i++) {
			console.log(i);
		pul[i].classList.remove("paginator-item-btn-current");
		pul[3].classList.add("paginator-item-btn-current");
		}
		})

		// Sort
		var sort = document.querySelectorAll(".sort-item-category");
		sort[0].addEventListener("click", function(e) {
		e.preventDefault();
		sort[0].classList.add("sort-current");
		sort[1].classList.remove("sort-current");
		sort[2].classList.remove("sort-current");
		})

		sort[1].addEventListener("click", function(e) {
		e.preventDefault();
		sort[1].classList.add("sort-current");
		sort[0].classList.remove("sort-current");
		sort[2].classList.remove("sort-current");
		})

		sort[2].addEventListener("click", function(e) {
		e.preventDefault();
		sort[2].classList.add("sort-current");
		sort[0].classList.remove("sort-current");
		sort[1].classList.remove("sort-current");
		})

		// Sort up
		var sortUp = document.querySelector(".sort-up");
		var sortDown = document.querySelector(".sort-down");
		sortUp.addEventListener("click", function(e) {
		e.preventDefault();
		sortUp.classList.add("sort-active");
		sortDown.classList.remove("sort-active");
		})

		sortDown.addEventListener("click", function(e) {
		e.preventDefault();
		sortDown.classList.add("sort-active");
		sortUp.classList.remove("sort-active");
		})

	// Map popup
	if (map) {
	map.addEventListener("click", function(e) {
		e.preventDefault();
		mapPopup.style.display='block';
		overlay.style.display='block';
	})
	}

	function hidePopup(e) {
		if(!e.target.matches('.write-us-popup, .write-us-popup *')) {
			if (writeUsPopup) {
			writeUsPopup.style.display='none';
			overlay.style.display='none';
			}
	    }
	    if(!e.target.matches('.cart-popup, .cart-popup *')) {
			cartPopup.style.display='none';
			overlay.style.display='none';
	    }
	};

	overlay.addEventListener("click", hidePopup);

	function hideMapPopup(e) {
	    if(!e.target.matches('#map-popup, #map-popup *')) {
	    	if (mapPopup) {
			mapPopup.style.display='none';
			overlay.style.display='none';
	    }
		}
	};

	overlay.addEventListener("click", hideMapPopup);

	
    // Range Slider
	setTimeout(init2slider('id66', 'id66b', 'id661', 'id662', 'id66i1', 'id66i2'), 0);

	function init2slider(idX, btwX, btn1X, btn2X, input1, input2) {
	    var slider = document.getElementById(idX);
	    var between = document.getElementById(btwX); 
	    var button1 = document.getElementById(btn1X);
	    var button2 = document.getElementById(btn2X);   
	    var inpt1 = document.getElementById(input1); 
	    var inpt2 = document.getElementById(input2); 
	  	
	            var min=inpt1.min;
	  					var max=inpt1.max;
	    
	    /*init*/
	    var sliderCoords = getCoords(slider);
	    button1.style.marginLeft = '0px';
	    button2.style.marginLeft = 140 + 'px';
	    between.style.width = (slider.offsetWidth-button1.offsetWidth) + 'px';
	    inpt1.value = 0;
	    inpt2.value = 30000;
	    
	    inpt1.onchange= function(evt)
	    {
	    	if (parseInt(inpt1.value) < min)
	    		inpt1.value = min;
	    	if (parseInt(inpt1.value) > max)
	    		inpt1.value = max;
	    	if (parseInt(inpt1.value) > parseInt(inpt2.value))
	      {
	      	var temp = inpt1.value;
	    		inpt1.value = inpt2.value;
	    		inpt2.value = temp;
	      }
	      
	      
	        var sliderCoords = getCoords(slider);
	        var per1 = parseInt(inpt1.value-min)*100/(max-min);
	        var per2 = parseInt(inpt2.value-min)*100/(max-min);
	        var left1 = per1*(slider.offsetWidth-button1.offsetWidth)/100;
	        var left2 = per2*(slider.offsetWidth-button1.offsetWidth)/100;
	        
	            button1.style.marginLeft = left1 + 'px'; 
	            button2.style.marginLeft = left2 + 'px';
	            
	            if (left1 > left2)
	              {
	                between.style.width = (left1-left2) + 'px';
	                between.style.marginLeft = left2 + 'px';
	              }
	            else
	              {
	                between.style.width = (left2-left1) + 'px';
	                between.style.marginLeft = left1 + 'px';  
	              }
	    }
	    inpt2.onchange= function(evt)
	    {
	    	if (parseInt(inpt2.value) < min)
	    		inpt2.value = min;
	    	if (parseInt(inpt2.value) > max)
	    		inpt2.value = max;
	    	if (parseInt(inpt1.value) > parseInt(inpt2.value))
	      {
	      	var temp = inpt1.value;
	    		inpt1.value = inpt2.value;
	    		inpt2.value = temp;
	      }
	      
	        var sliderCoords = getCoords(slider);
	        var per1 = parseInt(inpt1.value-min)*100/(max-min);
	        var per2 = parseInt(inpt2.value-min)*100/(max-min);
	        var left1 = per1*(slider.offsetWidth-button1.offsetWidth)/100;
	        var left2 = per2*(slider.offsetWidth-button1.offsetWidth)/100;
	        
	            button1.style.marginLeft = left1 + 'px'; 
	            button2.style.marginLeft = left2 + 'px';
	            
	            if (left1 > left2)
	              {
	                between.style.width = (left1-left2) + 'px';
	                between.style.marginLeft = left2 + 'px';
	              }
	            else
	              {
	                between.style.width = (left2-left1) + 'px';
	                between.style.marginLeft = left1 + 'px';  
	              }
	    }
	  
	    /*mouse*/
	    button1.onmousedown = function(evt) {       
	        var sliderCoords = getCoords(slider);
	        var betweenCoords = getCoords(between); 
	        var buttonCoords1 = getCoords(button1);
	        var buttonCoords2 = getCoords(button2);
	        var shiftX2 = evt.pageX - buttonCoords2.left; 
	        var shiftX1 = evt.pageX - buttonCoords1.left;
	      
	        document.onmousemove = function(evt) {
	            var left1 = evt.pageX - shiftX1 - sliderCoords.left;
	            var right1 = slider.offsetWidth - button1.offsetWidth;
	            if (left1 < 0) left1 = 0;
	            if (left1 > right1) left1 = right1;
	            button1.style.marginLeft = left1 + 'px';  
	            
	            
	    				shiftX2 = evt.pageX - buttonCoords2.left; 
	            var left2 = evt.pageX - shiftX2 - sliderCoords.left;
	            var right2 = slider.offsetWidth - button2.offsetWidth;
	            if (left2 < 0) left2 = 0;
	            if (left2 > right2) left2 = right2;            
	             
	                var per_min = 0;
	                var per_max = 0;
	            if (left1 > left2)
	              {
	                between.style.width = (left1-left2) + 'px';
	                between.style.marginLeft = left2 + 'px';
	                 
	                per_min = left2*100/(slider.offsetWidth-button1.offsetWidth);
	                per_max = left1*100/(slider.offsetWidth-button1.offsetWidth);
	              }
	            else
	              {
	                between.style.width = (left2-left1) + 'px';
	                between.style.marginLeft = left1 + 'px';                
	                
	                per_min = left1*100/(slider.offsetWidth-button1.offsetWidth);
	                per_max = left2*100/(slider.offsetWidth-button1.offsetWidth);
	              }
	                inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
	                inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100)); 
	        
	        };
	        document.onmouseup = function() {
	            document.onmousemove = document.onmouseup = null;
	        };
	        return false;
	    };
	    
	  button2.onmousedown = function(evt) {       
	        var sliderCoords = getCoords(slider);
	        var betweenCoords = getCoords(between); 
	        var buttonCoords1 = getCoords(button1);
	        var buttonCoords2 = getCoords(button2);
	        var shiftX2 = evt.pageX - buttonCoords2.left; 
	        var shiftX1 = evt.pageX - buttonCoords1.left;
	      
	        document.onmousemove = function(evt) {
	            var left2 = evt.pageX - shiftX2 - sliderCoords.left;
	            var right2 = slider.offsetWidth - button2.offsetWidth;
	            if (left2 < 0) left2 = 0;
	            if (left2 > right2) left2 = right2;
	            button2.style.marginLeft = left2 + 'px';                      
	          
	          
	            shiftX1 = evt.pageX - buttonCoords1.left; 
	            var left1 = evt.pageX - shiftX1 - sliderCoords.left;
	            var right1 = slider.offsetWidth - button1.offsetWidth;  
	            if (left1 < 0) left1 = 0;
	            if (left1 > right1) left1 = right1;                      
	             
	                var per_min = 0;
	                var per_max = 0;
	                
	            if (left1 > left2)
	              {
	                between.style.width = (left1-left2) + 'px';
	                between.style.marginLeft = left2 + 'px';
	                per_min = left2*100/(slider.offsetWidth-button1.offsetWidth);
	                per_max = left1*100/(slider.offsetWidth-button1.offsetWidth);
	              }
	            else
	              {
	                between.style.width = (left2-left1) + 'px';
	                between.style.marginLeft = left1 + 'px';
	                per_min = left1*100/(slider.offsetWidth-button1.offsetWidth);
	                per_max = left2*100/(slider.offsetWidth-button1.offsetWidth);
	              }
	                inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
	                inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100)); 
	            
	        };
	        document.onmouseup = function() {
	            document.onmousemove = document.onmouseup = null;
	        };
	        return false;
	    };
	    
	    button1.ondragstart = function() {
	        return false;
	    };
	    button2.ondragstart = function() {
	        return false;
	    };

	    function getCoords(elem) {
	        var box = elem.getBoundingClientRect();
	        return {
	            top: box.top + pageYOffset,
	            left: box.left + pageXOffset
	        };
	    }     
}