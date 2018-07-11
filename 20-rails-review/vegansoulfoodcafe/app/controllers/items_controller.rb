class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :destroy]

  def index
    @items = Item.all
  end

  def show
  end

  def new
    @item = Item.new
    @brands = Brand.all
    @hipsters = Hipster.all
  end

  def create
    @item = Item.create(strong_params)
    if @item.valid?
      redirect_to @item
    else
      flash[:errors] = @item.errors.full_messages
      redirect_to new_item_path
    end
  end

  def destroy
    @item.destroy
    redirect_to items_path
  end

  private

  def set_item
    @item = Item.find(params[:id])
  end

  def strong_params
    # params[:item] #name: <name>, price: <price>, brand_id: <brand_id>
    params.require(:item).permit(:name, :price, :brand_id, hipster_ids: [])
  end
end
