

function cloneJson(obj) {
	return JSON.parse(JSON.stringify(obj))
}

function secondJump(routers,vue){	
	let list = routers.options.routes[1].children
			let j
			for (j in list) {
				if (list[j].name==vue.$route.name){
					vue.$router.replace(list[j].children[0].path)
				}
			}
}
export default {
	cloneJson,
	secondJump
}