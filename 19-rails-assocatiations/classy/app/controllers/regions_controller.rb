class RegionsController < ApplicationController
  before_action :set_region, only: [:show, :edit, :update, :destroy]

  def index
    @regions = Region.all
  end

  def show
  end

  def new
    @region = Region.new
  end

  def create
    @region = Region.create(region_params)
    if @region.valid?
      redirect_to @region
    else
      flash[:errors] = @region.errors.full_messages
      redirect_to new_region_path
    end
  end

  def edit
  end

  def update
    @region.update(region_params)
    if @region.valid?
      redirect_to @region
    else
      flash[:errors] = @region.errors.full_messages
      redirect_to edit_region_path(@region)
    end
  end

  def destroy
    @region.destroy
    redirect_to regions_path
  end

  private
  def region_params
    params.require(:region).permit(:name)
  end

  def set_region
    @region = Region.find(params[:id])
  end
end
