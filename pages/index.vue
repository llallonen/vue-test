<script setup>
import { getContacts } from '~/api/api';

const url = "https://api.sunset-sellers.com/contact";

// const { data, isFetching, error } = await useFetch(url);
// const contacts = data._rawValue;

const contacts = ref([]);

onBeforeMount(async () => {
  const { data, isFetching, error } = await useFetch(url);
  const contactsData = await getContacts();
  contacts.value = contactsData
  console.log( contactsData)
});

onUpdated(() => {
  console.log(contacts);
});
</script>

<template>
  <div class="bg-base-100">
    <div class="m-auto max-w-[80%] py-3">
      <h1 class="text-3xl text-accent font-bold mx-auto mb-6 w-fit">
        Контакты
      </h1>
      <NewContactForm />
      <div class="flex items-center">
        <div v-if="error" class="text-2xl text-error mx-auto">
          Ошибка: запрос контактов не удался
        </div>
        <div v-else-if="isFetching" class="text-2xl text-accent">
          Загрузка...
        </div>
        <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div
            v-if="contacts"
            v-for="contact in contacts"
            :key="contact"
          >
            <Contact :contact="contact" />
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
