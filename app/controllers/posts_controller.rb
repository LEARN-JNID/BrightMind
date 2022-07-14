class PostsController < ApplicationController
  before_action :set_post, only: %i[ show edit update destroy ]

  def index
    posts = Post.all
    render json: posts
  end

  def show
    post = Post.find(params[:id])
    render json: post
  end

  def new
  end

  def edit
  end

  def create
    post = current_user.posts.create(post_params)
    if post.valid?
      render json: post
    else
      render json: user.errors, status: 422
    end
  end

  def update

  end

  def destroy

  end

  private

    def post_params
      params.require(:post).permit(:title, :mood, :body)
    end
end
