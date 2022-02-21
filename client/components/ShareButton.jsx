import React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkIcon from '@mui/icons-material/Link';

export default function DropdownShareButton({ url }) {

  const handleShare = e => {
    e.preventDefault();

    const ahref = window.location.href;
    const encodedUrl = encodeURIComponent(url);
    let link;

    switch (e.currentTarget.id) {
    case 'facebook':
      link = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
      open(link);
      break;

    case 'twitter':
      link = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
      open(link);
      break;

    case 'reddit':
      link = `https://www.reddit.com/submit?url=${encodedUrl}`;
      open(link);
      break;

    case 'copy':
      navigator.clipboard.writeText(url);
      break;

    default:
      break;
    }
  };

  const open = socialLink => {
    window.open(socialLink, '_blank');
  };

  return (
    <div
      // style={{
      //   height: '55vh',
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center'
      // }}
    >
      <PopupState variant="popper" popupId="social-share">
        {popupState => (
          <div>
            <Button {...bindToggle(popupState)}>
              <ShareIcon
                style={{ marginRight: '.35em'}}
              />
              Share
            </Button>
            <Popper {...bindPopper(popupState)} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <List dense={true}>
                      <ListItem
                        button
                        style={{ paddingTop: '.75em' }}
                        id="facebook"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <FacebookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Facebook" />
                      </ListItem>
                      
                      <ListItem
                        button
                        style={{ paddingTop: '.75em' }}
                        id="twitter"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <TwitterIcon />
                        </ListItemIcon>
                        <ListItemText primary="Twitter" />
                      </ListItem>
                      
                      <ListItem
                        button
                        style={{ paddingTop: '.75em' }}
                        id="reddit"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <RedditIcon />
                        </ListItemIcon>
                        <ListItemText primary="Reddit" />
                      </ListItem>
                      
                      <ListItem
                        button
                        style={{ paddingTop: '.75em' }}
                        id="copy"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <LinkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Copy Link" />
                      </ListItem>
                    </List>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        )}
      </PopupState>
    </div>
  );
}