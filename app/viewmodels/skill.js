define(['jquery', 'knockout', 'gojs'], function ($, ko) {
    var skillOne = [
        { name: "计算机基础", subs: [{ name: "计算机科学导论", level: 75 }, { name: "计算机网络", level: 75 }, { name: "数据结构", level: 80 }, { name: "算法导论", level: 85 }] },
        { name: "数学基础", subs: [{ name: "高等数学", level: 90 }, { name: "离散数学", level: 90 }, { name: "线性代数", level: 80 }, { name: "概率与统计学", level: 90 }] },
        { name: "英语能力", subs: [{ name: "听", level: 70 }, { name: "说", level: 70 }, { name: "读", level: 90 }, { name: "写", level: 90 }] },
        { name: "开发模式/思想", subs: [{ name: "单体架构", level: 90 }, { name: "SOA", level: 10 }, { name: "微服务", level: 85 }, { name: "设计模式", level: 80 }, { name: "CQRS", level: 40 }] },
        { name: "技术展望", subs: [{ name: "人工智能 & 大数据", level: 10 }, { name: "区块链", level: 10 }] }
    ];
    var skillTwo = [
        { name: "开发语言", subs: [{ name: ".Net/.Net Core", level: 95 }, { name: "Java", level: 70 }, { name: "GoLang", level: 10 }, { name: "Python", level: 10 }, { name: "Lua", level: 60 }, { name: "HTML + CSS", level: 80 }, { name: "Javascript", level: 75 }] },
        { name: "数据库", subs: [{ name: "MySql", level: 80 }, { name: "MSSQL", level: 80 }, { name: "Oracle", level: 75 }, { name: "MongoDB", level: 90 }, { name: "SqlLite", level: 20 }] },
        { name: "服务端-开发框架", subs: [{ name: "ASP.NET MVC / WebApi", level: 90 }, { name: "ASP.NET Core MVC / WebApi", level: 90 }, { name: "Spring Boot", level: 70 }] },
        { name: "前端-开发框架", subs: [{ name: "DurandalJs", level: 85 }, { name: "AngularJs", level: 60 }, { name: "VueJs", level: 40 }, { name: "ReactJs", level: 40 }, { name: "Bootstrap(UI)", level: 80 }] }
    ];
    var skillThree = [
        { name: "云原生", subs: [{ name: "DevOps", level: 80 }, { name: "IaaS", level: 80 }, { name: "PaaS", level: 80 }, { name: "SaaS", level: 70 }, { name: "FaaS", level: 60 }, { name: "BaaS", level: 60 }, { name: "持续交付", level: 60 }] },
        {
            name: "中间件", subs: [{ name: "Kubernetes(微服务/容器治理)", level: 85 }, { name: "Docker Swarm(微服务/容器治理)", level: 65 }, { name: "Istio(Service Mesh)", level: 60 }, { name: "Redis(缓存)", level: 70 }, { name: "RabbitMQ(消息队列)", level: 85 },
            { name: "Kafka(消息队列)", level: 60 }, { name: "RocketMQ(消息队列)", level: 60 }, { name: "Elastic Search(全文检索)", level: 60 }, { name: "LogStash/FileBeat(日志收集)", level: 70 }, { name: "Fluentd(日志收集)", level: 70 },
            { name: "Kibana(看板)", level: 70 }, { name: "Zipkin(调用链)", level: 70 }, { name: "Kong(网关)", level: 85 }, { name: "Eureka(服务注册发现)", level: 70 }, { name: "ConfigServer(配置管理)", level: 75 }, { name: "Consul(服务注册发现&配置管理)", level: 60 }]
        }
    ];
    var data = {
        nodeDataArray: [
            { key: "Skill", category: "root", name: "技能树" },

            { key: "Skill-English", category: "level1", name: "英语能力", level: "良好", isTreeExpanded: false, parent: "Skill" },
            { key: "Skill-English-Listen", category: "leaf", name: "听", level: 70, parent: "Skill-English" },
            { key: "Skill-English-Speak", category: "leaf", name: "说", level: 70, parent: "Skill-English" },
            { key: "Skill-English-Read", category: "leaf", name: "读", level: 90, parent: "Skill-English" },
            { key: "Skill-English-Write", category: "leaf", name: "写", level: 90, parent: "Skill-English" },

            { key: "Skill-ComputerBasics", category: "level1", name: "计算机基础", level: "一般/良好", isTreeExpanded: false, parent: "Skill" },
            { key: "Skill-ComputerBasics-Listen", category: "leaf", name: "计算机科学导论", level: 75, parent: "Skill-ComputerBasics" },
            { key: "Skill-ComputerBasics-Speak", category: "leaf", name: "计算机网络", level: 75, parent: "Skill-ComputerBasics" },
            { key: "Skill-ComputerBasics-Read", category: "leaf", name: "数据结构", level: 80, parent: "Skill-ComputerBasics" },
            { key: "Skill-ComputerBasics-Write", category: "leaf", name: "算法导论", level: 85, parent: "Skill-ComputerBasics" },

            { key: "Skill-MathBasics", category: "level1", name: "数学基础", level: "良好", isTreeExpanded: false, parent: "Skill" },
            { key: "Skill-MathBasics-Higher", category: "leaf", name: "高等数学", level: 90, parent: "Skill-MathBasics" },
            { key: "Skill-MathBasics-Discrete", category: "leaf", name: "离散数学", level: 90, parent: "Skill-MathBasics" },
            { key: "Skill-MathBasics-Linear", category: "leaf", name: "线性代数", level: 80, parent: "Skill-MathBasics" },
            { key: "Skill-MathBasics-Statistics", category: "leaf", name: "概率与统计学", level: 90, parent: "Skill-MathBasics" },

            { key: "Skill-DevLanguage", category: "level1", name: "开发语言", level: "良好/优秀", isTreeExpanded: false, parent: "Skill" },
            { key: "Skill-DevLanguage-DotNet", category: "leaf", name: ".Net/.Net Core", level: 95, parent: "Skill-DevLanguage" },
            { key: "Skill-DevLanguage-Java", category: "leaf", name: "Java", level: 70, parent: "Skill-DevLanguage" },
            { key: "Skill-DevLanguage-GoLang", category: "leaf", name: "GoLang", level: 10, parent: "Skill-DevLanguage" },
            { key: "Skill-DevLanguage-Python", category: "leaf", name: "Python", level: 10, parent: "Skill-DevLanguage" },
            { key: "Skill-DevLanguage-Lua", category: "leaf", name: "Lua", level: 60, parent: "Skill-DevLanguage" },
            { key: "Skill-DevLanguage-HTML+CSS", category: "leaf", name: "HTML + CSS", level: 80, parent: "Skill-DevLanguage" },
            { key: "Skill-DevLanguage-Javascript", category: "leaf", name: "Javascript", level: 75, parent: "Skill-DevLanguage" },

            { key: "Skill-Database", category: "level1", name: "数据库", level: "一般/良好", isTreeExpanded: false, parent: "Skill" },
            { key: "Skill-Database-MySql", category: "leaf", name: "MySql", level: 80, parent: "Skill-Database" },
            { key: "Skill-Database-MSSQL", category: "leaf", name: "MSSQL", level: 80, parent: "Skill-Database" },
            { key: "Skill-Database-Oracle", category: "leaf", name: "Oracle", level: 75, parent: "Skill-Database" },
            { key: "Skill-Database-MongoDB", category: "leaf", name: "MongoDB", level: 90, parent: "Skill-Database" },
            { key: "Skill-Database-SqlLite", category: "leaf", name: "SqlLite", level: 20, parent: "Skill-Database" },

            { key: "Skill-DevPattern", category: "level1", name: "开发模式/思想", level: "良好", isTreeExpanded: false, parent: "Skill" },
            { key: "Skill-DevPattern-Monoliths", category: "leaf", name: "单体架构", level: 90, parent: "Skill-DevPattern" },
            { key: "Skill-DevPattern-SOA", category: "leaf", name: "SOA", level: 10, parent: "Skill-DevPattern" },
            { key: "Skill-DevPattern-MicroService", category: "leaf", name: "微服务", level: 85, parent: "Skill-DevPattern" },
            { key: "Skill-DevPattern-DesignPattern", category: "leaf", name: "设计模式", level: 80, parent: "Skill-DevPattern" },
            { key: "Skill-DevPattern-CQRS", category: "leaf", name: "CQRS", level: 40, parent: "Skill-DevPattern" },

            { key: "Skill-DevFramework", category: "level1", name: "开发框架", level: "良好", isTreeExpanded: false, parent: "Skill" },
            { key: "Skill-DevFramework-Backend", category: "level2", name: "服务端", level: "良好/优秀", isTreeExpanded: false, parent: "Skill-DevFramework" },
            { key: "Skill-DevFramework-Backend-ASP.Net", category: "leaf", name: "ASP.NET MVC / WebApi", level: 90, parent: "Skill-DevFramework-Backend" },
            { key: "Skill-DevFramework-Backend-ASP.NetCore", category: "leaf", name: "ASP.NET Core MVC / WebApi", level: 90, parent: "Skill-DevFramework-Backend" },
            { key: "Skill-DevFramework-Backend-SpringBoot", category: "leaf", name: "Spring Boot", level: 70, parent: "Skill-DevFramework-Backend" },

            { key: "Skill-DevFramework-Frontend", category: "level2", name: "前端", level: "一般/良好", isTreeExpanded: false, parent: "Skill-DevFramework" },
            { key: "Skill-DevFramework-Frontend-DurandalJs", category: "leaf", name: "DurandalJs", level: 85, parent: "Skill-DevFramework-Frontend" },
            { key: "Skill-DevFramework-Frontend-AngularJs", category: "leaf", name: "AngularJs", level: 60, parent: "Skill-DevFramework-Frontend" },
            { key: "Skill-DevFramework-Frontend-VueJs", category: "leaf", name: "VueJs", level: 40, parent: "Skill-DevFramework-Frontend" },
            { key: "Skill-DevFramework-Frontend-ReactJs", category: "leaf", name: "ReactJs", level: 40, parent: "Skill-DevFramework-Frontend" },
            { key: "Skill-DevFramework-Frontend-Bootstrap", category: "leaf", name: "Bootstrap(UI)", level: 80, parent: "Skill-DevFramework-Frontend" },

            { key: "Skill-CloudNative", category: "level1", name: "云原生", level: "良好", isTreeExpanded: false, parent: "Skill" },
            { key: "Skill-CloudNative-DevOps", category: "leaf", name: "DevOps", level: 80, parent: "Skill-CloudNative" },
            { key: "Skill-CloudNative-IaaS", category: "leaf", name: "IaaS", level: 80, parent: "Skill-CloudNative" },
            { key: "Skill-CloudNative-PaaS", category: "leaf", name: "PaaS", level: 80, parent: "Skill-CloudNative" },
            { key: "Skill-CloudNative-SaaS", category: "leaf", name: "SaaS", level: 70, parent: "Skill-CloudNative" },
            { key: "Skill-CloudNative-FaaS", category: "leaf", name: "FaaS", level: 60, parent: "Skill-CloudNative" },
            { key: "Skill-CloudNative-BaaS", category: "leaf", name: "BaaS", level: 60, parent: "Skill-CloudNative" },
            { key: "Skill-CloudNative-ContinuousDelivery", category: "leaf", name: "持续交付", level: 60, parent: "Skill-CloudNative" },

            { key: "Skill-Middleware", category: "level1", name: "中间件", level: "良好", isTreeExpanded: false, parent: "Skill" },
            { key: "Skill-Middleware-Kubernetes", category: "leaf", name: "Kubernetes(微服务/容器治理)", level: 85, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-DockerSwarm", category: "leaf", name: "Docker Swarm(微服务/容器治理)", level: 65, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-Istio", category: "leaf", name: "Istio(Service Mesh)", level: 60, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-Redis", category: "leaf", name: "Redis(缓存)", level: 70, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-RabbitMQ", category: "leaf", name: "RabbitMQ(消息队列)", level: 85, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-Kafka", category: "leaf", name: "Kafka(消息队列)", level: 60, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-RocketMQ", category: "leaf", name: "RocketMQ(消息队列)", level: 60, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-ElasticSearch", category: "leaf", name: "Elastic Search(全文检索)", level: 60, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-LogStash", category: "leaf", name: "LogStash/FileBeat(日志收集)", level: 70, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-Fluentd", category: "leaf", name: "Fluentd(日志收集)", level: 70, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-Kibana", category: "leaf", name: "Kibana(看板)", level: 70, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-Zipkin", category: "leaf", name: "Zipkin(调用链)", level: 70, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-Kong", category: "leaf", name: "Kong(网关)", level: 85, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-Eureka", category: "leaf", name: "Eureka(服务注册发现)", level: 70, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-ConfigServer", category: "leaf", name: "ConfigServer(配置管理)", level: 75, parent: "Skill-Middleware" },
            { key: "Skill-Middleware-Consul", category: "leaf", name: "Consul(服务注册发现&配置管理)", level: 60, parent: "Skill-Middleware" },

            { key: "Skill-prospect", category: "level1", name: "技术展望", level: "进行中", isTreeExpanded: false, parent: "Skill" },
            { key: "Skill-prospect-BigData", category: "leaf", name: "人工智能 & 大数据", level: 10, parent: "Skill-prospect" },
            { key: "Skill-prospect-BlockChain", category: "leaf", name: "区块链", level: 10, parent: "Skill-prospect" }
        ]
    };

    function getStrokeByLevel(level) {
        if (level >= 80) {
            return "#D85656";
        }
        else if (level >= 60) {
            return "#AED5EF";
        } else {
            return "#666666";
        }
    }

    function getFillByLevel(level) {
        if (level >= 80) {
            return "#F5D7D7";
        }
        else if (level >= 60) {
            return "#E0F2FC";
        } else {
            return "#E4E4E4";
        }
    }

    function nodeDoubleClick(e, obj) {
        var part = obj.part;
        var cmd = obj.part.diagram.commandHandler;

        if (part.isTreeExpanded) {
            if (!cmd.canCollapseTree(part)) return;
        } else {
            if (!cmd.canExpandTree(part)) return;
        }

        e.handled = true;

        if (part.isTreeExpanded) {
            cmd.collapseTree(part);
        } else {
            cmd.expandTree(part);
        }
    }

    var GO = go.GraphObject.make;

    var toolTipA = getToolTipA();
    function getToolTipA() {
        return GO(go.Adornment, "Auto",
            GO(go.Shape, { fill: "#FFFFCC" }),
            GO(go.TextBlock, { margin: 4 }, new go.Binding("text", "name"))
        );
    }

    var toolTipB = getToolTipB();
    function getToolTipB() {
        return GO(go.Adornment, "Auto",
            GO(go.Shape, { fill: "#FFFFCC" }),
            GO(go.TextBlock, { margin: 4 }, new go.Binding("text", "name", function (name) { return name + " - 双击展开/收起"; }))
        );
    }

    var rootNode = getRootNode();
    function getRootNode() {
        return GO(go.Node, "Auto", { locationSpot: go.Spot.Center, toolTip: toolTipA }, { doubleClick: nodeDoubleClick },
            GO(go.Shape, "RoundedRectangle", { fill: "#FFFFFF", stroke: "#8AB2E2", strokeWidth: 2, width: 150, height: 50 }),
            GO(go.TextBlock, { font: "bold 20px Arial, 微软雅黑", stroke: "#8AB2E2", margin: 6 }, new go.Binding("text", "name"))
        );
    }

    var level1Node = getLevel1Node();
    function getLevel1Node() {
        return GO(go.Node, "Auto", { deletable: false, toolTip: toolTipB }, { doubleClick: nodeDoubleClick }, new go.Binding("isTreeExpanded", "isTreeExpanded"),
            GO(go.Shape, "Rectangle", { fill: null, stroke: "#8AB2E2" }),
            GO(go.Panel, "Vertical", { width: 100, defaultStretch: go.GraphObject.Fill },
                GO(go.Panel, "Auto",
                    GO(go.Shape, "Rectangle", { fill: "#8AB2E2", stroke: "#8AB2E2", height: 20 }),
                    GO(go.TextBlock, { font: "14px Arial, 微软雅黑", stroke: "#EEEEEE", textAlign: "center" }, new go.Binding("text", "name"))
                ),
                GO(go.Panel, "Auto",
                    GO(go.Shape, "Rectangle", { fill: "#FFFFFF", stroke: null, height: 24 }),
                    GO(go.Panel, "Horizontal",
                        GO(go.TextBlock, "--", { font: "15px Arial, 微软雅黑", stroke: "#8AB2E2" }, new go.Binding("text", "level"))
                    )
                )
            ),
        );
    }

    var level2Node = getLevel2Node();
    function getLevel2Node() {
        return GO(go.Node, "Auto", { deletable: false, toolTip: toolTipB }, { doubleClick: nodeDoubleClick }, new go.Binding("isTreeExpanded", "isTreeExpanded"),
            GO(go.Shape, "Rectangle", { fill: null, stroke: "#8AB2E2" }),
            GO(go.Panel, "Vertical", { width: 100, defaultStretch: go.GraphObject.Fill },
                GO(go.Panel, "Auto",
                    GO(go.Shape, "Rectangle", { fill: "#8AB2E2", stroke: "#8AB2E2", height: 20 }),
                    GO(go.TextBlock, { font: "14px Arial, 微软雅黑", stroke: "#EEEEEE", textAlign: "center" }, new go.Binding("text", "name"))
                ),
                GO(go.Panel, "Auto",
                    GO(go.Shape, "Rectangle", { fill: "#FFFFFF", stroke: null, height: 22 }),
                    GO(go.Panel, "Horizontal",
                        GO(go.TextBlock, "--", { font: "14px Arial, 微软雅黑", stroke: "#8AB2E2" }, new go.Binding("text", "level"))
                    )
                )
            ),
        );
    }

    var leafNode = getLeafNode();
    function getLeafNode() {
        return GO(go.Node, "Auto", { deletable: false, toolTip: toolTipA },
            GO(go.Shape, "Rectangle", { fill: null, stroke: null }, new go.Binding("stroke", "level", getStrokeByLevel)),
            GO(go.Panel, "Vertical", { width: 100, defaultStretch: go.GraphObject.Fill },
                GO(go.Panel, "Auto",
                    GO(go.Shape, "Rectangle", { fill: null, stroke: null, height: 20 }, new go.Binding("fill", "level", getFillByLevel)),
                    GO(go.TextBlock, { font: "12px Arial, 微软雅黑", stroke: "#666666", margin: go.Margin.parse("0 5 0 5"), textAlign: "center", wrap: go.TextBlock.None, overflow: go.TextBlock.OverflowEllipsis }, new go.Binding("text", "name"))
                ),
                GO(go.Panel, "Auto",
                    GO(go.Shape, "Rectangle", { fill: "#FFFFFF", stroke: null, height: 22 }),
                    GO(go.Panel, "Horizontal",
                        GO(go.TextBlock, "--", { font: "12px Arial, 微软雅黑", stroke: null }, new go.Binding("stroke", "level", getStrokeByLevel), new go.Binding("text", "level"))
                    )
                )
            ),
        );
    }

    var link = getLink();
    function getLink() {
        return GO(go.Link, { routing: go.Link.AvoidsNodes, corner: 20, /*curve: go.Link.Bezier, toEndSegmentLength: 40, fromEndSegmentLength: 10,*/ deletable: false },
            GO(go.Shape, { strokeWidth: 2, stroke: "#8AB2E2" })
        );
    }

    var vm = {
        isTreeVisible: ko.observable(),
        skillOne: skillOne,
        skillTwo: skillTwo,
        skillThree: skillThree,
        activate: function () {
            vm.isTreeVisible(true);
        },
        attached: function () {
            var diagram = GO(go.Diagram, "diagram", {
                initialDocumentSpot: go.Spot.Center,
                initialViewportSpot: go.Spot.Center,
                "undoManager.isEnabled": true,
                layout: GO(go.TreeLayout, { angle: 90 })
            });

            var nodeMap = new go.Map("string", go.Node);
            nodeMap.add("root", rootNode);
            nodeMap.add("level1", level1Node);
            nodeMap.add("level2", level2Node);
            nodeMap.add("leaf", leafNode);
            diagram.nodeTemplateMap = nodeMap;
            diagram.linkTemplate = link;

            var model = GO(go.TreeModel);
            model.nodeDataArray = data.nodeDataArray;

            diagram.model = model;
            vm.isTreeVisible(false);
        },
        getBarClass: function (index) {
            if (index % 4 === 0) {
                return "progress-bar-danger";
            }
            else if (index % 4 === 1) {
                return "progress-bar-warning";
            }
            else if (index % 4 === 2) {
                return "progress-bar-success";
            }
            else {
                return "progress-bar-primary";
            }
        },
        showTree: function() {
            vm.isTreeVisible(true);
        },
        hideTree: function () {
            vm.isTreeVisible(false);
        }
    };
    return vm;
});