require 'rest-client'
require 'json'
require 'pry'
#
# response = RestClient.get 'https://old.reddit.com/.json'
# reddit_hash = JSON.parse(response.body)
#
# titles = reddit_hash["data"]["children"].map do |child|
#   child["data"]["title"]
# end
#

def welcome
  puts "Welcome to my book app!"
end

def get_search_term
  puts "What kind of books would you like to see?"
  gets.chomp
end

def make_search(search)
  response = RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{search}"
  JSON.parse(response.body)
end

def parse_books(results)
  results["items"].map do |item|
    item["volumeInfo"]
  end
end

def print_book(book_hash)
  puts "Title: #{book_hash["title"]}"
  puts "Author(s): #{authors_string(book_hash["authors"])}"
  puts "Description: #{description_string(book_hash["description"])}"
  puts ""
end

def authors_string(authors)
  if authors
    authors.join(", ")
  else
    "No Authors Mentioned."
  end
end

def description_string(description)
  description || "No Description Mentioned."
end

def run
  welcome
  search = get_search_term
  search_results = make_search(search)
  book_hashes = parse_books(search_results)
  book_hashes.each do |book_hash|
    print_book(book_hash)
  end
end

run
