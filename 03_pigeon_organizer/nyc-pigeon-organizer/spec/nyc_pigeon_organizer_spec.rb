require 'spec_helper'

describe "NYC Pigeon Organizer" do

  describe "#nyc_pigeon_organizer" do

    before(:all) do
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
      @result = nyc_pigeon_organizer(pigeon_data)
    end

    context "Overview: Data Type and Attributes of Return Value" do
      it "returns a hash" do
        puts @result
        expect(@result.class).to eq(Hash)
      end
      it "returns a hash with seven keys" do
        expect(@result.keys.length).to eq(7)
      end
      it 'has the keys Theo, Peter Jr., Lucky, Ms. K, Queenie, Andrew, and Alex' do
        names = ["Theo", "Peter Jr.", "Lucky", "Ms. K", "Queenie", "Andrew", "Alex"]
        names.each { |n| expect(@result.keys).to include(n) }
      end
    end

    context "Pigeons" do

      context "Theo" do
        before(:all) do
          @theo = @result["Theo"]
        end
        it "knows Theo is purple and grey" do
          expect(@theo[:color].length).to eq(2)
          ["purple", "grey"].each { |c| expect(@theo[:color]).to include(c) }
        end
        it "knows Theo is male" do
          expect(@theo[:gender].length).to eq(1)
          expect(@theo[:gender]).to include("male")
        end
        it "knows Theo lives on the subway" do
          expect(@theo[:lives].length).to eq(1)
          expect(@theo[:lives]).to include("Subway")
        end
      end

      context "Peter Jr." do
        before(:all) do
          @pete = @result["Peter Jr."]
        end
        it "knows Peter Jr. is purple and grey" do
          expect(@pete[:color].length).to eq(2)
          ["purple", "grey"].each { |c| expect(@pete[:color]).to include(c) }
        end
        it "knows Peter Jr. is male" do
          expect(@pete[:gender].length).to eq(1)
          expect(@pete[:gender]).to include("male")
        end
        it "knows Peter Jr. lives in the library" do
          expect(@pete[:lives].length).to eq(1)
          expect(@pete[:lives]).to include("Library")
        end
      end

      context "Lucky" do
        before(:all) do
          @lucky = @result["Lucky"]
        end
        it "knows Lucky is purple" do
          expect(@lucky[:color].length).to eq(1)
          expect(@lucky[:color]).to include("purple")
        end
        it "knows Lucky is male" do
          expect(@lucky[:gender].length).to eq(1)
          expect(@lucky[:gender]).to include("male")
        end
        it "knows Lucky lives in central park" do
          expect(@lucky[:lives].length).to eq(1)
          expect(@lucky[:lives]).to include("Central Park")
        end
      end

      context "Ms. K" do
        before(:all) do
          @ms_k = @result["Ms. K"]
        end
        it "knows Ms. K is grey and white" do
          expect(@ms_k[:color].length).to eq(2)
          ["grey", "white"].each { |c| expect(@ms_k[:color]).to include(c) }
        end
        it "knows Ms. K is female" do
          expect(@ms_k[:gender].length).to eq(1)
          expect(@ms_k[:gender]).to include("female")
        end
        it "knows Ms. K lives in central park" do
          expect(@ms_k[:lives].length).to eq(1)
          expect(@ms_k[:lives]).to include("Central Park")
        end
      end

      context "Queenie" do
        before(:all) do
          @queenie = @result["Queenie"]
        end
        it "knows Queenie is white and brown" do
          expect(@queenie[:color].length).to eq(2)
          ["white", "brown"].each { |c| expect(@queenie[:color]).to include(c) }
        end
        it "knows Queenie is female" do
          expect(@queenie[:gender].length).to eq(1)
          expect(@queenie[:gender]).to include("female")
        end
        it "knows Queenie lives on the subway" do
          expect(@queenie[:lives].length).to eq(1)
          expect(@queenie[:lives]).to include("Subway")
        end
      end

      context "Andrew" do
        before(:all) do
          @andrew = @result["Andrew"]
        end
        it "knows Andrew is white" do
          expect(@andrew[:color].length).to eq(1)
          expect(@andrew[:color]).to include("white")
        end
        it "knows Andrew is male" do
          expect(@andrew[:gender].length).to eq(1)
          expect(@andrew[:gender]).to include("male")
        end
        it "knows Andrew lives in city hall" do
          expect(@andrew[:lives].length).to eq(1)
          expect(@andrew[:lives]).to include("City Hall")
        end
      end

      context "Alex" do
        before(:all) do
          @alex = @result["Alex"]
        end
        it "knows Alex is white and brown" do
          expect(@alex[:color].length).to eq(2)
          ["white", "brown"].each { |c| expect(@alex[:color]).to include(c) }
        end
        it "knows Alex is male" do
          expect(@alex[:gender].length).to eq(1)
          expect(@alex[:gender]).to include("male")
        end
        it "knows Alex lives in central park" do
          expect(@alex[:lives].length).to eq(1)
          expect(@alex[:lives]).to include("Central Park")
        end
      end

    end # context
  end # method
end # suite
