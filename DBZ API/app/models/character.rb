class Character < ApplicationRecord
  validates :name, uniqueness: true, presence: true
end
