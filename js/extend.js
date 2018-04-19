/*
	trim 方法扩展字符串的去首尾空格方法
*/
String.prototype.iTrim = function(){
	return this.replace(/^\s+/, "").replace(/\s+$/, ""); 
}