<template>
	<div>
		<el-row style="font-weight:bold;font-size:13px;padding:10px 0;">
		  <el-col :sm="2"><div>订单号</div></el-col>
		  <el-col :sm="2"><div>总重量(实/标)</div></el-col>
		  <el-col :sm="2"><div>总数量(实/标)</div></el-col>
		  <el-col :sm="2"><div>承运对象</div></el-col>
		  <el-col :sm="2"><div>总运力</div></el-col>
		  <el-col :sm="2"><div>单价</div></el-col>
		  <el-col :sm="2"><div>流向</div></el-col>
		  <el-col :sm="2"><div>日期</div></el-col>
		  <el-col :sm="2"><div>备注</div></el-col>
		  <el-col :sm="2"><div>订单状态</div></el-col>
		  <el-col :sm="2"><div>操作</div></el-col>
		</el-row>
		<el-row v-for="item in list" :key="item.id" style="word-break:break-all;font-size:13px;padding:10px 0;">
		  <el-col :sm="2"><div>{{item.orderNo||'--'}}</div></el-col>
		  <el-col :sm="2"><div>{{item.sumDetailsWeight||'--'}}/{{item.weight||'--'}}</div></el-col>
		  <el-col :sm="2"><div>{{item.sumDetailsNum || '--'}}/{{item.num||'--'}}</div></el-col>
		  <el-col :sm="2"><div>{{item.fleetName||'--'}}</div></el-col>
		  <el-col :sm="2"><div>{{item.capacity||'--'}}</div></el-col>
		  <el-col :sm="2"><div>{{item.unit}}{{item.price||'--'}}</div></el-col>
		  <el-col :sm="2"><div>{{item.sCity}}--{{item.eCity}}</div></el-col>
		  <el-col :sm="2">
		     <div> 
				<span style="display:block;">{{item.createTime.substring(0,10)}}</span>
				<span style="display:block;">{{item.createTime.substring(10,19)}}</span>
			 </div>
		  </el-col>
		  <el-col :sm="2"><div>{{item.remark}}</div></el-col>
		  <el-col :sm="2"><div>订单状态</div></el-col>
		  <el-col :sm="2"><div>操作</div></el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		mounted(){
		   this.getOrderList();
		},
		methods: {
		   getOrderList(){
		      let _this = this;
			  console.log($.cookie('userInfo'));
		      let params = {"companyId":23,"userId":825,"orderNo":"","orderStartime":"2017-07-05","orderEndtime":"2017-08-04","spCity":"","epCity":"","flow":"","page":1,"length":10,"orderStatus":"","transPortWay":"1","assignment":null,"noticeNo":""}
			  this.axios.post('info/tPlanInfo/selectOrderInfo',params).then(function(res){
			      _this.list = res.data.data.data;
				  console.log(res.data.data.data);
			  })
		   }
		}
		
	}
</script>