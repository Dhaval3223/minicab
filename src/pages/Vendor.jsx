/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Checkbox,
  Button,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Paper,
  Typography,
  OutlinedInput,
  ListItemText,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Divider,
  Container,
  Avatar,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  Search,
  Category,
  AccessAlarm,
  LocationOn,
  Straighten,
  Person,
  Send,
  HighlightOff,
} from "@mui/icons-material";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  padding: theme.spacing(3),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: { xs: 13, lg: 16 },
  lineHeight: 1.5,
}));

const StyledTypographySubtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: { xs: 13, lg: 16 },
  lineHeight: 1.5,
}));

const ChatContainer = styled(Paper)(({ theme }) => ({
  height: "80vh",
  maxWidth: "800px",
  margin: "20px auto",
  //padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f5f5f5",
}));

const MessagesContainer = styled(Box)({
  flex: 1,
  overflowY: "auto",
  padding: "10px",
  marginBottom: "10px",
});

const MessageBubble = styled(Paper)(({ sent, theme }) => ({
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(1),
  maxWidth: "70%",
  wordWrap: "break-word",
  display: "flex",
  alignItems: "flex-start",
  backgroundColor: sent ? "rgb(25, 118, 210)" : "#fff",
  color: sent ? "#fff" : "inherit",
  alignSelf: sent ? "flex-end" : "flex-start",
  borderRadius: "15px",
  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
}));

const InputContainer = styled(Box)({
  display: "flex",
  gap: "10px",
  padding: 10,
});

