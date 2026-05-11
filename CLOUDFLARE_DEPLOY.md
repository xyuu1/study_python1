# Cloudflare Pages 部署指南

## 🚀 快速开始

### 方式1: GitHub 集成部署（推荐）

1. 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages** → **Create application** → **Pages**
3. 选择 **Connect to Git**
4. 连接你的 GitHub 仓库 `xyuu1/study_python1`
5. 配置构建设置：
   ```
   Build command: pnpm build
   Build output directory: dist
   ```
6. 点击 **Save and Deploy**

### 方式2: 直接上传

1. 构建项目：`pnpm build`
2. 将 `dist` 文件夹拖入 Cloudflare Pages 上传区域

## ❓ 常见问题解决方案

### 问题1: 部署后显示空白页

**原因**: React Router 路由需要服务器端配置

**解决**: 确保以下配置正确
- `vite.config.ts` 中 `base: '/'` ✓ 已配置
- Cloudflare Pages 设置中启用 **Single Page Application (SPA)** 模式

### 问题2: 404 错误

**原因**: 所有路由都应返回 index.html

**解决**: 在 Cloudflare Pages 设置中添加重定向规则，或使用 `_routes.json`

### 问题3: 资源文件加载失败

**原因**: 路径配置问题

**解决**: 
- 已添加 `_headers` 配置文件
- 已添加 `_routes.json` 路由配置

## 📋 项目配置状态

✅ `vite.config.ts` - 已配置 base: '/'
✅ `_headers` - 已创建，配置静态资源头
✅ `_routes.json` - 已创建，配置路由规则
✅ `wrangler.toml` - 已创建，Cloudflare 配置

## 🔧 手动部署命令

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 构建项目
pnpm build

# 部署
wrangler pages deploy dist --project-name=study-python1
```

## 🌐 部署后访问

- Cloudflare 提供: `https://study-python1.pages.dev/`
- 或你绑定的自定义域名

## 📞 获取帮助

如果问题持续，请提供：
- Cloudflare Pages 部署日志
- 浏览器控制台错误信息
- 具体的错误页面截图
