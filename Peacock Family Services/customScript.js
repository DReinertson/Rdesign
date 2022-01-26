// $.noConflict();
jQuery(document).ready(function(){

    jQuery( function( $ ) {

        $('#childhoodSection, #natureNutsSection').fadeOut();

	$(".sectionButton").on('click', function(){
	    $('.sectionButton').removeClass('current');
	    $(this).addClass('current');
        $('.teamSection').fadeOut('300');
        $("#" + this.id + "Section").fadeIn(300)
    })
    $('.sectionButton').hover(function(){
        $(this).toggleClass('hoverColor');
    })

		if($('#form-field-totalAmount').length){
			$('.elementor-field-group-childrenAttending, .elementor-field-group-childrenAge, .elementor-field-group-sponsorName, .elementor-field-group-sponsorEmail, .elementor-field-group-sponsorNumber, .elementor-field-group-donateAmount').hide().attr('required', false);

			$('#child').on('click', function(){
				$(".elementor-field-group-childrenAttending, .elementor-field-group-childrenAge").fadeToggle(500).attr('required', true).addClass('elementor-mark-required');
			})

			$('#sponsor').on('click', function(){
				$('.elementor-field-group-sponsorName, .elementor-field-group-sponsorNumber').fadeToggle(500).attr('required', true).addClass('elementor-mark-required');
				if(!$("#sponsor").is(':checked')){
					//console.log('checked');
					$('#form-field-sponsorNumber').val(0);
					$('.elementor-field-group-sponsorName, .elementor-field-group-sponsorEmail, .elementor-field-group-sponsorNumber').attr('required', false);
				}
			})
			$('#donate').on('click', function(){
				$('.elementor-field-group-donateAmount').fadeToggle(500).attr('required', true).addClass('elementor-mark-required');
				if(!$("#donate").is(':checked')){
					//console.log('checked');
					$('#form-field-donateAmount').val(0);
					$('.elementor-field-group-donateAmount').attr('required', false);
				}
			});
			$('#form-field-totalAmount').attr('readonly', true);
			$('#form-field-ticketSelect, #form-field-sponsorNumber, #form-field-donateAmount, #sponsor').change(function(){
				//alert(this + 'input field has changed');
				let ticketCost = parseInt($('#form-field-ticketSelect').val() * 25);
				//console.log('ticketCost: ', ticketCost);
				let sponsorCost = parseInt($('#form-field-sponsorNumber').val() * 25);
				//console.log('sponsorCost: ', sponsorCost);
				let donateAmount = parseInt($('#form-field-donateAmount').val());
				if(Number.isNaN(donateAmount)){
					donateAmount = 0 ;
				}
				//console.log('donateAmount: ', donateAmount);
				let totalAmount = ticketCost + sponsorCost + donateAmount;
				$('#form-field-totalAmount').val("$" + totalAmount);
			})
		}

	} );


});
