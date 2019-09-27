import React from "react";
import Base from "terra-base";
import Button from "terra-button";
import Heading from "terra-heading";
import InputField from "terra-form-input/lib/InputField";
import MultiSelectField from "terra-form-select/lib/MultiSelectField";
import SearchSelectField from "terra-form-select/lib/SearchSelectField";
import "./App.css";
import doctors from "./doctors";

function App() {
  return (
    <Base locale="en">
      <div className="App">
        <form onSubmit={e => e.preventDefault()}>
          <Heading level={1}>Select Accessibility Tests</Heading>
          <SearchSelectField
            isTouchAccessible
            allowClear
            placeholder="Select a recipient"
            required
            label="To (single-select):"
            selectId="single-search-select-recipients"
          >
            {doctors.map(doctor => (
              <SearchSelectField.Option
                key={doctor}
                value={doctor}
                display={doctor}
              />
            ))}
          </SearchSelectField>
          <InputField
            inputId="subject"
            label="Subject"
            help="Note: This is just an example input"
            type="text"
            inputAttrs={{
              placeholder: "Subject",
              name: "subject"
            }}
          />
          <MultiSelectField
            isTouchAccessible
            required
            placeholder="Select a recipient"
            label="To (multi-select):"
            selectId="multi-select-recipients"
          >
            {doctors.map(doctor => (
              <MultiSelectField.Option
                key={doctor}
                value={doctor}
                display={doctor}
              />
            ))}
          </MultiSelectField>
          <InputField
            inputId="message"
            label="Message"
            help="Note: This is just an example input"
            type="text"
            inputAttrs={{
              placeholder: "Message",
              name: "message"
            }}
          />
          <Button type="submit" text="Fake submit" />
        </form>
      </div>
    </Base>
  );
}

export default App;
