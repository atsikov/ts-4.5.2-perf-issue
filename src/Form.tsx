import { VFC } from "react";
import { Controller } from "react-hook-form";

export const Form: VFC = () => {
  return (
    <form>
      <Controller
        name="field"
        render={({ field }) => <input {...field} />}
      />
    </form>
  );
};
