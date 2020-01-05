import React from "react";
import Input from "./input";
import Select from "./select";
import { types } from "@matthamlin/property-controls";

export default function PropertyControls({
  dispatch,
  state,
  propertyControls,
  name = null,
  value = null,
  id = null
}) {
  let isNested = name !== null;
  let propertyControlEntries = Object.entries(propertyControls);
  return propertyControlEntries.map(([propName, control]) => {
    switch (control.type) {
      case types.string: {
        if (isNested) {
          return (
            <Input
              key={propName}
              {...control}
              name={`${name}.${propName}`}
              value={value[name]}
              dispatch={dispatch}
              id={id}
            />
          );
        }
        return (
          <Input
            key={propName}
            {...control}
            name={propName}
            value={state[propName]}
            dispatch={dispatch}
            id={id}
          />
        );
      }
      case types.number: {
        if (isNested) {
          return (
            <Input
              key={propName}
              {...control}
              name={`${name}.${propName}`}
              value={value[name]}
              dispatch={dispatch}
              id={id}
              type="number"
            />
          );
        }
        return (
          <Input
            key={propName}
            {...control}
            name={propName}
            value={state[propName]}
            dispatch={dispatch}
            id={id}
            type="number"
          />
        );
      }
      // case types.boolean: {
      //   if (isNested) {
      //     return (
      //       <BooleanInput
      //         key={propName}
      //         {...control}
      //         name={`${name}.${propName}`}
      //         value={value[name]}
      //         dispatch={dispatch}
      //       />
      //     );
      //   }
      //   return (
      //     <BooleanInput
      //       key={propName}
      //       {...control}
      //       name={propName}
      //       value={state[name]}
      //       dispatch={dispatch}
      //     />
      //   );
      // }
      // case types.range: {
      //   if (isNested) {
      //     return (
      //       <RangeInput
      //         key={propName}
      //         {...control}
      //         name={`${name}.${propName}`}
      //         value={value[name]}
      //         dispatch={dispatch}
      //       />
      //     );
      //   }
      //   return (
      //     <RangeInput
      //       key={propName}
      //       {...control}
      //       name={propName}
      //       value={state[propName]}
      //       dispatch={dispatch}
      //     />
      //   );
      // }
      case types.enum: {
        if (isNested) {
          return (
            <Select
              key={propName}
              {...control}
              name={`${name}.${propName}`}
              value={value[name]}
              dispatch={dispatch}
            />
          );
        }
        return (
          <Select
            key={propName}
            {...control}
            value={state[propName]}
            name={propName}
            dispatch={dispatch}
          />
        );
      }
      case types.shape: {
        if (isNested) {
          return (
            <PropertyControls
              key={propName}
              {...control}
              name={`${name}.${propName}`}
              propertyControls={control.types}
              value={value[name]}
              dispatch={dispatch}
            />
          );
        }
        return (
          <PropertyControls
            key={propName}
            {...control}
            propertyControls={control.types}
            name={propName}
            value={state[propName]}
            dispatch={dispatch}
          />
        );
      }
    }
  });
}
