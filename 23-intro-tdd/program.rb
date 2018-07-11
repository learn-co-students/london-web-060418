def is_palindrome?(word)
  # implement here!
  if word.class != String || word.length == 0
    raise ArgumentError.new("Input must be a string!")
  end

  word_to_check = word.downcase.gsub(" ", "").gsub(/\p{P}/, "")
  word_to_check.reverse == word_to_check
end


# A factorial of a number is num * num-1 * num-2 etc. down to 1
# ex. 5! =  5 * 4 * 3 * 2 * 1  = 120
# 4! = 24 (4 * 3 * 2 * 1)
# 3! = 6 (3 * 2 * 1)
# 2! = 2 * 1 = 2
# 1! = 1
def factorial(num)
  if num.class != Fixnum || num < 0 || num > 10079
    raise ArgumentError.new("this bad")
  elsif num == 0
    1
  else
    answer = 1
    while num > 1
      answer *= num
      num -= 1
    end
    answer
  end
end
