---
layout: default
title: Hitting Physical Armor
nav_exclude: True
permalink: bench_pressing/hitting_pa
search_exclude: True
---
# Hitting Physical Armor

<br>
This is a "simple" table with the stated goal of killing a monster in 2+.6*circle attacks.
<br>

| Circle   | Dmg Goal | Number of Hits | To-Hit PD Low | To-Hit PD Avg | To-Hit PD High | Unconciousness Avg | Armor Average |
|----------|----------|----------------|---------------|---------------|----------------|--------------------|---------------|
| Circle 1 | 8        | 2.6            | 7             | 9             | 11             | 17                 | 1             |
| Circle 2 | 12       | 3.2            | 8             | 10            | 12             | 27                 | 3             |
| Circle 3 | 13       | 3.8            | 9             | 11            | 12             | 34                 | 4             |
| Circle 4 | 14       | 4.4            | 9             | 11            | 13             | 43                 | 5             |

<br>
Calculation for Effective Damage Goal:
ceiling((Unconciousness Avg + Armor Average * 3) / (2 +.6*circle number)