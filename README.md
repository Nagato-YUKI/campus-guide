# 校园打卡指南

趣味主题展示站课程作业 —— 发现校园里的每一处美好角落。

## 项目简介

这是一个纯前端静态展示站点，主题为「校园打卡指南」。页面精选了 6 个校园打卡点，每个打卡点配有 AI 生成的场景图片和文字介绍，支持响应式布局和交互动画。

## 技术栈

- HTML5（语义化标签）
- CSS3（CSS 变量、Grid 布局、Flexbox、过渡动画）
- 原生 JavaScript（ES5 兼容写法，无需构建工具）

## 本地运行方法

1. 克隆或下载本项目到本地
2. 用浏览器直接打开 `index.html` 文件即可预览
3. 或使用任意本地静态服务器：

```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .
```

4. 访问 `http://localhost:8080`

## GitHub Pages 部署步骤

1. 在 GitHub 创建新仓库（如 `campus-guide`）
2. 将项目文件推送到仓库：

```bash
git init
git add .
git commit -m "init: 校园打卡指南静态站点"
git branch -M main
git remote add origin https://github.com/你的用户名/campus-guide.git
git push -u origin main
```

3. 进入仓库 **Settings > Pages**
4. Source 选择 **Deploy from a branch**，Branch 选择 `main`，文件夹选择 `/(root)`
5. 保存后等待约 1 分钟，访问 `https://你的用户名.github.io/campus-guide/` 即可

## 项目结构

```
campus-guide/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # 交互逻辑
└── README.md           # 项目说明
```

## 打卡条目

1. 图书馆自习角
2. 操场日落
3. 食堂网红窗口
4. 林荫大道
5. 天台观星点
6. 湖畔晨读亭

## 特性

- 响应式网格布局（桌面 3 列 / 平板 2 列 / 手机 1 列）
- 卡片悬停上浮 + 阴影加深效果
- 点击卡片展开详情（手风琴效果）
- 页面滚动时卡片依次淡入
- 平滑滚动定位
- 图片懒加载
- 减少动画偏好支持（无障碍）

## 许可证

本项目为课程作业，仅供学习交流使用。
