/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

$(document).ready(function(){
	    //console.log(localStorage);
   if(localStorage){
	   	$('#billingweight').val(localStorage.getItem('total_weight'));
	   	$('#polisterrate').val(localStorage.getItem('polister_rate'));
	   	$('#polistermicron').val(localStorage.getItem('polister_micron'));
	   	$('#matlizedrate').val(localStorage.getItem('matlize_rate'));
	   	$('#matlizedmicron').val(localStorage.getItem('matlize_micron'));
	   	$('#polirate').val(localStorage.getItem('poli_rate'));
	   	$('#polimicron').val(localStorage.getItem('poli_micron'));
	   	$('#bopprate').val(localStorage.getItem('bopp_rate'));
	   	$('#boppmicron').val(localStorage.getItem('bopp_micron'));
	   	$('#cpprate').val(localStorage.getItem('cpp_rate'));
	   	$('#cppmicron').val(localStorage.getItem('cpp_micron'));
	   	$('#paperrate').val(localStorage.getItem('paper_rate'));
	   	$('#papermicron').val(localStorage.getItem('paper_micron'));
	   	$('#papergsm').val(localStorage.getItem('paper_gsm'));
	   	$('#cemicalrate').val(localStorage.getItem('cemical_rate'));
	   	$('#cemicalkg').val(localStorage.getItem('cemical_kg'));
	   	$('#adesiverate').val(localStorage.getItem('adesive_rate'));
	   	$('#adesivekg').val(localStorage.getItem('adesive_kg'));
	   	$('#inkrate').val(localStorage.getItem('ink_rate'));
	   	$('#inkkg').val(localStorage.getItem('ink_kg'));
	  
	  
	}

$( "input[type='number']")
  .focusout(function() {
	if(this.value==""){
		//console.log("this is empty");
		//$(this).css({"border":"1px solid red","box-shadow":"2px 2px 2px"});
		//$(this).css({"-moz-box-shadow":"0 0 12px red","-webkit-box-shadow":"0 0 12px red","box-shadow":"0 0 12px red"});
		$(this).append('Please Enter value');
	}else{
		$(this).css({"border":"none"});
	}
	//console.log(focus+"this is focus");
  })
	
  $('#formss').on('keydown', "input[type='number']", function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110,190])||/65|67|86|88/.test(e.keyCode)&&(!0===e.ctrlKey||!0===e.metaKey)||35<=e.keyCode&&40>=e.keyCode||(e.shiftKey||48>e.keyCode||57<e.keyCode)&&(96>e.keyCode||105<e.keyCode)&&e.preventDefault()});

	
	//$("[data-role='header'], [data-role='footer']").toolbar();
	$('#clearf').on('click',function(){
		 $(this).closest('form').find("input[type=number]").val("");
		alert('hhh');
	});

$("#formss").bind("paste", function(e){
    // access the clipboard using the api
    var pastedData = e.originalEvent.clipboardData.getData('text');
   // alert(pastedData);
} );
	$('#formss').bind("cut copy paste",function(e) {
      e.preventDefault();
   });
	
