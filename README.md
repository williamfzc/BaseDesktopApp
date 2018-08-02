# Base Desktop App

> electron + vue + element UI = excellent desktop app

## 目的

- 在日常工作中，经常需要开发一些小工具用于简化流程以提升开发效率
- 这些小工具通常都比较零碎，需要一个有效的手段将他们聚合在一起，这种手段通常是GUI
- 而GUI的开发是很繁琐的，如果投入很多时间到开发GUI上难免本末倒置。而语言原生的GUI通常都非常丑
- 这套模板针对这种情况被设计出来

## 设计

- electron 将前端技术应用到桌面应用的开发中，利用前端技术开发桌面应用成为可能
- vue 大大降低了前端入门门槛，让其他方向的工程师也能够快速上手
- element UI 作为vue系列中知名的组件库，让工程师也能够独立开发出美观的界面
- node 环境提供了与系统交互的能力，能够整合其他已有的工具

## 使用

推荐使用yarn。当然npm也是可以的。

``` bash
# install dependencies
yarn

# serve with hot reload
yarn run dev

# build electron application for production
yarn run build

