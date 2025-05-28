interface serveDataType {
  'rows'?: number
  'type'?: string
  'placeholder'?: string
  'content'?: {
    value?: boolean | string | number
  }
  'disabled'?: boolean
  'label-width'?: string
  'maxLength'?: number
}

interface dynamicFormElementConfigType {
  label: string
  key: string
  value?: any
  required_fill_in: boolean
  able_data_output: boolean
  component_name: string
  description?: string
  serve_data_props: serveDataType
}
