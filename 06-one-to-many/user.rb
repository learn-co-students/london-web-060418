require_relative'tweet'

class User
  attr_accessor :username, :location


  # @@all = []
  # SINGLE SOURCE OF TRUTH FOR USERS
  ALL = []
  # this wouldn't work
  # ALL = "something else"


  def initialize(username, location)
    @username = username
    @location = location

    ALL << self
  end

  def post_tweet(message, timestamp=0)
    Tweet.new(message, self, timestamp)
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def self.tweeted_after_0
    ALL.select do |user|
      # find one tweet that exists after 0
      # otherwise this will be nil, and the user is not selected
      # if the tweet exists, the block in select is truthy
      user.tweets.find do |tweet|
        tweet.timestamp > 0
      end
    end
  end

  def self.all
    ALL
  end
end
