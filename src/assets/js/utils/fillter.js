import Vue from 'vue'
export default (function() {
	// 订单状态类型返回
	Vue.filter('orderStatus', function(value) {
		let string = ''
		switch (value) {
			case 1:
				string = '待付款'
				break
			case 2:
				string = '待发货'
				break
			case 3:
				string = '待收货'
                break
            case 4:
				string = '已完成'
                break
            case 5:
				string = '已关闭'
                break
            case 6:
				string = '待退款'
                break
            case 7:
				string = '已退款'
				break
		}
		return string
	})
})()