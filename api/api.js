export const url = "https://api.sunset-sellers.com/contact";

export async function getContacts() {
  const response = await $fetch(url);
  return response;
}

export async function getContact(id) {
  const { data } = await useFetch(`${url}/${id}`);
  return data;
}

export async function createContact(contact) {
  const response = await $fetch(url, {
    method: "POST",
    body: contact,
  });

  return response;
}

export async function updateContact(contact) {
  const response = await $fetch(url, {
    method: "PATCH",
    body: contact,
  });

  return response;
}
