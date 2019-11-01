<template>
    <div class="max_div">
        <div class="demo-input-suffix">
            <el-row :gutter="2">
                <div class="block">
                    <el-col :span="2">
                        <div class="grid-content bg-purple-dark">
                            <span class="demonstration" style="line-height: 40px; font-size: 12px ;">统计时间从：</span>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-dark">
                            <el-date-picker
                                    v-model="value1"
                                    align="right"
                                    type="date"
                                    placeholder="选择日期"
                                    :picker-options="pickerOptions">
                            </el-date-picker>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-dark">
                            <el-time-picker
                                    arrow-control
                                    v-model="value2"
                                    :picker-options="{
      selectableRange: '00:00:00 - 23:59:59'
    }"
                                    placeholder="任意时间点">
                            </el-time-picker>
                        </div>
                    </el-col>
                    <el-col :span="1">
                        <div class="grid-content bg-purple-dark">
                            <span class="demonstration" style="line-height: 40px; font-size: 12px ;">到：</span>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-dark">
                            <el-date-picker
                                    v-model="value3"
                                    align="right"
                                    type="date"
                                    placeholder="选择日期"
                                    :picker-options="pickerOptions">
                            </el-date-picker>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-dark">
                            <el-time-picker
                                    arrow-control
                                    v-model="value4"
                                    :picker-options="{
      selectableRange: '00:00:00 - 23:59:59'
    }"
                                    placeholder="任意时间点">
                            </el-time-picker>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-dark">
                            <el-button type="primary" icon="el-icon-search">搜索</el-button>
                        </div>
                    </el-col>
                </div>
            </el-row>
        </div>
        <div class="below_div">
            <h5>执行科室工作量统计</h5>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        fixed
                        prop="date"
                        label="日期"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="医生姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="看诊人数"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="city"
                        label="发票数量"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="西药费"
                        width="300">
                </el-table-column>
                <el-table-column
                        prop="zip"
                        label="中成药"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="zip"
                        label="中草药"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="zip"
                        label="挂号费"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="zip"
                        label="诊查费"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="zip"
                        label="检查费"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="zip"
                        label="检验费"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="zip"
                        label="邮编"
                        width="120">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Edws",
        methods: {
            handleClick(row) {
                console.log(row);
            }
        },
        data() {
            return {
                value2: new Date(2016, 9, 10, 18, 40),
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }],
                value1: '',
                value2: '',
                value3: '',
                value4: '',
            };
        }
    }
</script>

<style scoped>
    .el-date-editor.el-input, .el-date-editor.el-input__inner {
        width: 100%;
    }
    .max_div {
    }

    .demo-input-suffix {
        display: flex;
        height: 50px;
    }
    .below_div{
        margin-top: 5px;
    }
    .below_div h5{
        line-height: 0;
        text-align: left;
    }

</style>