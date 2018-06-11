class Tweet
  attr_accessor :message, :user
  attr_reader :timestamp

  ALL = []

  def initialize(message, user, timestamp=0)
    @message = message
    @user = user
    @timestamp = timestamp

    ALL << self
  end

  def username
    @user.username
  end

  def location
    @user.location
  end

  def self.delete_tweet(tweet)
    ALL.delete(tweet)
  end

  def self.all
    ALL
  end

  def self.written_in(location)
    ALL.select do |tweet|
      tweet.user.location == location
    end
  end
end
