import {
  Grid,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";

export const ChatRoomItem = (props) => {
  return (
    <Grid
      item
      md={6}
      style={{ flexBasic: "25%", maxWidth: "none", cursor: "pointer" }}
    >
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.name} />
        </ListItem>
      </List>
    </Grid>
  );
};
