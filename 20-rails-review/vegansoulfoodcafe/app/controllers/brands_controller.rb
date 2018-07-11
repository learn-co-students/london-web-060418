class BrandsController < ApplicationController
  def index
    @brands = Brand.all.sort_by { |brand| brand.hipster_rating }
  end
end
