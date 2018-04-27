$(document).ready(function(){
		
		// THIS IS USED FOR HEADER TOGGLE WHEN COME IN MOBILE DEVICE
		$('#clicks').click(function(){
			$('.collsape').toggle()
		})

		// THIS IS USED FOR MODAL POP UP BACKGROUND WHICH COME IN BLACK COLOR IN BACK
		$("#modal").click(function(){
			$('body').addClass('bg');
			$('#modalBox').addClass('annimations').css('z-index','1').show(400).animate({top: '300px;'});
		});
		//this is used for close the modal pop up
		$('#close').click(function(){
			$('#modalBox').hide();
			 $('body').removeClass('bg');
		});
		
		//=============== Accordian Portion Start From Here
		
		$(document).ready(function() {
			function close_accordion_section() {
				$('.accordion .accordion-section-title').removeClass('active');
				$('.accordion .accordion-section-content').slideUp(300);
			}
		
			$('.accordion-section-title').click(function(e) { // here 'e' is the parameter value
					var currentAttrValue = $(this).attr('href');
			
					if($(e.target).is('.active')) {
						close_accordion_section();
					}else {
						close_accordion_section();
			
						$(this).addClass('active');
						$('.accordion ' + currentAttrValue).slideDown(300); 
					}
			
					e.preventDefault(); // default prevent it is used for not refreshing the site
				});
			});
		});