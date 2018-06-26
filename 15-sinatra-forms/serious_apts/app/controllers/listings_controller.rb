class ListingsController < ApplicationController

  get "/listings" do
    @listings = Listing.all
    erb :"listings/index"
  end

  get "/listings/new" do
    erb :"listings/new"
  end

  get "/listings/:id" do
    @listing = Listing.find(params[:id])
    erb :"listings/show"
  end

  post "/listings" do
    listing = Listing.create(params[:listing])
    redirect "/listings/#{listing.id}"
  end

  get "/listings/:id/edit" do
    @listing = Listing.find(params[:id])
    erb :"listings/edit"
  end

  patch "/listings/:id" do
    listing = Listing.find(params[:id])
    listing.update(params[:listing])
    redirect "/listings/#{listing.id}"
  end

  delete "/listings/:id" do
    listing = Listing.find(params[:id])
    listing.destroy
    redirect "/listings"
  end

end
