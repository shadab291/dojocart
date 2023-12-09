import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactsService from "../services/ContactsService";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
  location: yup.string().required("Location is required"),
  address: yup.string().required("Address is required"),
  phone: yup.string().required("Phone is required"),
});

function Contact() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [user, setUser] = useState({
    id: "",
    name: "",
    location: "",
    message: "",
    email: "",
    phoneNumber: "", // Updated property name
    address: "",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const saveUser = (e) => {
    e.preventDefault();
    ContactsService.saveuser(user)
      .then((response) => {
        console.log(response);
        // Reset the form after submission
        reset(); // Resetting the form
        // Clear the user state
        setUser({
          id: "",
          name: "",
          location: "",
          message: "",
          email: "",
          phoneNumber: "", // Updated property name
          address: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      style={{
        // backgroundImage: `url(${gym})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full p-4 bg-white rounded-md text-center gap-2"
        style={{
          display: "flex",
          flexDirection: "column", // Ensure a column layout on small screens
        }}
      >
        <span className="text-2xl font-bold">Contact Us</span>
        <div className="mb-4">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                value={user.name}
                onChange={(e) => handleChange(e)}
                variant="outlined"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
        </div>
        <div className="mb-4">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                value={user.email}
                onChange={(e) => handleChange(e)}
                variant="outlined"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
        <div className="mb-4">
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Location"
                value={user.location}
                onChange={(e) => handleChange(e)}
                variant="outlined"
                fullWidth
                error={!!errors.location}
                helperText={errors.location?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
        <div className="mb-4">
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Address"
                value={user.address}
                onChange={(e) => handleChange(e)}
                variant="outlined"
                fullWidth
                error={!!errors.address}
                helperText={errors.address?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HomeIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
        <div className="mb-4">
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Phone"
                value={user.phoneNumber} // Updated property name
                onChange={(e) => handleChange(e)}
                variant="outlined"
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
        <div className="mb-4">
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Message"
                value={user.message}
                onChange={(e) => handleChange(e)}
                variant="outlined"
                fullWidth
                multiline
                minRows={4}
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            )}
          />
        </div>
        <div className="mb-4">
          <Button
            type="submit"
            onClick={saveUser}
            variant="contained"
            color="primary"
          >
            Send
          </Button>
        </div>
      </form>
    </Box>
  );
}

export default Contact;
