import { screen, render } from "@testing-library/react";

import Response from "../Response";

describe("Response component", () => {
  describe("on success", () => {
    it("should render url as response on success", async () => {
      const testUrl = "test url text string";
      render(
        <Response
          response={testUrl}
          error={{ hasError: false, errorMessage: "" }}
        />
      );

      const displayedUrl = screen.getByText(/test url text string/i);
      expect(displayedUrl.textContent).toMatch(testUrl);
    });
  });

  describe("on error", () => {
    it("should render error if URL is not valid", async () => {
      const message = "Entered URL is not valid";
      render(
        <Response
          response=""
          error={{ hasError: true, errorMessage: message }}
        />
      );

      screen.getByText(/Entered URL is not valid/i);
    });

    it("should render error if request failed", async () => {
      const message = "Something went wrong";
      render(
        <Response
          response=""
          error={{ hasError: true, errorMessage: message }}
        />
      );

      screen.getByText(/Something went wrong/i);
    });
  });
});
