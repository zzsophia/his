<template>
    <div>
        <div>
            <div class="el-col el-col-6" data-v-49055fb4="">
                <div class="grid-content bg-purple" data-v-49055fb4="">
                    <div class="el-input el-input--mini" data-v-49055fb4="">
                        <el-input  type="text" v-model="input" placeholder="请输入药品助记码" autocomplete="off"></el-input>
                </div>
                </div>
            </div>
            <div class="el-col el-col-6" data-v-49055fb4="">
                <div class="grid-content bg-purple" data-v-49055fb4="">
                        <el-button class="el-button el-button--primary el-button--mini"
                                   style="margin-left: 10px;" data-v-49055fb4="" type="primary" icon="el-icon-view">查询药品</el-button>
                </div>
            </div>
            <div class="el-col el-col-6" data-v-49055fb4="">
                <div class="grid-content bg-purple" data-v-49055fb4="">
                    <el-button class="el-button el-button--primary el-button--mini"
                            style="margin-left: 10px;" type="button" data-v-49055fb4="" @click="dialogFormVisible = true">
                        <i class="el-icon-edit"></i><span>新增药品</span></el-button>

                    <el-dialog title="新增药品" :visible.sync="dialogFormVisible">
                        <el-form :model="form">
                            <el-form-item>
                                药品编号<el-input v-model="form.code" autocomplete="off" placeholder="药品编码--14位" style="width: 150px"></el-input>
                                药品名称<el-input v-model="form.name" autocomplete="off" placeholder="药品名称" style="width: 150px"></el-input>
                            </el-form-item>
                            <el-form-item>
                                药品助记码<el-input v-model="form.mnemoniccode" autocomplete="off" placeholder="药品助记码" style="width: 150px"></el-input>
                                药品规格<el-input v-model="form.specification" autocomplete="off" placeholder="药品规格" style="width: 150px"></el-input>
                            </el-form-item>
                            <el-form-item>
                                药品单位<el-input v-model="form.unit" autocomplete="off" placeholder="药品单位" style="width: 150px"></el-input>
                                药品单价<el-input v-model="form.unitprice" autocomplete="off" placeholder="药品单价--两位小数" style="width: 180px"></el-input>
                            </el-form-item>
                            <el-form-item>
                                药品剂型<el-input v-model="form.form" autocomplete="off" placeholder="输入剂型代码" style="width: 150px"></el-input>
                                药品类型<el-select v-model="form.region" placeholder="药品类型" style="width: 150px">
                                <el-option label="西药" value="shanghai"></el-option>
                                <el-option label="中成药" value=""></el-option>
                                <el-option label="中草药" value=""></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dialogFormVisible = false">保存</el-button>
                        </div>
                    </el-dialog>
                </div>
            </div>
            <div align="right" class="el-col el-col-6" data-v-49055fb4="">
                <div class="grid-content bg-purple" data-v-49055fb4="">
                    <div class="upload-demo" data-v-49055fb4="">
                        <div tabindex="0" class="el-upload el-upload--text">
                            <el-upload
                                class="upload-demo"
                                action="https://127.0.0.1:5000/upload"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="fileList">
                                <el-button class="el-button el-button--primary el-button--mini"
                                        type="primary" data-v-49055fb4=""><!----><i
                                        class="el-icon-sold-out"></i><span>导入药品</span>
                                </el-button>
                            </el-upload>
                            <input name="file" class="el-upload__input" type="file">
                        </div>
                    </div>
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
                        label="日期"
                        width="120">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址"
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
                            :total="1000">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DrugAdministration",
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
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: []
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
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