function getNum(val) {
   if (isNaN(val)) {
     return 0;
   }
   return val;
}
		
	
$('.submitbtn').on('click',function(){


var msg;		 
//var str = $("#formss" ).serialize();
//console.log( str);var j = i || 10;
var billingweight =getNum(parseFloat($('#billingweight').val()));
var polisterrate =getNum(parseFloat($('#polisterrate').val()));
	/*if(billingweight==0){
		msg="Please fill in Blanks";
		$('#errmsg').html(msg);
		return false;
	}else{
		return billingweight;
	}
	*/
var res=billingweight*polisterrate;
//console.log(res);
var polistermicron =getNum(parseFloat($('#polistermicron').val()));
var matlizedrate =getNum(parseFloat($('#matlizedrate').val()));		
var matlizedmicron =getNum(parseFloat($('#matlizedmicron').val()));		
var billingd1=billingweight+(2.1*billingweight)/100;
var billingd=roundTo(billingd1,2);
//console.log('billing data'+billingd);
//console.log(billingd+' bill weight this isisisis');
var billingc=2.1;	
var polirate =getNum(parseFloat($('#polirate').val()));
var polimicron =getNum(parseFloat($('#polimicron').val()));
var bopprate =getNum(parseFloat($('#bopprate').val()));
var boppmicron =getNum(parseFloat($('#boppmicron').val()));
var cpprate =getNum(parseFloat($('#cpprate').val()));
var cppmicron =getNum(parseFloat($('#cppmicron').val()));
var paperrate =getNum(parseFloat($('#paperrate').val()));
var papermicron =getNum(parseFloat($('#papermicron').val()));
var paper_gsm =getNum(parseFloat($('#papergsm').val()));
//console.log(paper_gsm+"paper_gsm");
var cemicalrate =getNum(parseFloat($('#cemicalrate').val()));
var cemicalkg =getNum(parseFloat($('#cemicalkg').val()));
var adesiverate =getNum(parseFloat($('#adesiverate').val()));
var adesivekg =getNum(parseFloat($('#adesivekg').val()));		
var inkrate =getNum(parseFloat($('#inkrate').val()));
var inkkg =getNum(parseFloat($('#inkkg').val()));
	
	
           
			
	
var den_polister=1.4;
var den_matlized=1.4;
var den_poli=0.93;
var den_bopp=0.91;
var den_cpp=0.91;
var den_paper=0.0001;

		
var cemical_wgain=0;
var adesive_wgain=50;
var ink_wgain=10;

var cemical_wscrip=100;
var adesive_wscrip=50;
var ink_wscrip=90;
				
//Gsm calculation
	//var ss=den_polister*polistermicron;
	//console.log(ss+'hhh');
var polister_gsm=roundTo((den_polister*polistermicron),2);
		
var matlized_gsm=roundTo(den_matlized*matlizedmicron,2);
	//console.log('polister value'+matlized_gsm);
var poli_gsm=roundTo(den_poli*polimicron,2);
var bopp_gsm=roundTo(den_bopp*boppmicron,2);
var cpp_gsm=roundTo(den_cpp*cppmicron,2);
//var paper_gsm=roundTo(den_paper*papermicron,2);
		//console.log(matlized_gsm+"2"+poli_gsm+"3"+bopp_gsm+"4"+cpp_gsm+"5"+paper_gsm);
//total gsm
var total_gsm=Number(polister_gsm)+Number(matlized_gsm)+Number(poli_gsm)+Number(bopp_gsm)+Number(cpp_gsm)+Number(paper_gsm);
		//console.log(Number(polister_gsm)+Number(matlized_gsm));
	console.log('total Gsm ='+total_gsm);	
//input weight calculation
		
var polister_inpw=roundTo((polister_gsm*billingd)/total_gsm,4);
		//console.log("polister input"+polister_inpw);
var matlized_inpw=roundTo((matlized_gsm*billingd)/total_gsm,4);
var poli_inpw=roundTo((poli_gsm*billingd)/total_gsm,4);
		//console.log(poli_inpw+"poli inpww");
var bopp_inpw=roundTo((bopp_gsm*billingd)/total_gsm,4);
var cpp_inpw=roundTo((cpp_gsm*billingd)/total_gsm,4);
var paper_inpw=roundTo((paper_gsm*billingd)/total_gsm,4);
		//console.log("cemicalkg"+cemicalkg);
var cemical_inpw=roundTo(((cemicalkg*billingd)/100),4);
var adesive_inpw=roundTo((adesivekg*billingd)/100,4);
var ink_inpw=roundTo((inkkg*billingd)/100,4);
		//console.log('down val'+cemical_inpw+"2"+adesive_inpw+" thre is 35d =->"+ink_inpw);
//total input weight(kg)
	//console.log('totoal intput weight'+tinw)
var total_inpw=Number(polister_inpw)+Number(matlized_inpw)+Number(poli_inpw)+Number(bopp_inpw)+Number(cpp_inpw)+Number(paper_inpw)+Number(cemical_inpw)+Number(adesive_inpw)+Number(ink_inpw);
	console.log(total_inpw+'total input weight: ='+roundTo(total_inpw,4));
// 4% scrap		
var polister_scrap=roundTo((polister_inpw*4)/100,4);
var matlized_scrap=roundTo((matlized_inpw*4)/100,4);
var poli_scrap=roundTo((poli_inpw*4)/100,4);
var bopp_scrap=roundTo((bopp_inpw*4)/100,4);
var cpp_scrap=roundTo((cpp_inpw*4)/100,4);
var paper_scrap=roundTo((paper_inpw*4)/100,4);

//console.log('ppp'+matlized_scrap+'poli'+poli_scrap+'bop s'+bopp_scrap+'cpp sc'+cpp_scrap+'paper sc'+paper_scrap);	
		
//billing weight calculation
		
var polister_bw=polister_inpw-polister_scrap;
var matlized_bw=matlized_inpw-matlized_scrap;
var poli_bw=poli_inpw-poli_scrap;
var bopp_bw=bopp_inpw-bopp_scrap;
var cpp_bw=cpp_inpw-cpp_scrap;
var paper_bw=paper_inpw-paper_scrap;
	//	console.log("1=>"+polister_bw+"2=>"+matlized_bw+"3=>"+poli_bw+"4=>"+bopp_bw+"5=>"+cpp_bw+"6=>"+paper_bw);
		//console.log(matlized_bw+" this is polister bw");
		
var cemical_bw=roundTo(cemical_inpw*cemical_wgain/100,4);
	
var adesive_bw=adesive_inpw*adesive_wgain/100;
var ink_bw=ink_inpw*ink_wgain/100;
		//	console.log("hhhhi"+"1=>"+cemical_inpw+"2=>"+adesive_inpw+"3=>"+ink_bw);console.log(cemical_wgain);
		
	//	console.log("thisis is it"+cemical_bw);
// total billing weight	
var total_bw=Number(polister_bw)+Number(matlized_bw)+Number(poli_bw)+Number(bopp_bw)+Number(cpp_bw)+Number(paper_bw)+Number(cemical_bw)+Number(adesive_bw)+Number(ink_bw);
		console.log("total Billing Weight ="+roundTo(total_bw,4));
var cemical_wscrip=roundTo(100*cemical_inpw/100,4);
var adesive_wscrip=roundTo(50*adesive_inpw/100,4);
var ink_wscrip=roundTo(90*ink_inpw/100,4);
//console.log('hhhiii'+total_bw);
var total_scrapkg=Number(polister_scrap)+Number(matlized_scrap)+Number(poli_scrap)+Number(bopp_scrap)+Number(cpp_scrap)+Number(paper_scrap)+Number(cemical_wscrip)+Number(adesive_wscrip)+Number(ink_wscrip);
		
	console.log("total scrap kg ="+roundTo(total_scrapkg,4));
		
    //net rate cal
		
	var polister_nrate=polister_inpw*polisterrate;
		
	var matlized_nrate=roundTo(matlized_inpw*matlizedrate,4);
	var poli_nrate=roundTo(poli_inpw*polirate,4);
	var bopp_nrate=roundTo(bopp_inpw*bopprate,4);
	var cpp_nrate=roundTo(cpp_inpw*cpprate,4);
	var paper_nrate=roundTo(paper_inpw*paperrate,4);
	var cemical_nrate=cemical_inpw*cemicalrate;
	var adesive_nrate=roundTo(adesive_inpw*adesiverate,4);
	var ink_nrate=roundTo(ink_inpw*inkrate,4);
		
		var total_nrate=Number(polister_nrate)+Number(matlized_nrate)+Number(bopp_nrate)+Number(cpp_nrate)+Number(paper_nrate)+Number(cemical_nrate)+Number(adesive_nrate)+Number(ink_nrate)+Number(poli_nrate);
		console.log("total net rate ="+total_nrate);
		

		var per_kg=roundTo((total_nrate/total_inpw),4);
		
		var p1=roundTo((total_nrate/total_inpw),4);
		var bill_kg=roundTo((total_inpw*per_kg/total_bw),4);
		var scrap_val=roundTo((total_scrapkg*per_kg),4);
		console.log('per kg : ='+per_kg);
		console.log('billing per kg: = '+bill_kg);
		console.log('scrap val ='+scrap_val);
		if (typeof(Storage) !== "undefined") {
			
			localStorage.setItem('total_weight',billingweight);
			localStorage.setItem('polister_rate',polisterrate);
			localStorage.setItem('polister_micron',polistermicron);
			localStorage.setItem('matlize_rate',matlizedrate);
			localStorage.setItem('matlize_micron',matlizedmicron);
			localStorage.setItem('poli_rate',polirate);
			localStorage.setItem('poli_micron',polimicron);
			localStorage.setItem('bopp_rate',bopprate);
			localStorage.setItem('bopp_micron',boppmicron);
			localStorage.setItem('cpp_rate',cpprate);
			localStorage.setItem('cpp_micron',cppmicron);
			localStorage.setItem('paper_rate',paperrate);
			localStorage.setItem('paper_micron',papermicron);
			localStorage.setItem('paper_gsm',paper_gsm);
			localStorage.setItem('cemical_rate',cemicalrate);
			localStorage.setItem('cemical_kg',cemicalkg);
			localStorage.setItem('adesive_rate',adesiverate);
			localStorage.setItem('adesive_kg',adesivekg);
			localStorage.setItem('ink_rate',inkrate);
			localStorage.setItem('ink_kg',inkkg);
			
			
			localStorage.setItem('perkg',per_kg);
			localStorage.setItem('billkg',bill_kg);
			localStorage.setItem('scrapval',scrap_val);
			console.log('data has been saved');
		} else {
			console.log('no storage');
		}
		$.mobile.changePage("#pagetwo", { reverse: false, transition: "slide" });
	    $('#calulationdata').html('<table><tr><td>Per Kg:</td><td>'+per_kg+'</td></tr><tr><td>Billing Per Kg:</td><td>'+bill_kg+'</td></tr><tr><td>Scrap Value:</td><td>'+scrap_val+'</td></tr></table>');

		//console.log(localStorage);

		
	});
	
	
	function roundTo(n, digits) {
		if (digits === undefined) {
			digits = 0;
		}
		var multiplicator = Math.pow(10, digits);
		n = parseFloat((n * multiplicator).toFixed(11));
		return (Math.round(n) / multiplicator).toFixed(2);
	}



	

});
/*
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
}; */
