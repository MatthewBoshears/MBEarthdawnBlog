---
layout: default
title: Step Deviation Table
nav_exclude: True
permalink: bench_pressing/step_deviation_table
search_exclude: True
---
# Step Deviation Table

<br>
Remember. This excludes explosions. This will be filled in as the values matter. This is just to show how I got my numbers.
<br>
I will add to this as the numbers show up relevant so I don't need to re-calculate the values.
<br>

| Step | Dice Combination   | Average | Standard Deviation | Average + 1 SD | Average - 1 SD |
| ---- | ------------------ | ------- | ------------------ | ------------   | ---------------|
| 8    | 2d6                | 7       | 2.42               | 9              | 5              |  
| 9    | 1d8+1d6            | 8       | 2.87               | 11             | 5              |  
| 10   | 1d10+1d6           | 9       | 3.34               | 12             | 6              |  
| 11   | 1d10+1d8           | 10      | 3.67               | 14             | 6              |  
| 12   | 2d10               | 11      | 4.06               | 15             | 7              |  
| 13   | 1d12+1d10          | 12      | 4.49               | 16             | 8              |  
| 14   | 1d20+1d4           | 13      | 5.87               | 19             | 7              |  
| 15   | 1d20+1d6           | 14      | 6.01               | 20             | 8              |  
| 16   | 1d20+1d8           | 15      | 6.20               | 21             | 9              |  
| 17   | 1d20+1d10          | 16      | 6.44               | 22             | 10             |  
| 18   | 1d20+1d12          | 17      | 6.72               | 24             | 10             | 
| 19   | 1d20+2d6           | 17.5    | 6.25               | 24             | 11             | 
| 20   | 1d20+1d8+1d6       | 18.5    | 6.44               | 25             | 12             | 
| 21   | 1d20+1d10+1d6      | 19.5    | 6.66               | 26             | 13             | 
| 22   | 1d20+1d10+1d8      | 20.5    | 6.84               | 27             | 13             | 
| 23   | 1d20+2d10          | 21.5    | 7.05               | 29             | 14             | 
| 24   | 1d20+1d12+1d10     | 22.5    | 7.31               | 30             | 15             | 
| 25   | 1d20+1d10+1d8+1d4  | 23      | 6.93               | 29             | 17             | 
| 28   | 1d20+2d10+1d8      | 26      | 7.42               | 33             | 19             | 
| 29   | 1d20+1d12+1d10+1d8 | 27      | 7.66               | 35             | 19             | 
| 31   | 1d20+1d10+2d8+1d6  | 28.5    | 7.41               | 36             | 21             | 
| 33   | 1d20+2d10+2d8      | 30.5    | 7.76               | 38             | 23             | 
| 34   | 1d20+3d10+1d8      | 31.5    | 7.95               | 39             | 24             | 
| 36   | 2d20+1d10+1d8+1d4  | 33.5    | 9.01               | 42             | 24.5           | 
| 39   | 2d20+2d10+1d8      | 36.5    | 9.39               | 46             | 27             |

<br>
Put the following into Anydice:
```
output 2d6 \step 8\
output 1d8+1d6 \step 9\
output 1d10+1d6 \step 10\
output 1d10+1d8 \step 11\
output 2d10 \step 12\
output 1d12+1d10 \step 13\
output 1d20+1d4 \step 14\
output 1d20+1d6 \step 15\
output 1d20+1d8 \step 16\
output 1d20+1d10 \step 17\
output 1d20+1d12 \step 18\
output 1d20+2d6 \step 19\
output 1d20+1d8+1d6 \step 20\
output 1d20+1d10+1d8 \step 22\
output 1d20+2d10 \step 23\
output 1d20+1d12+1d10 \step 24\
output 1d20+1d10+1d8+1d4 \step 25\
output 1d20+2d10+1d8 \step 28\
output 1d20+1d12+1d10+1d8 \step 29\
output 1d20+1d10+2d8+1d6 \step 31\
output 1d20+2d10+2d8 \step 33\
output 1d20+3d10+1d8 \step 34\
output 2d20+1d10+1d8+1d4 \step 36\
output 2d20+2d10+1d8 \step 39\
```