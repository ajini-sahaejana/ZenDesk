import { React } from "react";
import { useFormikContext } from "formik";
import ActivityIndicator from "react-native";

import AppButton from "../Button";
import colors from "../../config/colors";

function SubmitButton({ title, color, disabled }) {
  const { handleSubmit, isSubmitting } = useFormikContext();

  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      color={color}
      disabled={disabled}
    ></AppButton>
  );
}

export default SubmitButton;
