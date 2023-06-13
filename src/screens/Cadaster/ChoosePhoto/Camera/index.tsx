import React, { useState, useEffect, useRef } from "react";

import { View, Text, SafeAreaView } from "react-native";
import { Camera } from "expo-camera";

export function CameraPhoto() {
  const camRef = useRef(null);

  const [type, setType] = useState(Camera.Constants.Type);
  const [permission, setPermission] = useState(null);

  useEffect(() => {
    async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === "granted");
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <Camera
        style={{ flex: 1, justifyContent: "center" }}
        type={type}
        ref={camRef}
      ></Camera>
    </SafeAreaView>
  );
}
