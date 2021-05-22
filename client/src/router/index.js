"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var Home_vue_1 = require("../views/Home.vue");
var PlayersTable_vue_1 = require("../components/PlayersTable.vue");
var routes = [
    { path: '/', redirect: '/home' },
    {
        path: '/home',
        component: Home_vue_1["default"],
        children: [
            {
                path: '/top',
                component: PlayersTable_vue_1["default"]
            },
            {
                path: '/full',
                component: PlayersTable_vue_1["default"]
            }
            // { path: '', component: PlayersTable, alias: ['/top', '/full'] }
        ]
    }
];
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHistory(process.env.BASE_URL),
    routes: routes
});
exports["default"] = router;
