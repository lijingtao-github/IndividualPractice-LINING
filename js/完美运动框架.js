function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr]
	} else {
		return getComputedStyle(obj, null)[attr]
	}
}
// -------------------------------------------------------------------
function startMove(obj, json, fnEnd) {
	clearInterval(obj.timer)
	obj.timer = setInterval(function() {
		var isStop = true //当只有这个布尔值为 true的时候  才停止
		for (var attr in json) {
			if (attr == "opacity") {
				var cur = Math.round(parseFloat(getStyle(obj, attr)) * 100)
			} else {
				var cur = parseInt(getStyle(obj, attr))
			}
			var speed = (json[attr] - cur) / 5
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
			// 当所有的都到了  停止
			// 没有不到的   停止
			if (cur != json[attr]) {
				isStop = false
			}
			if (attr == "opacity") {
				obj.style.opacity = (cur + speed) / 100
				obj.style.filter = 'alpha(opacity=' + cur + speed + ');'
			} else {
				obj.style[attr] = cur + speed + "px"
			}
		}
		if (isStop) {
			clearInterval(obj.timer)
			if (fnEnd) {
				fnEnd()
			}
		}
	}, 30)
}
