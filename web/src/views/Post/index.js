import * as React from "react";
import { Box, Typography, IconButton, Stack, Grid, Card, CardMedia, CardContent, Avatar } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import StoreIcon from "@mui/icons-material/Store";
import GroupIcon from "@mui/icons-material/Group";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPost } from "../../config/firebase/firebasemethod.js"; 
import SearchIcon from "@mui/icons-material/Search";
import ImageIcon from "@mui/icons-material/Image";
import { TextField, Button } from "@mui/material";
import PrimarySearchAppBar from "../../components/appBar/index.js";
// import UserCard from "./Friend";
// import FriendRequests from "./request";
// import { useNavigate } from "react-router-dom";


export default function Post() {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  
  const handleClick = () => {
          navigate("/addPost");
        
      };

  const events = [
    {
      id: 1,
      name: "Community Meetup",
      date: "Nov 20, 2024",
      location: "City Hall",
      description: "Join us for a community meetup to discuss upcoming projects.",
    },
    {
      id: 2,
      name: "Charity Run",
      date: "Dec 5, 2024",
      location: "Central Park",
      description: "Participate in a charity run to support local shelters.",
    },
    {
      id: 3,
      name: "Art Workshop",
      date: "Jan 15, 2025",
      location: "Art Center",
      description: "Learn new painting techniques with professional artists.",
    },
  ];

  // Fetch posts from the Firebase database on mount
  useEffect(() => {
    const fetchData = async () => {
      const postsList = await getPost();
      setPost(postsList);
      console.log("Posts state after fetching:", postsList); 
    };
    fetchData();
  }, []);

  console.log("posts", post);

  return (
    <Box component="section" sx={{ display: "flex", height: "1300px", width: "1340px", backgroundColor: "#D3D3D3" }}>
      {/* Sidebar */}
      <Box>
      <PrimarySearchAppBar/>
      </Box>
      <Box
        width="150px"
        height="1300px"
        backgroundColor="white"
        display="flex"
        flexDirection="column"
        position="relative"
        top="100px"
      >
        {/* Navigation */}
        <Box width="120px" height="450px" backgroundColor="white" top="42px" position="absolute">
          <Stack direction="column" spacing={3} sx={{ height: "500px", display: "block" }}>
            <Stack sx={{ display: "block" }}>
              <IconButton>
                <HomeIcon />
              </IconButton>
              <Typography variant="caption">Feed</Typography>
            </Stack>
            <Stack sx={{ display: "block" }}>
              <IconButton>
                <ExploreIcon />
              </IconButton>
              <Typography variant="caption">Explore</Typography>
            </Stack>
            <Stack sx={{ display: "block" }}>
              <IconButton>
                <StoreIcon />
              </IconButton>
              <Typography variant="caption">Marketplace</Typography>
            </Stack>
            <Stack sx={{ display: "block" }}>
              <IconButton>
                <GroupIcon />
              </IconButton>
              <Typography variant="caption">Groups</Typography>
            </Stack>
            <Stack sx={{ display: "block" }}>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <Typography variant="caption">My Favorite</Typography>
            </Stack>
            <Stack sx={{ display: "block" }}>
              <IconButton>
                <MessageIcon />
              </IconButton>
              <Typography variant="caption">Message</Typography>
            </Stack>
            <Stack sx={{ display: "block" }}>
              <IconButton>
                <SettingsIcon />
              </IconButton>
              <Typography variant="caption">Settings</Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Contacts */}
        <Box width="120px" height="250px" backgroundColor="white" top="480px" position="absolute">
          <Typography variant="h6">My contacts</Typography>
          <Stack direction="column" spacing={3} sx={{ height: "200px" }}>
            {["Abc", "Abc", "Abc"].map((name, index) => (
              <Stack key={index} sx={{ display: "block" }}>
                <IconButton>
                  <AccountCircleIcon fontSize="medium" />
                </IconButton>
                <Typography variant="caption">{name}</Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Main Content (Posts Grid) */}
      <Box width="500px" height="1300px" backgroundColor="white" position="relative" alignItems="center" left="20px" top="100px">
<Box width="300px" height="130px" backgroundColor="transparent" marginTop="30px" marginLeft="100px" border= "1px solid gray" display= "flex" flexDirection= "column" justifyContent= "space-between" padding= "1" boxSizing= "border-box">

<Box display="flex" alignItems="center" justifyContent="space-between">
        <IconButton>
          <ImageIcon fontSize="large" /> {/* Replace with actual <img> tag if needed */}
        </IconButton>
        <TextField
          variant="outlined"
          placeholder="Search somethin here"
          size="large"
          InputProps={{
            startAdornment: (
              <IconButton size="large">
                <SearchIcon fontSize="small" />
              </IconButton>
            ),
          }}
          // sx={{ width: "60%" }}
        />
      </Box>

      {/* Bottom Row with Four Buttons */}
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Button  size="small">
          Live Video
        </Button>
        <Button size="small">
          Photos
        </Button>
        <Button  size="small">
          Feelings
        </Button>
        <Button  size="small" onClick={handleClick}>
         Add post
        </Button>
      </Stack>
</Box>

      <Box sx={{ padding: 5, display: "flex", flexDirection: "column", maxHeight: 900, overflowY: "auto" }}>
  {post.length > 0 ? (
    <Grid container spacing={4}>
      {post.map((post) => (
        <Grid item key={post.id} xs={12}>  
          <Card sx={{ maxWidth: 345, margin: "auto" }}>  
            <CardMedia
              component="img"
              height="400"
              image={post.image}
              alt={post.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {post.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography variant="h6" color="text.secondary">
      No posts available.
    </Typography>
  )}
</Box>
</Box>
<Box top="100px" width="300px" height="1300px" backgroundColor="white" position="relative" left="50px">
{/* <Box width="100px" height="100px"> <UserCard /> </Box> */}
{/* <Box width="100px" height="100px"> <FriendRequests /> </Box> */}

<Box
      sx={{
        width: 300,
        height: 180,
        border: "1px solid gray",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 5,
        boxSizing: "border-box",
        backgroundColor: "white"
      }}
    >
      <Typography variant="h6" sx={{ marginLeft: 1 }}>
        you might Like
        </Typography>
      <Box display="flex" alignItems="center" >
        <IconButton>
          <AccountCircleIcon fontSize="large" /> {/* Placeholder image icon */}
        </IconButton>
        <Typography variant="h6" sx={{ marginLeft: 1 }}>
          Username
        </Typography>
      </Box>

      
      <Stack direction="row" spacing={2} justifyContent="center" marginTop="auto">
        <Button variant="outlined" color="primary">
          Follow
        </Button>
        <Button variant="outlined" color="secondary">
          Ignore
        </Button>
      </Stack>
    </Box>


<Box
      sx={{
        width: 300,
        // padding: 3,
        marginTop:"50px",
        border: "1px solid #ccc",
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Upcoming Events
      </Typography>
      
      {/* Event Details */}
      <Stack spacing={2}>
        {events.map((event) => (
          <Box
            key={event.id}
            sx={{
              border: "1px solid #ddd",
              borderRadius: 2,
              padding: 2,
              backgroundColor: "white",
            }}
          >
            <Typography variant="h6">{event.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {event.date} • {event.location}
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              {event.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ marginTop: 1 }}
            >
              Learn More
            </Button>
          </Box>
        ))}
      </Stack>
    </Box>
  
    </Box>

    <Box top="100px" width="300px" height="1300px" backgroundColor="white" position="relative" left="70px" display="flex" flexDirection="column" alignItems="center" paddingTop="10px">
    <Box
      sx={{
        width: 200,
        height: 50,
        display:"flex",
        alignItems: "center",
      justifyContent:"center",
        border: "1px solid #ccc",
        borderRadius: 2,
        padding: 2,
        backgroundColor: "#f9f9f9",
        
      }}
    >
      <Avatar>
        <AccountCircleIcon fontSize="large" />
      </Avatar>
      <Typography variant="h6" sx={{ marginLeft: 2 }}>
        John Doe
      </Typography>
    </Box>
    <Box
      sx={{
        width: 200,
        height: 50,
        display:"flex",
        alignItems: "center",
      justifyContent:"center",
        border: "1px solid #ccc",
        borderRadius: 2,
        padding: 2,
        backgroundColor: "#f9f9f9",
        
      }}
    >
      <Avatar>
        <AccountCircleIcon fontSize="large" />
      </Avatar>
      <Typography variant="h6" sx={{ marginLeft: 2 }}>
        John Doe
      </Typography>
    </Box>

    <Box
      sx={{
        width: 200,
        height: 50,
        display:"flex",
        alignItems: "center",
      justifyContent:"center",
        border: "1px solid #ccc",
        borderRadius: 2,
        padding: 2,
        backgroundColor: "#f9f9f9",
        
      }}
    >
      <Avatar>
        <AccountCircleIcon fontSize="large" />
      </Avatar>
      <Typography variant="h6" sx={{ marginLeft: 2 }}>
        John Doe
      </Typography>
    </Box>

    </Box>
    </Box>
  );
}