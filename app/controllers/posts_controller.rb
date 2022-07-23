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

  def create
    post = current_user.posts.create(post_params)
    if post.valid?
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  def update
    post = Post.find(params[:id])
    if post.valid?
        post.update(post_params)
        render json: post
    else
        render json: post.errors, status: 422
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    render json: {destroy: true}
  end

  private
    def set_post
      post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :mood, :body, :color)
    end
end