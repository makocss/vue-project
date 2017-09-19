<template>
	<div style="margin-top:50px;">
		<el-row> 
		  <el-col :xs="1" :sm="3" :md="6" :lg="8"><div>&nbsp;</div></el-col>
		  <el-col :xs="22" :sm="18" :md="12" :lg="8">
			  <div>
				   <el-radio class="radio" v-model="radio" label="1">承运</el-radio>
				   <el-radio class="radio" v-model="radio" label="2">货主</el-radio>
				   <el-radio class="radio" v-model="radio" label="3">物流公司</el-radio>
			  </div>
			  <div style="margin-top:15px;">
				  <el-row> 
					 <el-col :xs="2" :sm="4" :md="6" :lg="4">
					  账号：
					 </el-col>
					 <el-col :xs="22" :sm="20" :md="18" :lg="20">
					  <el-input v-model="input" placeholder="请输入内容"></el-input>
					 </el-col>
				  </el-row>
			  </div>
			  <div style="margin-top:15px;">
				  <el-row> 
					 <el-col :xs="2" :sm="4" :md="6" :lg="4">
					  密码：
					 </el-col>
					 <el-col :xs="22" :sm="20" :md="18" :lg="20">
					  <el-input v-model="input_p" type="password" placeholder="请输入内容"></el-input>
					 </el-col>
				  </el-row>
			  </div>
			  <div style="margin-top:15px;">
			     <el-button type="primary" @click="loginMain">登陆</el-button>
			  </div>
		  </el-col>
		  <el-col :xs="1" :sm="3" :md="6" :lg="8"><div>&nbsp;</div></el-col>
		</el-row>
	</div>
</template>
<script>
  export default {
    data() {
      return {
          radio: 1,
		  input: '',
		  input_p: ''
      };
    },
    methods: {
      loginMain: function(){ 
	     var _this = this;
		 if(!_this.input || !_this.input_p){
			  this.$message({
			  message: '账号、密码不能为空',
			  type: 'warning'
			});
		 }else{
		    let userInfo = {name: _this.input};
			let str = JSON.stringify(userInfo);
		    $.cookie('userInfo',str,{expires:7});
		    _this.$router.push('/main');
		 }
	     
	  }
    }
  }
</script>
