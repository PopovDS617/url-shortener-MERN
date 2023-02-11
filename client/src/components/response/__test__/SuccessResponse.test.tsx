import { screen, act } from "@testing-library/react";
import { userJsxSetup } from "@/utils/test/test-utils";
import App from "../../App";
import mockAxios from "__mocks__/axios";

describe("SuccessResponse component", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  it("should be rendered after a successfull response", async () => {
    const { user } = userJsxSetup(<App />);
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

  it("should render url as response on success", async () => {
    const { user } = userJsxSetup(<App />);
    const button = screen.getByRole("button", {
      name: /press/i,
    });
    const shortId = "test url text string";
    const responseObj = { data: { short: { shortId } } };

    await act(async () => {
      await user.click(button);
      mockAxios.mockResponse(responseObj);
    });
    const displayedUrl = screen.getByText(/test url text string/i);
    expect(displayedUrl.textContent).toMatch(shortId);
  });
});
