/*
 * Copyright (c) Meta Platforms and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

function SelectField({ field, updateFormData }) {
  return (
    <select
      className={`form-control`}
      id={field.id}
      name={field.name}
      placeholder={field.placeholder}
      style={field.style}
      required={field.required}
      onChange={(e) => updateFormData(e, field.name)}
    >
      {field.options.map(( option, index ) => {
        return (
          <option
            key={`option-${field.id}-${index}`}
            value={option.value}
          >
            {option.name}
          </option>
        );
      })}
    </select>
  );
}

export { SelectField };
