import axios from 'axios';

const notesEndpoint = "http://localhost:7777/notes";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getList() {
  await sleep(200);
  const response = await axios.get(notesEndpoint);
  return response;
};

export async function addItem(item) {
  const response = await axios.post(notesEndpoint, { item });
  return response;
};

export async function deleteItem(id) {
  const response = await axios.delete(notesEndpoint+'/'+id);
  return response;
};