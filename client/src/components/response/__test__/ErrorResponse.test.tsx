import { screen, act } from "@testing-library/react";
import { userJsxSetup } from "@/utils/test/test-utils";
import App from "../../App";
import mockAxios from "__mocks__/axios";

describe("ErrorResponse component", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should be rendered after error", async () => {
    const { user } = userJsxSetup(<App />);
    const button = screen.getByRole("button", {
      name: /press/i,
    });

    await act(async () => {
      await user.click(button);
      mockAxios.mockError();
    });
    await screen.findByRole("response-with-error");
  });

  it("should render error if URL is not valid", async () => {
    const { user } = userJsxSetup(<App />);
    const button = screen.getByRole("button", {
      name: /press/i,
    });
    const message = "Must be a valid URL";
    const responseObj = {
      response: { data: { message: message } },
    };
    await act(async () => {
      await user.click(button);
      mockAxios.mockError(responseObj);
    });
    screen.getByText(/Entered URL is not valid/i);
  });

  it("should render error if request failed", async () => {
    const { user } = userJsxSetup(<App />);
    const button = screen.getByRole("button", {
      name: /press/i,
    });

    await act(async () => {
      await user.click(button);
      mockAxios.mockError();
    });
    screen.getByText(/Something went wrong/i);
  });
});
