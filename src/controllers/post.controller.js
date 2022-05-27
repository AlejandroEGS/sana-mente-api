import Post from "../models/Post";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).json(posts);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);

    res.status(200).json(post);
  } catch (err) {
    return res.status(404).json({ message: "No post found" });
  }
};

export const createPost = async (req, res) => {
  try {
    const { author, title, content, keywords } = req.body;

    const newPost = new Post({
      author,
      title,
      content,
    });

    keywords
      ? (newPost.keywords = keywords)
      : (newPost.keywords = ["psicologia"]);

    await newPost.save();

    res.status(200).json({ message: "Post created successfully" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const updatePostById = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({ message: "Post updated successfully", updatedPost });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

export const deletePostById = async (req, res) => {
  try {
    const { postId } = req.params;

    await Post.findByIdAndDelete(postId);

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
