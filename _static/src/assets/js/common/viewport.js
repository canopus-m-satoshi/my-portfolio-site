/* viewport切り替え（タブレット）
---------------------------------------------------------------------------- */
var tb_view = '';
var agent = window.navigator.userAgent.toLowerCase();
var ipad = agent.indexOf('ipad') > -1 || agent.indexOf('macintosh') > -1 && 'ontouchend' in document;

if (navigator.userAgent.indexOf('iPad') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('A1_07') > 0 || navigator.userAgent.indexOf('SC-01C') > 0 || ipad) {
	document.querySelector('meta[name="viewport"]').setAttribute('content', tb_view);
}