export default {
  orderQueryAll: {
    url: 'order/queryAll',
    methods: 'POST'
  },
  orderRefundOrder: {
    url: 'order/refundOrder',
    methods: 'POST'
  },
  orderAuditSales: {
    url: 'order/auditSales',
    methods: 'POST'
  },
  orderImport: {
    url: 'order/importOrder',
    methods: 'POST',
    processData: false,
  },
}