function Vendor() {
  const [selectedJobStatusOption, setSelectedJobStatusOption] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");
  const jobOptions = [
    { value: "Applied", label: "Applied" },
    { value: "Quoted", label: "Quoted" },
    { value: "Accepted", label: "Accepted" },
    { value: "Assigned", label: "Assigned" },
    { value: "Job Excuted", label: "Job Excuted" },
    { value: "Completed", label: "Completed" },
    { value: "Guest No Show", label: "Guest No Show" },
    { value: "Guest Cancelled", label: "Guest Cancelled" },
  ];
  const options = [
    { value: "All", label: "All" },
    { value: "Job start within 2 hours", label: "Job start within 2 hours" },
    { value: "Job start within 6 hours", label: "Job start within 6 hours" },
    { value: "Job start within 12 hours", label: "Job start within 12 hours" },
    { value: "Job start within 24 hours", label: "Job start within 24 hours" },
  ];
  const handleJobStatusChange = (event) => {
    setSelectedJobStatusOption(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sent: false,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      username: "Support Agent",
    },
    {
      id: 2,
      text: "Hi! I have a question about my account.",
      sent: true,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      username: "You",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        text: newMessage,
        sent: true,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        username: "You",
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
    <>
      <StyledCard>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <TextField
                fullWidth
                label="Search record"
                variant="outlined"
                //value={searchTerm}
                //onChange={handleSearchChange}
                placeholder="Enter keywords..."
                InputProps={{
                  startAdornment: <Search sx={{ mr: 1 }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FormControl fullWidth>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                  labelId="category-select-label"
                  value={selectedOption}
                  label="Category"
                  onChange={handleChange}
                  startAdornment={<Category sx={{ mr: 1 }} />}
                >
                  {options.map((op) => (
                    <MenuItem key={op.value} value={op.value}>
                      {op.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={4}>
              <FormControl fullWidth>
                <InputLabel id="multi-select-label">Job status</InputLabel>
                <Select
                  labelId="multi-select-label"
                  multiple
                  value={selectedJobStatusOption}
                  onChange={handleJobStatusChange}
                  input={<OutlinedInput label="Multi Select" />}
                  renderValue={(selected) =>
                    selected
                      .map(
                        (value) =>
                          jobOptions.find((option) => option.value === value)
                            ?.label
                      )
                      .join(", ")
                  }
                >
                  {jobOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      <Checkbox
                        checked={
                          selectedJobStatusOption?.indexOf(option.value) > -1
                        }
                      />
                      <ListItemText primary={option.label} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            sx={{
              marginY: 1,
            }}
          >
            <Grid item xs={12} lg={6}>
              <Stack spacing={2}>
                <Card
                  sx={{
                    backgroundColor: "#F4F6F8",
                    color: "#1C252E",
                    boxShadow: 1,
                    borderRadius: 2,
                  }}
                >
                  <CardHeader
                    sx={{
                      "& .MuiCardHeader-action": {
                        m: 0,
                      },
                    }}
                    title={
                      <Typography
                        fontWeight={700}
                        fontSize={18}
                        color="primary"
                      >
                        Job Info
                      </Typography>
                    }
                    action={
                      <Typography fontWeight={700} color="primary">
                        Applied
                      </Typography>
                    }
                  />
                  <Divider
                    variant="fullWidth"
                    sx={{ border: "1px solid #637381" }}
                  />
                  <CardContent>
                    <Stack spacing={1}>
                      <StyledTypography>JOBIJ173070413795OW</StyledTypography>
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems={{ xs: "flex-start", lg: "center" }}
                        gap={1}
                      >
                        <AccessAlarm />
                        <StyledTypography>
                          On Friday, 15th Nov, 2024 at 01:37 PM
                        </StyledTypography>
                      </Box>

                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems={{ xs: "flex-start", lg: "center" }}
                        gap={1}
                      >
                        <LocationOn />
                        <StyledTypography>Route</StyledTypography>
                      </Box>
                      <StyledTypography>
                        London Heathrow Airport Terminal 4, TW6 3XA &#8594;
                        Burtonwood Services M62, WA5 3AX
                      </StyledTypography>
                      <Box
                        display="flex"
                        flexDirection={{ xs: "column", lg: "row" }}
                        gap={{ xs: 2, lg: 0 }}
                        alignItems="flex-start"
                        justifyContent="space-between"
                      >
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems={{ xs: "flex-start", lg: "center" }}
                          gap={1}
                        >
                          <Straighten />
                          <StyledTypography>
                            316.02 Kms distance (Approx)
                          </StyledTypography>
                        </Box>
                        <Box
                          display="flex"
                          flexDirection="row"
                          alignItems={{ xs: "flex-start", lg: "center" }}
                          gap={1}
                        >
                          <Person />
                          <StyledTypography>By Sedan</StyledTypography>
                        </Box>
                        <Box>
                          <StyledTypography>M&amp;G</StyledTypography>
                          <StyledTypography>Minor Waiting</StyledTypography>
                        </Box>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    backgroundColor: "#F4F6F8",
                    color: "#1C252E",
                    boxShadow: 1,
                    borderRadius: 2,
                  }}
                >
                  <CardHeader
                    sx={{
                      "& .MuiCardHeader-action": {
                        m: 0,
                      },
                    }}
                    title={
                      <Typography
                        fontWeight={700}
                        fontSize={18}
                        color="primary"
                      >
                        Passenger Info
                      </Typography>
                    }
                  />
                  <Divider
                    variant="fullWidth"
                    sx={{ border: "1px solid #637381" }}
                  />
                  <CardContent>
                    <Stack spacing={2}>
                      <Grid container spacing={1}>
                        <Grid item xs={12} lg={6}>
                          <StyledTypography>Name: Vijay</StyledTypography>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <StyledTypography>Phone no: +444111</StyledTypography>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <StyledTypography>1 Passengers</StyledTypography>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <StyledTypography>1 Hand Luggage</StyledTypography>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <StyledTypography>1 Suitcase</StyledTypography>
                        </Grid>
                      </Grid>
                      <StyledTypography pl={1}>
                        Special Instructions: 0
                      </StyledTypography>
                    </Stack>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    backgroundColor: "#F4F6F8",
                    color: "#1C252E",
                    boxShadow: 1,
                    borderRadius: 2,
                  }}
                >
                  <CardHeader
                    sx={{
                      "& .MuiCardHeader-action": {
                        m: 0,
                      },
                    }}
                    title={
                      <Typography
                        fontWeight={700}
                        fontSize={18}
                        color="primary"
                      >
                        About Merchant
                      </Typography>
                    }
                  />
                  <Divider
                    variant="fullWidth"
                    sx={{ border: "1px solid #637381" }}
                  />
                  <CardContent>
                    <Grid container spacing={1}>
                      <Grid item xs={12} lg={6}>
                        <StyledTypography>Name: Vendor test</StyledTypography>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <StyledTypography>
                          License:
                          <IconButton color="error" size="small">
                            <HighlightOff />
                          </IconButton>
                        </StyledTypography>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <StyledTypography>
                          Company Name: Jewels
                        </StyledTypography>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <StyledTypography>
                          Insurance:{" "}
                          <IconButton color="error" size="small">
                            <HighlightOff />
                          </IconButton>
                        </StyledTypography>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <StyledTypography>Mobile: 5555555555</StyledTypography>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <StyledTypography>Job Posted: 4</StyledTypography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Stack spacing={2}>
                <Card
                  sx={{
                    backgroundColor: "#F4F6F8",
                    color: "#1C252E",
                    boxShadow: 1,
                    borderRadius: 2,
                  }}
                >
                  <CardHeader
                    sx={{
                      "& .MuiCardHeader-action": {
                        m: 0,
                      },
                    }}
                    title={
                      <Typography fontWeight={700} fontSize={18} color="error">
                        Alert
                      </Typography>
                    }
                  />
                  <Divider
                    variant="fullWidth"
                    sx={{ border: "1px solid #637381" }}
                  />
                  <CardContent>
                    <StyledTypography>
                      Congratulations! Merchant has alloted this Job to you.
                      Kindly update driver &amp; vehicle details and click
                      "Update" button incase any change of driver or vehicle.
                    </StyledTypography>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    backgroundColor: "#F4F6F8",
                    color: "#1C252E",
                    boxShadow: 1,
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <StyledTypography>Job Source: Market</StyledTypography>
                    <Grid
                      container
                      spacing={1}
                      sx={{
                        mt: 1,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Grid item xs={6}>
                        <StyledTypographySubtitle>
                          Final price:
                        </StyledTypographySubtitle>
                      </Grid>
                      <Grid item xs={6}>
                        <StyledTypographySubtitle>
                          988.00
                        </StyledTypographySubtitle>
                      </Grid>
                      <Grid item xs={6}>
                        <StyledTypographySubtitle>
                          Comm:
                        </StyledTypographySubtitle>
                      </Grid>
                      <Grid item xs={6}>
                        <StyledTypographySubtitle>
                          9.88
                        </StyledTypographySubtitle>
                      </Grid>
                      <Grid item xs={6}>
                        <StyledTypographySubtitle>
                          Vat:
                        </StyledTypographySubtitle>
                      </Grid>
                      <Grid item xs={6}>
                        <StyledTypographySubtitle>
                          0.99
                        </StyledTypographySubtitle>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: { xs: 15, lg: 18 },
                            lineHeight: 1.5,
                          }}
                        >
                          Net Receivable:
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <StyledTypography>977.13</StyledTypography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontWeight: 600,
                            fontSize: 14,
                            lineHeight: 1.5,
                          }}
                        >
                          Actual amount may vary depends on the charges or
                          penalty if applied
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    backgroundColor: "#F4F6F8",
                    color: "#1C252E",
                    boxShadow: 1,
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          label="Driver Name"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          label="Driver Mobile Number"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          label="Driver Vehicle Number"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <TextField
                          fullWidth
                          label="Driver Vehicle Color"
                          variant="outlined"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <Button variant="contained">Update</Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
                <Container
                  maxWidth={{ xs: "md", lg: "xl", xl: "lg" }}
                  sx={{
                    "&.MuiContainer-root": {
                      px: 0,
                      mt: 0,
                    },
                  }}
                >
                  <ChatContainer elevation={3}>
                    <Typography
                      variant="body1"
                      py={1}
                      px={2}
                      fontWeight={600}
                      gutterBottom
                    >
                      ChatBox
                    </Typography>
                    <Divider
                      variant="fullWidth"
                      sx={{ border: "1px solid #637381" }}
                    />
                    <MessagesContainer>
                      {messages.map((message) => (
                        <Box
                          key={message.id}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: message.sent
                              ? "flex-end"
                              : "flex-start",
                            mb: 2,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              mb: 0.5,
                              flexDirection: message.sent
                                ? "row-reverse"
                                : "row",
                            }}
                          >
                            <Avatar
                              src={message.avatar}
                              alt={message.username}
                              sx={{ width: 24, height: 24 }}
                            />
                            <Typography variant="caption" color="textSecondary">
                              {message.username}
                            </Typography>
                          </Box>
                          <MessageBubble sent={message.sent} elevation={1}>
                            <Typography variant="body1">
                              {message.text}
                            </Typography>
                          </MessageBubble>
                        </Box>
                      ))}
                      <div ref={messagesEndRef} />
                    </MessagesContainer>
                    <form onSubmit={handleSendMessage}>
                      <InputContainer>
                        <TextField
                          fullWidth
                          variant="outlined"
                          placeholder="Type your message..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={handleKeyPress}
                          size="small"
                          multiline
                          maxRows={4}
                        />
                        <Button
                          variant="contained"
                          color="primary"
                          endIcon={<Send />}
                          type="submit"
                          disabled={!newMessage.trim()}
                        >
                          Send
                        </Button>
                      </InputContainer>
                    </form>
                  </ChatContainer>
                </Container>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </>
  );
}

export default Vendor;
