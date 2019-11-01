<template>
    <el-container>
        <el-header style="background-color: #409EFF; color: white; font-size: 20px; font-weight: 800;">
            <span>东软云医院 HIS 系统</span>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-row class="tac">
                    <el-col :span="24">
                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose">
                            <el-submenu index="1">
                                <template slot="title">
                                    <span>挂号收费</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="1-1" @click="dolink">现场挂号</el-menu-item>
                                    <el-menu-item index="1-2" @click="dolink2">退号</el-menu-item>
                                    <el-menu-item index="1-3" @click="dolink3">收费</el-menu-item>
                                    <el-menu-item index="1-4" @click="dolink4">退费</el-menu-item>
                                    <el-menu-item index="1-5" @click="dolink5">发票补打</el-menu-item>
                                    <el-menu-item index="1-6" @click="dolink6">发票重打</el-menu-item>
                                    <el-menu-item index="1-7" @click="dolink7">患者费用查询</el-menu-item>
                                    <el-menu-item index="1-8" @click="dolink8">日结</el-menu-item>
                                    <el-menu-item index="1-9" @click="dolink9">日结查询</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                    <el-col :span="24">
                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose">
                            <el-submenu index="1">
                                <template slot="title">
                                    <span>门诊医生</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="2-1">门诊病历</el-menu-item>
                                    <el-menu-item index="2-2">医技模板管理</el-menu-item>
                                    <el-menu-item index="2-3">西药处方模板</el-menu-item>
                                    <el-menu-item index="2-4">中药处方模板</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                    <el-col :span="24">
                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose">
                            <el-submenu index="1">
                                <template slot="title">
                                    <span>医技处置*</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="3-1" @click="dolink9">患者检验*</el-menu-item>
                                    <el-menu-item index="3-2">患者检查*</el-menu-item>
                                    <el-menu-item index="3-3">患者处置*</el-menu-item>
                                    <el-menu-item index="3-4">医技管理*</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                    <el-col :span="24">
                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose">
                            <el-submenu index="1">
                                <template slot="title">
                                    <span>药房管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="4-1">药房发药</el-menu-item>
                                    <el-menu-item index="4-2">药房退药</el-menu-item>
                                    <el-menu-item index="4-3">药品管理</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                    <el-col :span="24">
                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose">
                            <el-submenu index="1">
                                <template slot="title">
                                    <span>财务管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="5-1" @click="dolink_finance_ows">门诊医生工作量统计*</el-menu-item>
                                    <el-menu-item index="5-2" @click="dolink_finance_bdws">开单科室工作量统计*</el-menu-item>
                                    <el-menu-item index="5-3" @click="dolink_finance_edws">执行科室工作量统计**</el-menu-item>
                                    <el-menu-item index="5-4" @click="dolink_finance_cam">费用科目管理</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                    <el-col :span="24">
                        <el-menu
                                default-active="2"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose">
                            <el-submenu index="1">
                                <template slot="title">
                                    <span>系统信息</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="6-1">常数类别管理</el-menu-item>
                                    <el-menu-item index="6-2">科室管理</el-menu-item>
                                    <el-menu-item index="6-3">用户管理</el-menu-item>
                                    <el-menu-item index="6-4">挂号级别管理</el-menu-item>
                                    <el-menu-item index="6-5">结算类别管理</el-menu-item>
                                    <el-menu-item index="6-6">诊断目录管理</el-menu-item>
                                    <el-menu-item index="6-7">非药品收费项目管理</el-menu-item>
                                    <el-menu-item index="6-8">医生排班管理</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            dolink: function () {
                this.$router.push('/about')
            },
            dolink2: function () {
                this.$router.push('/withdraw_number')
            },
            dolink3: function () {
                this.$router.push('/charge')
            },
            dolink4: function () {
                this.$router.push('/refund')
            },
            dolink5: function () {
                this.$router.push('/invoice_replacement')
            },
            dolink6: function () {
                this.$router.push('/invoice_replay')
            },
            dolink7: function () {
                this.$router.push('/patient_fee_inquiry')
            },
            dolink8: function () {
                this.$router.push('/about')
            },
            dolink9: function () {
                this.$router.push('/patient_examination')
            },
            dolink_finance_ows: function () {
                this.$router.push('/ows')
            },
            dolink_finance_bdws: function () {
                this.$router.push('/bdws')
            },
            dolink_finance_edws: function () {
                this.$router.push('/edws')
            },
            dolink_finance_cam: function () {
                this.$router.push('/cam')
            },
        }

    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    /deep/ .el-main[data-v-fae5bece] {
        background-color: white;
        line-height: 20px;
    }

    /deep/ .el-submenu__title {
        background-color: #D3DCE6;
        text-align: left;
    }

    /deep/ .el-header[data-v-fae5bece], .el-footer[data-v-fae5bece] {
        text-align: left;
    }

    /deep/ .el-aside[data-v-fae5bece] {
        background-color: white;
    }

</style>