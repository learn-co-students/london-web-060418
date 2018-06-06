require 'rest-client'
require 'json'
require 'pry'

response = RestClient.get 'https://old.reddit.com/.json'
reddit_hash = JSON.parse(response.body)

titles = reddit_hash["data"]["children"].map do |child|
  child["data"]["title"]
end

binding.pry
true
