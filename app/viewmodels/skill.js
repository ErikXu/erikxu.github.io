define(['jquery'], function ($) {
	var skillOne = [
        { name: "计算机基础", subs:[{ name:"计算机科学导论", level:75}, { name:"计算机网络", level:75}, { name:"数据结构", level:80}, { name:"算法导论", level:85}]},
        { name: "数学基础", subs:[{ name:"高等数学", level:90}, { name:"离散数学", level:90}, { name:"线性代数", level:80}, { name:"概率与统计学", level:90}]},
        { name: "英语能力", subs:[{ name:"听", level:70}, { name:"说", level:70}, { name:"读", level:90}, { name:"写", level:90}]},
        { name: "开发模式/思想", subs:[{ name:"单体架构", level:90}, { name:"SOA", level:10}, { name:"微服务", level:85}, { name:"设计模式", level:80}, { name:"CQRS", level:40}]},
        { name: "技术展望", subs:[{ name:"人工智能 & 大数据", level:10}, { name:"区块链", level:10}]}
	];
	var skillTwo = [
        { name: "开发语言", subs:[{ name:".Net/.Net Core", level:95}, { name:"Java", level:70}, { name:"GoLang", level:10}, { name:"Python", level:10}, { name:"Lua", level:60}, { name:"HTML + CSS", level:80}, { name:"Javascript", level:75}]},
        { name: "数据库", subs:[{ name:"MySql", level:80}, { name:"MSSQL", level:80}, { name:"Oracle", level:75}, { name:"MongoDB", level:90}, { name:"SqlLite", level:20}]},
        { name: "服务端-开发框架", subs:[{ name:"ASP.NET MVC / WebApi", level:90}, { name:"ASP.NET Core MVC / WebApi", level:90}, { name:"Spring Boot", level:70}]},
        { name: "前端-开发框架", subs:[{ name:"DurandalJs", level:85}, { name:"AngularJs", level:60}, { name:"VueJs", level:40}, { name:"ReactJs", level:40}, { name:"Bootstrap(UI)", level:80}]}
	];
	var skillThree = [
        { name: "云原生", subs:[{ name:"DevOps", level:80}, { name:"IaaS", level:80}, { name:"PaaS", level:80}, { name:"SaaS", level:70}, { name:"FaaS", level:60}, { name:"BaaS", level:60}, { name:"持续交付", level:60}]},
        { name: "中间件", subs:[{ name:"Kubernetes(微服务/容器治理)", level:85}, { name:"Docker Swarm(微服务/容器治理)", level:65}, { name:"Istio(Service Mesh)", level:60}, { name:"Redis(缓存)", level:70}, { name:"RabbitMQ(消息队列)", level:85}, 
                                { name:"Kafka(消息队列)", level:60}, { name:"RocketMQ(消息队列)", level:60}, { name:"Elastic Search(全文检索)", level:60}, { name:"LogStash/FileBeat(日志收集)", level:70}, { name:"Fluentd(日志收集)", level:70}, 
                                { name:"Kibana(看板)", level:70}, { name:"Zipkin(调用链)", level:70}, { name:"Kong(网关)", level:85}, { name:"Eureka(服务注册发现)", level:70}, { name:"ConfigServer(配置管理)", level:75}, { name:"Consul(服务注册发现&配置管理)", level:60}]}
	];
    var vm = {
    	skillOne: skillOne,
    	skillTwo: skillTwo,
    	skillThree: skillThree,
        activate: function () {
        },
        getBarClass: function (index){
        	if (index % 4 === 0){
        		return "progress-bar-danger";
        	}
        	else if (index % 4 === 1){
        		return "progress-bar-warning";
        	}
        	else if (index % 4 === 2){
        		return "progress-bar-success";
        	}
        	else {
        		return "progress-bar-primary";
        	}
        }
    };
    return vm;
});