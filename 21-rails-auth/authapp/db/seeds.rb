# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
require 'json'

def read_url_and_save_books(url)
  response = open(url).read
  books = JSON.parse(response)
  books['items'].each do |item|
    parse_and_save_book(item)
  end
end

def parse_and_save_book(item)
  book = Book.new
  book.title = item["volumeInfo"]["title"]
  book.snippet = item["volumeInfo"]["description"]
  book.save
end

Book.destroy_all

subjects = ['speculative fiction', 'teenage-vampire fantasy', 'non-fiction', 'british royal family romance', 'ruby']

subjects.each do |s|
  url = "https://www.googleapis.com/books/v1/volumes?q=#{s}&maxResults=8"
  read_url_and_save_books(url)
end
