# window.keyCode

**window.keyCode** maps key codes to common keys.

```js
window.addEventListener('keydown', function (event) {
	console.log(keyCode[event.keyCode]); // returns an array of keys or undefined
});
```

Some keys have multiple meanings. For instance, the key code `189` might be a **dash**, **minus**, **subtract**, and is alternatively an **underscore**.

Most or all common keys should be mapped, and new keys may be added easily. The script is 1.5KB or 498B minified + gzipped.

## Alternative usage

```js
window.addEventListener('keydown', function (event) {
	var keys = keyCode[event.keyCode];

	if (keys) keys.forEach(function (key) {
		window.dispatchEvent(new CustomEvent('keydown:' + key));
	});
});

window.addEventListener('keydown:left', function (event) {
	// fires whenever the left arrow key fires a keydown 
});
```
