<template>
    <el-form :model="ruleForm" :label-position="labelPosition" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-row>
            <el-col :span="6">
                <el-form-item prop="invoice" label="发票号" class="grid-content bg-purple">
                    <el-input v-model="ruleForm.invoice"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item class="grid-content bg-purple-dark">
                    <el-button class="el-button" icon="el-icon-edit-outline" type="primary" @click="submitForm('ruleForm')">挂号</el-button>
                    <el-button class="el-button" icon="el-icon-refresh" @click="resetForm('ruleForm')">清空</el-button>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-form-item label="姓名：" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="病历号：" prop="medicalNO">
                    <el-input v-model="ruleForm.medicalNO"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="性别：" prop="gender">
                    <el-select v-model="ruleForm.gender" placeholder="男" value="">
                        <el-option label="男" value="male"></el-option>
                        <el-option label="女" value="female"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="年龄：" prop="age">
                    <el-col :span="8">
                        <el-input v-model="ruleForm.age" width=40%></el-input>
                    </el-col>
                    <el-col :span="6">
                        <el-select v-model="ruleForm.region" placeholder="岁" value="">
                            <el-option label="岁" value="year"></el-option>
                            <el-option label="月" value="month"></el-option>
                            <el-option label="天" value="day"></el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-form-item label="出生日期：" required>
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="身份证号：" prop="id">
                    <el-input v-model="ruleForm.id"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="9">
                <el-form-item label="家庭住址：" prop="address">
                    <el-input v-model="ruleForm.address"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-form-item label="结算类型：" prop="settlement">
                    <el-select v-model="ruleForm.settlement" placeholder="省医保" value="">
                        <el-option label="省医保" value="province"></el-option>
                        <el-option label="市医保" value="city"></el-option>
                        <el-option label="其他" value="other"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="看诊日期：" required>
                    <el-col :span="21">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="午别：" prop="noon">
                    <el-select v-model="ruleForm.noon" placeholder="上午" value="">
                        <el-option label="上午" value="morning"></el-option>
                        <el-option label="下午" value="afternoon"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="挂号科室：" prop="department">
                    <el-select v-model="ruleForm.department" placeholder="挂号科室" value="">
                        <el-option label="眼科" value="eye"></el-option>
                        <el-option label="消化科" value="digestion"></el-option>
                        <el-option label="检验科" value="assay"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-form-item label="号别：" prop="registration">
                    <el-select v-model="ruleForm.registration" placeholder="号别" value="">
                        <el-option label="主任医师" value="director"></el-option>
                        <el-option label="副主任医师" value="vicedirector"></el-option>
                        <el-option label="主治医师" value="major"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="看诊医生：" prop="doctor">
                    <el-select v-model="ruleForm.doctor" placeholder="看诊医生" value="">
                        <el-option label="王大夫" value="wang"></el-option>
                        <el-option label="张大夫" value="zhang"></el-option>
                        <el-option label="李大夫" value="li"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-col :span="21">
                    <el-form-item label="初始号额：" prop="initial">
                        <el-input v-model="ruleForm.initial"></el-input>
                    </el-form-item>
                </el-col>
            </el-col>
            <el-col :span="6">
                <el-col :span="21">
                    <el-form-item label="已用号额：" prop="used">
                        <el-input v-model="ruleForm.used"></el-input>
                    </el-form-item>
                </el-col>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-form-item label="病历本：" prop="type">
                    <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="有" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="应收金额：" prop="receivable">
                    <el-input v-model="ruleForm.receivable"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="收费方式：" prop="manner">
                    <el-select v-model="ruleForm.manner" placeholder="现金" value="">
                        <el-option label="医保卡" value="wang"></el-option>
                        <el-option label="银行卡" value="zhang"></el-option>
                        <el-option label="信用卡" value="li"></el-option>
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                labelPosition: 'top',
                ruleForm: {
                    invoice:'',
                    name: '',
                    medicalNO: '',
                    gender: '',
                    age:'',
                    id: '',
                    address: '',
                    settlement: '',
                    diagnose: '',
                    date1: '',
                    noon: '',
                    department: '',
                    delivery: false,
                    registration: '',
                    doctor: '',
                    initial: '',
                    used: '',
                    type: [],
                    receivable: '',
                    manner: ''
                },
                rules: {
                    invoice:[
                        { required: true, message:'请输入发票号', trigger: 'blur'}
                    ],
                    name: [
                        { required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    medicalNO:[
                        {required: true, message:'请输入病例号', trigger: 'blur'}
                    ],
                    gender:[
                        {required: true, message: '请选择性别',  trigger: 'change'}
                    ],
                    age: [
                        { required: true, message:'请输入年龄', trigger: 'blur'}
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    id: [
                        {required: true, message:'请输入身份证号', trigger: 'blur'}
                    ],
                    address: [
                        {required: true, message:'请输入家庭住址', trigger: 'blur'}
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    noon: [
                        {required: true, message: '请选择午别',  trigger: 'change'}
                    ],
                    department: [
                        {required: true, message: '请选择科室',  trigger: 'change'}
                    ],
                    registration: [
                        {required: true, message: '请选择号别',  trigger: 'change'}
                    ],
                    doctor: [
                        {required: true, message: '请选择医生',  trigger: 'change'}
                    ],
                    type: [
                        { type: 'array', trigger: 'change' }
                    ],
                    receivable: [
                        {required: true, message: '请输入金额',  trigger: 'blur'}
                    ],
                    manner: [
                        {required: true, message: '请选择收费方式',  trigger: 'change'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        text-align: left;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .bg-purple-dark {
        margin-left: 10px;
    }
    .el-form--label-top {
        text-align: left;
        padding: 0 0 0 0 !important;
    }
    .el-button {
        margin-top: 50px;
    }
    .el-form-item__label {
        padding: 0 0 0 0 !important;
    }
    .el-form-item {
        margin-bottom: 0 !important;
    }
</style>
