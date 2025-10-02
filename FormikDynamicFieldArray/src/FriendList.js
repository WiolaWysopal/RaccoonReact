import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

export const FriendList = () => (
  <div>
    <h1>Morrowind Skill List</h1>
    <Formik
      initialValues={{ skills: ["Endurance", "Alchemy", "Willpower"] }}
      onSubmit={(values) =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
    >
      {({ values }) => (
        <Form>
          <FieldArray name="skills">
            {(arrayHelpers) => (
              <div>
                {values.skills && values.skills.length > 0 ? (
                  values.skills.map((skill, index) => (
                    <div key={index}>
                      <Field name={`skills.${index}`} />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")}
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    Add a skill
                  </button>
                )}
                <div>
                  <button type="submit">Submit</button>
                </div>
              </div>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  </div>
);
