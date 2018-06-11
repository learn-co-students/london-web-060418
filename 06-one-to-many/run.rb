require 'pry'
require_relative 'user'
require_relative 'tweet'


require_relative 'campus'

# rishi = User.new("rishi", "London")
# steven = User.new("steven", "Bahamas")
# dan = User.new("dan", "Mozambique")
#
# rishi.post_tweet("hello london")
# steven.post_tweet("sunny day in the bahams", -1)
# dan.post_tweet("I cant speak portugese", 2)
#
# rishi.post_tweet("wow the weather here is beautiful", 3)


london = Campus.new("London", "UK")
mhtn = Campus.new("Manhattan", "US")
a_labs = Campus.new("Brooklyn", "US")
dc = Campus.new("Washington, D.C.", "US")

london.add_cohort("london-web-060418", 8)

mhtn.add_cohort("Arrested Developers", 27)
mhtn.add_cohort("RSpect", 14)
mhtn.add_cohort("Git off my lawn", 22)

a_labs.add_cohort("dumbo-web-060418", 16)
a_labs.add_cohort("dumbo-web-031218", 20)

dc.add_cohort("dc-web-060418", 20)


Pry.start
