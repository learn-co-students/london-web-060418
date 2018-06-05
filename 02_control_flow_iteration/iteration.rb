#
# for i in 1..10
#   puts i
# end
#
# i = 1
# while i < 11
#   puts i
#   # i += 1
# end

array = [1,2,3,4,5,6,7,8,9,10]

# array.each { |num| puts num }

# each
# for

# array.each do |num|
#   puts num
# end

# collect/map

# Map iterates over the entire array
# runs some code on EACH element, and returns
# the result of that code for EACH element
# in a new array
# new_array = array.map do |num|
#   num * 2
# end

# select

# Select iterates over the entire array,
# runs some code on EACH element, and returns
# ONLY the elements for whom the expression is
# truthy. It returns the original elements, unmodified
# new_array = array.select do |num|
#   num * 2 > 10
# end
#
# puts new_array
# puts array

# find

# found_num = array.find do |num|
#   num % 3 == 0
# end
#
# puts found_num
# puts found_num.class

# delete_if

# new_array = array.delete_if do |num|
#   num % 3 == 0
# end
#
# puts new_array

arr = (1..100).to_a
#
# mapped = arr.map do |num|
#   num.even?
# end
#
# puts mapped


selected = arr.select do |num|
  num == 7
end

puts selected
