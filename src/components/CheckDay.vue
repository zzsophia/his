<template>
    <div id="head">
        <div id="select">
            <font style='font-family: "Microsoft YaHei"; font-size: 13px;'>收款员:</font>&nbsp;
            <div class="el-select el-select--mini" style="width: 110px;"><!---->
                <el-select style="width:100px;" v-model="value" readonly="readonly" placeholder="收款员" autocomplete="off">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <font color="red">*</font>&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <font style='font-family: "Microsoft YaHei"; font-size: 13px;'>统计日期(上次结束时间):</font>&nbsp;
            <div class="el-input el-input--mini" style="width: 150px;"><input
                    class="el-input__inner" type="text" placeholder="2018-12-12 18:00:00"
                    autocomplete="off" again="left"></div>
            &nbsp;
            <font style='font-family: "Microsoft YaHei"; font-size: 13px;'>至:</font>&nbsp;
            <div class="el-date-editor el-input el-input--mini el-input--prefix el-input--suffix el-date-editor--date"
                                   style="width: 130px;">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width:120px;height:20px;" autocomplete="off"></el-date-picker>
            <span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-input__icon"></i></span></span>
        </div>
            <div class="el-date-editor el-input el-input--mini el-input--prefix el-input--suffix el-date-editor--time"
                 style="width: 130px;">
                <el-time-picker placeholder="任意时间点" v-model="form.date2" style="width:133px;height:20px;"></el-time-picker>
            </div>&nbsp;&nbsp;
            <button class="el-button el-button--primary el-button--mini" style="margin-left: 3px;" type="button">
                <i class="el-icon-search"></i><span>日结</span>
            </button>
            <button class="el-button el-button--primary el-button--mini"
                    style="margin-left: 3px;" type="button"><i class="el-icon-goods"></i><span>保存</span>
            </button>
            <br><br>
            <div style="width:120px;"><font style='font-family: "Microsoft YaHei"; font-size: 15px;'>
                门诊收费日结单</font>&nbsp;</div>
            <div>
                <table bgcolor="#990033" border="0" cellspacing="1" >
                    <tr bgcolor="#fff">
                        <td>日结时间范围</td>
                        <td colspan="12">2018-12-12 18:00:00----2018-12-13 18:00:00</td>
                    </tr>
                    <tr bgcolor="#fff">
                        <td>制表人</td>
                        <td colspan="3">张三</td>
                        <td>收款员</td>
                        <td colspan="5">张三</td>
                        <td>制表时间</td>
                        <td colspan="2">2018-12-30</td>
                    </tr>
                    <tr bgcolor="#fff">
                        <td>起止发票号</td>
                        <td colspan="11">10001----83455</td>
                    </tr>
                    <tr bgcolor="#fff">
                        <td>作废发票号</td>
                        <td colspan="11">10003 70048 81890</td>
                    </tr>
                    <tr bgcolor="#fff">
                        <td>重打发票号</td>
                        <td colspan="11">12997</td>
                    </tr>
                    <tr bgcolor="#fff">
                        <td>收费金额</td>
                        <td>挂号费</td>
                        <td>500.00</td>
                        <td>药费</td>
                        <td>1000.00</td>
                        <td>其他费用</td>
                        <td colspan="7">30.00</td>
                    </tr>
                    <tr bgcolor="#fff">
                        <td>共计</td>
                        <td>(大写)</td>
                        <td colspan="4">壹仟伍佰叁拾</td>
                        <td>(小写)</td>
                        <td colspan="6">1530.00</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CheckDay",
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '张三'}],
                form: {
                    date1: '',
                    date2:''
                    },
                input: '',
                value: '',
                result:''
            }
        }
    }
</script>

<style scoped>
#select{
    float:left;
}
#input{
    float: left;
    margin-left: 80px;
}
#button{

}
</style>