import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, TextField, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

const UpdatePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    content: "",
    img_url: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/details/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const inputHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const updateData = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/update/${id}`, post)
      .then((res) => {
        alert(res.data.message);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Box
        component="form"
        onSubmit={updateData}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "600px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Title"
          onChange={inputHandler}
          name="title"
          value={post.title}
          fullWidth
          required
        />
        <TextField
          variant="outlined"
          placeholder="Content"
          onChange={inputHandler}
          name="content"
          value={post.content}
          multiline
          rows={4}
          required
        />
        <TextField
          variant="outlined"
          placeholder="Image URL"
          onChange={inputHandler}
          name="img_url"
          value={post.img_url}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default UpdatePost;
