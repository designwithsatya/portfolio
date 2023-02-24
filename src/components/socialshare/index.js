import React from 'react';
import { Share } from './Share';

const URL = 'https://www.w3schools.com/';
const HASHTAGS = ['ngo', 'satya'];
const MESSAGE = 'I invite you to check it out and see if you can help as well.';

const index = () => {
  <Share url={URL} hashtags={HASHTAGS} message={MESSAGE} />;
};

export default index;
