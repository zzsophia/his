<template>
    <div class="login">
        <h3>系统登录</h3>
        <form method="post">
            <div class="uname">
                <label for="uname">
                    <el-input type="text" id="uname" v-model="uname" placeholder="账号" style="width: 300px;"/>
                </label>
            </div>
            <div class="passwd">
                <label for="passwd">
                    <el-input type="password" id="passwd" v-model="passwd" placeholder="密码" style="width: 300px;"/>
                </label>
            </div>
            <div>
                <input type="radio">记住密码
            </div>
            <div class="button">
                <el-button type="primary" style="width: 300px;" @click="validate">登录</el-button>
            </div>
        </form>
    </div>
</template>

<script>
    const USER = [{
        uname: 'root',
        passwd: 'root'
    }];
    const LENGTH = USER.length;
    export default {
        name: 'login',
        components: {},
        data() {
            return {
                uname: '',
                passwd: '',
                msg: '',
            }
        },
        methods: {
            validate: function () {
                // for (let i = 0; i < LENGTH; i++) {
                //     if (this.uname === USER[i].uname && this.passwd === USER[i].passwd) {
                //         this.$router.push('welcome')
                //     }
                // }

                USER.forEach((val) => {
                    if (this.uname === val.uname && this.passwd === val.passwd) {
                        // this.$router.push('welcome/'+this.uname)
                        this.$router.push('/home')
                    } else {
                        this.msg = '用户名或密码不对'
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .login {
        width: 400px;
        height: 300px;
        border: 1px solid blue;
        text-align: center;
        top: 50%;
        left: 50%;
        position:absolute;
        margin-left:-200px ;
        margin-right: -150px;
    }

</style>