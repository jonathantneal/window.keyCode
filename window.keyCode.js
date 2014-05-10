(function (keyCode, UNDEFINED) {
	[].concat(
		// 0 - 7
		new Array(8),
		// 8 - 9
		'back|backspace tab'.split(' '),
		// 10 - 12
		UNDEFINED, UNDEFINED, UNDEFINED,
		// 13
		'enter|return',
		// 14 - 15
		UNDEFINED, UNDEFINED,
		// 16 - 20
		'shift control|ctrl alt break|pause caps|capslock'.split(' '),
		// 21 - 26
		new Array(6),
		// 27
		'esc|escape',
		// 28 - 31
		UNDEFINED, UNDEFINED, UNDEFINED, UNDEFINED,
		// 32 - 40
		'space|spacebar pageup pagedown end home left up right down'.split(' '),
		// 41- 44
		UNDEFINED, UNDEFINED, UNDEFINED, UNDEFINED,
		// 45 - 46
		'insert delete'.split(' '),
		// 47
		UNDEFINED,
		// 48 - 57
		'0123456789'.split(''),
		// 58
		UNDEFINED,
		// 59
		'colon|semicolon',
		// 60
		UNDEFINED,
		// 61
		'add|equal|plus',
		// 62 - 64
		UNDEFINED, UNDEFINED, UNDEFINED,
		// 65 - 90
		'abcdefghijklmnopqrstuvwxyz'.split(''),
		// 91 - 93
		'meta|windows|command meta|windows menu|command'.split(' '),
		// 94 - 95
		UNDEFINED, UNDEFINED,
		// 96 - 105
		'0123456789'.split(''),
		// 106 - 123
		'multiply|times add|plus  dash|minus|subtract dot|period divide|slash f1 f2 f3 f4 f5 f6 f7 f8 f9 f10 f11 f12'.split(' '),
		// 124 - 185
		new Array(62),
		// 186 - 192
		'colon|semicolon add|equal|plus comma|openangle dash|minus|subtract|underscore dot|period|closeangle divide|slash|question|questionmark tick|backtick|tilda'.split(' '),
		// 193 - 218
		new Array(26),
		// 219 - 222
		'openbracket backslash|pipe closebracket quote'.split(' ')
	).forEach(function (symbol, index) {
		if (symbol !== undefined) keyCode[index] = symbol.split('|');
	});
})(window.keyCode = {});
