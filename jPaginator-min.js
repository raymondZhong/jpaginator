(function(e){function p(c){var b=c.data("jPaginator").settings,d=c.data("jPaginator").controls;g(c,b.selectedPage-Math.floor((b.length-1)/2));d.listenSlider=!1;d.infRel=0;c.data("jPaginator").controls=d;k(c,d.cInf);c.data("jPaginator").controls.listenSlider=!0;typeof jPaginatorPageClicked=="function"&&jPaginatorPageClicked(c.attr("id"),b.selectedPage)}function g(c,b){var d=c.data("jPaginator").settings,a=c.data("jPaginator").controls;c.find(".paginator_p.selected").removeClass("selected");var b=Math.min(d.nbPages-
d.length+1,b),b=Math.max(1,b),l=b-2;c.find(".paginator_p_bloc .paginator_p").each(function(){l+=1;e(this).html(l);d.selectedPage==l&&e(this).addClass("selected")});c.find(".paginator_p_bloc").css("left","-"+a.realWid+"px");a.curNum=b;a.cInf=(b-1)*a.realWid;c.data("jPaginator",{settings:d,controls:a})}function k(c,b){c.data("jPaginator");var d=c.data("jPaginator").controls,d=Math.round(b/d.cInfMax*100),a=c.find(".paginator_slider").slider("option","value");d!=a&&c.find(".paginator_slider").slider("option",
"value",d)}function q(c,b,d){b=c.data("jPaginator").controls;if(b.listenSlider&&!b.isMoving){var d=d.value,b=c.data("jPaginator").settings,a=c.data("jPaginator").controls,d=Math.min(100,d),d=Math.max(0,d),a=Math.round(a.cInfMax*d/100)-a.cInf;d==100?g(c,b.nbPages-b.length+1):d==0?g(c,1):m(c,a)}}function m(c,b){var d=c.data("jPaginator").settings,a=c.data("jPaginator").controls,e=a.infRel+b,h=Math.abs(b)/b*Math.floor(Math.abs(e)/a.realWid);e%=a.realWid;a.infRel=e;var f=(a.curNum-1)*a.realWid+a.infRel,
j=a.curNum+h;j<1&&(f=-1);j>d.nbPages&&(f=a.cInfMax+1);f<0?(doReset=!0,g(c,1),a.cInf=0,a.infRel=0,k(c,0),a.isLimitL=!0,n(c)):f>a.cInfMax?(doReset=!0,g(c,d.nbPages),a.cInf=a.cInfMax,a.infRel=0,k(c,a.cInfMax),a.isLimitR=!0,n(c)):(a.isLimitL=!1,a.isLimitR=!1,a.cInf=f,c.data("jPaginator",{settings:d,controls:a}),b!=0&&(h!=0&&g(c,j),k(c,a.cInf),c.find(".paginator_p_bloc").css("left",-1*e-a.realWid+"px")))}function n(c){var b=c.data("jPaginator").controls;b.nbMove=0;b.isMoving=!1;c.data("jPaginator").controls=
b}function r(c,b){c.data("jPaginator");var d=c.data("jPaginator").controls;if(!(d.isLimitR&&b=="right")&&!(d.isLimitL&&b=="left")){var a=Math.round(d.cInfMax/10);b=="left"&&(a*=-1);m(c,a);setTimeout(function(){d.nbMove+=1;r(c,b)},20)}}function s(c,b){var d=c.data("jPaginator").settings,a=c.data("jPaginator").controls;if(a.isMoving){var e=Math.min(Math.abs(d.speed),5),h=Math.min(Math.abs(d.coeffAcceleration),5);d.withAcceleration&&(e=Math.round(e+Math.round(h*a.nbMove*a.nbMove/8E4)));b=="left"&&(e*=
-1);m(c,e);setTimeout(function(){a.nbMove+=1;s(c,b)},10)}}var o={init:function(c){this.attr("id")==""&&e.error('You must define an unique id on your element - ex : $("#myId").jPaginator();');this.length!=1&&e.error('You must use this plugin with a single element - ex : $("#myId").jPaginator();');e(this).html("").append("<div class='paginator_root'><div class='paginator_bmax left'></div><div class='paginator_b left'></div><div class='paginator_p_wrap'><div class='paginator_p_bloc'></div></div><div class='paginator_b right'></div><div class='paginator_bmax right'></div></div><div class='paginator_slider' class='ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all'><a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a></div>");
var b={selectedPage:1,nbPages:100,length:10,widthPx:30,marginPx:1,withSlider:!0,withMaxButton:!0,withAcceleration:!0,speed:2,coeffAcceleration:2,minSlidesForSlider:3},d={realWid:0,curNum:1,infRel:0,cInfMax:0,cInf:0,nbMove:0,isMoving:!1,isLimitL:!1,isLimitR:!1,listenSlider:!1};return this.each(function(){var a=e(this),g=a.data("jPaginator");c&&e.extend(b,c);a.find(".paginator_slider").slider({animate:!1});for(i=1;i<=b.length+2;i++)a.find(".paginator_p_bloc").append(e("<div class='paginator_p'></div>"));
b.length=Math.min(b.length,b.nbPages);var h=!0;b.nbPages<=b.length&&(a.find(".paginator_slider").hide(),a.find(".paginator_slider").children().hide(),a.find(".paginator_bmax").hide(),a.find(".paginator_b").hide(),h=!1);if(Math.ceil(b.nbPages/b.length)<b.minSlidesForSlider)b.withSlider=!1;b.withSlider||(a.find(".paginator_slider").hide(),a.find(".paginator_slider").children().hide());b.withMaxButton||a.find(".paginator_bmax").hide();var f=0,j=a.find(".paginator_p").first().css("border-left-width");
j.indexOf("px")>0&&(f=j.replace("px","")*1);d.realWid=b.widthPx+b.marginPx*2+f*2;f=1*d.realWid*b.length;a.find(".paginator_p").css("width",b.widthPx+"px");a.find(".paginator_p").css("margin","0 "+b.marginPx+"px 0 "+b.marginPx+"px");a.find(".paginator_p_wrap").css("width",f+"px");a.find(".paginator_slider").css("width",f+"px");d.cInfMax=b.nbPages*d.realWid-b.length*d.realWid;b.selectedPage=Math.min(b.selectedPage,b.nbPages);g||a.data("jPaginator",{settings:b,controls:d});p(a);a.find(".paginator_p").bind("click.jPaginator",
function(){var b=e(this),c=a.data("jPaginator").settings,b=1*b.html();a.find(".paginator_p.selected").removeClass("selected");c.selectedPage=b;a.data("jPaginator").settings=c;p(a)});b.withSlider&&(a.find(".paginator_slider").bind("slidechange.jPaginator",function(b,c){q(a,b,c)}),a.find(".paginator_slider").bind("slide.jPaginator",function(b,c){q(a,b,c)}));h&&(a.find(".paginator_b").bind("mouseenter.jPaginator",function(){var b="left";e(this).hasClass("right")&&(b="right");a.data("jPaginator").controls.isMoving=
!0;s(a,b)}),a.find(".paginator_b").bind("mouseleave.jPaginator",function(){e(this);n(a)}));b.withMaxButton&&a.find(".paginator_bmax").bind("click.jPaginator",function(){var b="left";e(this).hasClass("right")&&(b="right");r(a,b)});a.find(".paginator_p").bind("mouseenter.jPaginator",function(){var b=e(this);a.find(".paginator_p.hover").removeClass("hover");b.addClass("hover")});a.find(".paginator_p").bind("mouseleave.jPaginator",function(){e(this);a.find(".paginator_p.hover").removeClass("hover")})})},
destroy:function(){return this.each(function(){e(window).unbind(".jPaginator");e(this).removeData("jPaginator")})}};e.fn.jPaginator=function(c){if(o[c])return o[c].apply(this,Array.prototype.slice.call(arguments,1));else if(typeof c==="object"||!c)return o.init.apply(this,arguments);else e.error("Method "+c+" does not exist on jQuery.jPaginator")}})(jQuery);