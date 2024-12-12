import React, { useState } from "react";
import { View, Button, Image, StyleSheet } from "react-native";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";

const ImageUploader = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImageFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        maxWidth: 300,
        maxHeight: 300,
        quality: 0.7,
      },
      (response) => {
        if (response.didCancel) {
          console.log("user ləğv etdi.");
        } else if (response.errorCode) {
          console.log("Xəta:", response.errorMessage);
        } else if (response.assets && response.assets[0].uri) {
          const selectedImageUri = response.assets[0].uri;
          setImageUri(selectedImageUri);
        }
      }
    );
  };

  const takePhotoWithCamera = () => {
    launchCamera(
      {
        mediaType: "photo",
        maxWidth: 300,
        maxHeight: 300,
        quality: 0.7,
      },
      (response) => {
        if (response.didCancel) {
          console.log("user ləğv etdi.");
        } else if (response.errorCode) {
          console.log("Xəta:", response.errorMessage);
        } else if (response.assets && response.assets[0].uri) {
          const capturedImageUri = response.assets[0].uri;
          setImageUri(capturedImageUri);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Galeridən Seç" onPress={pickImageFromGallery} />
        <Button title="Kamera ilə Çək" onPress={takePhotoWithCamera} />
      </View>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

export default ImageUploader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 250,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
});
