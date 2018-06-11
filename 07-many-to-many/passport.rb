class Passport
  attr_reader :citizen, :country

  ALL = []

  def initialize(citizen, country)
    @citizen = citizen
    @country = country

    ALL << self
  end

  def self.all
    ALL
  end
end
