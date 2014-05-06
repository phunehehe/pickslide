;
if (window.jQuery)(function ($) {
	var methods = {
		init: function (options) {
			var namedColors = new Array('aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen');

			var PSNC = '';
			jQuery.each(namedColors, function () {
				PSNC += '<div title="' + this + '" class="PS-named-colors" style="background-color: ' + this + ';"></div>';
			});

			var PStemplate;
			PStemplate = '<div class="PS-picker">';
			PStemplate += '<div class="PS-display-wrap">';
			PStemplate += '<div class="PS-display gradient"><div class="PS-pointer"></div></div>';
			PStemplate += '<div class="PS-namedColors">' + PSNC + '</div>';
			PStemplate += '</div>';
			PStemplate += '<div class="PS-color-wrap">';
			PStemplate += '<div class="PS-alpha"><div title="Current Color" class="PS-color"></div></div>';
			PStemplate += '<div class="PS-alpha"><div class="PS-origcolor"></div></div>';
			PStemplate += '</div>';
			PStemplate += '<div class="PS-extras-wrap">';
			PStemplate += '<div class="PS-split">';
			PStemplate += '<div title="Hue Variations" class="PS-hue"></div>';
			PStemplate += '<div title="Saturation Variations" class="PS-sat"></div>';
			PStemplate += '<div title="Lightness Variations" class="PS-lightness"></div>';
			PStemplate += '<div title="Red Channel Variations" class="PS-red"></div>';
			PStemplate += '<div title="Green Channel Variations" class="PS-green"></div>';
			PStemplate += '<div title="Blue Channel Variations" class="PS-blue"></div>';
			PStemplate += '</div>';
			PStemplate += '<div class="PS-split">';
			PStemplate += '<div title="Variation Sensitivity" class="PS-slide-f"></div>';
			PStemplate += '</div>';
			PStemplate += '<div class="PS-split">';
			PStemplate += '<div title="Toogle Palette" class="PS-getHex"></div>';
			PStemplate += '<div title="Triadic Colors" class="PS-triadic"></div>';
			PStemplate += '<div title="Square Colors" class="PS-square"></div>';
			PStemplate += '<div title="Split Complementary Colors" class="PS-splitcom"></div>';
			PStemplate += '</div>';
			PStemplate += '</div>';
			PStemplate += '<div class="PS-slide-wrap">';
			PStemplate += '<div title="Hue" class="PS-slide-h gradient"></div>';
			PStemplate += '<div title="Saturation" class="PS-slide-s gradient"></div>';
			PStemplate += '<div title="Lightness" class="PS-slide-l gradient"></div>';
			PStemplate += '<div title="Alpha" class="PS-slide-a"></div>';
			PStemplate += '<div title="Red Channel" class="PS-slide-r"></div>';
			PStemplate += '<div title="Green Channel" class="PS-slide-g"></div>';
			PStemplate += '<div title="Blue Channel" class="PS-slide-b"></div>';
			PStemplate += '<div class="PS-history"></div>';
			PStemplate += '<div class="PS-values">';
			PStemplate += '<input class="PS-hex" value="" type="text" />';
			PStemplate += '<input class="PS-rgba" value="" type="text" readonly="readonly" />';
			PStemplate += '<input class="PS-hsla" value="" type="text" readonly="readonly" />';
			PStemplate += '</div>';
			PStemplate += '<button class="PS-button right" type="button">Okay</button>';
			PStemplate += '<button class="PS-cancel" type="button">Cancel</button>';
			PStemplate += '</div>';
			PStemplate += '</div>';

			regEx = {
				colorType: /(hsl|rgb)/,
				hslType: /(hsla|hsl)/,
				rgbType: /(rgba|rgb)/,
				hsl: /hsl{1}\([0-9]{1,3}(\.[0-9]+)?,\s*[0-9]{1,3}(\.[0-9]+)?%{1},\s*[0-9]{1,3}(\.[0-9]+)?%{1}\)/,
				hsla: /hsla{1}\([0-9]{1,3}(\.[0-9]+)?,\s*[0-9]{1,3}(\.[0-9]+)?%{1},\s*[0-9]{1,3}(\.[0-9]+)?%{1},\s*[0-1](\.[0-9]+)?\)/,
				rgb: /(rgb{1}\(([0-9]{1,3}(\.[0-9]+)?,\s?){2}[0-9]{1,3}(\.[0-9]+)?\))|(rgb{1}\(([0-9]{1,3}(\.[0-9]+)?%{1},\s?){2}[0-9]{1,3}(\.[0-9]+)?%{1}\))/,
				rgba: /(rgba{1}\(([0-9]{1,3}(\.[0-9]+)?,\s?){3}[0-1](\.[0-9]+)?\))|(rgba{1}\(([0-9]{1,3}(\.[0-9]+)?%{1},\s?){3}[0-1](\.[0-9]+)?\))/,
				hex: /(#{1}[0-9a-fA-F]{6})|(#{1}[0-9a-fA-F]{3}$)/
			};

			// Return //////////////////////////////////////////////////////////////////////////////
			return this.each(function () {
				settings = $.extend({
					initColor: methods.randomColor,
					colorFormat: 'hsla',
					target: $(this),
					variationLevel: 2,
					historyLimit: 20,
					setHistory: [],
					showHistory: true,
					showExtras: true,
					showValues: true,
					showHSLslider: true,
					showRGBslider: true,
					namedColorsOnly: false,
					paletteOnly: false,
					noPanel: false,
					setPalette: [],
					setSpace: true,
					addIcon: false,
					iconSize: 'big',
					iconTitle: '',
					setStyle: false,
					setPickerToCenter: false,
					onChange: function () {},
					onClick: null,
					hex2LowerCase: false,
					fallBackColor: '#ffffff',
				}, options);

				settings.ClickCount = 0;
				settings.ChangeCount = 0;
				var limit = 12;
				var ID = methods.setID('PS-');
				var tpl = $(PStemplate).attr('id', ID);

				if ($(this) != settings.target) {
					if ($(this).val() == '') {
						if (settings.target.val() == '') {
							settings.target.val(settings.initColor);
						} else {
							settings.target.val(settings.target.val());
						}
					} else {
						settings.target.val($(this).val());
					}
				} else {
					if ($(this).val() == '') {
						settings.target.val(settings.initColor);
					}
				}

				if (settings.addIcon == true) {
					$(this).before('<div title="' + settings.iconTitle + '" style="background-color:' + settings.target.val() + ';" class="PS-pickup-' + settings.iconSize + ' ' + ID + '"></div>');
					$this = $(this).prev('.PS-pickup-' + settings.iconSize);
				} else {
					$(this).attr('title', settings.iconTitle);
					$this = $(this);
				}

				$this.bind('click', methods.PSclick);

				$this.data('PSID', '#' + ID);
				$this.data('iconID', ID);

				jQuery.each(settings, function (i, val) {
					$(tpl).data(i, val);
				});
				$('body').append(tpl);

				pointer_width = $('.PS-pointer').outerWidth() / 2;
				PSdOne = $('.PS-display').innerWidth() / 100;

				PSID = $this.data('PSID');



				if (jQuery.isArray($(PSID).data('setHistory')) == false) {
					$(PSID).data('setHistory', []);
				}

				$(PSID).data('history', $(PSID).data('setHistory'));
				// Event ///////////////////////////////////////////////////////////////////////////
				$(PSID).on('click', '.PS-button', function () {
					var h = $(PSID).find('.PS-slide-h').slider('value');
					var s = $(PSID).find('.PS-slide-s').slider('value');
					var l = $(PSID).find('.PS-slide-l').slider('value');
					var a = $(PSID).find('.PS-slide-a').slider('value');
					var r = $(PSID).find('.PS-slide-r').slider('value');
					var g = $(PSID).find('.PS-slide-g').slider('value');
					var b = $(PSID).find('.PS-slide-b').slider('value');
					if (h == 360) {
						h = 0;
					}
					var hsl = 'hsl(' + h + ',' + space + s + '%,' + space + l + '%)';
					var hsla = 'hsla(' + h + ',' + space + s + '%,' + space + l + '%,' + space + a + ')';
					var rgb = 'rgb(' + r + ',' + space + g + ',' + space + b + ')';
					var rgba = 'rgba(' + r + ',' + space + g + ',' + space + b + ',' + space + a + ')';
					var rgbP = 'rgb(' + (Math.round(r / 2.55 * 100)) / 100 + '%,' + space + (Math.round(g / 2.55 * 100)) / 100 + '%,' + space + (Math.round(b / 2.55 * 100)) / 100 + '%)';
					var rgbaP = 'rgba(' + (Math.round(r / 2.55 * 100)) / 100 + '%,' + space + (Math.round(g / 2.55 * 100)) / 100 + '%,' + space + (Math.round(b / 2.55 * 100)) / 100 + '%,' + space + a + ')';
					var hex = methods.RGB2Hex(r, g, b)[1];
					switch ($(PSID).data('colorFormat')) {
					case 'hsl':
						var result = hsl;
						break;
					case 'hsla':
						var result = hsla;
						break;
					case 'rgb':
						var result = rgb;
						break;
					case 'rgba':
						var result = rgba;
						break;
					case 'rgb%':
						var result = rgbP;
						break;
					case 'rgba%':
						var result = rgbaP;
						break;
					case 'hex':
					case '#':
						var result = hex;
						if ($(PSID).data('hex2LowerCase') == true) {
							var result = hex.toLowerCase()
						}
						break;
					}
					if (jQuery.inArray(result, $(PSID).data('history')) == -1) {
						$(PSID).data('history').push(result);
						$(PSID).data('ChangeCount', $(PSID).data('history').length);
					}
					if ($(PSID).data('history').length > $(PSID).data('historyLimit')) {
						$(PSID).data('history').shift();
					}
					target = $(PSID).data('target');
					target.val(result).change();
					if ($(PSID).data('addIcon') == true) {
						$this.css('background-color', result);
					}
					methods.resetSlide();
					methods.onChange($(PSID).data('ChangeCount'), hsla, rgba, hex, $(PSID).data('history'));
				});
				// Event ///////////////////////////////////////////////////////////////////////////
				$(PSID).on('click', '.PS-cancel', function () {
					methods.resetSlide();
				});
				// Event ///////////////////////////////////////////////////////////////////////////
				$(PSID).on('click', '.PS-hue, .PS-sat, .PS-lightness, .PS-red, .PS-green, .PS-blue', function () {
					var tmp = '';
					var rgba = methods.getRGBA($(PSID).find('.PS-color').css('background-color'));
					switch ($(this).attr('class')) {
					case 'PS-hue':
						var stack = methods.AnalogHue(rgba[0], rgba[1], rgba[2], rgba[3], $(PSID).data('variationLevel'), limit);
						var format = 'hsla';
						break;
					case 'PS-sat':
						var stack = methods.AnalogSat(rgba[0], rgba[1], rgba[2], rgba[3], $(PSID).data('variationLevel'), limit);
						var format = 'hsla';
						break;
					case 'PS-lightness':
						var stack = methods.AnalogLight(rgba[0], rgba[1], rgba[2], rgba[3], $(PSID).data('variationLevel'), limit);
						var format = 'hsla';
						break;
					case 'PS-red':
						var stack = methods.AnalogRed(rgba[0], rgba[1], rgba[2], rgba[3], $(PSID).data('variationLevel'), limit);
						var format = 'rgba';
						break;
					case 'PS-green':
						var stack = methods.AnalogGreen(rgba[0], rgba[1], rgba[2], rgba[3], $(PSID).data('variationLevel'), limit);
						var format = 'rgba';
						break;
					case 'PS-blue':
						var stack = methods.AnalogBlue(rgba[0], rgba[1], rgba[2], rgba[3], $(PSID).data('variationLevel'), limit);
						var format = 'rgba';
						break;
					}
					jQuery.each(stack, function (i, val) {
						if (i == limit) {
							var css = ' PS-source';
						} else {
							var css = '';
						}
						if (format == 'hsla') {
							tmp += '<div title="hsla(' + val[0] + ', ' + val[1] + '%, ' + val[2] + '%, ' + val[3] + ')" class="PS-variation' + css + '" style="background-color: hsla(' + val[0] + ', ' + val[1] + '%, ' + val[2] + '%, ' + val[3] + ');"></div>';
						} else {
							tmp += '<div title="rgba(' + val[0] + ', ' + val[1] + ', ' + val[2] + ', ' + val[3] + ')" class="PS-variation' + css + '" style="background-color: rgba(' + val[0] + ', ' + val[1] + ', ' + val[2] + ', ' + val[3] + ');"></div>';
						}
					});
					$(PSID).find('.PS-color').html(tmp);
				});
				// Event ///////////////////////////////////////////////////////////////////////////
				$(PSID).on('click', '.PS-triadic', function () {
					var tmp = '';
					var rgba = methods.getRGBA($(PSID).find('.PS-color').css('background-color'));
					var triad = methods.getTriadic(rgba[0], rgba[1], rgba[2], rgba[3]);
					for (i = 0; i <= 2; i++) {
						tmp += '<div title="hsla(' + triad[i] + ', ' + triad[3] + '%, ' + triad[4] + '%, ' + triad[5] + ')" class="PS-variation" style="background-color: hsla(' + triad[i] + ', ' + triad[3] + '%, ' + triad[4] + '%, ' + triad[5] + ');width: 100%;height: 33.3333%;"></div>';
					}
					$(PSID).find('.PS-color').html(tmp);
				});
				// Event ///////////////////////////////////////////////////////////////////////////
				$(PSID).on('click', '.PS-square', function () {
					var tmp = '';
					var rgba = methods.getRGBA($(PSID).find('.PS-color').css('background-color'));
					var square = methods.getSquare(rgba[0], rgba[1], rgba[2], rgba[3]);
					for (i = 0; i <= 3; i++) {
						tmp += '<div title="hsla(' + square[i] + ', ' + square[4] + '%, ' + square[5] + '%, ' + square[6] + ')" class="PS-variation" style="background-color: hsla(' + square[i] + ', ' + square[4] + '%, ' + square[5] + '%, ' + square[6] + ');width: 100%;height: 25%;"></div>';
					}
					$(PSID).find('.PS-color').html(tmp);
				});
				// Event ///////////////////////////////////////////////////////////////////////////
				$(PSID).on('click', '.PS-splitcom', function () {
					var tmp = '';
					var rgba = methods.getRGBA($(PSID).find('.PS-color').css('background-color'));
					var splitCom = methods.getSplitComplements(rgba[0], rgba[1], rgba[2], rgba[3]);
					for (i = 0; i <= 3; i++) {
						tmp += '<div title="hsla(' + splitCom[i] + ', ' + splitCom[4] + '%, ' + splitCom[5] + '%, ' + splitCom[6] + ')" class="PS-variation" style="background-color: hsla(' + splitCom[i] + ', ' + splitCom[4] + '%, ' + splitCom[5] + '%, ' + splitCom[6] + ');width: 100%;height: 25%;"></div>';
					}
					$(PSID).find('.PS-color').html(tmp);
				});
				// Event ///////////////////////////////////////////////////////////////////////////
				$(PSID).on('click', '.PS-getHex', function () {
					$(PSID).find('.PS-namedColors').toggle();
				});
				// Event ///////////////////////////////////////////////////////////////////////////
				$(PSID).on('click', '.PS-origcolor, .PS-history-item, .PS-named-colors, .PS-variation', function () {
					methods.initColor($(this).attr('title'));
					methods.clearHex();
				});
				// Event ///////////////////////////////////////////////////////////////////////////
				$(PSID).on({
					mouseup: function (e) {
						$(PSID).find('.PS-display').unbind('mousemove');
						methods.getPosition(e);
					},
					mousedown: function (e) {
						$(PSID).find('.PS-display').bind({
							mousemove: function (e) {
								methods.getPosition(e);
							}
						});
					}
				}, '.PS-display');
				// Event ///////////////////////////////////////////////////////////////////////////
				$(PSID).on('change', '.PS-hex', function () {
					methods.setSlideHex();
				});
				// Event ///////////////////////////////////////////////////////////////////////////
				$(PSID).find('input[readonly="readonly"]').on('click', function () {
					$(this).select();
				});

			});
		},
		PSdestroy: function () {
			var pid = $this.data('PSID');
			$(pid).unbind();
			$('.' + $this.data('iconID')).remove();
			$(pid).removeData();
			$(pid).remove();
      $(this).unbind("click", methods.PSclick);
		},

		// Method //////////////////////////////////////////////////////////////////////////////////
    PSvalidateColor: function (color) {
      return (regEx['hex'].exec(color) != null
				|| regEx['hsl'].exec(color) != null
				|| regEx['hsla'].exec(color) != null
				|| regEx['rgb'].exec(color) != null
				|| regEx['rgba'].exec(color) != null)
    },

		PSclick: function () {
			$this = $(this);
			methods.resetSlide();
			PSID = $this.data('PSID');

			// Most of the cases, this will fail, so !(||||) gives a better performance
			if (!methods.PSvalidateColor($(PSID).data('target').val())) {
        fallBackColor = $(PSID).data('fallBackColor')
        if (methods.PSvalidateColor(fallBackColor)) {
  				$(PSID).data('target').val(fallBackColor);
        } else {
  				$(PSID).data('target').val('#ffffff');
        }
			}

			$(PSID).data('ClickCount', $(PSID).data('ClickCount') + 1);

			if (jQuery.isFunction($(PSID).data('onChange'))) {
				methods.onChange = $(PSID).data('onChange');
			}

			if ($(PSID).data('onClick') == null) {
				if ($(PSID).is(':hidden')) {
					$(PSID).fadeIn('slow');
				} else {
					$(PSID).fadeOut('slow');
				}
			} else if (jQuery.isFunction($(PSID).data('onClick'))) {
				methods.onClick = $(PSID).data('onClick');
				methods.onClick($(PSID).data('ClickCount'));
			}

			if ($(PSID).data('setSpace') == true) {
				space = ' ';
			} else {
				space = '';
			}

			$(PSID).find('.PS-slide-h').slider({
				value: 0,
				min: 0,
				max: 360,
				step: 1,
				animate: true,
				slide: function (event, ui) {
					$(this).children('a').text(ui.value + '?');
					methods.setSlideHSL();
				},
				stop: function (event, ui) {
					$(this).children('a').text(ui.value + '?');
					methods.setSlideHSL();
				}
			});

			$(PSID).find('.PS-slide-s, .PS-slide-l').slider({
				value: 0,
				min: 0,
				max: 100,
				step: 1,
				animate: true,
				slide: function (event, ui) {
					$(this).children('a').text(ui.value + '%');
					methods.setSlideHSL();
				},
				stop: function (event, ui) {
					$(this).children('a').text(ui.value + '%');
					methods.setSlideHSL();
				}
			});

			$(PSID).find('.PS-slide-a').slider({
				value: 1,
				min: 0,
				max: 1,
				step: 0.05,
				animate: true,
				slide: function (event, ui) {
					$(this).children('a').text(ui.value);
					methods.setSlideHSL();
				},
				stop: function (event, ui) {
					$(this).children('a').text(ui.value);
					methods.setSlideHSL();
				}
			});

			$(PSID).find('.PS-slide-r, .PS-slide-g, .PS-slide-b').slider({
				orientation: 'horizontal',
				range: 'min',
				value: 1,
				min: 0,
				max: 255,
				step: 1,
				animate: true,
				slide: function (event, ui) {
					$(this).children('a').text(ui.value);
					methods.setSlideRGB();
				},
				stop: function (event, ui) {
					$(this).children('a').text(ui.value);
					methods.setSlideRGB();
				}
			});

			$(PSID).find('.PS-slide-f').slider({
				orientation: 'vertical',
				range: 'min',
				value: 2,
				min: 0.5,
				max: 5,
				step: 0.05,
				animate: true,
				slide: function (event, ui) {
					$(this).children('a').text(ui.value);
					$(PSID).data('variationLevel', ui.value);
				},
				stop: function (event, ui) {
					$(this).children('a').text(ui.value);
					$(PSID).data('variationLevel', ui.value);
				}
			});

			methods.initColor($(PSID).data('target').val());
			$('.PS-origcolor').css('background-color', $(PSID).data('target').val()).attr('title', $(PSID).data('target').val());

			if ($(PSID).data('setStyle') == 'minimal') {
				$(PSID).find('.PS-display, .PS-namedColors').addClass('PS-display-minimal');
				$(PSID).find('.PS-color').addClass('PS-color-minimal');
				$(PSID).find('.PS-origcolor').addClass('PS-origcolor-minimal');
				$(PSID).find('.PS-color-wrap').addClass('PS-color-wrap-minimal');
				PSdOne = $(PSID).find('.PS-display').innerWidth() / 100;
				$(PSID).data('showExtras', false);
				$(PSID).data('showHistory', false);
				$(PSID).data('showValues', false);
				$(PSID).find('.ui-slider').css('display', 'none');
				$(PSID).find('.PS-slide-h').css('display', 'block');
				$(PSID).addClass('PS-minimal');
				$(PSID).data('showHSLslider', true);
			}

			if ($(PSID).data('setStyle') == 'minimal-alpha') {
				$(PSID).find('.PS-display, .PS-namedColors').addClass('PS-display-minimal');
				$(PSID).find('.PS-color').addClass('PS-color-minimal');
				$(PSID).find('.PS-origcolor').addClass('PS-origcolor-minimal');
				$(PSID).find('.PS-color-wrap').addClass('PS-color-wrap-minimal');
				PSdOne = $(PSID).find('.PS-display').innerWidth() / 100;
				$(PSID).data('showExtras', false);
				$(PSID).data('showHistory', false);
				$(PSID).data('showValues', false);
				$(PSID).find('.ui-slider').css('display', 'none');
				$(PSID).find('.PS-slide-h').css('display', 'block');
				$(PSID).find('.PS-slide-a').css('display', 'block');
				$(PSID).addClass('PS-minimal');
				$(PSID).data('showHSLslider', true);
			}

			if ($(PSID).data('setStyle') == 'minimal-hsl') {
				$(PSID).find('.PS-display, .PS-namedColors').addClass('PS-display-minimal');
				$(PSID).find('.PS-color').addClass('PS-color-minimal');
				$(PSID).find('.PS-origcolor').addClass('PS-origcolor-minimal');
				$(PSID).find('.PS-color-wrap').addClass('PS-color-wrap-minimal');
				PSdOne = $(PSID).find('.PS-display').innerWidth() / 100;
				$(PSID).data('showExtras', false);
				$(PSID).data('showHistory', false);
				$(PSID).data('showValues', false);
				$(PSID).find('.ui-slider').css('display', 'none');
				$(PSID).find('.PS-slide-h').css('display', 'block');
				$(PSID).find('.PS-slide-s').css('display', 'block');
				$(PSID).find('.PS-slide-l').css('display', 'block');
				$(PSID).addClass('PS-minimal');
				$(PSID).data('showHSLslider', true);
			}

			if ($(PSID).data('setStyle') == 'minimal-rgb') {
				$(PSID).find('.PS-display, .PS-namedColors').addClass('PS-display-minimal');
				$(PSID).find('.PS-color').addClass('PS-color-minimal');
				$(PSID).find('.PS-origcolor').addClass('PS-origcolor-minimal');
				$(PSID).find('.PS-color-wrap').addClass('PS-color-wrap-minimal');
				PSdOne = $(PSID).find('.PS-display').innerWidth() / 100;
				$(PSID).data('showExtras', false);
				$(PSID).data('showHistory', false);
				$(PSID).data('showValues', false);
				$(PSID).find('.ui-slider').css('display', 'none');
				$(PSID).find('.PS-slide-r').css('display', 'block');
				$(PSID).find('.PS-slide-g').css('display', 'block');
				$(PSID).find('.PS-slide-b').css('display', 'block');
				$(PSID).addClass('PS-minimal');
				$(PSID).data('showRGBslider', true);
			}

			if ($(PSID).data('setStyle') == 'minimal-hsla') {
				$(PSID).find('.PS-display, .PS-namedColors').addClass('PS-display-minimal');
				$(PSID).find('.PS-color').addClass('PS-color-minimal');
				$(PSID).find('.PS-origcolor').addClass('PS-origcolor-minimal');
				$(PSID).find('.PS-color-wrap').addClass('PS-color-wrap-minimal');
				PSdOne = $(PSID).find('.PS-display').innerWidth() / 100;
				$(PSID).data('showExtras', false);
				$(PSID).data('showHistory', false);
				$(PSID).data('showValues', false);
				$(PSID).find('.ui-slider').css('display', 'none');
				$(PSID).find('.PS-slide-h').css('display', 'block');
				$(PSID).find('.PS-slide-s').css('display', 'block');
				$(PSID).find('.PS-slide-l').css('display', 'block');
				$(PSID).find('.PS-slide-a').css('display', 'block');
				$(PSID).addClass('PS-minimal');
				$(PSID).data('showHSLslider', true);
			}

			if ($(PSID).data('setStyle') == 'minimal-rgba') {
				$(PSID).find('.PS-display, .PS-namedColors').addClass('PS-display-minimal');
				$(PSID).find('.PS-color').addClass('PS-color-minimal');
				$(PSID).find('.PS-origcolor').addClass('PS-origcolor-minimal');
				$(PSID).find('.PS-color-wrap').addClass('PS-color-wrap-minimal');
				PSdOne = $(PSID).find('.PS-display').innerWidth() / 100;
				$(PSID).data('showExtras', false);
				$(PSID).data('showHistory', false);
				$(PSID).data('showValues', false);
				$(PSID).find('.ui-slider').css('display', 'none');
				$(PSID).find('.PS-slide-r').css('display', 'block');
				$(PSID).find('.PS-slide-g').css('display', 'block');
				$(PSID).find('.PS-slide-b').css('display', 'block');
				$(PSID).find('.PS-slide-a').css('display', 'block');
				$(PSID).addClass('PS-minimal');
				$(PSID).data('showRGBslider', true);
			}

			if ($(PSID).data('setStyle') == 'minimal-hsl-no-panel') {
				$(PSID).data('noPanel', true);
				PSdOne = $(PSID).find('.PS-display').innerWidth() / 100;
				$(PSID).data('showHistory', false);
				$(PSID).data('showValues', false);
				$(PSID).find('.ui-slider').css('display', 'none');
				$(PSID).find('.PS-slide-h').css('display', 'block');
				$(PSID).find('.PS-slide-s').css('display', 'block');
				$(PSID).find('.PS-slide-l').css('display', 'block');
				$(PSID).data('showHSLslider', true);
			}

			if ($(PSID).data('setStyle') == 'minimal-rgb-no-panel') {
				$(PSID).data('noPanel', true);
				PSdOne = $(PSID).find('.PS-display').innerWidth() / 100;
				$(PSID).data('showHistory', false);
				$(PSID).data('showValues', false);
				$(PSID).find('.ui-slider').css('display', 'none');
				$(PSID).find('.PS-slide-r').css('display', 'block');
				$(PSID).find('.PS-slide-g').css('display', 'block');
				$(PSID).find('.PS-slide-b').css('display', 'block');
				$(PSID).data('showRGBslider', true);
			}

			if ($(PSID).data('setStyle') == 'minimal-hsla-no-panel') {
				$(PSID).data('noPanel', true);
				PSdOne = $(PSID).find('.PS-display').innerWidth() / 100;
				$(PSID).data('showHistory', false);
				$(PSID).data('showValues', false);
				$(PSID).find('.ui-slider').css('display', 'none');
				$(PSID).find('.PS-slide-h').css('display', 'block');
				$(PSID).find('.PS-slide-s').css('display', 'block');
				$(PSID).find('.PS-slide-l').css('display', 'block');
				$(PSID).find('.PS-slide-a').css('display', 'block');
				$(PSID).data('showHSLslider', true);
			}

			if ($(PSID).data('setStyle') == 'minimal-rgba-no-panel') {
				$(PSID).data('noPanel', true);
				PSdOne = $(PSID).find('.PS-display').innerWidth() / 100;
				$(PSID).data('showHistory', false);
				$(PSID).data('showValues', false);
				$(PSID).find('.ui-slider').css('display', 'none');
				$(PSID).find('.PS-slide-r').css('display', 'block');
				$(PSID).find('.PS-slide-g').css('display', 'block');
				$(PSID).find('.PS-slide-b').css('display', 'block');
				$(PSID).find('.PS-slide-a').css('display', 'block');
				$(PSID).data('showRGBslider', true);
			}

			if ($(PSID).data('setStyle') == 'minimal-palette') {
				$(PSID).find('.PS-display, .PS-namedColors').addClass('PS-display-minimal');
				$(PSID).data('namedColorsOnly', true);
				$(PSID).data('paletteOnly', true);
				$(PSID).find('.PS-color').addClass('PS-color-minimal');
				$(PSID).find('.PS-origcolor').addClass('PS-origcolor-minimal');
				$(PSID).find('.PS-color-wrap').addClass('PS-color-wrap-minimal');
				PSdOne = $(PSID).find('.PS-display').innerWidth() / 100;
				$(PSID).data('showExtras', false);
				$(PSID).data('showHistory', false);
				$(PSID).data('showValues', false);
				$(PSID).find('.ui-slider').css('display', 'none');
				$(PSID).addClass('PS-minimal');
			}

			if ($(PSID).data('noPanel') == true && $(PSID).data('namedColorsOnly') != true) {
				$(PSID).find('.PS-display-wrap').css('display', 'none');
				$(PSID).find('.PS-color-wrap').addClass('PS-color-wrap-minimal-no-panel');
				$(PSID).find('.PS-alpha:eq(1)').addClass('PSright');
				$(PSID).data('showExtras', false);
				$(PSID).addClass('PS-minimal');
			}

			if ($(PSID).data('showExtras') != true) {
				$(PSID).find('.PS-extras-wrap').css('display', 'none');
				$(PSID).addClass('PS-no-extras');
			}

			if ($(PSID).data('showHSLslider') != true) {
				$(PSID).find('.PS-slide-h').css('display', 'none');
				$(PSID).find('.PS-slide-s').css('display', 'none');
				$(PSID).find('.PS-slide-l').css('display', 'none');
			}

			if ($(PSID).data('showRGBslider') != true) {
				$(PSID).find('.PS-slide-r').css('display', 'none');
				$(PSID).find('.PS-slide-g').css('display', 'none');
				$(PSID).find('.PS-slide-b').css('display', 'none');
			}

			if ($(PSID).data('namedColorsOnly') == true) {
				$(PSID).find('.PS-extras-wrap, .PS-pointer').remove();
				$(PSID).find('.ui-slider').css('display', 'none');
				$(PSID).addClass('PS-no-extras');
				$(PSID).find('.PS-namedColors').css('display', 'block');
				$(PSID).find('.PS-hex').attr('readonly', 'readonly');
			}

			if ($(PSID).data('showHistory') != true) {
				$(PSID).find('.PS-history').css('display', 'none');
			}

			if ($(PSID).data('showValues') != true) {
				$(PSID).find('.PS-values').css('display', 'none');
			}

			if (jQuery.isArray($(PSID).data('setPalette')) == true && $(PSID).data('setPalette').length > 0) {
				var sqrtValue = Math.ceil(Math.sqrt($(PSID).data('setPalette').length));
				var dim = 100 / sqrtValue;
				var PSNC = '';
				jQuery.each($(PSID).data('setPalette'), function () {
					PSNC += '<div title="' + this + '" class="PS-named-colors" style="width: ' + dim + '%; height: ' + dim + '%;background-color: ' + this + ';"></div>';
				});
				$(PSID).find('.PS-namedColors').html(PSNC);
				if ($(PSID).data('paletteOnly') == true) {
					$(PSID).find('.PS-extras-wrap, .PS-pointer').remove();
					$(PSID).find('.ui-slider').css('display', 'none');
					$(PSID).addClass('PS-no-extras');
					$(PSID).find('.PS-namedColors').css('display', 'block');
					$(PSID).find('.PS-hex').attr('readonly', 'readonly');
				}
			}

			if ($(PSID).data('setPickerToCenter') == true) {
				var top = ($(document).height() - $(PSID).outerHeight()) / 2;
				var cssObj = {
					'top': top + 'px',
					'left': ($(document).width() / 2) + 'px',
					'margin-left': (($(PSID).outerWidth() / 2) * -1) + 'px'
				};
				var dif = ($(window).height() - $(PSID).outerHeight()) / 2;
				var pos = top - dif;
				$(PSID).css(cssObj);
				$('html, body').animate({
					scrollTop: pos
				}, 'slow');
			} else {
				var posX = Math.floor($this.offset().left);
				var posY = Math.floor($this.offset().top) + $this.outerHeight();
				var w = $(PSID).outerWidth();
				var h = $(PSID).outerHeight();
				if (posY + h > $(document).height()) {
					posY = $(document).height() - h - 10;
				}
				if (posX + w > $(document).width()) {
					posX = $(document).width() - w - 10;
				}
				var cssObj = {
					'top': posY + 'px',
					'left': posX + 'px'
				};
				$(PSID).css(cssObj);
				var dif = ($(window).height() - $(PSID).outerHeight()) / 2;
				var pos = posY - dif;
				$('html, body').animate({
					scrollTop: pos
				}, 'slow');
			}
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		initColor: function (color) {
			methods.clearHex();

			$(PSID).find('.PS-color').css('background-color', color);
			var rgba = methods.getRGBA($(PSID).find('.PS-color').css('background-color'));

			if (regEx['hslType'].exec(color) != null) {
				var hsla = color.replace(/hsl\(|hsla\(|\)|\s|%/gi, '').split(',');
				if (regEx['hsl'].exec(color) != null) {
					hsla[3] = 1;
				}
			} else {
				var hsla = methods.RGB2HSL(rgba[0], rgba[1], rgba[2], rgba[3]);
			}

			var hex = methods.RGB2Hex(rgba[0], rgba[1], rgba[2]);
			$(PSID).find('.PS-display').css('background-color', 'hsla(' + hsla[0] + ', 100%, 50%, 1)');
			$(PSID).find('.PS-slide-s').css('background-color', 'hsl(' + hsla[0] + ', 100%, 50%)');
			$(PSID).find('.PS-slide-l').css('background-color', 'hsl(' + hsla[0] + ', 100%, 50%)');
			$(PSID).find('.PS-slide-a').css('background-color', 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)');
			var top = ((hsla[2] - 100) * -1) - (pointer_width / PSdOne);
			var left = hsla[1] - (pointer_width / PSdOne);
			$(PSID).find('.PS-pointer').css({
				'top': top + '%',
				'left': left + '%'
			});
			xpointer = hsla[1];
			ypointer = hsla[2];
			$(PSID).find('.PS-slide-h').slider('value', hsla[0]).children('a').text(hsla[0] + '?');
			$(PSID).find('.PS-slide-s').slider('value', hsla[1]).children('a').text(hsla[1] + '%');
			$(PSID).find('.PS-slide-l').slider('value', hsla[2]).children('a').text(hsla[2] + '%');
			$(PSID).find('.PS-slide-a').slider('value', hsla[3]).children('a').text(hsla[3]);
			$(PSID).find('.PS-slide-r').slider('value', rgba[0]).children('a').text(rgba[0]);
			$(PSID).find('.PS-slide-g').slider('value', rgba[1]).children('a').text(rgba[1]);
			$(PSID).find('.PS-slide-b').slider('value', rgba[2]).children('a').text(rgba[2]);
			$(PSID).find('.PS-slide-f').slider('value', $(PSID).data('variationLevel')).children('a').text($(PSID).data('variationLevel'));
			$(PSID).find('.PS-hex').val(hex[1]);
			$(PSID).find('.PS-hsla').val('hsla(' + hsla[0] + ',' + space + hsla[1] + '%,' + space + hsla[2] + '%,' + space + hsla[3] + ')');
			$(PSID).find('.PS-rgba').val('rgba(' + rgba[0] + ',' + space + rgba[1] + ',' + space + rgba[2] + ',' + space + hsla[3] + ')');
			if ($(PSID).data('history')) {
				$(PSID).find('.PS-history').html('');
				jQuery.each($(PSID).data('history'), function () {
					$(PSID).find('.PS-history').append('<div title="' + this + '" style="background-color: ' + this + ';" class="PS-history-item"></div>');
				});
			}
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		getPosition: function (e) {
			var st = $(window).scrollTop();
			var sl = $(window).scrollLeft();
			xpointer = e.clientX - $(PSID).find('.PS-display').offset().left + sl;
			ypointer = e.clientY - $(PSID).find('.PS-display').offset().top + st;
			methods.setHSLcol();
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		clearHex: function () {
			if (!$(PSID).find('.PS-namedColors').is(':hidden')) {
				$(PSID).find('.PS-getHex').click();
			}
			$(PSID).find('.PS-color').html('');
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		resetSlide: function () {
			$(PSID).fadeOut('slow');
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		setID: function (id) {
			for (var i = 0; i < 8; i++) {
				id = id + Math.floor(Math.random() * 16).toString(16);
			}
			return id;
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		randomColor: function () {
			var tmp = [];
			for (i = 0; i < 3; i++) {
				tmp.push(Math.round(0 + (Math.random() * (255 - 0))));
			}
			return 'rgba(' + tmp[0] + ',' + tmp[1] + ',' + tmp[2] + ',1)';
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		setHSLcol: function () {
			methods.clearHex();
			$(PSID).find('.PS-pointer').css({
				'top': (ypointer - pointer_width - 1) + 'px',
				'left': (xpointer - pointer_width - 1) + 'px'
			});
			var s = (xpointer / PSdOne);
			var l = ((ypointer - $(PSID).find('.PS-display').height()) * -1) / PSdOne;
			s = Math.round(s);
			l = Math.round(l);
			if (s < 0) {
				s = 0;
			}
			if (l < 0) {
				l = 0;
			}
			if (s > 100) {
				s = 100;
			}
			if (l > 100) {
				l = 100;
			}
			h = $(PSID).find('.PS-slide-h').slider('value');
			a = $(PSID).find('.PS-slide-a').slider('value');
			$(PSID).find('.PS-slide-s').slider('value', s).children('a').text(s + '%');
			$(PSID).find('.PS-slide-l').slider('value', l).children('a').text(l + '%');
			$(PSID).find('.PS-slide-a').css('background-color', 'hsl(' + h + ', ' + s + '%, ' + l + '%)');
			var a = $(PSID).find('.PS-slide-a').slider('value');
			$(PSID).find('.PS-color').css('background-color', 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + a + ')');
			var rgba = methods.getRGBA($(PSID).find('.PS-color').css('background-color'));
			$(PSID).find('.PS-slide-r').slider('value', rgba[0]).children('a').text(rgba[0]);
			$(PSID).find('.PS-slide-g').slider('value', rgba[1]).children('a').text(rgba[1]);
			$(PSID).find('.PS-slide-b').slider('value', rgba[2]).children('a').text(rgba[2]);
			var hex = methods.RGB2Hex(rgba[0], rgba[1], rgba[2]);
			$(PSID).find('.PS-hsla').val('hsla(' + h + ',' + space + s + '%,' + space + l + '%,' + space + a + ')');
			$(PSID).find('.PS-rgba').val('rgba(' + rgba[0] + ',' + space + rgba[1] + ',' + space + rgba[2] + ',' + space + a + ')');
			$('.PS-hex').val(hex[1]);
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		setSlideHSL: function () {
			methods.clearHex();
			var h = $(PSID).find('.PS-slide-h').slider('value');
			var s = $(PSID).find('.PS-slide-s').slider('value');
			var l = $(PSID).find('.PS-slide-l').slider('value');
			var a = $(PSID).find('.PS-slide-a').slider('value');
			$(PSID).find('.PS-slide-s').css('background-color', 'hsl(' + h + ', 100%, 50%)');
			$(PSID).find('.PS-slide-l').css('background-color', 'hsl(' + h + ', 100%, 50%)');
			$(PSID).find('.PS-slide-a').css('background-color', 'hsl(' + h + ', ' + s + '%, ' + l + '%)');
			$(PSID).find('.PS-display').css('background-color', 'hsla(' + h + ', 100%, 50%, 1)');
			$(PSID).find('.PS-color').css('background-color', 'hsla(' + h + ', ' + s + '%, ' + l + '%, ' + a + ')');
			var rgba = methods.getRGBA($(PSID).find('.PS-color').css('background-color'));
			$(PSID).find('.PS-slide-r').slider('value', rgba[0]).children('a').text(rgba[0]);
			$(PSID).find('.PS-slide-g').slider('value', rgba[1]).children('a').text(rgba[1]);
			$(PSID).find('.PS-slide-b').slider('value', rgba[2]).children('a').text(rgba[2]);
			var hex = methods.RGB2Hex(rgba[0], rgba[1], rgba[2]);
			$(PSID).find('.PS-hex').val(hex[1]);
			$(PSID).find('.PS-hsla').val('hsla(' + h + ',' + space + s + '%,' + space + l + '%,' + space + a + ')');
			$(PSID).find('.PS-rgba').val('rgba(' + rgba[0] + ',' + space + rgba[1] + ',' + space + rgba[2] + ',' + space + a + ')');
			methods.setPointer(s, l);
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		setSlideRGB: function () {
			methods.clearHex();
			var r = $(PSID).find('.PS-slide-r').slider('value');
			var g = $(PSID).find('.PS-slide-g').slider('value');
			var b = $(PSID).find('.PS-slide-b').slider('value');
			var a = $(PSID).find('.PS-slide-a').slider('value');
			$(PSID).find('.PS-color').css('background-color', 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')');
			var hsla = methods.RGB2HSL(r, g, b, a);
			var h = hsla[0];
			var s = hsla[1];
			var l = hsla[2];
			$(PSID).find('.PS-slide-s').css('background-color', 'hsl(' + h + ', 100%, 50%)');
			$(PSID).find('.PS-slide-l').css('background-color', 'hsl(' + h + ', 100%, 50%)');
			$(PSID).find('.PS-slide-a').css('background-color', 'hsl(' + h + ', ' + s + '%, ' + l + '%)');
			$(PSID).find('.PS-display').css('background-color', 'hsla(' + h + ', 100%, 50%, 1)');
			$(PSID).find('.PS-slide-h').slider('value', h).children('a').text(h + '?');
			$(PSID).find('.PS-slide-s').slider('value', s).children('a').text(s + '%');
			$(PSID).find('.PS-slide-l').slider('value', l).children('a').text(l + '%');
			var hex = methods.RGB2Hex(r, g, b);
			$(PSID).find('.PS-hex').val(hex[1]);
			$(PSID).find('.PS-hsla').val('hsla(' + h + ',' + space + s + '%,' + space + l + '%,' + space + a + ')');
			$(PSID).find('.PS-rgba').val('rgba(' + r + ',' + space + g + ',' + space + b + ',' + space + a + ')');
			methods.setPointer(s, l);
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		setSlideHex: function () {
			if ($(PSID).data('paletteOnly') != true && $(PSID).data('namedColorsOnly') != true) {
				methods.clearHex();
				var hex = $(PSID).find('.PS-hex').val();
				var rgb = methods.Hex2RGB(hex);
				var r = rgb[0];
				var g = rgb[1];
				var b = rgb[2];
				var a = $(PSID).find('.PS-slide-a').slider('value');
				$(PSID).find('.PS-slide-r').slider('value', r).children('a').text(r);
				$(PSID).find('.PS-slide-g').slider('value', g).children('a').text(g);
				$(PSID).find('.PS-slide-b').slider('value', b).children('a').text(b);
				$(PSID).find('.PS-color').css('background-color', 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')');
				var hsla = methods.RGB2HSL(r, g, b, a);
				var h = hsla[0];
				var s = hsla[1];
				var l = hsla[2];
				$(PSID).find('.PS-slide-s').css('background-color', 'hsl(' + h + ', 100%, 50%)');
				$(PSID).find('.PS-slide-l').css('background-color', 'hsl(' + h + ', 100%, 50%)');
				$(PSID).find('.PS-slide-a').css('background-color', 'hsl(' + h + ', ' + s + '%, ' + l + '%)');
				$(PSID).find('.PS-display').css('background-color', 'hsla(' + h + ', 100%, 50%, 1)');
				$(PSID).find('.PS-slide-h').slider('value', h).children('a').text(h + '?');
				$(PSID).find('.PS-slide-s').slider('value', s).children('a').text(s + '%');
				$(PSID).find('.PS-slide-l').slider('value', l).children('a').text(l + '%');
				$(PSID).find('.PS-hsla').val('hsla(' + h + ',' + space + s + '%,' + space + l + '%,' + space + a + ')');
				$(PSID).find('.PS-rgba').val('rgba(' + r + ',' + space + g + ',' + space + b + ',' + space + a + ')');
				methods.setPointer(s, l);
			}
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		setPointer: function (s, l) {
			var top = ((l - 100) * -1) - (pointer_width / PSdOne);
			var left = s - (pointer_width / PSdOne);
			$(PSID).find('.PS-pointer').css({
				'top': top + '%',
				'left': left + '%'
			});
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		getRGBA: function (rgb_str) {
			if (rgb_str.lastIndexOf('#') > -1) {
				var rgb = methods.Hex2RGB(rgb_str);
				var a = 1;
				return rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + a;
			} else if (rgb_str.lastIndexOf('rgb') > -1) {
				rgba = rgb_str.replace(/rgb\(|rgba\(|\)|\s/gi, '').split(',');
				var r = rgba[0];
				var g = rgba[1];
				var b = rgba[2];
				var a = rgba[3];
				if (a == undefined) {
					a = 1;
				}
				return [r, g, b, a];
			} else {
				return [0, 0, 0, 0];
			}
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		RGB2Hex: function (r, g, b) {
			var hex0 = methods.GetHex(r) + methods.GetHex(g) + methods.GetHex(b);
			var hex1 = '#' + hex0;
			return [hex0, hex1];
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		GetHex: function (n) {
			if ($(PSID).data('hex2LowerCase') == true) {
				var hex = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');
			} else {
				var hex = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F');
			}
			var h = Math.floor(n / 16);
			var l = n - h * 16;
			return hex[h] + hex[l];
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		Hex2RGB: function (hex) {
			if (hex.lastIndexOf('#') > -1) {
				hex = hex.replace(/#/, '0x');
			} else {
				hex = '0x' + hex;
			}
			var r = hex >> 16;
			var g = (hex & 0x00FF00) >> 8;
			var b = hex & 0x0000FF;
			return [r, g, b];
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		RGB2HSL: function (r, g, b, a) {
			r /= 255, g /= 255, b /= 255;
			var max = Math.max(r, g, b),
				min = Math.min(r, g, b);
			var h, s, l = (max + min) / 2;
			if (max == min) {
				h = s = 0;
			} else {
				var dif = max - min;
				s = l > 0.5 ? dif / (2 - max - min) : dif / (max + min);
				switch (max) {
				case r:
					h = (g - b) / dif + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / dif + 2;
					break;
				case b:
					h = (r - g) / dif + 4;
					break;
				}
				h /= 6;
			}
			h = Math.round(h * 360);
			s = Math.round(s * 100);
			l = Math.round(l * 100);
			if (a) {
				return [h, s, l, a];
			} else {
				return [h, s, l, a];
			}
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		HSL2RGB: function (h, s, l, a) {
			var m1, m2, hue, r, g, b;
			s /= 100;
			l /= 100;
			if (s == 0) {
				r = g = b = Math.round((l * 255));
			} else {
				if (l <= 0.5) {
					m2 = l * (s + 1);
				} else m2 = (l + s) - (l * s);
				m1 = l * 2 - m2;
				hue = h / 360;
				r = Math.round(methods.HueToRgb(m1, m2, hue + 1 / 3));
				g = Math.round(methods.HueToRgb(m1, m2, hue));
				b = Math.round(methods.HueToRgb(m1, m2, hue - 1 / 3));
			}
			h = Math.round(h * 360);
			s = Math.round(s * 100);
			l = Math.round(l * 100);
			if (a) {
				return [r, g, b, a];
			} else {
				return [r, g, b];
			}
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		HueToRgb: function (m1, m2, hue) {
			var v;
			if (hue < 0) hue += 1;
			else if (hue > 1) hue -= 1;
			if (6 * hue < 1) v = m1 + (m2 - m1) * hue * 6;
			else if (2 * hue < 1) v = m2;
			else if (3 * hue < 2) v = m1 + (m2 - m1) * (2 / 3 - hue) * 6;
			else v = m1;
			return 255 * v;
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		AnalogHue: function (r, g, b, a, level, limit) {
			var stack = [];
			var count = 0;
			var steps = ((360 / 100) * level);
			var hsla = methods.RGB2HSL(r, g, b, a);
			var h = hsla[0];
			var s = hsla[1];
			var l = hsla[2];
			var a = hsla[3];
			while (count < limit) {
				h = Math.round(h + steps);
				if (h > 360) {
					h = h - 360;
				}
				count++;
				stack.push([h, s, l, a]);
			}
			stack.reverse();
			count = 0;
			h = hsla[0];
			stack.push([h, s, l, a]);
			while (count < limit) {
				h = Math.round(h - steps);
				if (h < 0) {
					h = h + 360;
				}
				count++;
				stack.push([h, s, l, a]);
			}
			stack.reverse();
			return stack;
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		AnalogSat: function (r, g, b, a, level, limit) {
			var stack = [];
			var count = 0;
			var steps = (100 / 100) * level;
			var hsla = methods.RGB2HSL(r, g, b, a);
			var h = hsla[0];
			var s = hsla[1];
			var l = hsla[2];
			var a = hsla[3];
			while (count < limit) {
				if (Math.round(s + steps) <= 100) {
					s = Math.round(s + steps);
				}
				count++;
				stack.push([h, s, l, a]);
			}
			stack.reverse();
			var count = 0;
			var s = hsla[1];
			stack.push([h, s, l, a]);
			while (count < limit) {
				if (Math.round(s - steps) >= 0) {
					s = Math.round(s - steps);
				}
				count++;
				stack.push([h, s, l, a]);
			}
			stack.reverse();
			return stack;
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		AnalogLight: function (r, g, b, a, level, limit) {
			var stack = [];
			var count = 0;
			var steps = (100 / 100) * level;
			var hsla = methods.RGB2HSL(r, g, b, a);
			var h = hsla[0];
			var s = hsla[1];
			var l = hsla[2];
			var a = hsla[3];
			while (count < limit) {
				if (Math.round(l + steps) <= 100) {
					l = Math.round(l + steps);
				}
				count++;
				stack.push([h, s, l, a]);
			}
			stack.reverse();
			var count = 0;
			var l = hsla[2];
			stack.push([h, s, l, a]);
			while (count < limit) {
				if (Math.round(l - steps) >= 0) {
					l = Math.round(l - steps);
				}
				count++;
				stack.push([h, s, l, a]);
			}
			stack.reverse();
			return stack;
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		AnalogRed: function (r, g, b, a, level, limit) {
			var stack = [];
			var count = 0;
			var rOrig = r;
			var steps = ((255 / 100) * level);
			while (count < limit) {
				if (Math.round(parseFloat(r) + parseFloat(steps)) <= 255) {
					r = Math.round(parseFloat(r) + parseFloat(steps));
				}
				count++;
				stack.push([r, g, b, a]);
			}
			stack.reverse();
			var count = 0;
			var r = rOrig;
			stack.push([r, g, b, a]);
			while (count < limit) {
				if (Math.round(parseFloat(r) - parseFloat(steps)) >= 0) {
					r = Math.round(parseFloat(r) - parseFloat(steps));
				}
				count++;
				stack.push([r, g, b, a]);
			}
			stack.reverse();
			return stack;
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		AnalogGreen: function (r, g, b, a, level, limit) {
			var stack = [];
			var count = 0;
			var gOrig = g;
			var steps = ((255 / 100) * level);
			while (count < limit) {
				if (Math.round(parseFloat(g) + parseFloat(steps)) <= 255) {
					g = Math.round(parseFloat(g) + parseFloat(steps));
				}
				count++;
				stack.push([r, g, b, a]);
			}
			stack.reverse();
			var count = 0;
			var g = gOrig;
			stack.push([r, g, b, a]);
			while (count < limit) {
				if (Math.round(parseFloat(g) - parseFloat(steps)) >= 0) {
					g = Math.round(parseFloat(g) - parseFloat(steps));
				}
				count++;
				stack.push([r, g, b, a]);
			}
			stack.reverse();
			return stack;
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		AnalogBlue: function (r, g, b, a, level, limit) {
			var stack = [];
			var count = 0;
			var bOrig = b;
			var steps = ((255 / 100) * level);
			while (count < limit) {
				if (Math.round(parseFloat(b) + parseFloat(steps)) <= 255) {
					b = Math.round(parseFloat(b) + parseFloat(steps));
				}
				count++;
				stack.push([r, g, b, a]);
			}
			stack.reverse();
			var count = 0;
			var b = bOrig;
			stack.push([r, g, b, a]);
			while (count < limit) {
				if (Math.round(parseFloat(b) - parseFloat(steps)) >= 0) {
					b = Math.round(parseFloat(b) - parseFloat(steps));
				}
				count++;
				stack.push([r, g, b, a]);
			}
			stack.reverse();
			return stack;
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		getTriadic: function (r, g, b, a) {
			var hsla = methods.RGB2HSL(r, g, b, a);
			var hPlus = hsla[0] + 120;
			if (hPlus > 360) {
				hPlus = hPlus - 360;
			}
			if (hPlus < 0) {
				hPlus = hPlus + 360;
			}
			if (hPlus == 360) {
				hPlus = 0;
			}
			var hMinus = hsla[0] - 120;
			if (hMinus > 360) {
				hMinus = hMinus - 360;
			}
			if (hMinus < 0) {
				hMinus = hMinus + 360;
			}
			if (hMinus == 360) {
				hMinus = 0;
			}
			return [hMinus, hPlus, hsla[0], hsla[1], hsla[2], hsla[3]];
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		getSquare: function (r, g, b, a) {
			var hsla = methods.RGB2HSL(r, g, b, a);
			var hSquare = [];
			for (i = 90; i <= 270; i += 90) {
				var tmp = hsla[0] + i;
				if (tmp > 360) {
					tmp = tmp - 360;
				}
				if (tmp < 0) {
					tmp = tmp + 360;
				}
				if (tmp == 360) {
					tmp = 0;
				}
				hSquare.push(tmp);
			}
			return [hSquare[0], hSquare[1], hSquare[2], hsla[0], hsla[1], hsla[2], hsla[3]];
		},
		// Method //////////////////////////////////////////////////////////////////////////////////
		getSplitComplements: function (r, g, b, a) {
			var hsla = methods.RGB2HSL(r, g, b, a);
			var com = hsla[0] + 180;
			if (com > 360) {
				com = com - 360;
			}
			if (com < 0) {
				com = com + 360;
			}
			if (com == 360) {
				com = 0;
			}
			var splitRight = hsla[0] + 150;
			if (splitRight > 360) {
				splitRight = splitRight - 360;
			}
			if (splitRight < 0) {
				splitRight = splitRight + 360;
			}
			if (splitRight == 360) {
				splitRight = 0;
			}
			var splitLeft = hsla[0] - 150;
			if (splitLeft > 360) {
				splitLeft = splitLeft - 360;
			}
			if (splitLeft < 0) {
				splitLeft = splitLeft + 360;
			}
			if (splitLeft == 360) {
				splitLeft = 0;
			}
			return [splitLeft, splitRight, com, hsla[0], hsla[1], hsla[2], hsla[3]];
		}
	};
	// Method calling logic ////////////////////////////////////////////////////////////////////////
	$.fn.PickSlide = function (method) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.PickSlide');
		}
		init();
	};
})(jQuery);
