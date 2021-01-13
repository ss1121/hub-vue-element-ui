# vue2空项目  

这是是`aotoo-hub`的子项目，需要在aotoo-hub脚手架的环境下运行。本项目是一个vue2的远程空项目，用于演示或快速搭建vue2的本地开发环境，仅包含vue及vue-router的基础代码及简单演示  

[aotoo-hub介绍](http://www.agzgz.com)

## 安装  

### 全局安装命令行工具

```bash
npm install aotoo-cli -g
aotoo -V # 检查命令行工具是否已经安装
```

### 构建工作空间  

创建aotoo-hub的工作空间，该工作空间可用于创建react/vue/小程序的本地项目及安装远程项目  

```bash
aotoo init workspacename  # 创建工作空间目录
cd workspacename
```

### 远程安装本项目  

安装`hub-vue-element-ui`项目

```bash
aotoo install https://github.com/ss1121/hub-vue-element-ui.git
```

根据提示操作，等待安装完毕，即可在本地运行项目
