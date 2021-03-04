import http from './index'

export default {
    // 获取营销首页数据 =============================================================
    market() {
        return http.get('/market/home')
    },

    // 商品折扣表格数据 =============================================================
    table() {
        return http.get('/market/data')
    },
    // 添加商品折扣表数据 =============================================================
    addTable({ name, manner, startDate, status }) {
        return http.post('/market/table', {
            name,
            manner,
            startDate,
            status
        })
    },
    // 删除商品折扣表数据 =============================================================
    delData({ _id }) {
        return http.post('/market/del', {
            _id
        })
    },
    //获取订单促销表格数据===========================================================
    getOrder() {
        return http.get('/market/getOrder')
    },
    //新增订单促销表格数据===========================================================
    addPromotion({ number, name, startDate, status }) {
        return http.post('/market/order', {
            number,
            name,
            startDate,
            status
        })
    }
}