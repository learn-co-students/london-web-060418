# Control Flow + Iteration

### If/else
#### Short Circuiting
### Truthy/falsy

### Arrays & Hashes



### Iteration Exercises

```ruby

# EXERCISE:
# Define a method called get_names that takes an array of instructors
# and returns just their names.
instructors = [
  {name: 'Steven', hometown: 'Edison, New Jersey', mood: 'dreamy'},
  {name: 'Dan', hometown: 'Ostroleka, Poland', mood: 'absent'},
  {name: 'Rishi', hometwon: 'North Brunswick, New Jersey', mood: 'excited'}
]

```


```ruby
# What do the following return?

arr = (1..100).to_a

arr.map do |num|
  num.even?
end

arr.select do |num|
  7
end
```
