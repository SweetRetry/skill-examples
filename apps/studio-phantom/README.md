# Studio Phantom

独立游戏工作室官网 — 赛博朋克暗夜美学。

## 项目定位

| 维度 | 描述 |
|------|------|
| **项目类型** | 游戏工作室官网（混合型：品牌展示 + 玩家数据仪表盘 + 开发日志） |
| **目标受众** | 玩家/消费者 + 游戏开发者（混合） |
| **品牌调性** | 高级/电影感 — 赛博朋克暗夜 |
| **信息密度** | 差异大 — 游戏展示（低）、玩家仪表盘（高）、开发日志（中） |
| **主要交互** | 浏览/发现（游戏展示）+ 操作数据（仪表盘）+ 阅读（开发日志） |

## Design Director 策略

### 风格配比

**Expressive 80% + Swiss 20%**

- **Expressive**：游戏展示、Landing、DevLog 的影院级沉浸体验
- **Swiss**：玩家数据仪表盘的高密度数据处理

对标诊断矩阵中的 **"音乐/媒体应用"** 配方（游戏工作室 ≈ 创意媒体）。

## 路由结构

路由结构:
├── / (Landing / 游戏展示) — Expressive
│   ├── Nav — Expressive
│   ├── Hero — Expressive (全屏影院)
│   └── 游戏列表预览 — Expressive (Bento 画廊)
│
├── /games (游戏列表) — Expressive
│   └── 游戏卡片网格 — Expressive
│
├── /dashboard (玩家数据) — Swiss
│   └── KPI、数据表格、图表 — Swiss
│
├── /devlog (开发日志) — Expressive
│   └── 文章列表 + 内容 — Expressive
│
└── 共享基础:
    ├── oklch 色彩空间
    ├── 统一 --primary 品牌色
    └── 暗色全局基调

```
