'use client'

import {
  FormControl,
 
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FormFieldType } from "./forms/ClientForm"
import Image from "next/image"

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

interface CustomProps {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label?: string,
    placeholder?: string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any)=> React.ReactNode,
}

const RenderField = ({field, props}: {field:any, props:CustomProps})=>{
  const { fieldType, iconSrc, iconAlt, placeholder} = props
  switch(fieldType){
    case FormFieldType.INPUT:
      return(
        <div className="flex rounded-md border border-gray-500 bg-gray-950">
            {props.iconSrc && (
              <Image height={24} width={24} src={iconSrc} alt={iconAlt} className="ml-2"/>
              
            )}
            <FormControl> 
                <Input
                  placeholder={placeholder}
                  {...field}
                  className="border-0 placeholder:text-gray-600 border-gray-500 h-11 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
            </FormControl>
        </div>
      )
    
     case FormFieldType.PHONE_INPUT:
      return(
            <FormControl>
               <PhoneInput
                defaultCountry="AR"
                placeholder={placeholder}
                
                withCountryCallingCode
                value={field.value as E164Number | undefined}
                onChange={field.onChange}
                className="mt-2 h-11 rounded-md px-3 text-sm border bg-gray-950 placeholder:text-gray-600 border-gray-500"
                />
            </FormControl>
      
      ) 
     
     default:
      break; 
  }
}

const CustomFormField = (props: CustomProps) => {
  const {control, fieldType, name, label} = props
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

              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
  )
}

export default CustomFormField