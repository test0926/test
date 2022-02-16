const Evolution = {
	
	all_Digimon : [
		'깜몬','코로몬','토코몬','와냐몬','퍼그몬',
		'뽀글몬','어니몬','야옹몬','시드몬','모티몬',
		'포요몬','둥실몬','새싹몬','하얀몬','뿔몬',
		'유라몬','푸니몬','쿠라몬','츠메몬','푸푸몬','푸로로몬',
		'아구몬','피코데블몬','고부리몬','캔들몬','츄몬','베타몬','파피몬',
		'쉬라몬','에렉몬','피요몬','울퉁몬','텐타몬','톱니몬','기자몬','팔몬',
		'머슈몬','플롯트몬','레나몬','케라몬','아기벌몬','파닥몬',
		'그레이몬','다크티라노몬','메탈그레이몬','스컬그레이몬','가루몬','워가루몬',
		'두리몬','니드몬','릴리몬','버드라몬','꼬끼몬','엔젤몬','홀리엔젤몬','묘티스몬',
		'가트몬','엔젤우몬','캅테리몬','아트라캅테리몬','스콜피오몬','쿠가몬','원뿔몬','모털몬','쥬드몬',
		'시드라몬','쉘몬','말벌몬','프리지몬','퍼펫몬','우드몬','Da몬','안드로몬','켄터스몬','가드로몬','메카노몬',
		'우가몬','데블몬','레오몬','모노크로몬','메라몬','고스몬','소울몬','데드메라몬','워매몬','에테몬','스카몬','레어몬',
		'쿠네몬','팬텀몬','쥬레이몬','레이디데블몬',
	],
	tree : {
		유년기 : {
			깜몬 : {
				type : '유년기1',
				tree : ['코로몬','토코몬','와냐몬','퍼그몬'],
				dataType : '',
			},
			뽀글몬 : {
				type : '유년기1',
				tree : ['어니몬','야옹몬','시드몬','모티몬'],
				dataType : '',
			},
			포요몬 : {
				type : '유년기1',
				tree : ['토코몬','야옹몬','모티몬','둥실몬'],
				dataType : '',
			},
			새싹몬 : {
				type : '유년기1',
				tree : ['시드몬','어니몬','코로몬'],
				dataType : '',
			},
			하얀몬 : {
				type : '유년기1',
				tree : ['야옹몬','뿔몬'],
				dataType : '',
			},
			유라몬 : {
				type : '유년기1',
				tree : ['코로몬','시드몬'],
				dataType : '',
			},
			푸니몬 : {
				type : '유년기1',
				tree : ['뿔몬','둥실몬','야옹몬'],
				dataType : '',
			},
			쿠라몬 : {
				type : '유년기1',
				tree : ['퍼그몬','츠메몬'],
				dataType : '',
			},
			푸푸몬 : {
				type : '유년기1',
				tree : ['푸로로몬'],
				dataType : '',
			},
			// 유년기2
			코로몬 : {
				type : '유년기2',
				tree : ['아구몬', '피코데블몬','고부리몬','캔들몬','츄몬','베타몬','파피몬','쿠네몬'],
				dataType : '',
			},
			뿔몬 : {
				type : '유년기2',
				tree : ['베타몬', '쉬라몬','고부리몬','피코데블몬','파피몬','에렉몬','쿠네몬'],
				dataType : '',
			},
			모티몬 : {
				type : '유년기2',
				tree : ['고부리몬','캔들몬','피요몬','울퉁몬','텐타몬','에렉몬','톱니몬','쿠네몬'],		
				dataType : '',
			},
			둥실몬 : {
				type : '유년기2',
				tree : ['쉬라몬','베타몬','기자몬'],		
				dataType : '',
			},
			어니몬 : {
				type : '유년기2',
				tree : ['팔몬','머슈몬','피요몬','피코데블몬','에렉몬','쿠네몬'],	
				dataType : '',
			},
			시드몬 : {
				type : '유년기2',
				tree : ['머슈몬','베타몬','팔몬','고부리몬','레나몬','피요몬','쿠네몬'],
				dataType : '',
			},
			토코몬 : {
				type : '유년기2',
				tree : ['파닥몬','플롯트몬','피요몬','캔들몬','피코데블몬','울퉁몬','텐타몬','쿠네몬'],
				dataType : '',
			},
			야옹몬 : {
				type : '유년기2',
				tree : ['아구몬','기자몬','플롯트몬','울퉁몬','레나몬','에렉몬','파피몬'],
				dataType : '',
			},
			와냐몬 : {
				type : '유년기2',
				tree : ['쉬라몬','캔들몬','플롯트몬','츄몬','레나몬','파피몬','톱니몬'],
				dataType : '',
			},
			퍼그몬 : {
				type : '유년기2',
				tree : ['기자몬','고부리몬','피코데블몬','울퉁몬','기자몬'],
				dataType : '',
			},
			츠메몬 : {
				type : '유년기2',
				tree : ['케라몬','가지몬','피코데블몬'],
				dataType : '',
			},
			푸로로몬 : {
				type : '유년기2',
				tree : ['아기벌몬'],
				dataType : '',
			},
		},
		성장기 : { 
			쿠네몬 : {
				type : '성장기',
				tree : ['쿠가몬','두리몬','캅테리몬'],
				dataType : 'Vi',
			},
			아구몬 : {
				type : '성장기',
				tree : ['그레이몬','다크티라노몬'],
				dataType : 'Va',
			},
			파피몬 : {
				type : '성장기',
				tree : ['가루몬','두리몬'],
				dataType : 'Da',
			},
			팔몬 : {
				type : '성장기',
				tree : ['니드몬'],
				dataType : 'Da',
			},
			피요몬 : {
				type : '성장기',
				tree : ['버드라몬','꼬끼몬'],
				dataType : 'Va',
			},
			파닥몬 : {
				type : '성장기',
				tree : ['엔젤몬','유니몬'],
				dataType : 'Da',
			},
			플롯트몬 : {
				type : '성장기',
				tree : ['가트몬'],
				dataType : 'Va',
			},
			텐타몬 : {
				type : '성장기',
				tree : ['캅테리몬','쿠가몬'],
				dataType : 'Va',
			},
			쉬라몬 : {
				type : '성장기',
				tree : ['원뿔몬','모털몬'],
				dataType : 'Va',
			},
			베타몬 : {
				type : '성장기',
				tree : ['시드라몬','쉘몬'],
				dataType : 'Vi',
			},
			아기벌몬 : {
				type : '성장기',
				tree : ['말벌몬'],
				dataType : 'Vi',
			},
			머슈몬 : {
				type : '성장기',
				tree : ['프리지몬','우드몬'],
				dataType : 'Vi',
			},
			톱니몬 : {
				type : '성장기',
				tree : ['가드로몬','켄터스몬','메카노몬'],
				dataType : 'Vi',
			},
			피코데블몬 : {
				type : '성장기',
				tree : ['데블몬'],
				dataType : 'Vi',
			},
			고부리몬 : {
				type : '성장기',
				tree : ['우가몬'],
				dataType : 'Vi',
			},
			에렉몬 : {
				type : '성장기',
				tree : ['레오몬','모노크로몬'],
				dataType : 'Va',
			},
			캔들몬 : {
				type : '성장기',
				tree : ['메라몬','고스몬','소울몬'],
				dataType : 'Da',
			},
			기자몬 : {
				type : '성장기',
				tree : ['시드라몬','쉘몬','다크티라노몬'],
				dataType : 'Vi',
			},
			츄몬 : {
				type : '성장기',
				tree : ['워매몬','스카몬','레어몬'],
				dataType : 'Vi',
			},
			가지몬 : {
				type : '성장기',
				tree : ['미구현'],
				dataType : 'Vi',
			},
			케라몬 : {
				type : '성장기',
				tree : ['미구현'],
				dataType : '무속성',
			},
			울퉁몬 : {
				type : '성장기',
				tree : ['모노크로몬'],
				dataType : 'Da',
			},
			레나몬 : {
				type : '성장기',
				tree : ['미구현'],
				dataType : 'Da',
			},
		},
		성숙기 : { 
			그레이몬 : {
				type : '성숙기',
				tree : ['메탈그레이몬','스컬그레이몬'],
				dataType : 'Va',
			},
			다크티라노몬 : {
				type : '성숙기',
				tree : ['메탈그레이몬','스컬그레이몬'],
				dataType : 'Vi',
			},
			가루몬 : {
				type : '성숙기',
				tree : ['워가루몬'],
				dataType : 'Da',
			},
			니드몬 : {
				type : '성숙기',
				tree : ['릴리몬','쥬레이몬'],
				dataType : 'Da',
			},
			버드라몬 : {
				type : '성숙기',
				tree : ['가루다몬'],
				dataType : 'Va',
			},
			엔젤몬 : {
				type : '성숙기',
				tree : ['홀리엔젤몬','묘티스몬'],
				dataType : 'Va',
			},
			유니몬 : {
				type : '성숙기',
				tree : ['피콜몬'],
				dataType : 'Va',
			},
			가트몬 : {
				type : '성숙기',
				tree : ['엔젤우몬','레이디데블몬'],
				dataType : 'Va',
			},
			캅테리몬 : {
				type : '성숙기',
				tree : ['아트라캅테리몬','스콜피오몬'],
				dataType : 'Va',
			},
			쿠가몬 : {
				type : '성숙기',
				tree : ['아트라캅테리몬'],
				dataType : 'Vi',
			},
			원뿔몬 : {
				type : '성숙기',
				tree : ['쥬드몬'],
				dataType : 'Va',
			},
			모털몬 : {
				type : '성숙기',
				tree : ['쥬드몬'],
				dataType : 'Va',
			},
			시드라몬 : {
				type : '성숙기',
				tree : ['미구현'],
				dataType : 'Da',
			},
			쉘몬 : {
				type : '성숙기',
				tree : ['스콜피오몬'],
				dataType : 'Da',
			},
			말벌몬 : {
				type : '성숙기',
				tree : ['미구현'],
				dataType : 'Vi',
			},
			프리지몬 : {
				type : '성숙기',
				tree : ['퍼펫몬'],
				dataType : 'Va',
			},
			우드몬 : {
				type : '성숙기',
				tree : ['쥬레이몬'],
				dataType : 'Vi',
			},
			가드로몬 : {
				type : '성숙기',
				tree : ['Da몬','안드로몬'],
				dataType : 'Vi',
			},
			켄터스몬 : {
				type : '성숙기',
				tree : ['안드로몬'],
				dataType : 'Da',
			},
			메카노몬 : {
				type : '성숙기',
				tree : ['미구현'],
				dataType : 'Vi',
			},
			우가몬 : {
				type : '성숙기',
				tree : ['미구현'],
				dataType : 'Vi',
			},
			데블몬 : {
				type : '성숙기',
				tree : ['묘티스몬','레이디데블몬'],
				dataType : 'Vi',
			},
			레오몬 : {
				type : '성숙기',
				tree : ['미구현'],
				dataType : 'Va',
			},
			모노크로몬 : {
				type : '성숙기',
				tree : ['미구현'],
				dataType : 'Da',
			},
			메라몬 : {
				type : '성숙기',
				tree : ['데드메라몬'],
				dataType : 'Da',
			},
			고스몬 : {
				type : '성숙기',
				tree : ['팬텀몬'],
				dataType : 'Vi',
			},
			소울몬 : {
				type : '성숙기',
				tree : ['팬텀몬'],
				dataType : 'Vi',
			},
			워매몬 : {
				type : '성숙기',
				tree : ['퍼펫몬','에테몬'],
				dataType : 'Vi',
			},
			스카몬 : {
				type : '성숙기',
				tree : ['에테몬'],
				dataType : 'Vi',
			},
			레어몬 : {
				type : '성숙기',
				tree : ['미구현'],
				dataType : 'Vi',
			},
			꼬끼몬 : {
				type : '성숙기',
				tree : ['미구현'],
				dataType : 'Da',
			},
			두리몬 : {
				type : '성숙기',
				tree : ['미구현'],
				dataType : 'Da',
			},
		},
		완전체 : {
			메탈그레이몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Va',
			},
			스컬그레이몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Vi',
			},
			홀리엔젤몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Va',
			},
			묘티스몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Vi',
			},
			워가루몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Da',
			},
			릴리몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Da',
			},
			가루다몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Va',
			},
			피콜몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Da',
			},
			엔젤우몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Va',
			},
			아트라캅테리몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Va',
			},
			스콜피오몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Da',
			},
			쥬드몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Va',
			},
			퍼펫몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Va',
			},
			Da몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Vi',
			},
			안드로몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Va',
			},
			데드메라몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Da',
			},
			에테몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Vi',
			},
			레이디데블몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Vi',
			},
			팬텀몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Vi',
			},
			쥬레이몬 : {
				type : '완전체',
				tree : ['미구현'],
				dataType : 'Vi',
			},
		}
	}
};

