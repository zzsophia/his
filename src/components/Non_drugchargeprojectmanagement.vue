<template>
    <div>
        <div>
            <div class="el-col el-col-6" data-v-49055fb4="">
                <div class="grid-content bg-purple" data-v-49055fb4="">
                    <div class="el-input el-input--mini" data-v-49055fb4="">
                        <el-input  type="text" v-model="input" placeholder="请输入非药品收费项目编码或名称" autocomplete="off"></el-input>
                    </div>
                </div>
            </div>
            <div class="el-col el-col-6" data-v-49055fb4="">
                <div class="grid-content bg-purple" data-v-49055fb4="">
                    <el-button class="el-button el-button--primary el-button--mini"
                               style="margin-left: 10px;" data-v-49055fb4="" type="primary" icon="el-icon-view">查询非药品收费项目</el-button>
                </div>
            </div>
            <div class="el-col el-col-6" data-v-49055fb4="">
                <div class="grid-content bg-purple" data-v-49055fb4="">
                    <el-button class="el-button el-button--primary el-button--mini"
                               style="margin-left: 10px;" type="button" data-v-49055fb4="" @click="dialogFormVisible = true">
                        <i class="el-icon-edit"></i><span>新增非药品收费项目</span></el-button>

                    <el-dialog title="新增非药品收费项目" :visible.sync="dialogFormVisible">
                        <el-form :model="form">
                            <el-form-item>
                                项目编码：<el-input v-model="form.code" autocomplete="off" placeholder="科室编码" style="width: 150px"></el-input>
                                项目名称：<el-input v-model="form.name" autocomplete="off" placeholder="科室名称" style="width: 150px"></el-input>
                            </el-form-item>
                            <el-form-item>
                                规格：<el-input v-model="form.code" autocomplete="off" placeholder="科室编码" style="width: 150px"></el-input>
                                单价：<el-input v-model="form.name" autocomplete="off" placeholder="科室名称" style="width: 150px"></el-input>
                            </el-form-item>
                            <el-form-item>
                                费用分类：<div class="el-select el-select--mini" style="width: 110px;">
                                <el-select style="width:100px;" v-model="value" readonly="readonly" placeholder="科室分类" autocomplete="off">
                                    <el-option
                                            v-for="item in options1"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                                执行科室：<div class="el-select el-select--mini" style="width: 110px;">
                                <el-select style="width:100px;" v-model="value" readonly="readonly" placeholder="科室类别" autocomplete="off">
                                    <el-option
                                            v-for="item in options2"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            </el-form-item>
                            <el-form-item>
                                项目类型：<div class="el-select el-select--mini" style="width: 110px;">
                                <el-select style="width:100px;" v-model="value" readonly="readonly" placeholder="科室分类" autocomplete="off">
                                    <el-option
                                            v-for="item in options1"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                                拼音助记码：<el-input v-model="form.code" autocomplete="off" placeholder="科室编码" style="width: 150px"></el-input>

                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
                        </div>
                    </el-dialog>
                </div>
            </div>
        </div>
        <div>
            <el-table
                    ref="multipleTable"
                    :data="tableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        label="项目编码"
                        width="120">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="项目名称"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="项目类型"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="规格"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="单价"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="费用科目"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="执行科室"
                        show-overflow-tooltip>
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
        <div class="el-row" data-v-49055fb4="">
            <div align="left" class="el-col el-col-8" data-v-49055fb4="">
                <el-button disabled="disabled"
                           class="el-button el-button--danger el-button--mini is-disabled"
                           style="width: 100px; margin-top: 10px;" type="button"
                           data-v-49055fb4="">
                    <span @click="toggledelete()">批量删除</span>
                </el-button>
            </div>
            <div align="right" class="el-col el-col-16" data-v-49055fb4="">
                <div class="el-pagination is-background" data-v-49055fb4="">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="60">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Non_drugchargeprojectmanagement",
        data() {
            return {
                dialogFormVisible: false,
                form: {
                    code:'',
                    name: '',
                    mnemoniccode:'',
                    specification:'',
                    unit:'',
                    unitprice:'',
                    form:'',
                    region: '',
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
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: []
            };
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