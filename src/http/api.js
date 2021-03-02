import { Table } from 'view-design'
import http from './index'

export default {
    // 获取营销首页数据 =============================================================
    market() {
        return http.get('/market/home')
    },

    // 商品折扣表格数据 =============================================================
    table() {
        return http.get('/market/data')
    }

}