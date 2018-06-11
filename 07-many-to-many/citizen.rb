class Citizen
  attr_reader :name, :birth_year

  ALL = []

  def initialize(name, birth_year)
    @name = name
    @birth_year = birth_year

    ALL << self
  end

  def self.all
    ALL
  end

  def passports
    Passport.all.select do |passport|
      passport.citizen == self
    end
    # Tweet.all.select do |tweet|
    #   tweet.user == self
    # end
  end

  def countries
    passports.map do |passport|
      passport.country
    end
  end

  def surrender_citizenship(country)
    passport_to_revoke = passports.find do |passport|
      passport.country == country
    end

    if passport_to_revoke
      Passport.all.delete(passport_to_revoke)
    end
  end

  def self.european_citizens
    relevant_passports = Passport.all.select do |passport|
      passport.country.continent == "Europe"
    end

    citizens = relevant_passports.map do |passport|
      passport.citizen
    end

    citizens.uniq
  end

  def self.dual_citizens
    Citizen.all.select do |citizen|
      citizen.passports.length > 1
    end
  end
end
