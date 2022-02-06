import React from "react";
import { Form } from "react-bootstrap";
import { useFormikContext } from "formik";

export default function Select(props) {
  const { menuItems, name, loading, title, ...otherProps } = props;
  const { setFieldTouched, handleChange, touched, errors, values } =
    useFormikContext();
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{title}</Form.Label>
      <Form.Select
        placeholder={title}
        name={name}
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange(name)}
        value={values[name]}
        disabled={loading}
        isValid={touched[name] && !errors[name]}
        isInvalid={!touched[name] || !errors[name] ? false : true}
        {...otherProps}
      >
        <option>Select option</option>
        {menuItems?.map((menuItem) => (
          <option key={menuItem.value} value={menuItem?.value}>
            {menuItem?.value}
          </option>
        ))}
      </Form.Select>
      <Form.Control.Feedback>Looks Good</Form.Control.Feedback>
      <Form.Control.Feedback type="invalid">
        {errors[name]}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
