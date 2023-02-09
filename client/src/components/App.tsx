import React, { FormEvent, useState } from "react";
import ArrowIcon from "./ui/ArrowIcon";
import { motion } from "framer-motion";
import axios from "axios";
import AxiosError from "axios/lib/core/AxiosError";
import Spinner from "./ui/Spinner";
import SuccessResponse from "./response/SuccessResponse";
import ErrorResponse from "./response/ErrorResponse";

const App = () => {
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, errorText: "" });
  const [response, setResponse] = useState<string>("");

  const options = {
    initial: { opacity: 0, y: -15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };
  const sumbitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setResponse("");
    setError({ hasError: false, errorText: "" });
    setIsLoading(true);
    try {
      const data = await axios({
        method: "POST",
        url: process.env.API_URL + "url",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        data: { destination: url },
      });

      const shortId = data.data.short.shortId;
      setIsLoading(false);
      setResponse(shortId);
    } catch (err: AxiosError) {
      setIsLoading(false);

      if (err.response?.data.message === "Must be a valid URL") {
        setError({ hasError: true, errorText: "Entered URL is not valid" });
      } else setError({ hasError: true, errorText: "Something went wrong :(" });
    }
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputUrl = e.target.value.trim();
    setUrl(inputUrl);
  };

  return (
    <form
      onSubmit={sumbitHandler}
      className="flex w-full flex-col items-center justify-center text-xl"
    >
      <div className="w-full text-center">
        <input
          type="text"
          className="w-1/2 p-1 text-black outline-none"
          onChange={inputHandler}
        />
        <button className="ml-4 p-1 px-4 outline outline-2 outline-white duration-150  hover:-translate-y-1 hover:shadow-md hover:shadow-white hover:transition-all hover:duration-150 ">
          press
        </button>
      </div>
      {isLoading ? (
        <div className="mt-5">
          <Spinner />
        </div>
      ) : null}
      {(response || error.hasError) && (
        <motion.div
          variants={options}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="mt-5 flex w-full flex-col items-center justify-start"
        >
          <ArrowIcon />
          {response && <SuccessResponse response={response} />}
          {error.hasError && <ErrorResponse errorText={error.errorText} />}
        </motion.div>
      )}
    </form>
  );
};

export default App;
