# Jekyll Build Instructions

## 构建错误解决方案

### 问题描述
如果遇到 `exit code 5` 或权限错误，这通常是由于以下原因：

1. **权限问题**：无法写入系统级Ruby gems目录
2. **Ruby版本不兼容**：系统Ruby版本与Bundler版本不匹配
3. **依赖冲突**：github-pages gem版本更新导致依赖冲突

### 解决方案

#### 方案1：使用用户级安装（推荐）

```bash
# 设置bundle路径到项目目录
bundle config set --local path 'vendor/bundle'

# 安装依赖
bundle install --jobs 4 --retry 3

# 构建网站
bundle exec jekyll build --verbose
```

#### 方案2：使用构建脚本

```bash
# 运行构建脚本
./build.sh
```

#### 方案3：GitHub Actions

项目已配置GitHub Actions，会自动处理依赖安装和构建：

- 使用Ruby 3.1
- 自动缓存gems
- 使用用户级安装避免权限问题

### 本地开发

```bash
# 启动开发服务器
bundle exec jekyll serve --destination _site_clean --port 4000

# 或者使用新的构建目录
bundle exec jekyll serve --destination _site_new --port 4002
```

### 故障排除

1. **权限错误**：使用 `vendor/bundle` 路径避免系统级安装
2. **Ruby版本警告**：可以忽略，不影响构建
3. **GitHub API警告**：本地开发时可以忽略

### 文件说明

- `build.sh` - 自动化构建脚本
- `.github/workflows/jekyll.yml` - GitHub Actions配置
- `Gemfile` - 依赖管理
- `_config.yml` - Jekyll配置

### 部署

网站会自动部署到GitHub Pages，无需手动操作。
