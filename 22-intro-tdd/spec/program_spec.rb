require_relative "../program.rb"

describe "is_palindrome?" do
  # write your tests here!

  it "should return true if the word is a palindrome" do
    expect(is_palindrome?("kayak")).to be(true)
  end

  it "should return false if the word is not a palindrome" do
    expect(is_palindrome?("hello")).to be(false)
  end

  it "should return true if the input has spaces and it is a palindrome" do
    expect(is_palindrome?("no x in nixon")).to be(true)
  end

  it "should return false if the input has spaces and it's not a palindrome" do
    expect(is_palindrome?("my cat")).to be(false)
  end

  it "should return true if the word is a palindrome and ignore caps" do
    expect(is_palindrome?("Kayak")).to be(true)
  end

  it "should return false if the word is not a palindrome and ignore caps" do
    expect(is_palindrome?("Hello")).to be(false)
  end

  it "should return true if the input has punctuation and it is a palindrome" do
    expect(is_palindrome?("a man a plan a canal, panama!")).to be(true)
  end

  it "should return false if the input has punctuation and it's not a palindrome" do
    expect(is_palindrome?("my, cat")).to be(false)
  end

  # not valid input

  it "should raise error if given an int" do
    expect { is_palindrome?(131) }.to raise_error(ArgumentError)
  end

  it "should raise error if given nil" do
    expect { is_palindrome?(nil) }.to raise_error(ArgumentError)
  end

  it "should raise error if given an empty string" do
    expect { is_palindrome?("") }.to raise_error(ArgumentError)
  end

end

describe "factorial" do
  it "should raise error when given -1" do
    expect { factorial(-1) }.to raise_error(ArgumentError)
  end

  it "should return 1 when given 0" do
    expect(factorial(0)).to be(1)
  end

  it "should return 120 when given 5" do
    expect(factorial(5)).to be(120)
  end

  it "should raise error when given a string" do
    expect { factorial("hey") }.to raise_error(ArgumentError)
  end

  it "should raise error for a sufficiently large number that will go outside the bounds of integers" do
    expect { factorial(10080) }.to raise_error(ArgumentError)
  end

  it "should raise error when given a float" do
    expect { factorial(1.99) }.to raise_error(ArgumentError)
  end
end
