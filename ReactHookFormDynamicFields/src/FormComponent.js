import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

export default function FormComponent() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      contacts: [{ name: "", phone: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "contacts",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Contacts List</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, index) => (
          <div key={item.id} style={{ marginBottom: "15px" }}>
            <input
              {...register(`contacts.${index}.name`, {
                required: "NAME REQUIRED",
              })}
              placeholder="NAME"
            />
            {errors.contacts?.[index]?.name && (
              <p style={{ color: "red" }}>
                {errors.contacts[index].name.message}
              </p>
            )}

            <input
              {...register(`contacts.${index}.phone`, {
                required: "PHONE NUMBER REQUIRED",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "PHONE NUMBER CONTAINS CIPHER ONLY",
                },
              })}
              placeholder="PHONE"
            />
            {errors.contacts?.[index]?.phone && (
              <p style={{ color: "red" }}>
                {errors.contacts[index].phone.message}
              </p>
            )}

            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </div>
        ))}

        <button type="button" onClick={() => append({ name: "", phone: "" })}>
          Add Contact
        </button>

        <div style={{ marginTop: "20px" }}>
          <button type="submit">Zapisz</button>
        </div>
      </form>
    </div>
  );
}
