const states = [
	{
		name: 'Andaman Nicobar',
		symbol: 'AN'
	},
	{
		name: 'Andhra Pradesh',
		symbol: 'AP'
	},
	{
		name: 'Arunachal Pradesh',
		symbol: 'AR'
	},
	{
		name: 'Assam',
		symbol: 'AS'
	},
	{
		name: 'Bihar',
		symbol: 'BR'
	},
	 {
		 name: 'Chhattisgarh',
		symbol: 'CG'
	 },
	  {
		name: 'Goa',
		symbol: 'GA'
	  },
	   {
		   name: 'Gujarat',
		symbol: 'GJ'
	   },
		{
			name: 'Haryana',
		symbol: 'HR'
	},
	{
		name: 'Himachal Pradesh',
		symbol: 'HP'
	},
	{
		name: 'Jammu and Kashmir',
		symbol: 'JK'
	},
	{
		name: 'Jharkhand',
		symbol: 'JH'
	},
	{
		name: 'Karnataka',
		symbol: 'KA'
	},
	{
		name: 'Kerala',
		symbol: 'KL'
	},
	{
		name: 'Madhya Pradesh',
		symbol: 'MP'
	},
	{
		name: 'Maharashtra',
		symbol: 'MH'
	},
	{
		name: 'Manipur',
		symbol: 'MN'
	},
	{
		name: 'Meghalaya',
		symbol: 'ML'
	},
	{
		name: 'Mizoram',
		symbol: 'MZ'
	},
	{
		name: 'Nagaland',
		symbol: 'NL'
	},
	{
		name: 'Orissa',
		symbol: 'OR'
	},
	{
		name: 'Punjab',
		symbol: 'PU'
	},
	{
		name: 'Rajasthan',
		symbol: 'RJ'
	},
	{
		name: 'Sikkim',
		symbol: 'SK'
	},
	{
		name: 'Tamil Nadu',
		symbol: 'TN'
	},
	{
		name: 'Tripura',
		symbol: 'TR'
	},
	{
		name: 'Uttarakhand',
		symbol: 'UK'
	},
	{
		name: 'Uttar Pradesh',
		symbol: 'UP'
	},
	{
		name: 'West Bengal',
		symbol: 'WB'
	},
	{
		name: 'Telangana',
		symbol: 'TS'
	},
	{
		name: 'Andaman and Nicobar Islands',
		symbol: 'AN'
	},
	{
		name: 'Chandigarh',
		symbol: 'CG'
	},
	{
		name: 'Dadra and Nagar Haveli',
		symbol: 'DH'
	},
	{
		name: 'Daman and Diu',
		symbol: 'DD'
	},
	{
		name: 'Delhi',
		symbol: 'DL'
	},
	{
		name: 'Lakshadweep',
		symbol: 'LD'
	},
	{
		name: 'Pondicherry',
		symbol: 'PY'
	} 
]

const menus = document.querySelectorAll('.menu');
menus.forEach((menu)=>{
	states.forEach(state => {
		const cont = document.createElement('div');
		cont.className = 'item';
		cont.innerHTML = state.name;
		menu.appendChild(cont);
	})
})

// $('#imageInput').on('change', function() {
// 	$input = $(this);
// 	if($input.val().length > 0) {
// 		fileReader = new FileReader();
// 		fileReader.onload = function (data) {
// 		$('.image-preview').attr('src', data.target.result);
// 		}
// 		fileReader.readAsDataURL($input.prop('files')[0]);
// 		$('.image-button').css('display', 'none');
// 		$('.image-preview').css('display', 'block');
// 		$('.change-image').css('display', 'block');
// 	}
// });
						
// $('.change-image').on('click', function() {
// 	$control = $(this);			
// 	$('#imageInput').val('');	
// 	$preview = $('.image-preview');
// 	$preview.attr('src', '');
// 	$preview.css('display', 'none');
// 	$control.css('display', 'none');
// 	$('.image-button').css('display', 'block');
// });

$(window).load(function(){
    $(".input-effect input").val("");
    
    $(".input-effect input").focusout(function(){
        if($(this).val() != ""){
            $(this).addClass("has-content");
        }else{
            $(this).removeClass("has-content");
        }
    })
});

// document.querySelector('.ui.dropdown').dropdown();

function changeColor(num){
	document.querySelector(`.state-class-${num}`).style.color = 'black';
	console.log(document.querySelector(`.state-class-${num}`));
}
