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
                    <div class="grid-content bg-purple"><span>开始时间：</span>
                        <el-date-picker
                                v-model="value1"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple"><span>结束时间：</span>
                        <el-date-picker
                                v-model="value2"
                                type="date"
                                placeholder="选择日期">
                        </el-date-picker>
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
                <p>患者发票信息</p>
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="case_number"
                            label="病历号"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="consumption_name"
                            label="消费名称"
                            width="220">
                    </el-table-column>
                    <el-table-column
                            prop="price"
                            label="单价"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="number"
                            label="数量"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="日期"
                            width="120">
                    </el-table-column>
                </el-table>
                <div>
                    <span>总笔数：0</span>
                    <span>总金额：0</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Patient_fee_inquiry",

        data() {
            return {
                input: '',
                value1: '',
                value2: '',
                tableData: [{
                    case_number: '',
                    name: '',
                    consumption_name: '',
                    price: '',
                    number: '',
                    date: ''
                }, {
                    case_number: '',
                    name: '',
                    consumption_name: '',
                    price: '',
                    number: '',
                    date: '',

                }]
            };

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