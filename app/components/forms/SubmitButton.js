import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../Button";
import colors from "../../config/colors";

function SubmitButton({ title, color }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} color={color} />;
}

export default SubmitButton;
