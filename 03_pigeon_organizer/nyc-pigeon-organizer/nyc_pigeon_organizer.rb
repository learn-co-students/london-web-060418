require 'pry'
#
# def nyc_pigeon_organizer(data)
#   # write your code here!
#   final = {}
#   data.each do |attribute_type, details|
#     # puts "we would have hit a pry here with the attribute #{attribute}!"
#     details.each do |attribute_name, names|
#       names.each do |name|
#         binding.pry
#       end
#     end
#   end
# end

def add_color_to_pigeon(pigeon, color)
end

def add_pigeon_to_pigeon_list(pigeon_list, name)
end

# Layer 1 - Pigeon name
  # layer 2 - attribute category
    # layer 3 - atribute_value inside an array

def nyc_pigeon_organizer(data)
  pigeon_list = {}
  data.each do |attribute_category, attribute_values|
    attribute_values.each do |attribute_value, names|
      names.each do |name|
        pigeon_list[name] ||= {}
        pigeon_list[name][attribute_category] ||= []
        pigeon_list[name][attribute_category] << attribute_value.to_s
      end
    end
  end
  pigeon_list
end

pigeon_data = {
  :color => {
    :purple => ["Theo", "Peter Jr.", "Lucky"],
    :grey => ["Theo", "Peter Jr.", "Ms. K"],
    :white => ["Queenie", "Andrew", "Ms. K", "Alex"],
    :brown => ["Queenie", "Alex"]
  },
  :gender => {
    :male => ["Alex", "Theo", "Peter Jr.", "Andrew", "Lucky"],
    :female => ["Queenie", "Ms. K"]
  },
  :lives => {
    "Subway" => ["Theo", "Queenie"],
    "Central Park" => ["Alex", "Ms. K", "Lucky"],
    "Library" => ["Peter Jr."],
    "City Hall" => ["Andrew"]
  }
}

binding.pry
nyc_pigeon_organizer(pigeon_data)
