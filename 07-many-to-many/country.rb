class Country
  attr_reader :name, :continent

  ALL = []
  # @@all

  def initialize(name, continent)
    @name = name
    @continent = continent

    ALL << self
  end

  def self.all
    ALL
  end

  def naturalize_citizen(citizen)
    Passport.new(citizen, self)
  end

  def passports
    Passport.all.select do |passport|
      passport.country == self
    end
  end

  def citizens
    passports.map do |passport|
      passport.citizen
    end
  end

  def citizens_over_18
    citizens.select do |citizen|
      citizen.birth_year < 2000
    end
  end
end
