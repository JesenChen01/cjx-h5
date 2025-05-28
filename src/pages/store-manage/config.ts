export const getStoreElements: dynamicFormElementConfigType[] = [
  {
    label: `门店名称`,
    key: `store_name`,
    required_fill_in: true,
    able_data_output: true,
    component_name: 'VanField',
    serve_data_props: {

    },
  },
  {
    label: `高德名称`,
    key: `gaode_name`,
    required_fill_in: false,
    able_data_output: true,
    component_name: 'VanField',
    serve_data_props: {
      'disabled': true,
      'label-width': '80px',
    },
  },
  {
    label: `门店有效`,
    key: 'state',
    description: '门店的业务状态',
    required_fill_in: true,
    able_data_output: true,
    component_name: 'VantSwitchCell',
    serve_data_props: {
      content: {
        value: true,
      },
    },
  },
  {
    label: `门店备注`,
    key: `remark`,
    required_fill_in: false,
    able_data_output: true,
    component_name: 'VanField',
    serve_data_props: {
      rows: 5,
      type: 'textarea',
      maxLength: 200,
    },
  },
]
