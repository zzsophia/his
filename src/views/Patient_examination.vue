<template>
    <div class="all">
        <div class="left">
            <el-container>
                <el-header>
                    <el-input placeholder="请输入内容" v-model="input1">
                        <template slot="prepend">患者名:</template>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-header>
                <el-main>
                    <el-tabs type="border-card">
                        <el-tab-pane label="用户管理">
                            <el-tag>患者:</el-tag>
                            <el-table
                                    :data="tableData"
                                    style="width: 100%"
                                    header-cell-style="display:none"
                            >
                                <el-table-column
                                        prop="date"
                                        label="日期"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="name"
                                        label="姓名"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="address"
                                        label="地址">
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>

                    </el-tabs>
                </el-main>
            </el-container>
        </div>
        <div class="right">
            <el-row >
                <el-col :span="9"><div class="grid-content bg-purple">
                    <el-tag>检验明细信息：</el-tag></div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">
                    <el-button type="text" icon="el-icon-success">执行确认</el-button>
                </div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple">
                    <el-button type="text" icon="el-icon-success">取消执行</el-button>
                </div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple-light">
                    <el-button type="text" icon="el-icon-success">填写结果</el-button>
                </div></el-col>
            </el-row>
            <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark mingxi">
                    检验明细单

                </div>
                    <hr></el-col>
            </el-row>
            <div>
                <div>
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="活动名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-form>

                </div>

            </div>


        </div>
    </div>


</template>

<script>
    export default {
        name: "Patient_examination",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>
    .all{
        padding: 1px;
        height: 948px;
        border: 1px solid rgb(238, 238, 238);
        display: flex;
    }
    .left{
        /*float: left;*/
        height: 700px;
        width: 350px;

    }
    .el-tabs{
        width: 346px;
        height: 247px;

    }
    .el-main{
        padding: 0;
        width: 350px;
        height: 700px;
        border: 1px solid rgb(238, 238, 238);
    }

    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #eaf1f5;
    }
    .bg-purple {
        background: #eaf1f5;
    }
    .bg-purple-light {
        background: #eaf1f5;
    }
    .grid-content {
        min-height: 34px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #eaf1f5;
    }
    .right{
        width: 100%;
        text-align: left;
    }
    /deep/.el-button{
        height: 34px;
        
    }
    .mingxi{
        font-size: large;
        text-align: center;
        background-color: white;
    }





</style>