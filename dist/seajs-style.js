define("seajs/seajs-style/1.0.0/seajs-style",[],function(){var a=/\W/g,b=document,c=document.getElementsByTagName("head")[0]||document.documentElement;seajs.importStyle=function(d,e){if(!e||(e=e.replace(a,"-"),!b.getElementById(e))){var f=b.createElement("style");if(e&&(f.id=e),c.appendChild(f),f.styleSheet){if(b.getElementsByTagName("style").length>31)throw new Error("Exceed the maximal count of style tags in IE");f.styleSheet.cssText=d}else f.appendChild(b.createTextNode(d))}}});
seajs.use("seajs/seajs-style/1.0.0/seajs-style");