let update = {
	date : '22.02.17(예정)',
	digimon : {
		쿠네몬 : {
			tree : ['코로몬','뿔몬','어니몬','모티몬','시드몬','토코몬'],
		},
		쥬레이몬 : {
			tree : ['니드몬','우드몬'],
		},
		팬텀몬 : {
			tree : ['고스몬','소울몬'],
		},
		레이디데블몬 : {
			tree : ['가트몬','데블몬'],
		},
	},
}

function updateDigimon(){
	if(update){
		$('.updateList .updates').text(update.date);
		var html = '';
		for (var key in update.digimon) {
			html += '<li><p class="updateName">'+key+'</p></li>';
		}
		$('.updateList ul').html(html);
	}
}

function allDigimon(){
	let $el = $('#digimonList');
	let arr = Evolution.all_Digimon;
	let html = '';

	$('.total').html('총 <em>'+arr.length+'</em>개');

	for(var i = 0; i < arr.length; i++){
		html += '\
			<div class="checkBOX">\
				<input type="radio" name="tree" value="'+arr[i]+'" class="digimon">\
				<label>'+arr[i]+'</label>\
			</div>';
	}
	$el.html(html)
}

function DigimonList(){
	let $list = $('#digimon-options');
	let arr = Evolution.all_Digimon;
	let html = '';
	for(var i = 0; i < arr.length; i++){
		html += '<option value="'+arr[i]+'"/>';
	}
	$list.html(html)
}

