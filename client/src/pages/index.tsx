import React, { useState, FormEvent } from "react";
import { motion } from "framer-motion";

import axios from "axios";
import Response from "../components/response/Response";
import Spinner from "../components/ui/Spinner";
import Form from "../components/form/Form";

export default function Homepage() {
  const options = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, errorText: "" });
  const [response, setResponse] = useState<string>("");

  const sumbitHandler = async (inputData: string) => {
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
        data: { destination: inputData },
      });

      const shortId = data.data.short.shortId;
      setIsLoading(false);
      setResponse(shortId);
    } catch (err: any) {
      setIsLoading(false);

      if (err.response?.data.message === "Must be a valid URL") {
        setError({ hasError: true, errorText: "Entered URL is not valid" });
      } else setError({ hasError: true, errorText: "Something went wrong :(" });
    }
  };

  return (
    <main className=" items-flex-start flex h-screen justify-center">
      <motion.div
        variants={options}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1 }}
        className="mt-10 flex h-full w-full flex-col items-start justify-start "
      >
        <Form sumbitHandler={sumbitHandler} />
        <div className="flex w-full flex-col items-center justify-center text-xl">
          {isLoading ? (
            <div className="mt-5">
              <Spinner />
            </div>
          ) : null}
          <Response response={response} error={error} />
        </div>
      </motion.div>
    </main>
  );
}
