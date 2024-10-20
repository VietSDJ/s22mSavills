import { emailRegex, phoneRegex, uuidRegex } from '@lib/appconst'

const rules = {
  required: [{ required: true }],
  name: [{ required: true }, { min: 1 }, { max: 64 }],
  surname: [{ required: true }, { min: 1 }, { max: 64 }],
  title: [{ required: true }, { min: 0 }, { max: 256 }],
  userName: [{ required: true }, { min: 5 }, { max: 256 }],
  emailAddress: [
    { required: true },
    { min: 6 },
    { max: 256 },
    {
      required: false,
      pattern: emailRegex
    }
  ],
  password: [{ required: true }, { min: 6 }, { max: 256 }],
  phoneNumber: [
    { max: 15 },
    {
      required: false,
      pattern: phoneRegex
    }
  ],

  uuid: [
    {
      required: true,
      pattern: uuidRegex
    }
  ],
  identityNumber: [{ max: 64 }],
  passport: [{ max: 64 }]
}

export default rules
