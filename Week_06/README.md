学习笔记: Toy Broswer


### URL --> HTML(parse) --> DOM(css computing) --> DOM with CSS(layout) --> DOM with position(render) --> Bitmap

1. http请求,解析http回应
2. 文本html进行parse初步分析
3. CSS computing对应的css规则,**叠加覆盖**,计算出来
4. 带css属性的dom树
5. **layout,排版,布局** 盒的位置计算出来,css生成的盒.
6. 渲染(render),画到一张图片上,硬件api接口,展示到屏幕

------------

### 有限状态机

1. 每个状态都是一个机器,机器互相**解耦**的,强有力的抽象机制
2. 每个状态机都可以做计算,存储,输出
3. 所有的机器接受的**输入是一致的**
4. 机器本身没有状态,如果用函数表示的话,就是**纯函数(无副作用)**
5. 每个机器都知道下一个状态
6. 每个机器都有确定的下一个状态(摩尔状态机 Moore) 编写代码时就决定了,不能改变·
7. 每个机器根据输入决定下一个状态( Mealy) 

-----------

### http协议解析

1. IOS-OSI 七层网络模型: 物理层, 数据链路, 网络, 传输, 会话, 表示, 应用(World wide Web 万维网)
2. 物理层, 数据链路  俗称:4g, 5g, wifi    require('net')
3. 网络层: Internet(因特网) IP协议
4. 传输协议: **TCP** 可靠传输, UDP
5. 会话, 表示, 应用: 认为是HTTP  三合一  require('http');

### TCP/IP 基础知识
1. 流: 没有明显分割单位的数据(保证前后顺序正确)
2. 端口: 从网卡取数据(数据包)
3. IP地址: 唯一的标识每一个联入Internet的设备, 大型路由节点,逐级上行
4. libnet/libpcap (c++库)  构造ip包并发送; 从网卡抓ip包

### HTTP: Request + Response 全双工
1. Request  必须先由客户端发起request,然后服务端返回response(两者必须是一一对应)
2. Response  

### HTTP request部分
1. 文本型协议,与二进制协议相对. 所有的内容都是字符串(Unicode, ASCII 编码)
2. request line 包含三部分: method (POST /HTTP/1.1) headers (Host: 127.0.0.1 Content-Type: application/x-www-form-urlencoded)
    body (field1=aaa&code=x%3D1)
3. 

