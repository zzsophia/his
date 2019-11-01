<template>

    <div style="margin-top: 15px;">
        <div>
            <p>患者信息查询</p>
            <el-row>
                <el-col :span="4">
                    <div class="grid-content bg-purple"><span style="color: red">*</span> 病 例 号：
                        <el-input v-model="input" placeholder="病例号" class="input-with"></el-input>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <el-button type="primary" icon="el-icon-search" @click="doLogin">搜索</el-button>
                    </div>
                </el-col>
            </el-row>
            <p>患者信息确认</p>
            <el-row>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <span>姓   名：</span>
                        <el-input
                                placeholder="姓名"
                                v-model="input"
                                :readonly="true"
                                class="input-with1">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <span>身份证号：</span>
                        <el-input
                                placeholder="身份证号"
                                v-model="input"
                                :readonly="true"
                                class="input-with1">
                        </el-input>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <span class="jia">家庭住址：</span>
                        <el-input
                                placeholder="家庭住址"
                                v-model="input"
                                :readonly="true"
                                class="input-with2">
                        </el-input>
                    </div>
                </el-col>
            </el-row>
            <div class="guahao">
                <p>患者交费信息</p>
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            prop="case_number"
                            label="病历号"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="invoice "
                            label="发票号"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="price"
                            label="金额"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="state"
                            label="发票状态"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="看诊日期"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="operation"
                            label="操作"
                    >
                    </el-table-column>
                </el-table>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Refund",
        data() {
            return {
                input: '',
            }
        },
        methods: {
            doLogin: function () {
                if (this.input == '') {
                    this.$message('病历号不能为空!');
                }

            }
        },
    }
</script>

<style scoped>
    .input-with {
        width: 150px;

    }

    .input-with1 {
        width: 150px;
    }

    .input-with2 {
        width: 500px;
    }

    .bg-purple {
        background: white;
    }

    .guahao {
        width: 98%;
        margin-left: 30px;

    }
    p{
        display: flex;
    }


</style>