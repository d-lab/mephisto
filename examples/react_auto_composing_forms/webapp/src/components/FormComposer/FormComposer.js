/*
 * Copyright (c) Meta Platforms and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { CheckboxField } from "./fields/CheckboxField";
import { FileField } from "./fields/FileField";
import { InputField } from "./fields/InputField";
import { RadioField } from "./fields/RadioField";
import { SelectField } from "./fields/SelectField";
import { TextareaField } from "./fields/TextareaField";
import "./FormComposer.css";


function FormComposer({ data, onSubmit, finalResults }) {
  const [form, setForm] = React.useState({});

  const isInReviewState = finalResults !== null;

  let formName = data.name;
  let formInstruction = data.instruction;
  let formSections = data.sections;
  let formSubmitButton = data.submit_button;

  function updateFormData(e, fieldName, value) {
    if (e) {
      e.preventDefault();
    }
    setForm((prevState) => {
      return {...prevState, ...{ [fieldName]: value} }
    });
  }

  // Effects
  React.useEffect(() => {
    if (formSections.length) {
      const initialFormData = {};

      formSections.map((section) => {
        section.fieldsets.map((fieldset) => {
          fieldset.rows.map((row) => {
            row.fields.map((field) => {
              initialFormData[field.name] = field.value;
            });
          });
        });
      });

      setForm(initialFormData);
    }
  }, [formSections]);

  return (
    <form
      className={`form-composer`}
      method={"POST"}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      {(formName || formInstruction) && (
        <div className={`alert alert-primary`} role={"alert"}>
          {formName && (
            <h2 className={`form-name`}>
              {formName}
            </h2>
          )}

          {formName && formInstruction && <hr />}

          {formInstruction && (
            <p className={`form-instruction`}>
              {formInstruction}
            </p>
          )}
        </div>
      )}

      {/* Accordion with collapsable sections */}
      <div className={`accordion`} id={`id_accordion`}>

        {/* Sections */}
        {formSections.map(( section, index ) => {
          let sectionName = section.name;
          let sectionInstruction = section.instruction;
          let fieldsets = section.fieldsets;

          return (
            <section
              key={`section-${index}`}
              className={`section container`}
            >
              {(sectionName || sectionInstruction) && (
                // Section header is clickable for accordion
                <div
                  className={`alert alert-info`}
                  role={"alert"}
                  id={`accordion_heading_${index}`}
                  data-toggle={"collapse"}
                  data-target={`#accordion_collapsable_part_${index}`}
                  aria-expanded={true}
                  aria-controls={`accordion_collapsable_part_${index}`}
                >
                  {sectionName && (
                    <h4 className={`section-name dropdown-toggle`}>
                      {sectionName}
                    </h4>
                  )}

                  {sectionName && sectionInstruction && <hr />}

                  {sectionInstruction && (
                    <p className={`section-instruction`}>
                      {sectionInstruction}
                    </p>
                  )}
                </div>
              )}

              {/* Collapsable part of section with fieldsets */}
              <div
                id={`accordion_collapsable_part_${index}`}
                className={`collapse ${index === 0 ? "show" : ""}`}
                aria-labelledby={`accordion_heading_${index}`}
                data-parent={`#id_accordion`}
              >
                {fieldsets.map(( fieldset, index ) => {
                  let fieldsetName = fieldset.name;
                  let fieldsetInstruction = fieldset.instruction;
                  let rows = fieldset.rows;

                  return (
                    <fieldset
                      key={`fieldset-${index}`}
                      className={`fieldset container`}
                    >
                      {(fieldsetName || fieldsetInstruction) && (
                        <div className={`fieldset-header alert alert-secondary`} role={"alert"}>
                          {fieldsetName && (
                            <h5 className={`fieldset-name`}>
                              {fieldsetName}
                            </h5>
                          )}

                          {fieldsetName && fieldsetInstruction && <hr />}

                          {fieldsetInstruction && (
                            <p className={`fieldset-instruction`}>
                              {fieldsetInstruction}
                            </p>
                          )}
                        </div>
                      )}

                      {rows.map(( row, index ) => {
                        let rowHelp = row.help;
                        let fields = row.fields;

                        return (
                          <div
                            key={`row-${index}`}
                            className={`row`}
                          >
                            {fields.map(( field, index ) => {
                              let fieldHelp = field.help;

                              return (
                                <div
                                  key={`field-${index}`}
                                  className={
                                    `${field.class ? field.class : ""}
                                    field
                                    form-group
                                    col
                                    ${field.required ? "required" : ""}`
                                  }
                                >

                                  <i>
                                    {field.icon}
                                  </i>
                                  <label htmlFor={field.id}>
                                    {field.label}
                                  </label>

                                  {["input", "email", "password", "number"].includes(field.type) && (
                                    <InputField
                                      field={field}
                                      updateFormData={updateFormData}
                                      disabled={isInReviewState}
                                      initialFormData={finalResults}
                                    />
                                  )}

                                  {field.type === "textarea" && (
                                    <TextareaField
                                      field={field}
                                      updateFormData={updateFormData}
                                      disabled={isInReviewState}
                                      initialFormData={finalResults}
                                    />
                                  )}

                                  {field.type === "checkbox" && (
                                    <CheckboxField
                                      field={field}
                                      updateFormData={updateFormData}
                                      disabled={isInReviewState}
                                      initialFormData={finalResults}
                                    />
                                  )}

                                  {field.type === "radio" && (
                                    <RadioField
                                      field={field}
                                      updateFormData={updateFormData}
                                      disabled={isInReviewState}
                                      initialFormData={finalResults}
                                    />
                                  )}

                                  {field.type === "select" && (
                                    <SelectField
                                      field={field}
                                      updateFormData={updateFormData}
                                      disabled={isInReviewState}
                                      initialFormData={finalResults}
                                    />
                                  )}

                                  {field.type === "file" && (
                                    <FileField
                                      field={field}
                                      updateFormData={updateFormData}
                                      disabled={isInReviewState}
                                      initialFormData={finalResults}
                                    />
                                  )}

                                  {fieldHelp && (
                                    <small className={`field-help form-text text-muted`}>
                                      {fieldHelp}
                                    </small>
                                  )}
                                </div>
                              );
                            })}

                            {rowHelp && (
                              <div className={`row-help container`}>
                                {rowHelp}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </fieldset>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {(formSubmitButton && !isInReviewState) && (<>
        <hr className={`form-buttons-separator`} />

        <div className={`form-buttons container`}>
          <button
            className={`button-submit btn btn-success`}
            type={"submit"}
            title={formSubmitButton.title}
          >
            {formSubmitButton.text}
          </button>
        </div>
      </>)}
    </form>
  );
}

export { FormComposer };
