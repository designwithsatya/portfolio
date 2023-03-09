import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const MainStyle = styled(Box)(() => ({
  gap: '10px',
  display: 'flex',
  justifyContent: 'center',
}));

const ICON_DEFAULTS = {
  size: 30,
};

export const Share = ({ url, message, hashtags }) => {
  return (
    <>
      <MainStyle>
        <FacebookShareButton url={url} quote={message} hashtag={hashtags[0]}>
          <FacebookIcon {...ICON_DEFAULTS} />
        </FacebookShareButton>
        <WhatsappShareButton url={url} title={message}>
          <WhatsappIcon {...ICON_DEFAULTS} />
        </WhatsappShareButton>
        <LinkedinShareButton url={url} title={message} hashtags={hashtags}>
          <LinkedinIcon {...ICON_DEFAULTS} />
        </LinkedinShareButton>
        <TwitterShareButton url={url} title={message} hashtags={hashtags}>
          <TwitterIcon {...ICON_DEFAULTS} />
        </TwitterShareButton>
      </MainStyle>
    </>
  );
};

Share.propTypes = {
  url: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  hashtags: PropTypes.string.isRequired,
};
