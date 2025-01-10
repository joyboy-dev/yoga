import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const quotes = [
  "   Health is not about the weight you lose but the life you gain.",
  
];

export default function WelcomePage() {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const quote = quotes[0];
    let i = 0;
    const interval = setInterval(() => {
      if (i < quote.length) {
        setCurrentText((prev) => prev + quote.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Typing speed

    return () => clearInterval(interval);
  }, []);

  const handleGoogleSignIn = () => {
    console.log("Continue with Google clicked!");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/homeScreenLight.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.bottomContainer}>
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>{currentText}</Text>
        </View>
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  backgroundImage: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
  quoteContainer: {
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  quoteText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  googleButton: {
    backgroundColor: "#5277F4",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  googleButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
