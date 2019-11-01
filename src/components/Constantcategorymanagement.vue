<template>
    <div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <div class="el-input el-input--mini" data-v-49055fb4="">
                    <input class="el-input__inner" type="text"
                           placeholder="请输入常数类别编码或名称" autocomplete="off"><!---->
                </div>
            </div>
        </div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <button class="el-button el-button--primary el-button--mini"
                        style="margin-left: 10px;" type="button" data-v-49055fb4="">
                    <i class="el-icon-view"></i><span>查询常数类别</span></button>
            </div>
        </div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <button class="el-button el-button--primary el-button--mini"
                        style="margin-left: 10px;" type="button" data-v-49055fb4="">
                    <i class="el-icon-edit"></i><span>新增常数类别</span></button>
            </div>
        </div>
        <div class="el-col el-col-6" data-v-49055fb4="">
            <div class="grid-content bg-purple" data-v-49055fb4="">
                <button class="el-button el-button--primary el-button--mini"
                        style="margin-left: 10px;" type="button" data-v-49055fb4="">
                    <i class="el-icon-edit"></i><span>常数项管理</span></button>
            </div>
        </div>
        <el-table
                :data="tableData"
                style="width: 100%">
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
        <div class="el-pagination is-background" data-v-49055fb4="">
            <button disabled="disabled" class="btn-prev" type="button"><i
                    class="el-icon el-icon-arrow-left"></i></button>
            <ul class="el-pager">
                <li class="number active">1</li><!---->
                <li class="number">2</li>
                <li class="number">3</li>
                <li class="number">4</li>
            </ul>
            <button class="btn-next" type="button"><i
                    class="el-icon el-icon-arrow-right"></i></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Constantcategorymanagement",
        data() {
            return {
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
        }
    }
</script>

<style scoped>

</style>