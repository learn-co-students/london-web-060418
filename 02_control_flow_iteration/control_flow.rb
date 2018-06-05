def truthy_or_falsey value
  # We don't know what `value` is
  # It could be true, false, or a non-boolean value like 1, "", etc.
  # Ruby only cares about whether something is truthy or falsey, though.
  # Let's go look!

  if value
    # What does inspect do here?
    # Remove it and see how the output changes.
    puts "#{value.inspect} is truthy"

    # Instead of calling value.inspect, call value.to_s
    # How does the output of that look?
  else
    puts "#{value.inspect} is falsey"
  end
end

[true, false, Object, 0, 1, nil, true, false, "", [1, 2, 3], {}].each do |value|
  truthy_or_falsey(value)
end
