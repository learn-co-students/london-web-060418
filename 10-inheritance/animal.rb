require 'pry'

class Animal
  attr_accessor :type, :species, :num_legs, :num_eyes, :has_tail

  ALL = []

  def initialize(type, species, num_legs, num_eyes, has_tail)
    @type = type
    @species = species
    @num_legs = num_legs
    @num_eyes = num_eyes
    @has_tail = has_tail

    ALL << self
  end

  def walk
    "Walkin on #{num_legs} legs!"
  end

  def see
    "I spy with my #{num_eyes} eyes!"
  end

  def wag
    if has_tail
      "Wagging my tail!"
    else
      "Can't do that"
    end
  end

  def speak
    "Hello"
  end
end

class Mammal < Animal

  def initialize(species, num_legs, has_tail)
    super("Mammal", species, num_legs, 2, has_tail)
  end
end


# dog inherits from animal
# dog extends animal
# dog is a subclass of animal
# dog is a child class of animal
# animal is a parent class of dog
# animal is a superclass of dog
class Dog < Mammal
  def initialize
    super("Dog", 4, true)
  end

  def bark
    "woof!!!"
  end

  def speak
    bark
  end
end

class Cat < Mammal
  def initialize
    super("Cat", 4, true)
  end

  def meow
    "meow"
  end

  def speak
    "#{super} #{meow}"
  end
end

class Human < Mammal
  def initialize()
    super("Human", 2, false)
  end
end

class Spider < Animal
  def initialize
    super("Arachnid", "Spider", 8, 8, false)
  end
end

dog = Dog.new
feline = Cat.new
rishi = Human.new
anansi = Spider.new

# Animal
  # Mammal
    # Dog
    # Cat
    # Human
  # Spider

Pry.start
