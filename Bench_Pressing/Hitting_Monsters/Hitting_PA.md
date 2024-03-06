---
layout: default
title: Hitting Physical Armor
nav_exclude: True
permalink: bench_pressing/hitting_monsters/hitting_pa
search_exclude: True
---
# Hitting Physical Armor

<br>
This is a "simple" table with the stated goal of killing a monster in 2+.6\*circle attacks.
<br>
Calculate your effective damage with this simple formula: Base Damage + Modifier + (your attack ESR minus To-Hit PD Avg)/2.5
<br>

| Circle   | Dmg Goal | Number of Hits | To-Hit PD Low | To-Hit PD Avg | To-Hit PD High | Unconciousness Avg | Armor Average |
|----------|----------|----------------|---------------|---------------|----------------|--------------------|---------------|
| Circle 1 | 8        | 2.6            | 7             | 9             | 11             | 17                 | 1             |
| Circle 2 | 10       | 3.2            | 8             | 10            | 12             | 27                 | 3             |
| Circle 3 | 12       | 3.8            | 9             | 11            | 12             | 34                 | 4             |
| Circle 4 | 14       | 4.4            | 9             | 11            | 13             | 43                 | 5             |
| Circle 5 | 16       | 5.0            | 10            | 12            | 14             | 49                 | 6             |
| Circle 6 | 19       | 5.6            | 12            | 14            | 16             | 54                 | 8             |
| Circle 7 | 22       | 6.2            | 13            | 14            | 16             | 67                 | 8             |
| Circle 8 | 32       | 6.8            | 9             | 11            | 13             | 86                 | 14            |

<br>
Calculation for Effective Damage Goal:
ceiling((Unconciousness Avg + Armor Average \* (2 +.6\*circle number)) / (2 +.6\*circle number))
<br>
This is a "simple" table with the stated goal of dealing a wound to a monster.
<br>

| Circle   | Dmg Goal | To-Hit PD Low | To-Hit PD Avg | To-Hit PD High | Wound Threshold Avg | Armor Average |
|----------|----------|---------------|---------------|---------------|----------------|--------------------|---------------|
| Circle 1 | 7        | 7             | 9             | 11             | 6                  | 1             |
| Circle 2 | 11       | 8             | 10            | 12             | 8                  | 3             |
| Circle 3 | 14       | 9             | 11            | 12             | 9                  | 4             |
| Circle 4 | 16       | 9             | 11            | 13             | 11                 | 5             |
| Circle 5 | 18       | 10            | 12            | 14             | 12                 | 6             |
| Circle 6 | 20       | 12            | 14            | 16             | 12                 | 8             |
| Circle 7 | 24       | 13            | 14            | 16             | 16                 | 8             |
| Circle 8 | 34       | 9             | 11            | 13             | 20                 | 14            |

<br>
Calculation for Effective Damage Goal:
ceiling(Wound Threshold Avg + Armor Avg)