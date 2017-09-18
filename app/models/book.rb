class Book < ApplicationRecord
  validates :title, presence: true, length: {minimum: 3}
  validates :author, presence: true, length: {minimum: 3}
  validates :genre, presence: true, length: {minimum: 3}
  validates :publisher, presence: true, length: {minimum: 3}
  validates :synopsis, presence: true, length: {minimum: 3}
end
