import { useState, useEffect } from 'react';

const CategoryCalc = ({
  selectedStorage,
  unlockedSim,
  selectedScreenQuality,
  selectedStructurePhoneQuality,
  selectedGlobalQuality,
  phoneRam,
  phoneRating,
  setPhoneRating,
  setPhonePrice,
}) => {

 
  const categories = {
    cat1: "HC",
    cat2: "C",
    cat3: "B",
    cat4: "A",
    cat5: "Premium"
  };

  const price = {
    cat1: 0,
    cat2: 17,
    cat3: 35,
    cat4: 52,
    cat5: 70 
  };

  useEffect(() => {
    calculateRating();
  }, [selectedStorage, unlockedSim, selectedScreenQuality, selectedStructurePhoneQuality, selectedGlobalQuality, phoneRam]);

  const calculateRating = () => {
    let rating = 0;

    // Calculate rating based on selectedStorage
    if (selectedStorage === "16") {
      rating += 10;
    } else if (selectedStorage === "32") {
      rating += 20;
    } else if (selectedStorage === "64") {
      rating += 30;
    } else if (selectedStorage === "128") {
      rating += 40;
    } else if (selectedStorage === "256") {
      rating += 75;
    }

    if (phoneRam === "0") {
        rating += 0;
      } else if (phoneRam === "2") {
        rating += 25;
      } else if (phoneRam === "3") {
        rating += 35;
      } else if (phoneRam === "4") {
        rating += 45;
      } else if (phoneRam === "6") {
        rating += 55;
      } else if (phoneRam === "8") {
        rating += 65;
      } else if (phoneRam === "12") {
        rating += 75;
      }
  
    // Calculate rating based on unlockedSim
    if (unlockedSim === "Débloquée") {
      rating += 50;
    }

    // Calculate rating based on selectedScreenQuality
    if (selectedScreenQuality === "Parfait état") {
      rating += 100;
    } else if (selectedScreenQuality === "Très bon état") {
      rating += 70;
    } else if (selectedScreenQuality === "Etat correct") {
      rating += 50;
    }

    // Calculate rating based on selectedStructurePhoneQuality
    if (selectedStructurePhoneQuality === "Parfait état") {
      rating += 100;
    } else if (selectedStructurePhoneQuality === "Très bon état") {
      rating += 70;
    } else if (selectedStructurePhoneQuality === "Etat correct") {
      rating += 50;
    }

    // Calculate rating based on selectedGlobalQuality
    if (selectedGlobalQuality === "Oui") {
      rating += 50;
    }

    setPhoneRating(rating);
  };

  useEffect(() => {
    handleRating();
  }, [phoneRating]);

  const handleRating = () => {
    if (phoneRating < 90) {
      setPhoneRating(categories.cat1);
      setPhonePrice(price.cat1);
    } else if (phoneRating >= 90 && phoneRating < 165) {
      setPhoneRating(categories.cat2);
      setPhonePrice(price.cat2);
    } else if (phoneRating >= 165 && phoneRating < 255) {
      setPhoneRating(categories.cat3);
      setPhonePrice(price.cat3);
    } else if (phoneRating >= 255 && phoneRating < 375) {
      setPhoneRating(categories.cat4);
      setPhonePrice(price.cat4);
    } else if (phoneRating >= 375) {
      setPhoneRating(categories.cat5);
      setPhonePrice(price.cat5)
    }
  };

  
  


  return (
    <>
    </>
  );
};

export default CategoryCalc;
