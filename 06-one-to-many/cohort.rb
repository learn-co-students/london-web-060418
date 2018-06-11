class Cohort
  attr_reader :name, :num_students, :campus

  ALL = []

  def initialize(name, num_students, campus)
    @name = name
    @num_students = num_students
    @campus = campus

    ALL << self
  end

  def self.all
    ALL
  end

  def self.most_students
    Cohort.all.max_by do |cohort|
      cohort.num_students
    end
  end

  def self.american_cohorts
    Cohort.all.select do |cohort|
      cohort.campus.country == "US"
    end
  end
end
