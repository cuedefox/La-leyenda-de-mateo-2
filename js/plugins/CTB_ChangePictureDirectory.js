/** /*:
 * @author CT_Bolt
 * @plugindesc (v1.20) - Change Picture and Parallax Directory
 *
 * @param Picture Directory
 * @desc Picture & Parallax Directory
 Default: pictures
 * @default pictures
 *
 * @param Parallax Directory
 * @desc Parallax Directory
 Default: parallaxes
 * @default parallaxes
 *
 *
 * @help
 * Description:
 *  o Change Picture & Parallax Directory
 *
 * Terms of Use:
 *  o Free for commercial/non-commercial use.
 *
 * History Log:
 *  α v1.00 Alpha (09/21/2020)
 *  β v1.10 Beta (09/21/2020)
 *  γ v1.20 Gamma (09/21/2020)
 *
 *
 */

/* Core */
var CTB = CTB || {}; CTB.ChangePictureDirectoryMv  = CTB.ChangePictureDirectoryMv || {};
var Imported = Imported || {}; Imported["CTB.ChangePictureDirectoryMv"] = 1.20;

"use strict";
(function ($_$) {
    function getPluginParameters() {var a = document.currentScript || (function() { var b = document.getElementsByTagName('script'); return b[b.length - 1]; })(); return PluginManager.parameters(a.src.substring((a.src.lastIndexOf('/') + 1), a.src.indexOf('.js')));} $_$.par = getPluginParameters();
	ImageManager.loadPicture = function(filename, hue) {
		return this.loadBitmap('img/'+$_$.par["Picture Directory"]+'/', filename, hue, true);
	};
	
	ImageManager.loadParallax = function(filename, hue) {
		return this.loadBitmap('img/'+$_$.par["Parallax Directory"]+'/', filename, hue, true);
	};
})(CTB.ChangePictureDirectoryMv, this);