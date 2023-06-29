import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import MoreVert from "@mui/icons-material/MoreVert";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Favorite from "@mui/icons-material/Favorite";
import Share from "@mui/icons-material/Share";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Expand from "@mui/icons-material/Expand";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Comment from "@mui/icons-material/Comment";
import MenuBtn from "./MenuBtn";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

function ProductCard({ product }) {
  const { title, price, category, description, image, rating } = product;
  const { rate, count } = rating;

  //ExpandIcon

  const [expanded, setexpanded] = useState(false);

  const handleExpandClick = () => {
    setexpanded(!expanded);
  };

  //Morevert icon
  const [openvert, setopenvert] = useState(false);

  return (
    <Card
      sx={{
        width: { el: 200, lg: 250, md: 400 },
        padding: 2,
        bgcolor: "rgba(0, 0, 0, 0.758)",
        color: "white",
        borderRadius: 3,
        boxShadow:"0px 0px 2px white"
      }}
    >
      <CardHeader
        sx={{
          height: 35,
          display: "flex",
          alignItems: "center",
          width: "100%",
          textAlign: "justify",
        }}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton
            onClick={() => {
              setopenvert((p) => !p);
            }}
            aria-label="settings"
          >
            <MoreVert />
          </IconButton>
        }
        title={<Typography fontSize="9px">{title}</Typography>}
        subheader={<Typography fontSize="6px">September 14, 2016</Typography>}
      />

      {openvert && (
        <MenuBtn open={openvert} />
        // <Box
        //   sx={{
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "center",
        //     backgroundColor: "rgba(230, 230, 250, 0.354)",
        //     width: 50,
        //     flexDirection: "column",
        //     borderRadius: "40px",
        //   }}
        // >
        //   Hai
        // </Box>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "150px",
          width:"100%",
          bgcolor: "white",
          borderRadius: "10px",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            height: "95%",
            width: "98%",
          }}
        />
      </Box>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",

          height: 3,
          color: "white",
        }}
      >
        <Typography fontSize="9px" variant="body2" textTransform="uppercase">
          {category}
        </Typography>
        <Typography fontSize="9px" variant="body2">
          ₹{price}
        </Typography>
      </CardContent>
      <Rating
        name="half-rating-read"
        defaultValue={rate}
        precision={0.5}
        readOnly
        emptyIcon={
          <StarIcon
            style={{ opacity: 0.25, color: "white" }}
            fontSize="inherit"
          />
        }
        sx={{
          "& .MuiRating-iconFilled": {
            color: "red",
          },
          "& .MuiRating-iconFocus": {
            color: "orange",
          },
          "& .MuiRating-iconHover": {
            color: "green",
          },
        }}
      />
      <Typography fontSize="7px" paragraph>
        {count}
      </Typography>
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          height: 10,
        }}
      >
        <IconButton aria-label="add to favorites">
          <Favorite sx={{ color: "gray" }} />
        </IconButton>
        <IconButton aria-label="comment">
          <Comment sx={{ color: "gray" }} />
        </IconButton>
        <IconButton aria-label="share">
          <Share sx={{ color: "gray" }} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Expand />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography fontSize="9px" paragraph>
            Description:
          </Typography>
          <Typography fontSize="9px" paragraph>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProductCard;
