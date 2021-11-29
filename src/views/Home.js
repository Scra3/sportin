import React from 'react';
import { useHistory } from "react-router-dom";
import ReactGA from 'react-ga';

// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import Input from "../components/elements/Input";
import FormLabel from "../components/elements/FormLabel";
import Image from "../components/elements/Image";

const Home = () => {
    const history = useHistory();

    function handleClick() {
        ReactGA.event({
            category: 'Rechercher',
            action: 'quoi',
            label: document.getElementById('quoi').value,
        });

        ReactGA.event({
            category: 'Rechercher',
            action: 'ou',
            label: document.getElementById('ou').value,
        });
        history.push("/in_process");
    }

    return (
        <>

            <div className="container scra-container">
                <h1 className="text-color-primary scra-text-icon scra-color">SportIn</h1>

                <h1 className="mt-0 mb-16 scra-color-black scra-header-title scra-home-title">Le premier moteur de recherche sportif</h1>

            <div className="scra-search">
                <FormLabel>Quoi</FormLabel>
                <Input id="quoi" className="form-input" type="text" name="_replyto" required placeholder="basket"/>
                <FormLabel>Où</FormLabel>
                <Input id="ou" className="form-input" type="text" name="_replyto" required placeholder="Paris"/>
                <button onClick={handleClick} className="button button-primary button-wide-mobile scra-search-button scra-background-color" type="submit" tag="a" color="primary" >
                    Rechercher
                </button>
            </div>
                <Image
                    className="scra-image"
                    src={require('./../assets/images/main.png')}
                    alt="Features split 01"
                    width={828}
                    height={896} />
            </div>
        </>
    );
}

export default Home;
