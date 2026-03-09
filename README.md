# my-first-codex-project

这是一个**最简版个人介绍网页**示例，适合零基础入门。

## 1) 项目文件结构

在项目根目录创建 3 个文件：

- `index.html`：网页结构（放文字、按钮）
- `style.css`：网页样式（颜色、间距、排版）
- `script.js`：网页交互（点击按钮后显示一句话）

```
my-first-codex-project/
├─ index.html
├─ style.css
└─ script.js
```

## 2) 每个文件怎么创建

你可以用任意编辑器（比如 VS Code）创建文件：

1. 打开项目文件夹 `my-first-codex-project`
2. 新建文件 `index.html`
3. 新建文件 `style.css`
4. 新建文件 `script.js`
5. 把对应代码分别粘贴到各自文件里（不要放错）

## 3) 代码放在哪里

- `index.html` 放网页主结构代码
- `style.css` 放样式代码
- `script.js` 放按钮点击逻辑

`index.html` 里这两行负责“连接”另外两个文件：

```html
<link rel="stylesheet" href="style.css" />
<script src="script.js"></script>
```

## 4) 如何运行

### 方法 A（最简单）

直接双击 `index.html`，浏览器就会打开页面。

### 方法 B（推荐）

如果你用 VS Code，可以安装 **Live Server** 插件：

1. 右键 `index.html`
2. 选择 **Open with Live Server**
3. 浏览器会自动打开并支持保存后自动刷新

## 5) 如果报错，怎么排查（新手版）

按下面顺序检查：

1. **文件名是否完全一致**
   - 必须是 `index.html`、`style.css`、`script.js`
   - 注意不要变成 `style.css.txt`

2. **路径是否写对**（在 `index.html`）
   - `href="style.css"`
   - `src="script.js"`

3. **浏览器控制台是否报错**
   - 按 `F12` 打开开发者工具
   - 看 `Console` 里红色报错信息

4. **JavaScript 代码是否拼写错误**
   - `getElementById('helloBtn')` 的 `helloBtn` 必须和 HTML 中按钮 id 一样

5. **保存后是否刷新**
   - 手动刷新页面（`Ctrl + R` 或 `Cmd + R`）

## 6) 下一步可以加什么（先不复杂）

当你跑通这个最简版后，再逐步加：

- 个人头像图片
- 你的兴趣列表
- 你的联系方式

> 建议一次只加一个小功能，改完就运行测试，学习效果最好。
