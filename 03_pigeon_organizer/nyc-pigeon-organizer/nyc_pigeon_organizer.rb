require 'pry'

# Layer 1 - Pigeon name
  # layer 2 - attribute category
    # layer 3 - atribute_value inside an array

def nyc_pigeon_organizer(data)
  # write your code here!
  final = {}
  data.each do |attribute_type, details|
    # puts "we would have hit a pry here with the attribute #{attribute}!"
    details.each do |attribute_name, names|
      names.each do |name|
        pigeon_list[name] ||= {}
        pigeon_list[name][attribute_category] ||= []
        pigeon_list[name][attribute_category] << attribute_value.to_s
      end
    end
  end
  final
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
