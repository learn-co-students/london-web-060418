require 'pry'
require_relative 'citizen'
require_relative 'country'
require_relative 'passport'

rishi = Citizen.new("Rishi", 1957)
steven = Citizen.new("Steven", 1990)
allegra = Citizen.new("Allegra", 1950)
gabriel = Citizen.new("Gabriel", 2010)
jigar = Citizen.new("Jigar", 1995)

usa = Country.new("United States of America", "North America")
india = Country.new("India", "Asia")
lithuania = Country.new("Lithuania", "Europe")
uk = Country.new("The United Kingdom", "Europe")

usa.naturalize_citizen(rishi)
usa.naturalize_citizen(steven)

india.naturalize_citizen(rishi)
india.naturalize_citizen(jigar)

lithuania.naturalize_citizen(allegra)

uk.naturalize_citizen(allegra)
uk.naturalize_citizen(gabriel)


Pry.start
