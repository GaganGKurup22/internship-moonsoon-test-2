import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Card, CardContent, CardActions, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/details")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:3001/removedetails/${id}`)
      .then((res) => {
        alert(res.data.message);
        setPosts(posts.filter((post) => post._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const updatePost = (id) => {
    navigate(`/update/${id}`);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, marginTop: 4 }}>
      {posts.map((post, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <img src={post.img_url} alt={post.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary">
              {post.category}
            </Typography>
            <Typography variant="h6" component="div">
              {post.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary" onClick={() => deletePost(post._id)}>
              Delete
            </Button>
            <Button variant="contained" color="primary" onClick={() => updatePost(post._id)}>
              Update
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Home;
