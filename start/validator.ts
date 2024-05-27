import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = {
  required: 'The "{{field}}" field is required',
  email: 'The "{{field}}" field must be a valid email address',
  alphaNumeric: 'The "{{field}}" field can only contain letters and numbers',
  minLength: 'The "{{field}}" field must be at least {{min}} characters long',
  maxLength: 'The "{{field}}" field must not exceed {{max}} characters',
}

const fields = {
  username: 'Username',
  email: 'Email address',
  password: 'Password',
}

vine.messagesProvider = new SimpleMessagesProvider(messages, fields)
