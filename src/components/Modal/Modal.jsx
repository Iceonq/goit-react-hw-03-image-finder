import React, { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={image} alt="Cze" />
        </div>
      </div>
    );
  }
}
