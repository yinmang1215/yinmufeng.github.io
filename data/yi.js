﻿var y_data = [0.572136337,
	0.565577233,
	0.525877428,
	0.482845842,
	0.462127617,
	0.446976717,
	0.402623434,
	0.399741617,
	0.386330143,
	0.380164295,
	0.377371438,
	0.355136928,
	0.346782942,
	0.344627561,
	0.343524526,
	0.340138497,
	0.328792158,
	0.318079342,
	0.309617336,
	0.283958664,
	0.281905277,
	0.27886793,
	0.271647727,
	0.265109941,
	0.264331487,
	0.262444927,
	0.261527925,
	0.252639794,
	0.249842321,
	0.247873106,
	0.246589027,
	0.245748912,
	0.238835303,
	0.237743879,
	0.235080964,
	0.230032535,
	0.22103363,
	0.213311263,
	0.207572494,
	0.204200656,
	0.200582833,
	0.198670888,
	0.189004034,
	0.185958309,
	0.185782747,
	0.185444231,
	0.184941375,
	0.183530054,
	0.18153226,
	0.178936416,
	0.175495431,
	0.16764527,
	0.161980339,
	0.160038329,
	0.160036868,
	0.154680514,
	0.145348959,
	0.138519933,
	0.134003992,
	0.131513551,
	0.129419869,
	0.127690782,
	0.124005352,
	0.117571954,
	0.116688475,
	0.116569937
].reverse();

var index2_data = {
	title: {
		text: '乙级',
		subtext: '第一周',
		left: 'center',
		textStyle: {
			fontSize: 24,
			fontWeight: 'bolder',
			color: '#333'
		}
	},
	tooltip: {
		trigger: 'axis',
		textStyle: {
			fontSize: 14
		},
		formatter: function(params) {
			var name = params[0].axisValue;
			var cap = params[0].value >= 0.15 ? '奖金90元' : '离奖金只差一小步';
			cap = params[0].dataIndex >= y_data.length - 5 ? '奖金90元，前五名额外奖励300元' : cap;
			return name + '<br/>' + cap;
		}
	},
	grid: {
		top: 50,
		bottom: 15,
		right: 20,
		containLabel: true
	},
	calculable: true,
	xAxis: [{
		type: 'value',
		show: false,
		axisLine: {
			show: false
		}
	}],
	yAxis: [{
		type: 'category',
		data: ['绝味辽阳二院店',
			'绝味沈阳新世界1店',
			'绝味锦州单洞口店',
			'绝味沈阳金融中心店',
			'绝味大连虹港路店',
			'绝味抚顺天河家园店',
			'绝味沈阳沈辽路兴隆店',
			'绝味大连友好广场店',
			'绝味鞍山大陆店',
			'绝味沈阳百联店',
			'绝味沈阳一克拉店',
			'绝味大连大同街店',
			'绝味沈阳白塔龙盛家园店',
			'绝味大连湾家店',
			'绝味沈阳大什字街店',
			'绝味沈阳明天广场店',
			'绝味铁岭荣富鑫店',
			'绝味大连月牙泉店',
			'绝味丹东新柳步行街店',
			'绝味沈阳黄河大街店',
			'绝味灯塔文化街店',
			'绝味营口大福源店',
			'绝味大连鸿玮澜山店',
			'绝味沈阳大南街店',
			'绝味盘锦顺地城店',
			'绝味大连北京街店',
			'绝味沈阳南京南街店',
			'绝味大连宏孚桥店',
			'绝味沈阳南市场店',
			'绝味大连北海街店',
			'绝味盘锦新玛特店',
			'绝味大连金石滩店',
			'绝味沈阳卫工街南六路店',
			'绝味沈阳北一路万达店',
			'绝味新民中街店',
			'绝味沈阳凯祥店',
			'绝味沈阳明廉店',
			'绝味辽阳海关店',
			'绝味沈阳文体西路店',
			'绝味大连南石道街店',
			'绝味大连新天百店',
			'绝味沈阳宏发店',
			'绝味沈阳艳华街店',
			'绝味沈阳光荣街店',
			'绝味沈阳奉天街店',
			'绝味沈阳重工街店',
			'绝味沈阳兴华北街店',
			'绝味沈阳水晶城店',
			'绝味沈阳辽宁大学店',
			'绝味营口市东风店',
			'绝味大连泉水快轨站店',
			'绝味大连北斗街店',
			'绝味鞍山台安1店',
			'绝味普兰店丰荣市场店',
			'绝味沈阳宁官店',
			'绝味鞍山大润发解放路店',
			'绝味沈阳金卡路店',
			'绝味丹东沃尔玛店',
			'绝味鞍山三十五中店',
			'绝味大连西安路店',
			'绝味大连刘家桥店',
			'绝味沈阳长白幸福里店',
			'绝味沈阳明华店',
			'绝味沈阳陵东街店',
			'绝味沈阳虎石台2店',
			'绝味大连千山路二店'
		].reverse(),
		axisLabel: {
			textStyle: {
				color: '#000',
				fontSize: 14,
				align: 'right'
			}
		},
		offset: 10,
		splitLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		}
	}],
	series: [{
		name: '提升百分比',
		type: 'bar',
		data: y_data,
		label: {
			normal: {
				position: 'insideRight',
				show: true,
				fontSize: 14,
				formatter: function(value) {
					return(value.data * 100).toFixed(2) + '%';
				}
			}
		},
		markLine: {
			data: [{
				name: '平均值',
				xAxis: 0.15
			}],
			itemStyle: {
				normal: {
					lineStyle: {
						type: 'solid',
						color: '#000'
					},
					label: {
						show: true,
						position: 'left'
					}
				}
			}
		},
		itemStyle: {
			normal: {
				color: function(params) {
					if(params.data >= 0.15) {
						return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
							offset: 0,
							color: '#41b7e7'
						}, {
							offset: 1,
							color: '#02ce99'
						}]);
					} else {
						return new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
							offset: 0,
							color: '#ffdd9a'
						}, {
							offset: 1,
							color: '#ffaa06'
						}]);
					}
				},
			}
		}
	}]
};