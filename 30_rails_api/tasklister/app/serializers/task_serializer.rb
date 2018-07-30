class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :priority, :list_name

  def list_name
    object.list.name
  end
end
