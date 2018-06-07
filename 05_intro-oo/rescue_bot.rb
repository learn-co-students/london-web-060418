class RescueBot
  attr_accessor :name
  attr_reader :energy

  MAX_ENERGY = 200
  MIN_ENERGY = 0

  # also, a class variable looks like this: @@all
  ALL = []
  # ALL.<<(whaever)

  def initialize(name, energy=100)
    @name = name
    if energy > MAX_ENERGY
      @energy = MAX_ENERGY
    elsif energy < MIN_ENERGY
      @energy = MIN_ENERGY
    else
      @energy = energy
    end

    ALL << self
  end

  def rescue_cat
    if @energy - 10 < MIN_ENERGY
      puts "Can't do this. I'm dead. pls charge me"
    else
      @energy -= 10
      puts "#{@name} rescued a cat!"
    end
  end

  def eat
    puts "Don't know how to do that. :("
  end

  def charge
    @energy = [@energy + 50, MAX_ENERGY].min
    # energy can never go greater than MAX_ENERGY
    # if energy exceeds MAX_ENERGY (210), [210,200].min is 200
    # if energy is lower than MAX_ENERGY (180), [180, 200].min is 180
  end

  def enter_the_arena
    puts "#{@name} is now in the arena. Ready for rescue action."
  end

  def self.all
    ALL
  end

  def self.charge_all
    ALL.each do |rescuebot|
      rescuebot.charge
    end
  end

  def self.average_charge
    each_energy = ALL.map do |rb|
      rb.energy
    end
    sum = each_energy.reduce(:+)
    sum / ALL.length
  end

  def self.most_energetic
    ALL.max_by do |rescuebot|
      rescuebot.energy
    end
  end

  def self.who_can_rescue_cats
    ALL.select do |rescuebot|
      rescuebot.energy > 10
    end
  end
end
