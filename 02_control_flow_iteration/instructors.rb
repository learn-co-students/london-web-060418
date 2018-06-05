# EXERCISE:
# Define a method called get_names that takes an array of instructors
# and returns just their names.
instructors = [
  {name: 'Steven', hometown: 'Edison, New Jersey', mood: 'dreamy'},
  {name: 'Dan', hometown: 'Ostroleka, Poland', mood: 'absent'},
  {name: 'Rishi', hometown: 'North Brunswick, New Jersey', mood: 'excited'}
]

def get_names(instructors)
  instructors.map do |instructor|
    instructor[:name]
  end
end

def get_hometowns(instructors)
  instructors.map do |instructor|
    instructor[:hometown]
  end
end

def who_is_here(instructors)
  instructors.select { |instructor| instructor[:mood] != 'absent' }
end

present_instructors = who_is_here(instructors)
puts get_hometowns(present_instructors)
