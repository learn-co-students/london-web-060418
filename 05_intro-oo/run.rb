# instructors = [
#   {name: 'Steven', hometown: 'Edison, New Jersey', mood: 'dreamy'},
#   {name: 'Dan', hometown: 'Ostroleka, Poland', mood: 'absent'},
#   {name: 'Rishi', hometwon: 'North Brunswick, New Jersey', mood: 'excited'}
# ]
#
# instructors[0][:hometown]

require 'pry'
require_relative 'rescue_bot'


prince = RescueBot.new("Prince Charles III")
lazy = RescueBot.new("Rishi", 5)
hugo = RescueBot.new("Hugo")
steven = RescueBot.new("Steven", 200)

# scenario where there is a cat to be rescued
highest_energy = RescueBot.most_energetic
highest_energy.rescue_cat

Pry.start
