import { useState } from "react";
import { addPost } from "../../config/firebase/firebasemethod";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";

export default function AddPost() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      await addPost({ name, image });
      alert("Post added successfully!");
      navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Add Post
      </Typography>

      <TextField
        fullWidth
        label="Caption"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
      />

      <Button
        fullWidth
        variant="contained"
        component="label"
        sx={{ marginY: 2 }}
      >
        Upload Image
        <input
          type="file"
          id="file"
          hidden
          onChange={(e) => setImage(e.target.files[0])}
        />
      </Button>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        Submit
      </Button>
    </Box>
  );
}

//       <input
//         id="file"
//         type="file"
//         onChange={(e) => setImage(e.target.files[0])}
//       />
//       <button onClick={onSubmit}>Submit</button>
//     </div>
//   );
// }



