import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Layout from "../views/layout/Layout.vue";

Vue.use(VueRouter);

const routes = [{
        path: "",
        component: Layout,
        children: [{
                path: "/",
                name: "Home",
                component: Home,
                meta: {
                    title: "首页",
                },
            },
            {
                path: "/marketing",
                name: "marketing",
                component: () =>
                    import ("../views/marketing/Marketing.vue"),
                meta: {
                    title: "营销",
                },
            },
            {
                path: "/addgood",
                name: "addgood",
                component: () =>
                    import ("../views/addgood/Addgood.vue"),
                meta: {
                    title: "增加商品",
                },
            }, {
                path: "/marketing/goodsDiscount",
                name: "goodsDiscount",
                component: () =>
                    import ("../views/marketing/goodsDiscount.vue"),
                meta: {
                    title: "商品折扣",
                },
            }, {
                path: "/marketing/orderPromotional",
                name: "orderPromotional",
                component: () =>
                    import ("../views/marketing/orderPromotional.vue"),
                meta: {
                    title: "订单促销",
                },
            }, {
                path: "/marketing/Coupons",
                name: "Coupons",
                component: () =>
                    import ("../views/marketing/Coupons.vue"),
                meta: {
                    title: "优惠券",
                },
            }, {
                path: "/marketing/CouponDistribution",
                name: "CouponDistribution",
                component: () =>
                    import ("../views/marketing/CouponDistribution.vue"),
                meta: {
                    title: "优惠券发放",
                },
            }, {
                path: "/marketing/ShoppingCard",
                name: "ShoppingCard",
                component: () =>
                    import ("../views/marketing/ShoppingCard.vue"),
                meta: {
                    title: "购物卡",
                },
            }, {
                path: "/marketing/UseCard",
                name: "UseCard",
                component: () =>
                    import ("../views/marketing/UseCard.vue"),
                meta: {
                    title: "购物卡使用",
                },
            }
        ],
    },

    {
        path: "/login",
        name: "login",
        component: () =>
            import ("../views/login/Login.vue"),
        meta: {
            title: "登录",
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    // let whitePath = ['/registered', '/login'];
    // let name = localStorage.getItem('name')
    // if (whitePath.includes(to.path)) {
    //     next()
    // } else {
    //     if (name) {
    //         next()
    //     } else {
    //         next('/login')
    //     }
    // }
    next()
})
export default router;