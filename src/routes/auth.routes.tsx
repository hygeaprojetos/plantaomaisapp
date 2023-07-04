import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Login";
import { Start } from "../screens/Cadaster/Start";
import { CapturedName } from "../screens/Cadaster/CaptureName";
import { ConfirmName } from "../screens/Cadaster/ConfirmName";
import { ChoosenPhoto } from "../screens/Cadaster/ChoosePhoto";
import { FormCadaster } from "../screens/Cadaster/FormCadaster";
import { VerificationCode } from "../screens/Cadaster/Verification";
import { CameraPhoto } from "../screens/Cadaster/ChoosePhoto/Camera";
import { CheckListMessage } from "../screens/CheckListMessage";
import { PaymentLink } from "../screens/Cadaster/PaymentLink";
import { InternalLink } from "../screens/Cadaster/InternalLink";
import { Attachments } from "../screens/Cadaster/Attachments";
import { CheckListDocument } from "../screens/Cadaster/CheckListDocument";
import { AttachmentsDoctor } from "../screens/Cadaster/AttachmentsDoctor";
import { AttachmentsCadaster } from "../screens/Cadaster/AttachmentsCadaster";

const Auth = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Auth.Navigator>
       <Auth.Screen
        options={{ headerShown: false }}
        name="login"
        component={Login}
      />
      <Auth.Screen
        options={{ headerShown: false }}
        name="Start"
        component={Start}
      />
      <Auth.Screen
        options={{ headerShown: false }}
        name="CapturedName"
        component={CapturedName}
      />
      <Auth.Screen
        options={{ headerShown: false }}
        name="ConfirmName"
        component={ConfirmName}
      />
      <Auth.Screen
        options={{ headerShown: false }}
        name="ChoosenPhoto"
        component={ChoosenPhoto}
      />
      <Auth.Screen
        options={{ headerShown: false }}
        name="CameraPhoto"
        component={CameraPhoto}
      />
      <Auth.Screen
        options={{ headerShown: false }}
        name="FormCadaster"
        component={FormCadaster}
      />
      <Auth.Screen
        options={{ headerShown: false }}
        name="VerificationCode"
        component={VerificationCode}
      />
      <Auth.Screen
        options={{ headerShown: false }}
        name="CheckListMessage"
        component={CheckListMessage}
      />
      <Auth.Screen
        options={{ headerShown: false }}
        name="Attachments"
        component={Attachments}
      />
      <Auth.Screen
        options={{ headerShown: false }}
        name="PaymentLink"
        component={PaymentLink}
      />
      <Auth.Screen
        options={{ headerShown: false }}
        name="CheckListDocument"
        component={CheckListDocument}
      />
     
      <Auth.Screen
        options={{ headerShown: false }}
        name="AttachmentsCadaster"
        component={AttachmentsCadaster}
      />
      <Auth.Screen
        options={{ headerShown: false }}
        name="AttachmentsDoctor"
        component={AttachmentsDoctor}
      /> 
      <Auth.Screen
        options={{ headerShown: false }}
        name="InternalLink"
        component={InternalLink}
      />
    </Auth.Navigator>
  );
}
