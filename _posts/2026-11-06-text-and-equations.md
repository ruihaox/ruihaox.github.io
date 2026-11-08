---
title: "Writing mathematical notes"
date: 2026-11-06 09:00:00 -0800
categories: [research]
tags: [mathematics, reading]
description: "An example of prose, LaTeX equations, and code in a research note."
math: true
demo: true
---
This is a sample note. Research notes are collected under **Misc → Notes**, while the Research section on the home page presents research directions and projects.

## Start with a definition

Let $$p(x)$$ be a probability density on the real line. It satisfies $$p(x)\geq 0$$ and the normalization condition

$$
\int_{-\infty}^{\infty}p(x)\,\mathrm{d}x=1.
$$

When the relevant integral is absolutely convergent, the expectation is

$$
\mathbb{E}[X]=\int_{-\infty}^{\infty}x\,p(x)\,\mathrm{d}x.
$$

## Keep the derivation

For a discrete uniform distribution over $$n$$ values,

$$
\begin{aligned}
\mathbb{E}[X]
&=\sum_{i=1}^{n}x_i p_i\\
&=\frac{1}{n}\sum_{i=1}^{n}x_i.
\end{aligned}
$$

## A small calculation

```python
values = [1, 2, 3, 4]
mean = sum(values) / len(values)
print(mean)
```

## Questions to revisit

Which assumptions are needed, and where are they used? Add references, corrections, and open questions here.
