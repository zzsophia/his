<template>
    <div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <div class="el-input el-input--mini" data-v-49055fb4="">
                    <el-input  type="text" v-model="input" placeholder="请输入登录名或姓名" autocomplete="off"></el-input>
                </div>
            </div>
        </div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <el-button class="el-button el-button--primary el-button--mini"
                           style="margin-left: 10px;" data-v-49055fb4="" type="primary" icon="el-icon-view">查询用户</el-button>
            </div>
        </div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <el-button class="el-button el-button--primary el-button--mini"
                           style="margin-left: 10px;" type="button" data-v-49055fb4="" @click="dialogFormVisible1 = true">
                    <i class="el-icon-edit"></i><span>新增用户</span></el-button>
            </div>
        </div>
        <div>
            <el-dialog title="新增用户" :visible.sync="dialogFormVisible1">
                <el-form :model="form1">
                    <el-form-item>
                        登录名：<el-input v-model="form1.code" autocomplete="off" placeholder="登录名" style="width: 150px"></el-input>
                        密码：<el-input v-model="form1.name" autocomplete="off" placeholder="密码" style="width: 150px"></el-input>
                    </el-form-item>
                    <el-form-item>
                        真实姓名：<el-input v-model="form1.code" autocomplete="off" placeholder="登录名" style="width: 150px"></el-input>
                        所在科室：<div class="el-select el-select--mini" style="width: 110px;">
                        <el-select style="width:100px;" v-model="value" readonly="readonly" placeholder="科室分类" autocomplete="off">
                            <el-option
                                    v-for="item in options1"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    </el-form-item>
                    <el-form-item>
                        用户类别：<div class="el-select el-select--mini" style="width: 110px;">
                        <el-select style="width:100px;" v-model="value" readonly="readonly" placeholder="科室分类" autocomplete="off">
                            <el-option
                                    v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        </div>
                        医生职称：<div class="el-select el-select--mini" style="width: 110px;">
                        <el-select style="width:100px;" v-model="value" readonly="readonly" placeholder="科室类别" autocomplete="off">
                            <el-option
                                    v-for="item in options3"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        挂号类别：<div class="el-select el-select--mini" style="width: 110px;">
                        <el-select style="width:100px;" v-model="value" readonly="readonly" placeholder="科室分类" autocomplete="off">
                            <el-option
                                    v-for="item in options4"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                        是否参与排班：
                        <el-radio-group v-model="radio">
                            <el-radio :label="3">是</el-radio>
                            <el-radio :label="6">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible1 = false">保存</el-button>
                    <el-button type="primary" @click="dialogFormVisible1 = false">清空</el-button>
                </div>
            </el-dialog>
        </div>
        <div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="登录名"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="真实姓名"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="用户类别"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="医生职称"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="所在科室"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="挂号级别"
                        width="100">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserManagement",
        data() {
            return {
                dialogFormVisible1: false,
                form1: {
                    code:'',
                    name: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                },
                options1: [{
                    value: '选项1',
                    label: 'f'
                }, {
                    value: '选项2',
                    label: 'ff'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                options2: [{
                    value: '选项1',
                    label: 'f'
                }, {
                    value: '选项2',
                    label: 'ff'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                options3: [{
                    value: '选项1',
                    label: 'f'
                }, {
                    value: '选项2',
                    label: 'ff'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                options4: [{
                    value: '选项1',
                    label: 'f'
                }, {
                    value: '选项2',
                    label: 'ff'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                radio: '',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            toggledelete(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            }
        }
    }
</script>

<style scoped>

</style>