<template>
    <div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <div class="el-input el-input--mini" data-v-49055fb4="">
                    <font style='font-family: "Microsoft YaHei"; font-size: 13px;'>开始时间:</font>&nbsp;
                    <div class="el-date-editor el-input el-input--mini el-input--prefix el-input--suffix el-date-editor--date"
                         style="width: 130px;">
                        <el-date-picker type="date" placeholder="选择日期" style="width:120px;height:20px;" autocomplete="off"></el-date-picker>
                        <span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-input__icon"></i></span></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <div class="el-input el-input--mini" data-v-49055fb4="">
                    <font style='font-family: "Microsoft YaHei"; font-size: 13px;'>结束时间:</font>&nbsp;
                    <div class="el-date-editor el-input el-input--mini el-input--prefix el-input--suffix el-date-editor--date"
                         style="width: 130px;">
                        <el-date-picker type="date" placeholder="选择日期" style="width:120px;height:20px;" autocomplete="off"></el-date-picker>
                        <span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-input__icon"></i></span></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <el-button class="el-button el-button--primary el-button--mini"
                           style="margin-left: 10px;" data-v-49055fb4="" type="primary" icon="el-icon-view">查询医生排班</el-button>
            </div>
        </div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <el-button class="el-button el-button--primary el-button--mini"
                           style="margin-left: 10px;" type="button" data-v-49055fb4="" @click="dialogFormVisible1 = true">
                    <i class="el-icon-edit"></i><span>新增排班规则</span></el-button>
            </div>
        </div>
        <div>
            <el-dialog title="新增排班规则" :visible.sync="dialogFormVisible1">
                <el-form :model="form1">
                    <el-form-item>
                        科室选择：<div class="el-select el-select--mini" style="width: 110px;">
                        <el-select style="width:100px;" v-model="value" readonly="readonly" placeholder="科室分类" autocomplete="off">
                            <el-option
                                    v-for="item in options1"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                        挂号级别：<div class="el-select el-select--mini" style="width: 110px;">
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
                        <el-popover
                                placement="bottom"
                                width="400"
                                trigger="click">
                            <el-table :data="gridData">
                                <el-table-column width="150" property="date" label="日期"></el-table-column>
                                <el-table-column width="100" property="name" label="姓名"></el-table-column>
                                <el-table-column width="300" property="address" label="地址"></el-table-column>
                            </el-table>
                            规则名称：<el-input v-model="input" placeholder="请输入内容"></el-input><font color="red">*</font>
                            <el-button slot="reference" type="primary">查询</el-button>
                            <el-button slot="reference" type="primary" class="el-icon-refresh">清空</el-button>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible3 = false">保存</el-button>
                            </div>
                        </el-popover>
                    </el-form-item>
                </el-form>


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
                            label="常数项编码"
                            width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="常数项名称"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="常数项类别"
                            show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="常数项ID"
                            show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="操作"
                            show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                规则名称：<el-input v-model="input" placeholder="请输入内容"></el-input><font color="red">*</font>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                </div>
            </el-dialog>
        </div>

        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <el-button class="el-button el-button--primary el-button--mini"
                           style="margin-left: 10px;" type="button" data-v-49055fb4="" @click="dialogFormVisible2 = true">
                    <i class="el-icon-edit"></i><span>排班规则列表</span></el-button>
            </div>
        </div>
        <div>
            <el-dialog title="排班规则列表" :visible.sync="dialogFormVisible2">
                <el-form :model="form2">
                    <el-form-item>
                        科室选择：<div class="el-select el-select--mini" style="width: 110px;">
                        <el-select style="width:100px;" v-model="value" readonly="readonly" placeholder="科室分类" autocomplete="off">
                            <el-option
                                    v-for="item in options1"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                        <el-button slot="reference" type="primary">查询</el-button>
                        <el-button slot="reference" type="primary" class="el-icon-refresh">清空</el-button>
                    </el-form-item>
                </el-form>

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
                            label="规则名称"
                            width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="科室名称"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="医生姓名"
                            show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="时间"
                            show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                <div class="el-col el-col-6" data-v-49055fb4="">
                    <div class="grid-content bg-purple" data-v-49055fb4="">
                        <div class="el-input el-input--mini" data-v-49055fb4="">
                            <font style='font-family: "Microsoft YaHei"; font-size: 13px;'>开始时间:</font>&nbsp;
                            <div class="el-date-editor el-input el-input--mini el-input--prefix el-input--suffix el-date-editor--date"
                                 style="width: 130px;">
                                <el-date-picker type="date" placeholder="选择日期" style="width:120px;height:20px;" autocomplete="off"></el-date-picker>
                                <span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-input__icon"></i></span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="el-col el-col-6" data-v-49055fb4="">
                    <div class="grid-content bg-purple" data-v-49055fb4="">
                        <div class="el-input el-input--mini" data-v-49055fb4="">
                            <font style='font-family: "Microsoft YaHei"; font-size: 13px;'>结束时间:</font>&nbsp;
                            <div class="el-date-editor el-input el-input--mini el-input--prefix el-input--suffix el-date-editor--date"
                                 style="width: 130px;">
                                <el-date-picker type="date" placeholder="选择日期" style="width:120px;height:20px;" autocomplete="off"></el-date-picker>
                                <span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-input__icon"></i></span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <el-button type="primary" @click="dialogFormVisible2 = false" :disabled="true">选取规则生成排班计划</el-button>
                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dialogFormVisible2 = false">关闭</el-button>
                </div>
            </el-dialog>
        </div>


        <div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="类别编码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="类别名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="ID">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Doctorschedulingmanagement",
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
                value: '',
                tableData: [{
                    date: '',
                    name: '',
                    address: ''
                }],
                input: ''
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