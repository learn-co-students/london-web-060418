require_relative 'cohort'

class Campus
  attr_reader :city, :country

  ALL = []

  def initialize(city, country)
    @city = city
    @country = country

    ALL << self
  end

  def add_cohort(name, num_students)
    Cohort.new(name, num_students, self)
  end

  def cohorts
    Cohort.all.select do |cohort|
      cohort.campus == self
    end
  end

  def self.all
    ALL
  end

  def self.most_students
    Campus.all.max_by do |campus|
      campus_student_numbers = campus.cohorts.map do |cohort|
        cohort.num_students
      end
      campus_student_numbers.reduce(:+)
    end
  end

  def self.least_students
    Campus.all.min_by do |campus|
      campus_student_numbers = campus.cohorts.map do |cohort|
        cohort.num_students
      end
      campus_student_numbers.reduce(:+)
    end
  end
end
