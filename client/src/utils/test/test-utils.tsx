import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";

export const userJsxSetup = (jsx: JSX.Element) => {
  return { user: userEvent.setup(), ...render(jsx) };
};
