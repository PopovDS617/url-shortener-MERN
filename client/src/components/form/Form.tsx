import React, { useState, FormEvent } from "react";
import FormButton from "../ui/buttons/FormButton";

type Props = {
  sumbitHandler: (arg: string) => void;
};

const Form = (props: Props) => {
  const [url, setUrl] = useState<string>("");

  const sumbitHandler = async (e: FormEvent) => {
    e.preventDefault();
    props.sumbitHandler(url);
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
          aria-label="url input"
          name="url"
          type="text"
          className="w-1/2 p-1 text-black outline-none"
          onChange={inputHandler}
        />
        <FormButton variant={url ? "active" : "disabled"} />
      </div>
    </form>
  );
};

export default Form;
