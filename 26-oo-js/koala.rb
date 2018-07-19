class Koala < Mammal

  def initialize(argument)
    @argument = argument
    self
  end

  def make_sound
    self
  end

  def self.flee
    self
  end
end

class Mammal < Animal
end