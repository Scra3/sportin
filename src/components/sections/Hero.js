import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Input from "../elements/Input";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom scra-color-black scra-header-title" data-reveal-delay="200">
              La plateforme est en cours de construction <span className="text-color-primary scra-color">...</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom scra-header-title" data-reveal-delay="400">
                Si vous souhaitez être averti de la sortie de la plateforme, veuillez saisir votre email.
                Promis, on vous écrira que vraiment si c'est nécessaire.
                <span>&#128522;</span>

              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <form
                    className="scra-form-email"
                    action="https://formspree.io/f/mrgrndad"
                    method="POST"
                >
                  <Input className="form-input" placeholder="Mon meilleur email" type="email" name="_replyto" required/>
                  <button className="button button-primary button-wide-mobile scra-background-color" type="submit" tag="a" color="primary" >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
