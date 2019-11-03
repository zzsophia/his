<template>
    <div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <div class="el-input el-input--mini" data-v-49055fb4="">
                    <el-input  type="text" v-model="input" placeholder="请输入疾病分类编码或名称" autocomplete="off"></el-input>
                </div>
            </div>
        </div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <el-button class="el-button el-button--primary el-button--mini"
                           style="margin-left: 10px;" data-v-49055fb4="" type="primary" icon="el-icon-view">查询疾病分类</el-button>
            </div>
        </div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <el-button class="el-button el-button--primary el-button--mini"
                           style="margin-left: 10px;" type="button" data-v-49055fb4="" @click="dialogFormVisible1 = true">
                    <i class="el-icon-edit"></i><span>新增疾病分类</span></el-button>
            </div>
        </div>
        <div>
            <el-dialog title="新增疾病分类" :visible.sync="dialogFormVisible1">
                <el-form :model="form1">
                    <el-form-item>
                        疾病分类编码：<el-input v-model="form1.code" autocomplete="off" placeholder="药品编码--14位" style="width: 150px"></el-input>
                        疾病分类名称：<el-input v-model="form1.name" autocomplete="off" placeholder="药品名称" style="width: 150px"></el-input>
                    </el-form-item>
                    <el-form-item>
                        显示顺序号：<el-input v-model="form1.code" autocomplete="off" placeholder="药品编码--14位" style="width: 150px"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible1 = false">保存</el-button>
                </div>
            </el-dialog>
        </div>

        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <el-button class="el-button el-button--primary el-button--mini"
                           style="margin-left: 10px;" type="button" data-v-49055fb4="" @click="dialogFormVisible2 = true">
                    <i class="el-icon-edit"></i><span>疾病管理</span></el-button>
            </div>
        </div>
        <div>
            <el-dialog title="疾病列表" :visible.sync="dialogFormVisible2">
                <el-form :model="form2">
                    <el-form-item>
                        <el-input  type="text" v-model="input" placeholder="请输入疾病编码或名称" autocomplete="off" style="width: 250px;"></el-input>
                    </el-form-item>
                    <el-popover
                            placement="bottom"
                            width="800"
                            trigger="click">
                        <el-table ref="multipleTable"
                                  :data="tableData"
                                  tooltip-effect="dark"
                                  @selection-change="handleSelectionChange">
                            <el-table-column type="selection" width="55"></el-table-column>
                            <el-table-column width="150" property="date" label="疾病编码"></el-table-column>
                            <el-table-column width="100" property="name" label="疾病名称"></el-table-column>
                            <el-table-column width="150" property="address" label="国际ICD编码"></el-table-column>
                            <el-table-column width="150" property="address" label="疾病所属分类"></el-table-column>
                            <el-table-column width="150" property="address" label="操作">
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
                        <el-button slot="reference">查询疾病</el-button>
                    </el-popover>
                </el-form>

                <el-button class="el-button el-button--primary el-button--mini"
                           style="margin-left: 10px;" type="button" data-v-49055fb4="" @click="dialogFormVisible3 = true">
                    <i class="el-icon-edit"></i><span>新增疾病</span></el-button>

                <el-dialog title="新增疾病" :visible.sync="dialogFormVisible3">
                    <el-form :model="form">
                        <el-form-item>
                            疾病编码：<el-input v-model="form3.code" autocomplete="off" placeholder="常数项编码" style="width: 150px"></el-input>
                            疾病名称<el-input v-model="form3.name" autocomplete="off" placeholder="常数项名称" style="width: 150px"></el-input>
                        </el-form-item>
                        <el-form-item>
                            国际ICD编码：<el-input v-model="form3.name" autocomplete="off" placeholder="常数项名称" style="width: 150px"></el-input>
                            疾病所属分类：<el-select v-model="form3.region" placeholder="所属分类" style="width: 150px">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible3 = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible3 = false">保存</el-button>
                    </div>
                </el-dialog>
                <el-table
                        ref="multipleTable"
                        :data="Data"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            label="疾病编码"
                            width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="疾病名称"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="国际ICD编码"
                            show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="疾病所属分类"
                            show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="操作"
                            show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                <div align="right" class="el-col el-col-16" data-v-49055fb4="">
                    <div class="el-pagination is-background" data-v-49055fb4="">
                        <el-pagination
                                background
                                layout="prev, pager, next"
                                :total="2939">
                        </el-pagination>
                    </div>
                </div>
                <div slot="footer" class="dialog-footer">
                    <div class="el-row" data-v-49055fb4="">
                        <div align="left" class="el-col el-col-8" data-v-49055fb4="">
                            <el-button disabled="disabled"
                                       class="el-button el-button--danger el-button--mini is-disabled"
                                       style="width: 100px; margin-top: 10px;" type="button"
                                       data-v-49055fb4="">
                                <span @click="toggledelete()">批量删除</span>
                            </el-button>
                        </div>
                        <el-button type="primary" @click="dialogFormVisible2 = false">关闭</el-button>
                    </div>
                </div>
            </el-dialog>
        </div>
        <div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="显示顺序号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="分类编码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="分类名称">
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
        <div slot="footer" class="dialog-footer">
            <div class="el-row" data-v-49055fb4="">
                <div align="left" class="el-col el-col-8" data-v-49055fb4="">
                    <el-button disabled="disabled"
                               class="el-button el-button--danger el-button--mini is-disabled"
                               style="width: 100px; margin-top: 10px;" type="button"
                               data-v-49055fb4="">
                        <span @click="toggledelete()">批量删除</span>
                    </el-button>
                </div>
            </div>
        </div>
        <div align="right" class="el-col el-col-16" data-v-49055fb4="">
            <div class="el-pagination is-background" data-v-49055fb4="">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="470">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Diagnosticdirectorymanagement",
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
                dialogFormVisible2: false,
                form2: {
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
                dialogFormVisible3: false,
                form3: {
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
                options: [{
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