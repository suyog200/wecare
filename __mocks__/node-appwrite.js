// Mock implementation for node-appwrite
export const ID = {
  unique: () => 'mock-id-' + Math.random().toString(36).substr(2, 9),
}

export const Query = {
  equal: (field, value) => ({ field, value, type: 'equal' }),
  orderDesc: (field) => ({ field, type: 'orderDesc' }),
}

export const Client = class {
  setEndpoint() { return this; }
  setProject() { return this; }
  setKey() { return this; }
}

export const Databases = class {
  constructor() {}
  createDocument = jest.fn().mockResolvedValue({ $id: 'mock-id', success: true })
  updateDocument = jest.fn().mockResolvedValue({ $id: 'mock-id', success: true })
  getDocument = jest.fn().mockResolvedValue({ $id: 'mock-id', success: true })
  listDocuments = jest.fn().mockResolvedValue({ documents: [], total: 0 })
}

export const Storage = class {
  constructor() {}
  createFile = jest.fn().mockResolvedValue({ $id: 'mock-file-id' })
}

export const Users = class {
  constructor() {}
  create = jest.fn().mockResolvedValue({ $id: 'mock-user-id', name: 'Test User' })
  get = jest.fn().mockResolvedValue({ $id: 'mock-user-id', name: 'Test User' })
  list = jest.fn().mockResolvedValue({ users: [] })
}

export const Messaging = class {
  constructor() {}
  createSms = jest.fn().mockResolvedValue({ $id: 'mock-message-id' })
}

export const InputFile = {
  fromBuffer: jest.fn().mockReturnValue('mock-file'),
}