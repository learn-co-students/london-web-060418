class CheesesController < ApplicationController
  before_action :set_cheese, only: [:show, :edit, :update, :destroy]
  before_action :set_wines, only: [:new, :edit]

  def index
    @cheeses = Cheese.all
  end

  def show
  end

  def new
    @cheese = Cheese.new
  end

  def create
    @cheese = Cheese.create(cheese_params)
    if @cheese.valid?
      redirect_to @cheese
    else
      flash[:errors] = @cheese.errors.full_messages
      redirect_to new_cheese_path
    end
  end

  def edit
  end

  def update
    @cheese.update(cheese_params)
    if @cheese.valid?
      redirect_to @cheese
    else
      flash[:errors] = @cheese.errors.full_messages
      redirect_to edit_cheese_path(@cheese)
    end
  end

  def destroy
    @cheese.destroy
    redirect_to cheeses_path
  end

  private
  def cheese_params
    params.require(:cheese).permit(:name, wine_ids: [])
  end

  def set_cheese
    @cheese = Cheese.find(params[:id])
  end

  def set_wines
    @wines = Wine.all.sort_by { |w| w.name }
  end
end
