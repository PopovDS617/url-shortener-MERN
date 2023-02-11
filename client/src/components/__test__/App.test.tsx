import { findByText, render, screen, act } from "@testing-library/react";
import { userJsxSetup } from "@/utils/test/test-utils";
import App from "../App";
import mockAxios from "__mocks__/axios";

afterEach(() => {
  mockAxios.reset();
});

describe("App", () => {
  describe("component", () => {
    it("should render a button and an input", () => {
      render(<App />);
      const input = screen.getByRole("textbox", {
        name: /url input/i,
      });
      const button = screen.getByRole("button", {
        name: /press/i,
      });

      expect(button).toBeInTheDocument();
      expect(input).toBeInTheDocument();
    });

    it("should not render response section or error section initially", () => {
      render(<App />);
      const successDiv = screen.queryByRole("response-with-success");
      const errorDiv = screen.queryByRole("response-with-error");

      expect(errorDiv).not.toBeInTheDocument();
      expect(successDiv).not.toBeInTheDocument();
    });
  });
  describe("input", () => {
    it("should be empty initially", () => {
      render(<App />);
      const input = screen.getByRole("textbox", {
        name: /url input/i,
      });

      expect(input).toHaveValue("");
    });
    it("should be active", async () => {
      const { user } = userJsxSetup(<App />);

      const input = screen.getByRole("textbox", {
        name: /url input/i,
      });

      await user.type(input, "test");
      expect(input).toHaveValue("test");
    });
  });

  describe("button", () => {
    it("should call submit function on click", async () => {
      const { user } = userJsxSetup(<App />);

      const button = screen.getByRole("button", {
        name: /press/i,
      });

      await user.click(button);

      expect(mockAxios).toHaveBeenCalledTimes(1);
    });
  });
  describe("spinner", () => {
    it("should not be visible if not loading", () => {
      render(<App />);
      const spinner = screen.queryByTestId("spinner");
      expect(spinner).not.toBeInTheDocument();
    });

    it("should be visible if loading", async () => {
      const { user } = userJsxSetup(<App />);

      const button = screen.getByRole("button", {
        name: /press/i,
      });

      await user.click(button);
      await screen.findByTestId("spinner");
    });
  });
});
