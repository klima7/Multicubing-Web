import backend from './backend'

export async function createRoom(
  name: string,
  description: string | null,
  cube: string,
  password: string | null,
) {
  const data = {
    'name': name,
    'description': description,
    'cube': cube,
    'password': password,
  }
  return backend.post('/rooms/', data);
}
