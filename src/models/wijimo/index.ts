export class WijimoColumn {
  header: string
  binding: string
  width?: string | number
  minWidth?: string | number
  maxWidth?: string | number
  isRequired?: boolean
  rules?: any[] | undefined
  isReadOnly?: boolean
  disableEdit?: boolean
  disableCreate?: boolean
  dataMap?: any | undefined
  filterOption?: any[] | undefined
  format?: string
  dataSearch?: (value?, newList?) => void
  onSelect?: (value?) => void
  hyperLinkClick?: (value?) => void
  customFieldId?: any | undefined
  constructor() {
    this.header = ''
    this.binding = ''
    this.isRequired = false
    this.dataMap = undefined
    this.maxWidth = 100
  }
}
