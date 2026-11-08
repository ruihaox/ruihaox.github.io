---
title: "科研笔记示例：文字与公式"
date: 2026-11-06 09:00:00 -0800
categories: [research]
tags: [数学, 阅读笔记]
description: "一页中文、数学公式与代码的排版示例。"
math: true
demo: true
---
这是一篇排版示例，演示中文叙述与数学公式如何放在同一页里。

## 从一个定义开始

考虑实数轴上的概率密度 $$p(x)$$。它满足 $$p(x)\geq 0$$，并且有归一化条件：

$$
\int_{-\infty}^{\infty} p(x)\,\mathrm{d}x = 1.
$$

随机变量 $$X$$ 的期望，在相应积分绝对收敛时，可以写成：

$$
\mathbb{E}[X] = \int_{-\infty}^{\infty} x\,p(x)\,\mathrm{d}x.
$$

## 留下推导过程

对于离散情形，若 $$X$$ 在 $$n$$ 个值上均匀分布，则

$$
\begin{aligned}
\mathbb{E}[X]
&= \sum_{i=1}^{n} x_i\,p_i \\
&= \frac{1}{n}\sum_{i=1}^{n}x_i.
\end{aligned}
$$

**记下一个问题：** 这些条件分别在推导的哪一步被使用？

## 一小段代码

```python
values = [1, 2, 3, 4]
mean = sum(values) / len(values)
print(mean)
```

## 回头再看

可以在这里补充阅读来源、适用条件、未解决的问题，以及以后发现的修正。
