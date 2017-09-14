99.times do
  title = Faker::Book.title
  author = Faker::Book.author
  genre = Faker::Book.genre
  publisher = Faker::Book.publisher
  Book.create!(
                title: title,
                author: author,
                genre: genre,
                publisher: publisher,
                synopsis: "This book is about ..."
  )
end
