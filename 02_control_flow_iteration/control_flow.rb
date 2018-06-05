# puts "What number are we evaluating?"
# x = gets.chomp
#
# if x.to_i > 0
#   puts "#{x} is positive!"
# else
#   puts "#{x} is negative!"
# end
#
# if 3
#   puts "3 is truthy!"
# else
#   puts "3 is falsy!"
# end
#
# def truthy_or_falsey value
#   # We don't know what `value` is
#   # It could be true, false, or a non-boolean value like 1, "", etc.
#   # Ruby only cares about whether something is truthy or falsey, though.
#   # Let's go look!
#
#   if value
#     # What does inspect do here?
#     # Remove it and see how the output changes.
#     puts "#{value.inspect} is truthy"
#
#     # Instead of calling value.inspect, call value.to_s
#     # How does the output of that look?
#   else
#     puts "#{value.inspect} is falsey"
#   end
# end
#
# [true, false, Object, 0, 1, nil, true, false, "", [1, 2, 3], {}, []].each do |value|
#   truthy_or_falsey(value)
# end
#

# def return_true
#   puts "we looked at a true value"
#   true
# end
#
# def return_false
#   puts "we looked at a false value"
#   false
# end
#
# if return_true || return_false
#   puts "hello world"
# else
#   puts "goodbye world :("
# end

def true_or_3
  true || 3
end

def false_or_3
  false || 3
end

def or_equals_3(variable)
  variable ||= 3
  puts variable
end

or_equals_3(1)

or_equals_3(nil)

or_equals_3(true)

or_equals_3(false)
