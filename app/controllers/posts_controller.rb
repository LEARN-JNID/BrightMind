class PostsController < ApplicationController
  before_action :set_post, only: %i[ show edit update destroy ]

  # GET /posts or /posts.json
  def index
    posts = Post.all
    render json: posts
  end

  # GET /posts/1 or /posts/1.json
  def show
    post = Post.find(params[:id])
    render json: post
  end

  # GET /posts/new
  def new
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts or /posts.json
  def create
    user = User.find(current_user.id)
    post = user.posts.create(post_params)
    if post.valid?
      render json: post
    else
      render json: user.errors, status: 422
    end
  end

  # PATCH/PUT /posts/1 or /posts/1.json
  def update
    respond_to do |format|
      if post.update(post_params)
        format.html { redirect_to post_url(post), notice: "Post was successfully updated." }
        format.json { render :show, status: :ok, location: post }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1 or /posts/1.json
  def destroy
    post.destroy

    respond_to do |format|
      format.html { redirect_to posts_url, notice: "Post was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:title, :mood, :body)
    end
end
