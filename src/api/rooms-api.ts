export async function createRoom() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  if(Math.random() < 0.5)
    throw Error('abc')
}
