"use client";

import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { FormFieldType } from "@/components/forms/PatientForm";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/core";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { render } from "react-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  options?: Array<string | { name: string; image: string; specialization: string }>;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const {
    fieldType,
    placeholder,
    iconSrc,
    iconAlt,
    showTimeSelect,
    dateFormat,
    renderSkeleton,
  } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {iconSrc && (
            <Image
              src={iconSrc}
              alt={iconAlt || "icon"}
              height={24}
              width={24}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            {...field}
            placeholder={placeholder}
            defaultCountry="IN"
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className="input-phone"
          />
        </FormControl>
      );
    case FormFieldType.DATE_PICKER:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          <Image
            src="/assets/icons/calendar.svg"
            alt="calendar"
            height={24}
            width={24}
            className="ml-2"
          />
          <FormControl>
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat={dateFormat ?? "MM/dd/yyyy"}
              showTimeSelect={showTimeSelect ?? false}
              timeInputLabel="Time:"
              wrapperClassName="date-picker"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.SELECT:
      return (
        // <FormControl>
        //   <Select onValueChange={field.onChange} defaultValue={field.value}>
        //     <SelectTrigger className="shad-select-trigger">
        //       <SelectValue placeholder={props.placeholder} />
        //     </SelectTrigger>
        //     <SelectContent className="shad-select-content">
        //       {options.map((option) => (
        //         <SelectItem key={option.name} value={option.name}>
        //           <div className="flex cursor-pointer items-center gap-2">
        //         {option.image && (
        //           <Image
        //             src={option.image}
        //             alt={option.label}
        //             height={32}
        //             width={32}
        //             className="rounded-full border border-dark-500"
        //           />
        //         )}
        //             <p>{option.name}</p>
        //           </div>
        //         </SelectItem>
        //       ))}
        //     </SelectContent>
        //   </Select>
        // </FormControl>
         <FormControl>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <SelectTrigger className="shad-select-trigger">
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent className="shad-select-content">
          {props.options?.map((option, index) => {
            if (typeof option === "string") {
              return (
                <SelectItem key={index} value={option}>
                  <p>{option}</p>
                </SelectItem>
              );
            } else {
              return (
                <SelectItem key={option.name} value={option.name}>
                  <div className="flex cursor-pointer items-center gap-2">
                    <Image
                      src={option.image}
                      alt={option.name}
                      height={32}
                      width={32}
                      className="rounded-full border border-dark-500"
                    />
                    <p>{option.name}, {option.specialization}</p>
                  </div>
                </SelectItem>
              );
            }
          })}
        </SelectContent>
      </Select>
    </FormControl>
      );
    case FormFieldType.TEXTAREA: 
     return (
      <FormControl>
        <Textarea
          {...field}
          placeholder={placeholder}
          className="shad-textArea"
          disabled={props.disabled}
        />
      </FormControl>
     ) 
    case FormFieldType.CHECKBOX: 
      return (
        <FormControl>
          <div className="flex items-center gap-4">
            <Checkbox
              id={field.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label htmlFor={props.name} className="checkbox-label">
              {props.label}
            </label>
          </div>
        </FormControl>
      )  
    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null;
    default:
      break;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
