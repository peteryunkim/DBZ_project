class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :race, :power_level, :DOB, :special_techniques
end
