$(".ch").click(function(){
var c=$(this).attr("back");
//alert(c);
$('body').css("background",c)
// $('body').append("<p>"+c+"</p>")
})
////////////////
var  plugins=[]
var sysinfo={}
function each(array,f){
	if(Array.isArray(array)){
	for(var i=0;i<array.length;i++){
		f(array[i],i)
	}}else{
		for(var key in array){
			f(array[key],key)
		}
	}
}
function readsystem(){
	///////////////////////
     if(navigator.appVersion.indexOf("Windows")> -1){

    sysinfo["Opreation System"]="Windows Os"//Os version
    
    }else{ if (navigator.appVersion.indexOf("Mac")> -1)
    	sysinfo["Opreation System"]="Macintosh Os"
    	}
 //////
//check the internet
    if(navigator.onLine===true){
     sysinfo["InterNet Connection"]= "Yes"
    }else{
        sysinfo["Internet Connection"]= "No"
    }
    
////////////////////
   each(navigator.languages,function(Cv,Ci){
   	sysinfo["languages" + [Ci+1]]=Cv//recive lang array
   })


///////////////////

    if(navigator.cookieEnabled===true){
    	sysinfo["Cookies"]="Yes"
    }else{
    	sysinfo["Cookies"]="No"
    }
///////////////////

        var browser=""
        var browser1=""

        if(navigator.userAgent.indexOf("Chrome")!== -1){
          browser=navigator.userAgent.indexOf("Chrome")
         var version=navigator.userAgent.substring(browser,browser+20).split("/")
         sysinfo[version[0]]=version[1]
     }


     
//////
/////////////
     var version=""

        if(navigator.userAgent.indexOf("Mac")!== -1){
          version=navigator.userAgent.indexOf("Mac")
         var version=navigator.userAgent.substring(version,version+32).split("/")
         sysinfo["version"]=version[0]
     }
     ///////////
sysinfo["Cpu Architecture"]=navigator.platform
//////////////////

each(navigator.plugins,function(Cv,Ci){
	plugins.push(Cv.name)
})
}
////////////////////
function string(){
    var str="Welcome To Your System Monitor"
    var newarr=str.split("")
    var count=0
  var set=setInterval(function(){
    $( "#sp" ).append(newarr[count]) 
       if(count===newarr.length-1){
         $('#p1').append('<button type="button" id="btn1" class="btn btn-warning">Show My Info</button>');
       clearInterval(set)
   }else{
     count++
   }
 },100)

}

// $('#p1').on('click', function (e) {

//  //  
//    $("#sp").fadeOut()
//    
//    $("img").fadeOut();

  
  

// })
$('#p1').click(function(){
$("#img2").hide();

$("#sp").fadeOut();
$(".slide").css("display","block")
$(".mainplugin").css("display","block")
$("#btn1").fadeOut()
})


window.onload=function(){
    string()
      // $("#slide").hide()
  //  $('#p1').append('<button type="button" id="btn1" class="btn btn-warning">Show My Info</button>');





	readsystem();
        $(".slide").append("<p class='slide2'>Opreation System: "+sysinfo['Opreation System']+"</p>");
        $(".slide").append("<p class='slide2'>Internet Connection: "+sysinfo['InterNet Connection']+"</p>");
        $(".slide").append("<p class='slide2'>Cpu Architecture: "+sysinfo['Cpu Architecture']+"</p>");
        $(".slide").append("<p class='slide2'>Cookies: "+sysinfo['Cookies']+"</p>");
        $(".slide").append("<p class='slide2'>Browser: Chrome "+sysinfo['Chrome']+"</p>");
        $(".slide").append("<p class='slide2'>languages: "+sysinfo['languages1']+"/"+sysinfo['languages2']+"</p>");
	       /////////////////// plugin

           each(plugins,function(x){
               
                var res="";
                if(x!=undefined && x!="item" && x!="namedItem" && x!="refresh"  ){

                    res+=x+" -";
                     $(".plugin").append(res);
                }

           })


}


