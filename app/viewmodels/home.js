define(['jquery'], function ($) {
	var categories = [
		{ text:"微服务", count:3},
		{ text:"Docker", count:2},
		{ text:"Web Api", count:2},
		{ text:".Net Core", count:1},
		{ text:"Entity Framework", count:1},
		{ text:"架构", count:1},
        { text:"Git", count:1}
	];
	var tags = [
		{ text:"Web安全", count:5},
		{ text:"Web Api", count:2},
		{ text:"单元测试", count:2},
		{ text:"微服务", count:1},
		{ text:"架构", count:1},
		{ text:"Entity Framework", count:1},
		{ text:".Net Core", count:1},
		{ text:"Configuration", count:1}
	];
	var articles = [
		{ date:"2018-02-15", title: "从技术角度讨论下微服务", categories:["微服务"], tags:["微服务", "架构"], abstract:"编写中，敬请期待..." },
        { date:"2018-02-03", title: "你可能不知道的.Net Core Configuration", categories:[".Net Core", "Docker", "微服务"], tags:[".Net Core", "Configuration"], abstract:"目录 执行原理 环境变量 Spring Cloud Config Server 挂卷Volume Config Server vs Volume 执行原理 1. 配置读取顺序：与代码先后顺序一致。 以上代码会先读取appsettings.json，再读取cussettings.json..." },
        { date:"2017-04-09", title: "使用Docker分分钟启动常用应用", categories:["Docker", "微服务"], tags:["Docker", "微服务"], abstract:"前言 Docker是目前比较火的一个概念，同时也是微服务中比较关键的一个容器化技术。但是，单从理论上好难看出Docker的优势，因此，我希望在这篇文章中提供一些Docker的使用示例，希望从实际应用上帮助大家理解Docker的优势，同时也对自己的Docker使用进行简单的记录..." },
        { date:"2017-01-02", title: "浅谈开发模式及架构发展", categories:["架构"], tags:["架构"], abstract:"一、传统开发模式 传统的开发模式基本一般是重服务端的开发方式，大部分工作都在服务端执行，然后返回到客户端（通常是HTML）。以Asp.net MVC为例，如下图： #1 根据请求的路由定位到对应的Controller的对应的Action..." },
{ date:"2016-11-04", title: "重新认识了下Entity Framework", categories:["Entity Framework"], tags:["Entity Framework"], abstract:"什么是Entity Framework Entity Framework是一个对象关系映射O/RM框架。 Entity Framework让开发者可以像操作领域对象(domain-specific objects)那样操作关系型数据(relational data)..." }
	];
    var vm = {
    	categories: categories,
    	tags: tags,
    	articles: articles,
        activate: function () {
        }
    };
    return vm;
});