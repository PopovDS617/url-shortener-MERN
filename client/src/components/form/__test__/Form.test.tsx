import { findByText, render, screen, act } from "@testing-library/react";
import { userJsxSetup } from "@/utils/test/test-utils";
import mockAxios from "__mocks__/axios";
import Form from "../Form";

describe("Form", () => {
  describe("component", () => {
    it("should render a button and an input", () => {
      render(<Form sumbitHandler={() => {}} />);
      const input = screen.getByRole("textbox", {
        name: /url input/i,
      });
      const button = screen.getByRole("button", {
        name: /press/i,
      });

      expect(button).toBeInTheDocument();
      expect(input).toBeInTheDocument();
    });
  });

  describe("input", () => {
    it("should be empty initially", () => {
      render(<Form sumbitHandler={() => {}} />);
      const input = screen.getByRole("textbox", {
        name: /url input/i,
      });

      expect(input).toHaveValue("");
    });

    it("should be active and display entered value", async () => {
      const { user } = userJsxSetup(<Form sumbitHandler={() => {}} />);

      const input = screen.getByRole("textbox", {
        name: /url input/i,
      });

      await user.type(input, "test");
      expect(input).toHaveValue("test");
    });
  });

  describe("button", () => {
    it("should call submit function on click", async () => {
      const { user } = userJsxSetup(<Form sumbitHandler={mockAxios} />);

      const button = screen.getByRole("button", {
        name: /press/i,
      });

      await user.click(button);

      expect(mockAxios).toHaveBeenCalledTimes(1);
    });
  });
});
