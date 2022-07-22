
require 'rails_helper'


RSpec.describe Post, type: :model do
  it { should belong_to(:user) }
  it 'has a title' do

    post = Post.create mood:'soemthigdn', body:'sjofjdof', color:"string" 

    expect(post.errors[:title]).to_not be_empty
  end
  it 'has a mood' do

    post = Post.create title:'soemthigdn', body:'sjofjdof', color:"string" 

    expect(post.errors[:mood]).to_not be_empty
  end
  it 'has a body' do

    post = Post.create title:'soemthigdn', mood:'sjofjdof', color:"string" 

    expect(post.errors[:body]).to_not be_empty
  end
  it 'has a color' do

    post = Post.create title:'soemthigdn', mood:'sjofjdof', body:"string" 

    expect(post.errors[:color]).to_not be_empty
  end
end
