# TestTravisCI

[![Build Status](https://www.travis-ci.org/aoxiaoqiang/TestTravisCI.svg?branch=master)](https://www.travis-ci.org/aoxiaoqiang/TestTravisCI)

接入Travis CI 测试

最近才接触前端测试，感觉还是挺有意思的记录下 GitHub项目接入Travis-ci 过程。有错误望指正。自己查阅文档摸索的过程大致如下：

1. 在github创建并完成一个可以待测试的项目。这里的完成是指需要完成基本的项目功能，和测试用例代码。
2. 配置travis-ci能识别读取的配置文件，这样travis-ci接入的时候才能够知道测试时的一些配置。
3. github 和 travis-ci 是个站点，换句话说就是两个东西如果能打通呢。需要用户登录 travis-ci 并授权访问到你的 github 项目并进行相关的项目设置。
4. 接入完成后就可以根据自己的需要来运行写好的测试代码，也可以设置定期任务去跑测试。

[图文说明过程](https://www.jianshu.com/p/8b91d12e31c0)