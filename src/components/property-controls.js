import React from "react";
import NumberInput from "./number-input";
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
      // case types.string: {
      //   if (isNested) {
      //     return (
      //       <StringInput
      //         key={propName}
      //         {...control}
      //         name={`${name}.${propName}`}
      //         value={value[propName]}
      //         dispatch={dispatch}
      //       />
      //     );
      //   }
      //   return (
      //     <StringInput
      //       key={propName}
      //       {...control}
      //       name={propName}
      //       value={state[name]}
      //       dispatch={dispatch}
      //     />
      //   );
      // }
      case types.number: {
        if (isNested) {
          return (
            <NumberInput
              key={propName}
              {...control}
              name={`${name}.${propName}`}
              value={value[name]}
              dispatch={dispatch}
              id={id}
            />
          );
        }
        console.error(
          propName,
          "prop name",
          state,
          "state",
          state[name],
          "state name"
        );
        return (
          <NumberInput
            key={propName}
            {...control}
            name={propName}
            value={state[propName]}
            dispatch={dispatch}
            id={id}
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
      // case types.enum: {
      //   if (isNested) {
      //     return (
      //       <EnumInput
      //         key={propName}
      //         {...control}
      //         name={`${name}.${propName}`}
      //         value={value[name]}
      //         dispatch={dispatch}
      //       />
      //     );
      //   }
      //   return (
      //     <EnumInput
      //       key={propName}
      //       {...control}
      //       value={state[propName]}
      //       name={propName}
      //       dispatch={dispatch}
      //     />
      //   );
      // }
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
