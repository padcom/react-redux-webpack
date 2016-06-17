import React from 'react';
import { connect } from 'react-redux';

const Title = ({
  title
}) => (
  <h1 class="title">{title}</h1>
);

export default connect(
  state => ({ title: state.title })
)(Title);
