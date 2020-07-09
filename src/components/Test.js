import React, { useState } from 'react'

const Input = props => {
  const [error, setError] = useState(null)

  const errorsCode = {
    required: `Không được để trống ${props.name} này`,
    minLenghth: `Độ dài tối thiểu là ${props.minLenghth}`,
    maxLenghth: `Độ dài tối đa là ${props.maxLenghth}`,
    minSize: `Size của ${props.name} tối thiểu là ${props.minSize}`,
    maxSize: `Size của ${props.name} tối đa là ${props.maxSize}`,
  }

  const getNameValue = event => {
    const { name, value, type, files } = event.target

    let inputValue
    if (type === 'file' && props.mutiple)
      inputValue = files
    else if (type === 'file')
      inputValue = files[0]
    else {
      // nếu value là string, thì xóa hết dấu cách đầu và cuối chuỗi, còn không thì giữ nguyên
      inputValue = type === 'text' ? value.trim() : value
    }

    return {
      name,
      value: inputValue
    }
  }

  // return boolean, false có nghĩa là invalid
  const validate = ({ value, type }) => {
    // Xóa lỗi trước đó
    setError(null)

    let rules = props.validate
    // chuyển rules thành array: ["required:false", "minLength:2", "maxLength:64"], đọc hàm split
    rules = rules.split('|')

    for (let key in props.validateRules) {
      // nếu không có key, thì tiếp tục vòng lặp khác (bỏ qua ko thực hiện các dòng code bên dưới)
      if (!props.validateRules.hasOwnPropety(key)) continue

      const ruleName = key
      const ruleValue = props.validateRules[key]

      // validate file required
      if (type === 'file' && ruleName === 'required' && ruleValue) {
        if ((props.mutiple && !value.length) || (!props.mutiple && !value)) {// lenth = 0 thì sẽ trả về dạng falsy
          setError(errorsCode.required)
          return false
        }
      }

      // validate number required
      if (type === 'number' && ruleName === 'required' && ruleValue && typeof(value) !== 'number') {
        setError(errorsCode.required(''))
        return false
      }

      if (type !== 'number' && ruleName === 'required' && ruleValue && !value.length) {
        setError(errorsCode.required)
        return false
      }

      if (type === 'text' && ruleName === 'minLenghth' && value.length < condition) {
        setError(errorsCode.minLenghth)
        return false
      }

      // tìm hiểu thêm các đoạn kiểm tra file size và hoàn tất hàm validate này

      return true
    }
  }

  const handleOnChange = event => {
    const { name, value } = getNameValue(event)
    const { type } = event.target

    const isValid = validate({ value, type })
    /*
      Nếu data hợp lệ, thì mới thay đổi state của form (component cha), hàm setFormState là hàm truyền từ trên xuống
      Dạng:
      const setFormState = ({ name, value }) => this.setState({ [name]: value })
    */
    if (isValid)
      props.setFormState({
        name,
        value
      })
  }

  return (
    <>
      <input
        {...props}
        onChange={handleOnChange} />

      {
        error &&
        <div class="validate-result">
          <span class="validate-error">{ error }</span>
        </div>
      }
    </>
  )
}

/* gán giá trị mặc định cho props (nếu như không có props truyền xuống)
  vd không truyền xuống type thì type, thì type='text'
  Nếu không truyền xuống value thì value=''
  Riêng với validate, nên nghĩ ra cách tổ chức, vd như bên dưới, yêu cầu phải nhập từ 2-64 ký tự
*/
Input.defaultProps = {
  type: 'text',
  value: '',
  mutiple: false,
  validateRules: {
    required: false,
    minLenghth: 2,
    maxLength: 64,
    minSize: '100Kb',
    maxSize: '2mb'
  }
}

export default Input
