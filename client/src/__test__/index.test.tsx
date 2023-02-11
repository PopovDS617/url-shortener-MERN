import { render, screen, act } from "@testing-library/react";
import { userJsxSetup } from "@/utils/test/test-utils";
import Homepage from "../pages/index";
import mockAxios from "__mocks__/axios";

afterEach(() => {
  mockAxios.reset();
});

describe("Homepage", () => {
  it("should not render response section or error section initially", () => {
    render(<Homepage />);
    const successDiv = screen.queryByRole("response-with-success");
    const errorDiv = screen.queryByRole("response-with-error");

    expect(errorDiv).not.toBeInTheDocument();
    expect(successDiv).not.toBeInTheDocument();
  });

  describe("spinner", () => {
    it("should not be visible if not loading", () => {
      render(<Homepage />);
      const spinner = screen.queryByTestId("spinner");
      expect(spinner).not.toBeInTheDocument();
    });

    it("should be visible if loading", async () => {
      const { user } = userJsxSetup(<Homepage />);

      const button = screen.getByRole("button", {
        name: /press/i,
      });

      await user.click(button);
      await screen.findByTestId("spinner");
    });
  });
  it("should render an element with response text if request was successfull", async () => {
    const { user } = userJsxSetup(<Homepage />);
    const button = screen.getByRole("button", {
      name: /press/i,
    });

    const responseObj = { data: { short: { shortId: "anything" } } };

    await act(async () => {
      await user.click(button);
      mockAxios.mockResponse(responseObj);
    });
    await screen.findByRole("response-with-success");
  });

  it("should render an error if request was successfull", async () => {
    const { user } = userJsxSetup(<Homepage />);
    const button = screen.getByRole("button", {
      name: /press/i,
    });
    await act(async () => {
      await user.click(button);
      mockAxios.mockError();
    });
    await screen.findByRole("response-with-error");
  });
});
