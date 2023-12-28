import Post from "../models/postModel.js";

const postController = {
  createPost: async (req, res) => {
    try {
      const newPost = await Post.create({ ...req.body });

      if (!newPost)
        return res.json({
          msg: "Пост создании поста произошла ошибка!!!",
        });

      return res.json({
        msg: "Пост создан успешно",
        newPost,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const posts = await Post.find();
      return res.json({
        msg: "все посты",
        posts,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);

      return res.json({
        msg: "один пост",
        post,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deletePost: async (req, res) => {
    try {
      const deletePost = await Post.findByIdAndDelete(req.params.id);

      if (!deletePost)
        return res.json({
          msg: "При удалении поста возникла ошибка, возможно он был удален ранее!!!",
        });

      return res.json({
        msg: "Пост удален успешно",
        deletePost,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updatePost: async (req, res) => {
    try {
      const updatePost = await Post.findByIdAndUpdate(
        { _id: req.params.id },
        { title: req.body.title, content: req.body.content }
      );

      if (!updatePost)
        res.json({
          msg: "Пост не был обнавлен",
        });

      res.json({
        msg: "Пост успешно обнавлен!!!",
        updatePost,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  likePost: async (req, res) => {
    try {
      const post = await Article.find({
        _id: req.params.id,
        likes: req.user._id,
      });
      if (post.length > 0)
        return res.status(400).json({ msg: "You liked this post." });

      const like = await Article.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: { likes: req.user._id },
        },
        { new: true }
      );

      if (!like)
        return res.status(400).json({ msg: "This post does not exist." });

      res.json({ msg: "Liked Post!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  unLikePost: async (req, res) => {
    try {
      const like = await Article.findOneAndUpdate(
        { _id: req.params.id },
        {
          $pull: { likes: req.user._id },
        },
        { new: true }
      );

      if (!like)
        return res.status(400).json({ msg: "This post does not exist." });

      res.json({ msg: "UnLiked Post!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
export default postController;
