<template>

    <div style="margin-top: 15px;">
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
            <p>患者挂号信息</p>
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
                        prop="id"
                        label="身份证号"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="挂号日期"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="break"
                        label="挂号午别"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="department"
                        label="看诊科室"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="看诊状态"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="operation"
                        label="操作">
                    <template slot-scope="scope">
                        <el-button
                                id="tuihao"
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)"
                                icon="el-icon-sold-out">退号
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Withdraw_number",
        data: () => ({

            input: '',
            tableData: [{
                case_number: '123',
                name: '张三',
                id: '132123',
                department: '儿科',
                date: '2019',
                break: '上午',
                state: '已挂号',

            }]

        }),
        methods: {
            doLogin: function () {
                if (this.input == '') {
                    this.$message('病历号不能为空!');
                }

            },
            handleDelete(index, row) {
                console.log(index, row);
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

    #tuihao {
        background-color: #409EFF;
        border: #409EFF;
    }
    p{
        display: flex;
    }

</style>