function setDigimon(obj){
	console.log(obj);
	let $el = $('#digimonList');
	let html = '';
	for (key in obj) { 
		var color = dataTypeColor(obj[key].dataType);
		html += '\
			<div class="checkBOX">\
				<span style="color:'+color+'">'+obj[key].dataType+'</span>\
				<input type="radio" name="tree" value="'+key+'" class="digimon">\
				<label>'+key+'</label>\
			</div>';
	}
	$el.html(html);
}

function dataTypeColor(type){
	var obj = {
		'Va' : '#2adb60',
		'Vi' : '#d91111',
		'Da' : '#227adf',
		'무속성' : '#000',
	};

	return obj[type];
}

function selectDigimon(type){
	let html = '';
	if(type == 'all') {
		allDigimon();
	} else {
		var obj = Evolution.tree[type];
		setDigimon(obj);
	}
}


$( function(){
	updateDigimon(); //업데이트 내용

	$('.typeSelector').change( function(){
		var val = $(this).val();
		selectDigimon(val);
		showList(true);
	});

	$(document).on('change', '.digimon', function(){
		let name = $(this).val();
		$('#digimon .name span:first-child').text(name);
		getDigimon(name);
		showList(false);
	});

	$(document).on('click', '.diginame .name', function(){
		let name = $(this).text();
		$('#digimon .name span:first-child').text(name);
		getDigimon(name);
		showList(false);
	});

	$(document).on('click', '.updateName', function(){
		let name = $(this).text();
		let arr = update.digimon[name].tree;
		getDigimon(name);
		var quickHtml = '<li>이전 진화체 : </li>';
		for(var i = 0; i < arr.length; i++){
			quickHtml += '<li><div>\
								<p class="diginame">'+arr[i]+'</p>\
							</div>';
		}
		$('#digimon .name span:first-child').text(name);
		$('#fastRoot ul').html(quickHtml);
		// $('.evolution-list-area2').html('');
		showList(false);
	});

	$('#close').click( function(){
		$('#digimonList input').prop("checked", false);
		$('#digimonList .checkBOX').show();
		showList(true);
	});

	function showList(type){
		if(type){
			$('#digimon').hide();
			$('#digimonList').show();
			$('.search-area').show();
			$('#select-digimon').hide();
		}else {
			$('#digimon').show();
			$('#digimonList').hide();
			$('.search-area').hide();
			$('#select-digimon').show();
		}
		$('#text').val('');
	}


	// 디지몬 정보
	function digimonInfo(name){
		for (key in Evolution.tree) { 
			if(Evolution.tree[key][name]){
				var data = Evolution.tree[key][name];
				return data;
			}
		}
	}

	function digimonType(name){
		var data = digimonInfo(name);
		return data.dataType;
	}


	function getDigimon(name){
		let data = digimonInfo(name);
		var html = ''
		var quickHtml = '';
		console.log(name);

		var type =	thisType(data.type);
		var color = dataTypeColor(data.dataType);
		$('#digimon .name span:last-child').html('<em style="color:'+color+'">'+data.dataType+'</em>');

		if(data.tree[0] == '미구현'){ // 진화트리가 없을경우
			html = '<li><div>\
							<p class="tit">'+ type +'</p>\
							<p>'+data.tree[0]+'</p>\
					</div></li>';

		} else { // 진화트리가 있을때
			for(var i = 0; i < data.tree.length; i++){
				var digitype = digimonType(data.tree[i]);
				var color =  dataTypeColor(digitype);
				console.log(color);
				quickHtml += '<li><div>\
								<p class="diginame">'+data.tree[i]+'</p>\
							</div>';

				html += '<li><div>\
							<p class="tit">'+ type +'</p>\
							<p class="diginame">\
								<span class="name">'+data.tree[i]+'</span>\
								<span class="digitype" style="color:'+color+'">('+digitype+')</span>\
							</p>\
						</div>';


				var nextTree = digimonInfo(data.tree[i]);
				if(nextTree){
					html +=  chainTree(nextTree);		
				}
				html += '</li>';
			}
		}
		$('#fastRoot ul').html(quickHtml);
		$('.evolution-list-area2').html(html);
	}


	function chainTree(data){
		var type =	thisType(data.type);
		var html = '';
		if(data.tree[0] != '미구현'){
			html = '<div class="next"><p class="tit">'+ type +'</p>';
			for(var i = 0; i < data.tree.length; i++){
				var digitype = digimonType(data.tree[i]);
				var color =  dataTypeColor(digitype);

				html += '<div>\
							<p class="diginame">\
								<span class="name">'+data.tree[i]+'</span>\
								<span class="digitype" style="color:'+color+'">('+digitype+')</span>\
							</p>\
						</div>';

			}
			html += '</div>';
		}
		return html;
	}


	function BruteForce(data){
		
	}

	function thisType(type){
		type =	type == '유년기1' ? '유년기2':
				type == '유년기2' ? '성장기':
				type == '성장기' ? '성숙기':
				type == '성숙기' ? '완전체':
				type == '완전체' ? '궁극체':
				'없음';

		return type;
	}


	//  검색
	let input = document.querySelector('#text');
	let list = document.querySelector('#digimonList');

	input.oninput = function() {
		let list_item = list.querySelectorAll('.checkBOX');
		let list_option = list.querySelectorAll('.checkBOX input');

		var text = input.value.toUpperCase();

		for (let option of list_option) {
			var index = $(option).parent().index();
			if(option.value.toUpperCase().indexOf(text) > -1){
	      		$(list_item).eq(index).show();
	 		}else{
	    		$(list_item).eq(index).hide();
	    	}
	  	};
	}

});