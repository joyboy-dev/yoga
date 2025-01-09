import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const quotes = [
" Health is not about the weight you lose but the life you gain.",
];

export default function WelcomePage() {
  const [quote, setQuote] = useState("");
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    // Randomly select a quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);

    // Reset the text
    setCurrentText("");

    // Typing effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < randomQuote.length) {
        setCurrentText((prev) => prev + randomQuote.charAt(i));
        console.log("Current Text: ", currentText); // Log the current text for debugging
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Typing speed

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, []);

  return (
    <View style={styles.container}>
      {/* Background */}
      <Image
        source={require("../assets/images/homeScreenLight.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      {/* Content */}
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>{currentText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative", // Ensures child absolute positioning works
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  quoteContainer: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Add a semi-transparent background for better readability
    borderRadius: 10,
    marginHorizontal: 20,
  },
  quoteText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
