class Post < ApplicationRecord
    belongs_to :user
    validates :title, :mood, :body, :color, presence: true
end
